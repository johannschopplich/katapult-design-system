import { readFileSync } from 'node:fs'

const { version, author, license } = JSON.parse(readFileSync('package.json'))

export const preamble = `/*!
 * KATAPULT Design System v${version}
 * Copyright (c) ${new Date().getFullYear()} ${author}
 * ${license} license
 */`
