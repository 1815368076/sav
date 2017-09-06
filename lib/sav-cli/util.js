import path from 'path'
import fs from 'fs'

const o777 = parseInt('0777', 8)

function mkdirs (p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts }
  }

  let mode = opts.mode
  const xfs = opts.fs || fs

  if (mode === undefined) {
    mode = o777 & (~process.umask())
  }
  if (!made) made = null

  callback = callback || function () {}
  p = path.resolve(p)

  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p
      return callback(null, made)
    }
    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) {
          return callback(er)
        }
        mkdirs(path.dirname(p), opts, (er, made) => {
          if (er) {
            callback(er, made)
          } else {
            mkdirs(p, opts, callback, made)
          }
        })
        break
      default:
        xfs.stat(p, (er2, stat) => {
          if (er2 || !stat.isDirectory()) {
            callback(er, made)
          } else {
            callback(null, made)
          }
        })
        break
    }
  })
}

export function inputFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      return err ? reject(err) : resolve(data)
    })
  })
}

export function readDir (dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, data) => {
      return err ? reject(err) : resolve(data)
    })
  })
}

export function outputFile (file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      return err ? reject(err) : resolve()
    })
  })
}

export function pathExists (dir) {
  return new Promise((resolve) => {
    fs.access(dir, (err) => {
      return err ? resolve(false) : resolve(true)
    })
  })
}

export function ensureDir (dir, opts) {
  return new Promise((resolve, reject) => {
    mkdirs(dir, opts, (err) => {
      return err ? reject(err) : resolve()
    })
  })
}

export const noticeString = '// @NOTICE This file is generated by sav.\n\n'

/**
 * 判断是否客户端界面模块
 * @param  {Object}  modal 模块定义
 * @return {Boolean}
 */
export function isClientView (modal) {
  // modal 被定义为 view 类型的 modal
  if (modal.view) {
    return true
  }
  if (modal.routes.filter(it => it.view).length) {
    return true
  }
}

/**
 * 判断是否是客户端路由
 * @param  {Object} modal 模块定义
 * @param  {Object} route 路由定义
 * @return {Boolean}
 */
export function isClientRouter (modal, route) {
  if (modal.view) {
    return !(route.view === false || Number(route.view) === 0)
  }
  return !!route.view
}

export async function putDirFileContent (dir, opts, fileName, fileData) {
  let filePath = path.resolve(dir, fileName)
  if (opts.force || !await pathExists(filePath)) {
    await outputFile(filePath, fileData)
  }
}