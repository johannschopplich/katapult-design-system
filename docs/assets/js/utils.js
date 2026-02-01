export function qs(el, parent = document) {
  return parent.querySelector(el)
}

export function qsa(el, parent = document) {
  return Array.from(parent.querySelectorAll(el))
}

export function hydrate(el, fn) {
  if (typeof fn !== 'function')
    return

  for (const match of document.querySelectorAll(el)) {
    fn(match)
  }
}
