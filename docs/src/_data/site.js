import fs from 'node:fs'
import fg from 'fast-glob'
import pkg from '../../../package.json' with { type: 'json' }

const tokens = Object.fromEntries(
  fg.sync(`${import.meta.dirname}/../../../src/design-tokens/*.json`)
    .map(path => JSON.parse(fs.readFileSync(path)))
    .map(data => [data.meta.category, data]),
)

export default {
  title: 'KATAPULT Design System',
  description: 'The central hub for KATAPULT design tokens and a modern web design framework for KATAPULT projects',
  image: '/assets/img/apple-touch-icon.png',
  url: 'https://katapult-design-system.byjohann.dev',
  author: {
    email: 'schopplich@katapult-magazin.de',
    handle: '@katapultmagazin',
    name: 'Johann Schopplich',
  },
  tokens,
  version: pkg.version,
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
}
