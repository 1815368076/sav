// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
module.exports = {
  prefix: "api",
  routes: {
    comment: {
      method: "POST",
      path: "comment/:aid",
      response: {
        props: {
          aid: "String",
          content: "String",
          createdAt: "String"
        }
      },
      request: {
        props: {
          aid: "String",
          content: "String"
        }
      }
    }
  }
}
