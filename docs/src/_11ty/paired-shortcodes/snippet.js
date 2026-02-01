import hljs from 'highlight.js'

export default function (content, language = 'html') {
  const highlighted = hljs.highlight(content.trimStart(), { language }).value

  return `
    <div class="snippet">
      <div class="snippet-preview">${content}</div>
      <div class="snippet-code">
        <pre class="hljs language-${language}"><code>${highlighted}</code></pre>
      </div>
    </div>`
}
