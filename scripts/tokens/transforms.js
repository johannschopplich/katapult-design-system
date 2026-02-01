/* eslint-disable no-unused-vars */
/**
 * Transform a given token key for a formatter
 */
const keyTransforms = {
  scss: (key) => {
    // Drop the `breakpoint` prefix
    if (key.startsWith("breakpoint-")) key = key.slice(11);

    return key;
  },

  json: (key, category) => {
    // Exclude some categories
    const excludeCategories = ["theming", "paths"];
    if (excludeCategories.some((i) => category.startsWith(i))) return;

    return key;
  },
};

/**
 * Transform a given token value for a formatter
 */
const valueTransforms = {
  js: (key, value, category) => {
    // Remove leading and trailing double quotes from font families
    if (
      key.startsWith("font-family") &&
      value.startsWith('"') &&
      value.endsWith('"')
    ) {
      value = value.slice(1, -1);
    }

    return value;
  },
};

/**
 * Returns a new transform function
 *
 * @param {object} hooks Transform hooks to use
 * @returns {Function} Transformer for a formatter
 */
const transformer =
  (hooks) =>
  (formatter, item, ...args) => {
    if (hooks && hooks[formatter]) {
      return hooks[formatter](item, ...args);
    } else {
      return item;
    }
  };

export const transformKey = transformer(keyTransforms);
export const transformValue = transformer(valueTransforms);
