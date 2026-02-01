const isString = (string) =>
  typeof string === "string" || string instanceof String;

module.exports = {
  startsWith(string, value) {
    if (!isString) return false;
    if (string.startsWith(value)) return value;
  },

  endsWith(string, value) {
    if (!isString) return false;
    if (string.endsWith(value)) return value;
  },

  truncate(string, length = 140, suffix = "…") {
    if (!isString) return false;
    if (string.length <= length) return string;

    const truncated = string.substring(0, length - suffix.length);
    if (string.charAt(length - suffix.length) === " ") {
      return truncated + suffix;
    }

    return truncated.substr(0, truncated.lastIndexOf(" ")) + suffix;
  },
};
