import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import glob from 'fast-glob'
import config from './config.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const { version } = JSON.parse(fs.readFileSync('../package.json', 'utf-8'))

export default async function (eleventyConfig) {
  /**
   * Add shortcodes for easy reusable content
   *
   * @link https://www.11ty.dev/docs/shortcodes/
   */
  const shortcodeFiles = glob.sync(
    path.join(config.dir.src, '_11ty/paired-shortcodes/*.js'),
  )
  for (const file of shortcodeFiles) {
    const name = path.basename(file).split('.')[0]
    const shortcodeFn = (await import(`./${file}`)).default
    eleventyConfig.addPairedNunjucksShortcode(name, shortcodeFn)
  }

  /**
   * Add transforms
   *
   * @link https://www.11ty.dev/docs/eleventyConfig/#transforms
   */
  if (process.env.NODE_ENV === 'production') {
    const htmlMinTransform = (
      await import(
        path.join(__dirname, config.dir.src, '_11ty/transforms/html-min.js'),
      )
    ).default
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig
    .addPassthroughCopy(path.join(config.dir.src, 'robots.txt'))
    .addPassthroughCopy(path.join(config.dir.assets, 'img'))
    .addPassthroughCopy({
      '../dist/kds.css': path.join(config.dir.assets, `css/kds.${version}.css`),
    })
    .addPassthroughCopy({
      '../dist/kds.js': path.join(config.dir.assets, `js/kds.${version}.js`),
    })
    .addPassthroughCopy({
      '../dist/kds-head.js': path.join(config.dir.assets, `js/kds-head.js`),
    })

  /**
   * Eleventy configuration
   *
   * @link https://www.11ty.dev/docs/eleventyConfig/#override-browsersync-server-options
   */
  eleventyConfig.addWatchTarget(path.join(config.dir.assets, 'js'))
  eleventyConfig.addWatchTarget(path.join(config.dir.assets, 'sass'))

  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      input: config.dir.src,
      output: config.dir.dist,
      includes: '_includes',
      layouts: '_layouts',
    },
  }
}
