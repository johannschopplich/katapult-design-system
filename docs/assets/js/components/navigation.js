import { qs } from '../utils'

const toggle = qs('#menu-toggle')
const menu = qs('.docs-menu')
let isMenuOpen = false

toggle?.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen

  // Toggle accessible attributes and active class
  toggle.setAttribute('aria-expanded', String(isMenuOpen))
  menu.classList.toggle('menu-active')
})
