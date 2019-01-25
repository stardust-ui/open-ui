module.exports = {
  $id: "Defs.spec",

  definitions: {
    color: {
      $id: "#color",
      comment: "A component can define its color.",
      type: "string",
      enum: ["blue", "red"]
    },
    size: {
      $id: "#size",
      comment: "A component can define its size.",
      type: "string",
      enum: ["small", "medium", "large"]
    }
  }
};
