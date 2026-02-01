const { highlight } = require("highlight.js");

module.exports = function (content, language = "html") {
  const highlighted = highlight(content.trimLeft(), { language }).value;

  return `
    <div class="snippet">
      <div class="snippet-preview">${content}</div>
      <div class="snippet-code">
        <pre class="hljs language-${language}"><code>${highlighted}</code></pre>
      </div>
    </div>`;
};
