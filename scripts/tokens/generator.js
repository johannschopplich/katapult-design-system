import fs from "fs";
import fg from "fast-glob";
import chalk from "chalk";
import formats from "./formats.js";

const inputDir = "src/design-tokens";
const outputDir = "dist/tokens";

const tokensMap = new Map();
const tokensSet = new Set();
const tokenFiles = fg.sync(`${inputDir}/*.json`);
const infixSeperator = "-";

/**
 * Parse individual token items of a token category file
 *
 * @param {string} path Path to token file
 */
function parseTokenCategory(path) {
  const { props: rawProps, meta } = JSON.parse(fs.readFileSync(path));
  const props = {};

  for (const [key, data] of Object.entries(rawProps)) {
    const { value, meta: propMeta } = data;

    let infix;
    if (propMeta?.infix !== undefined) {
      infix = propMeta.infix !== false ? propMeta.infix + infixSeperator : "";
    } else {
      infix = meta.infix + infixSeperator;
    }

    // Add to props object
    props[infix + key] = value;

    // Add to tokens set directly
    tokensSet.add({
      key: infix + key,
      category: meta.category,
      value,
    });
  }

  tokensMap.set(meta.category, props);
}

/**
 * Generate tokens in the specified format
 *
 * @param {string} format Supported format to generate
 */
function generateFormat(format) {
  try {
    const result = formats[format](tokensMap, tokensSet);
    fs.writeFileSync(`${outputDir}/tokens.${format}`, result);
    console.log(chalk.green(`Created ${format} tokens`));
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Entry point for tokens generation
 */
function main() {
  // Merge tokens into one object
  for (const path of tokenFiles) {
    parseTokenCategory(path);
  }

  // Generate the token formats
  for (const format of Object.keys(formats)) {
    generateFormat(format);
  }
}

main();
