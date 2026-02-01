/* global __DEV__ */

import "../scss/main.scss";

import "./components/navigation";
import "./components/theme-switcher";

if (__DEV__) {
  console.log("Currently in development environment…");
}
