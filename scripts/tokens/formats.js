import { transformKey, transformValue } from './transforms.js'
import { snakeToCamel } from './utils.js'

const preamble = 'GENERATED FILE. DON\'T EDIT MANUALLY.'

export default {
  'scss': (map, _set) => {
    let output = ''

    for (const [categoryKey, categoryValue] of map) {
      const tokens = Object.entries(categoryValue)
        .map(([key, value]) => `  ${transformKey('scss', key)}: ${value},\n`)
        .join('')

      output += `$${categoryKey}: (\n${tokens});\n`
    }

    return `// ${preamble}\n${output}`
  },

  'map.scss': (map, _set) => {
    let output = ''

    for (const [categoryKey, categoryValue] of map) {
      const tokens = Object.entries(categoryValue)
        .map(([key, value]) => `    ${transformKey('scss', key)}: ${value},\n`)
        .join('')

      output += `  ${categoryKey}: (\n${tokens}  ),\n`
    }

    return `// ${preamble}\n$tokens: (\n${output})\n`
  },

  'raw.json': (map, _set) => JSON.stringify(Array.from(map.entries())),

  'json': (map, set) => {
    const output = {}

    set.forEach(({ key, category, value }) => {
      const token = transformKey('json', key, category)
      if (token) {
        Object.assign(output, { [token]: value })
      }
    })

    return JSON.stringify(output, null, 2)
  },

  'js': (map, set) => {
    let output = '/* eslint-disable no-useless-escape */\n// GENERATED FILE. DON\'T EDIT MANUALLY.\n'

    set.forEach(({ key, category, value }) => {
      const parsedKey = transformKey('json', key, category)
      const parsedValue = transformValue('js', key, value)
      if (parsedKey) {
        output += `export const ${snakeToCamel(
          parsedKey,
        )} = '${parsedValue}'\n`
      }
    })

    return output
  },
}
