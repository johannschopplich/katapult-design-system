// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  pnpm: false,
  ignores: ['**/docs/_site/**'],
})
