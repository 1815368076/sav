// @NOTICE This file is generated by sav-cli 

module.exports = {
  moduleName: "Home",
  moduleGroup: "Page",
  uri: "HomePage",
  props: {
    view: "vue",
    layout: "UserLayout",
    route: {
      path: ""
    }
  },
  routes: [
    {
      actionName: "index",
      uri: "HomePage.index",
      middlewares: [
        {
          name: "meta",
          props: {
            keywords: "关键字列表",
            description: "页面描述"
          }
        },
        {
          name: "title",
          props: "主页"
        },
        {
          name: "route",
          props: {
            methods: [
              "GET"
            ],
            path: ""
          }
        }
      ]
    },
    {
      actionName: "about",
      uri: "HomePage.about",
      middlewares: [
        {
          name: "title",
          props: "关于我们"
        },
        {
          name: "route",
          props: {
            methods: [
              "GET"
            ]
          }
        }
      ]
    }
  ],
  SavRoute: {
    uri: "HomePage",
    path: "/",
    childs: [
      {
        uri: "HomePage.index",
        path: "/",
        methods: [
          "GET"
        ],
        relative: ""
      },
      {
        uri: "HomePage.about",
        path: "/about",
        methods: [
          "GET"
        ],
        relative: "about"
      }
    ],
    parents: []
  },
  VueRoute: {
    component: "Home/Home",
    path: "/",
    children: [
      {
        component: "Home/HomeIndex",
        name: "HomeIndex",
        path: "",
        methods: [
          "GET"
        ]
      },
      {
        component: "Home/HomeAbout",
        name: "HomeAbout",
        path: "about",
        methods: [
          "GET"
        ]
      }
    ]
  }
}
