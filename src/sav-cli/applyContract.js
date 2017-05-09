import {writeFileAsync, mkdirAsync} from './sav/util/file.js'
import {resolve} from 'path'
import JSON5 from 'json5'

const noticeString = '// @NOTICE This file is generated by sav-cli \n\n'

function createContract (groupDir, module, dest, json) {
  return Promise.resolve().then(async () => {
    let dir = resolve(dest, groupDir)
    await mkdirAsync(dir)
    if (json) {
      let jsonFile = resolve(dir, module.moduleName + '.json')
      console.log('createContract: ', jsonFile)
      await writeFileAsync(jsonFile, JSON.stringify(module, null, 2))
    } else {
      let jsFile = resolve(dir, module.moduleName + '.js')
      console.log('createContract: ', jsFile)
      let jsData = JSON5.stringify(module, null, 2)
      jsData = `${noticeString}module.exports = ${jsData}\n`
      await writeFileAsync(jsFile, jsData)
    }
  })
}

function createIndex (groupDir, group, dest) {
  return Promise.resolve().then(async () => {
    let dir = resolve(dest, groupDir)
    let dist = resolve(dir, 'index.js')
    console.log('createIndex: ', dist)
    let reqs = Object.keys(group).map((name) => `  ${name}: require('./${name}')`).join(',\n')
    let str = `${noticeString}module.exports = {\n${reqs}\n}\n`
    await mkdirAsync(dir)
    await writeFileAsync(dist, str)
  })
}

function createRoot (groups, dest) {
  return Promise.resolve().then(async () => {
    await mkdirAsync(dest)
    let dist = resolve(dest, 'index.js')
    console.log('createRoot: ', dist)
    let reqs = Object.keys(groups).map((name) => `  ${name}: require('./${name}')`).join(',\n')
    let str = `${noticeString}module.exports = {\n${reqs}\n}\n`
    await writeFileAsync(dist, str)
  })
}

function createContracts (groups, program) {
  let tasks = []
  for (let moduleGroup in groups) {
    let group = groups[moduleGroup]
    for (let moduleName in group) {
      let module = group[moduleName]
      tasks.push(createContract(moduleGroup, module, program.dest, program.json))
    }
    tasks.push(createIndex(moduleGroup, group, program.dest))
  }
  tasks.push(createRoot(groups, program.dest))
  return Promise.all(tasks)
}

export function applyContract (groups, program) {
  return createContracts(groups, program)
}