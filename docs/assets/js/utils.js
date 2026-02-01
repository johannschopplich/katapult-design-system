export const qs = (el, parent = document) => parent.querySelector(el);
export const qsa = (el, parent = document) =>
  Array.from(parent.querySelectorAll(el));

export const hydrate = (el, fn) => {
  if (typeof fn !== "function") return;

  for (const match of document.querySelectorAll(el)) {
    fn(match);
  }
};
