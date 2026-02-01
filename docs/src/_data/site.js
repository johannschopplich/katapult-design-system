const fs = require("fs");
const fg = require("fast-glob");
const { version } = require(`${process.cwd()}/../package.json`);

const tokens = {};
const tokenFiles = fg.sync(`${process.cwd()}/../src/design-tokens/*.json`);
for (const path of tokenFiles) {
  const data = JSON.parse(fs.readFileSync(path));
  Object.assign(tokens, { [data.meta.category]: data });
}

module.exports = {
  title: "KATAPULT Design System",
  description:
    "The central hub for KATAPULT design tokens and a modern web design framework for KATAPULT projects",
  image: "/assets/img/apple-touch-icon.png",
  url: "https://katapult.design",
  author: {
    email: "schopplich@katapult-magazin.de",
    handle: "@katapultmagazin",
    name: "Johann Schopplich",
  },
  tokens,
  version,
  date: new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
};
