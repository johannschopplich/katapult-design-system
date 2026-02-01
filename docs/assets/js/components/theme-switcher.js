import { hydrate } from '../utils'

const root = document.documentElement
const themes = ['light', 'dark', 'a11y']
const nextTheme = ['🌙', '♿️', '☀️']

hydrate('.btn-theme-switch', (el) => {
  let index = themes.indexOf(root.dataset.theme)

  // Paint initial emoticon
  el.innerHTML = `<span>${nextTheme[index]}</span>`

  // Handle clicks
  el.addEventListener('click', () => {
    index++
    if (index === themes.length)
      index = 0

    root.dataset.theme = themes[index]
    localStorage.setItem('color-schema', themes[index])
    el.innerHTML = `<span>${nextTheme[index]}</span>`
  })
})
