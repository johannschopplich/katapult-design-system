<h1 align="center">KATAPULT Design System</h1>

<p align="center">
  <img src="docs/assets/img/android-chrome-512x512.png" alt="Logo of KATAPULT Design System" width="120px" height="120px">
  <br>
  <br>
  KATAPULT Design System is an umbrella for fundamental KATAPULT design tokens and a modern web design framework to develop responsive, accessible websites and web applications for KATAPULT projects.
  <br>
</p>

<p align="center">
  <a href="https://katapult.design"><strong>katapult.design</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing guidelines</a>
  ·
  <a href="https://gitlab.com/katapult-magazin/katapult-design-system/-/issues">Submit an issue</a>
  <br>
  <br>
</p>

<hr>

## What's included

KATAPULT Design System contains the fundamental **design tokens** in use to build KATAPULT graphics, layouts and interfaces. It translates the **graphical style** of KATAPULT print products to the web as well.

In its core, it is a **modern web design framework** to develop responsive, accessible websites and web applications for KATAPULT projects. The framework is based on CSS custom properties for easy customization and extension and includes extensive prebuilt components. The source is a collection of Sass modules, but in most cases it is sufficientto use the minified CSS file, as it can be modified using the custom properties.

## Documentation

Get started with KATAPULT Design System, learn the fundamentals and explore advanced topics on our documentation website.

- [Getting Started][quickstart]

## Development setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Local development

Clone with SSH:

```
git clone git@gitlab.com:katapult-magazin/katapult-design-system.git
```

Install dependencies:

```
npm install
```

Build and watch for file changes:

```bash
npm run dev
```

### Generating tokens

```bash
npm run tokens:generate
```

### Building

```bash
npm run build
```

Semantic versioning (SemVer) is a de facto standard for code versioning. It specifies that a version number always contains a major, minor and patch part.

Instead of bumping the file version and running the build scripts etc., we make use of [standard-version](https://github.com/conventional-changelog/standard-version) to combine common build tasks. One command:
- bumps the version (according to `release:major`, `release:minor` and `release:patch`)
- builds the assets (`npm run tokens:generate` and `npm run build`)
- creates the changelog from the Git history

You can use one of the following predefined npm scripts:

- ```bash
  # MAJOR: is incremented when you add breaking changes, e.g. an incompatible API change
  npm run release:major
  ```
- ```bash
  # MINOR: is incremented when you add backward compatible functionality
  npm run release:minor
  ```
- ```bash
  # PATCH: is incremented when you add backward compatible bug fixes
  npm run release:patch
  ```

### Deployment to KATAPULT CDN

We use the Google Cloud Platform to publish releases to the `katapult-cdn` bucket. In order to upload the latest build from the `dist` folder, a Google service account key is required. As a KATAPULT developer you are able to [generate one yourself](https://cloud.google.com/iam/docs/creating-managing-service-account-keys). Download the JSON file and put it into the root folder of this repository named `.gcp-service-account.json`.

Afterwards you can publish the current release with:

```bash
npm run publish
```

> If the version to be published is already present in the bucket, uploading will abort gracefully.

The CORS for the bucket has been configured with `gsutil cors set GCP_CORS_CONF.json gs://BUCKET_NAME` by using the following configuration:

```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "responseHeader": [
      "Access-Control-Allow-Origin",
      "Content-Type"
    ],
    "maxAgeSeconds": 3600
  }
]
```

## Notes 

## Changelog

[Learn about the latest improvements][changelog].

## Contributing

### Contributing guidelines

Read through our [contributing guidelines][contributing] to learn about our submission process, coding rules and more.

### Want to help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [contributing][contributing] and then check out one of our issues on [GitLab](https://gitlab.com/katapult-magazin/katapult-design-system/-/issues).

### Code of conduct

Help us keep KATAPULT Design System open and inclusive. Please read and follow our [Code of Conduct][codeofconduct].

**Love KATAPULT Design System? Give our repo a star :star: :arrow_up:.**

[contributing]: CONTRIBUTING.md
[quickstart]: https://katapult.design/start
[changelog]: CHANGELOG.md
[node.js]: https://nodejs.org
[npm]: https://www.npmjs.com/get-npm
