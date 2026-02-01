import fs from 'node:fs'
import process from 'node:process'
import fg from 'fast-glob'
import config from './config.js'

export default {
  assetPath(pattern) {
    if (pattern.startsWith('/')) {
      pattern.slice(1)
    }

    if (process.env.NODE_ENV === 'development' && pattern.includes('main*')) {
      pattern = pattern.replace('main*', 'main')
      return `/${config.dir.assets}/${pattern}`
    }

    const result = fg.sync(`${config.dir.dist}/${config.dir.assets}/${pattern}`)
    if (result.length > 0) {
      return result[0].split(config.dir.dist)[1]
    }
  },

  readFile(relativePath) {
    if (relativePath.startsWith('/')) {
      relativePath.slice(1)
    }

    try {
      return fs.readFileSync(`${config.dir.dist}/${config.dir.assets}/${relativePath}`)
    }
    catch (error) {
      throw new Error(error)
    }
  },

  randomId() {
    const segment = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }

    return `${segment()}-${segment()}-${segment()}`
  },
}
