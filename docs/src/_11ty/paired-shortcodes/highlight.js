import hljs from 'highlight.js'

export default function (content, language = 'html') {
  const highlighted = hljs.highlight(content.trimStart(), { language }).value
  return `<pre class="hljs language-${language}"><code>${highlighted}</code></pre>`
}
