/* global __DEV__ */

import '../scss/main.scss'

import './components/navigation'
import './components/theme-switcher'

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log('Currently in development environment…')
}
