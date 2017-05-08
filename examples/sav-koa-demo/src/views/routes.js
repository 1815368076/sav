import Account from './Account/Account.vue'
import AccountLogin from './Account/AccountLogin.vue'
import AccountRegister from './Account/AccountRegister.vue'
import Article from './Article/Article.vue'
import ArticlePosts from './Article/ArticlePosts.vue'
import ArticleView from './Article/ArticleView.vue'
import ArticleModify from './Article/ArticleModify.vue'
import Home from './Home/Home.vue'
import HomeIndex from './Home/HomeIndex.vue'
import HomeAbout from './Home/HomeAbout.vue'

Account.name='Account'
AccountLogin.name='AccountLogin'
AccountRegister.name='AccountRegister'
Article.name='Article'
ArticlePosts.name='ArticlePosts'
ArticleView.name='ArticleView'
ArticleModify.name='ArticleModify'
Home.name='Home'
HomeIndex.name='HomeIndex'
HomeAbout.name='HomeAbout'

export default [
  {
    "component": Account,
    "path": "/account",
    "children": [
      {
        "component": AccountLogin,
        "name": "AccountLogin",
        "path": "login",
        "methods": [
          "GET"
        ]
      },
      {
        "component": AccountLogin,
        "name": "AccountPostLogin",
        "path": "postLogin",
        "methods": [
          "POST"
        ]
      },
      {
        "component": AccountRegister,
        "name": "AccountRegister",
        "path": "register",
        "methods": [
          "GET"
        ]
      },
      {
        "component": AccountRegister,
        "name": "AccountPostRegister",
        "path": "postRegister",
        "methods": [
          "POST"
        ]
      }
    ]
  },
  {
    "component": Article,
    "path": "/article",
    "children": [
      {
        "component": ArticlePosts,
        "name": "ArticlePosts",
        "path": "posts",
        "methods": [
          "GET"
        ]
      },
      {
        "component": ArticleView,
        "name": "ArticleView",
        "path": "view/:aid",
        "methods": [
          "GET"
        ]
      },
      {
        "component": ArticleModify,
        "name": "ArticleModify",
        "path": "modify/:id?",
        "methods": [
          "GET"
        ]
      },
      {
        "component": ArticleModify,
        "name": "ArticleUpdate",
        "path": "update/:aid",
        "methods": [
          "POST"
        ]
      }
    ]
  },
  {
    "component": Home,
    "path": "/",
    "children": [
      {
        "component": HomeIndex,
        "name": "HomeIndex",
        "path": "",
        "methods": [
          "GET"
        ]
      },
      {
        "component": HomeAbout,
        "name": "HomeAbout",
        "path": "about",
        "methods": [
          "GET"
        ]
      }
    ]
  }
]