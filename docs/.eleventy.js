const path = require("path");
const glob = require("fast-glob");
const config = require("./config.js");
const { version } = require(`${process.cwd()}/../package.json`);

module.exports = function (eleventyConfig) {
  /**
   * Add shortcodes for easy reusable content
   *
   * @link https://www.11ty.dev/docs/shortcodes/
   */
  glob
    .sync(path.join(config.dir.src, "_11ty/paired-shortcodes/*.js"))
    .forEach((file) => {
      const name = path.basename(file).split(".")[0];
      eleventyConfig.addPairedNunjucksShortcode(name, require(`./${file}`));
    });

  /**
   * Add transforms
   *
   * @link https://www.11ty.dev/docs/eleventyConfig/#transforms
   */
  if (process.env.NODE_ENV === "production") {
    const htmlMinTransform = require(path.join(
      __dirname,
      config.dir.src,
      "_11ty/transforms/html-min.js"
    ));
    eleventyConfig.addTransform("htmlmin", htmlMinTransform);
  }

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig
    .addPassthroughCopy(path.join(config.dir.src, "robots.txt"))
    .addPassthroughCopy(path.join(config.dir.assets, "img"))
    .addPassthroughCopy({
      "../dist/kds.css": path.join(config.dir.assets, `css/kds.${version}.css`),
    })
    .addPassthroughCopy({
      "../dist/kds.js": path.join(config.dir.assets, `js/kds.${version}.js`),
    })
    .addPassthroughCopy({
      "../dist/kds-head.js": path.join(config.dir.assets, `js/kds-head.js`),
    });

  /**
   * Eleventy configuration
   *
   * @link https://www.11ty.dev/docs/eleventyConfig/#override-browsersync-server-options
   */
  eleventyConfig.addWatchTarget(path.join(config.dir.assets, "js"));
  eleventyConfig.addWatchTarget(path.join(config.dir.assets, "sass"));

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: config.dir.src,
      output: config.dir.dist,
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
