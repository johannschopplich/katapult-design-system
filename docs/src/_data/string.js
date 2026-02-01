export default {
  startsWith(string, value) {
    if (typeof string !== 'string')
      return false
    if (string.startsWith(value))
      return value
  },

  endsWith(string, value) {
    if (typeof string !== 'string')
      return false
    if (string.endsWith(value))
      return value
  },

  truncate(string, length = 140, suffix = '…') {
    if (typeof string !== 'string')
      return false
    if (string.length <= length)
      return string

    const truncated = string.substring(0, length - suffix.length)
    if (string.charAt(length - suffix.length) === ' ') {
      return truncated + suffix
    }

    return truncated.substr(0, truncated.lastIndexOf(' ')) + suffix
  },
}
