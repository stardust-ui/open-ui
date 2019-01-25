describe("Schemas", () => {
  it("generate", () => {
    const generate = require("../src/generate");

    console.log(generate("Attachment", "ts"));
    console.log(generate("Loader", "ts"));
  });
});
