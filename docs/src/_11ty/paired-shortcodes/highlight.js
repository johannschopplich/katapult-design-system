const { highlight } = require("highlight.js");

module.exports = function (content, language = "html") {
  const highlighted = highlight(content.trimLeft(), { language }).value;
  return `<pre class="hljs language-${language}"><code>${highlighted}</code></pre>`;
};
