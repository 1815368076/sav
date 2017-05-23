import test from 'ava'
import {expect} from 'chai'

import ApiArticle from './fixtures/interface/api/Article.js'
import LayoutUser from './fixtures/interface/layout/User.js'
import PageHome from './fixtures/interface/page/Home.js'
import PageArticle from './fixtures/interface/page/Article.js'
import * as SchemaUser from './fixtures/interface/schema/User.js'

import {Graph} from 'sav'

test('graph & decorator', (ava) => {
  let graph = new Graph({}, {
    api: {
      Article: ApiArticle
    },
    layout: {
      User: LayoutUser
    },
    page: {
      Home: PageHome,
      Article: PageArticle
    },
    schema: SchemaUser
  })
  expect(JSON.stringify(graph.api.Article)).to.eql(JSON.stringify(ApiArticle))
  expect(JSON.stringify(graph.layout.User)).to.eql(JSON.stringify(LayoutUser))
  expect(JSON.stringify(graph.page.Home)).to.eql(JSON.stringify(PageHome))
  expect(JSON.stringify(graph.page.Article)).to.eql(JSON.stringify(PageArticle))
  expect(JSON.stringify(graph.schema)).to.eql(JSON.stringify(SchemaUser.default))
})
