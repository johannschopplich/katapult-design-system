import { minify } from 'html-minifier'

export default function (value, outputPath) {
  if (!outputPath.endsWith('.html'))
    return value

  return minify(value, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: false,
  })
}
