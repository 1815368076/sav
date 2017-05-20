// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
module.exports = {
  moduleName: "Account",
  moduleGroup: "Page",
  props: {
    view: "vue",
    layout: "UserLayout"
  },
  routes: [
    {
      actionName: "login",
      middlewares: [
        {
          name: "title",
          props: "登录"
        },
        {
          name: "route",
          props: {
            method: "GET"
          }
        }
      ]
    },
    {
      actionName: "postLogin",
      middlewares: [
        {
          name: "vue",
          props: {
            component: "Account/AccountLogin"
          }
        },
        {
          name: "title",
          props: "登录"
        },
        {
          name: "req",
          props: {
            props: {
              username: "String",
              password: "String"
            }
          }
        },
        {
          name: "route",
          props: {
            method: "POST"
          }
        }
      ]
    },
    {
      actionName: "register",
      middlewares: [
        {
          name: "title",
          props: "注册"
        },
        {
          name: "route",
          props: {
            method: "GET"
          }
        },
        {
          name: "res",
          props: {
            name: "AccountRegister",
            props: {
              accountRegisterStruct: "AccountRegisterStruct"
            },
            refs: {
              AccountRegisterStruct: {
                name: "AccountRegisterStruct",
                props: {
                  username: "String",
                  email: "String",
                  password: "String"
                }
              }
            }
          }
        }
      ]
    },
    {
      actionName: "postRegister",
      middlewares: [
        {
          name: "vue",
          props: {
            component: "Account/AccountRegister"
          }
        },
        {
          name: "title",
          props: "注册"
        },
        {
          name: "req",
          props: "AccountRegisterStruct"
        },
        {
          name: "route",
          props: {
            method: "POST"
          }
        },
        {
          name: "res",
          props: "ResAccountRegister"
        }
      ]
    }
  ],
  SavRoute: {
    uri: "AccountPage",
    path: "/account",
    childs: [
      {
        uri: "AccountPage.login",
        path: "/account/login",
        method: "GET",
        relative: "login"
      },
      {
        uri: "AccountPage.postLogin",
        path: "/account/postLogin",
        method: "POST",
        relative: "postLogin"
      },
      {
        uri: "AccountPage.register",
        path: "/account/register",
        method: "GET",
        relative: "register"
      },
      {
        uri: "AccountPage.postRegister",
        path: "/account/postRegister",
        method: "POST",
        relative: "postRegister"
      }
    ],
    parents: []
  },
  VueRoute: {
    component: "Account/Account",
    path: "/account",
    children: [
      {
        component: "Account/AccountLogin",
        name: "AccountLogin",
        path: "login"
      },
      {
        component: "Account/AccountLogin",
        name: "AccountPostLogin",
        path: "postLogin"
      },
      {
        component: "Account/AccountRegister",
        name: "AccountRegister",
        path: "register"
      },
      {
        component: "Account/AccountRegister",
        name: "AccountPostRegister",
        path: "postRegister"
      }
    ]
  }
}
