# KDS Documentation

The goal of this project is to create a comprehensive yet simple overview of the KATAPULT Design System's features.

## Getting Started

- `npm i` to grab dependencies
- `npm run start` to fire up dev server
- `npm run build` to build static site

## Templating

### 11ty

This project uses [11ty](https://www.11ty.dev/docs/) for templating and static generation. All templating takes place inside the `src/site` directory.

Refer to the [11ty docs](https://www.11ty.dev/docs/) for more information on how to customize 11ty to your liking, it is an incredibly powerful tool!

### Assets

All static assets, like images and fonts, should be placed in `public`, as it is copied as-is into the `dist` directory.

## Scripting

This project uses a combination of tools to make developing dynamic data-driven scripting simple and pleasant.

### Rollup

For bundling, this project uses [Rollup](https://rollupjs.org/guide/en/). This is a fantastic bundler that makes complex bundling simple and highly configurable. See `rollup.config.js` to see what is going on under the hood.
