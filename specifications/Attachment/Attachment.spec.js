module.exports = {
  $id: "Attachment.spec",

  title: "Attachment",
  description: "An Attachment displays a file attachment.",

  type: "object",
  properties: {
    progress: {
      comment: "Value indicating percent complete.",
      allOf: [{ type: "string" }, { type: "number" }]
    },
    size: {
      $ref: "Defs.spec#/definitions/size"
    }
  }
};
