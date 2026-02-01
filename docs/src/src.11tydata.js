import fs from 'node:fs'
import config from '../config.js'

export default {
  lang: config.defaultLang || 'en',

  eleventyComputed: {
    layout: ({ page, layout }) => {
      if (layout || layout === null)
        return layout

      // Check if part of a collection folder (root folder without a `_` prefix)
      const folderRegex = new RegExp(`^./${config.dir.src}/([^_][^/]+)/.*$`)
      const matches = page.inputPath.match(folderRegex)

      if (matches) {
        const folder = matches[1]
        if (fs.existsSync(`${config.dir.src}/_layouts/${folder}.njk`)) {
          return folder
        }
      }

      return 'default'
    },

    permalink: ({ page, permalink }) => {
      if (permalink)
        return permalink

      if (config.permalinkFolders) {
        return `${page.filePathStem.replace(/\/index$/, '')}/index.html`
      }
      else {
        return `${page.filePathStem}.html`
      }
    },
  },
}
