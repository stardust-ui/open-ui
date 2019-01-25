module.exports = {
  $id: "Loader.spec",

  title: "Loader",
  description:
    "A stateless animated component that alerts a user to wait for an activity to complete.",

  type: "object",
  properties: {
    color: {
      $ref: "Defs.spec#/definitions/color"
    },
    size: {
      $ref: "Defs.spec#/definitions/size"
    }
  }
};
