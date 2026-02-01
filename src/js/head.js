(() => {
  /**
   * Detect if the user has requested the system to use a dark color theme
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
   */
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  /**
   * Detect if the user has requested that the web content is presented
   * with a higher contrast
   * Note 1: Currently no user agent implements this feature (06/2020)
   * Note 2: The `-ms-high-contrast` CSS media feature is a non-standard Microsoft extension
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-ms-high-contrast
   */
  const prefersHighContrastTheme =
    window.matchMedia("(prefers-contrast: high)").matches ||
    window.matchMedia("(-ms-high-contrast: active)").matches;

  // Set the theme based on local storage or the preferred color theme
  document.documentElement.dataset.theme =
    localStorage.getItem("color-schema") ||
    (prefersHighContrastTheme ? "a11y" : prefersDarkTheme ? "dark" : "light");
})();
