const Ajv = require("ajv");
const g = require("@babel/generator").default;
const t = require("@babel/types");

const createType = propertyDef => {
  if (propertyDef.enum) {
    return t.tsUnionType(
      propertyDef.enum.map(enumValue => {
        return t.tsLiteralType(t.stringLiteral(enumValue));
      })
    );
  }

  if (propertyDef.allOf) {
    return t.tsUnionType(
      propertyDef.allOf.map(({ type }) => {
        if (type === "string") return t.tsStringKeyword();
        if (type === "number") return t.tsNumberKeyword();
      })
    );
  }
};

const generate = componentName => {
  const ajv = new Ajv();

  const definitionsSchema = require("../specifications/Defs/Defs.spec");
  const componentSchema = require(`../specifications/${componentName}/${componentName}.spec`);

  ajv.addSchema(definitionsSchema);
  ajv.compile(componentSchema);

  // TODO: To avoid these stuff we need to resolve all definitions before generation process
  const { definitions } = ajv.getSchema("Defs.spec").schema;
  const { schema } = ajv.getSchema(`${componentName}.spec`);

  const ast = t.program([
    t.exportNamedDeclaration(
      t.tsInterfaceDeclaration(
        t.identifier(`${componentName}Props`),
        undefined,
        undefined,
        t.tsInterfaceBody(
          Object.keys(schema.properties).map(propertyName => {
            const property = schema.properties[propertyName];

            const isRef = !!property["$ref"];
            const propertyDef = isRef ? definitions[propertyName] : property;

            const tsPropertySignature = t.tsPropertySignature(
              t.identifier(propertyName),
              t.tsTypeAnnotation(createType(propertyDef))
            );

            if (propertyDef.comment) {
              // NONONO!
              // Babel doesn't export CommentBlock
              tsPropertySignature.leadingComments = [
                {
                  type: "CommentBlock",
                  value: ` ${propertyDef.comment} `
                }
              ];
            }

            return tsPropertySignature;
          })
        )
      ),
      []
    )
  ]);

  return [
    // TODO: Use leadingComments
    `/** ${schema.description} */`,
    g(ast).code
  ].join("\n");
};

module.exports = generate;
