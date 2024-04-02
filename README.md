# Spencer Lepine Blog Site

Proof-of-concept MVP blog built with MDX and [Docusaurus](https://docusaurus.io/), hosted for free on [GitHub pages](https://pages.github.com/)

## Local Development

```sh
$ npm install
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Production Build

```sh
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Features

- **Automated Image Optimizer:** a [GitHub Actions](https://github.com/features/actions) workflow using [CalibreApp](https://github.com/calibreapp/image-actions) to compress images on every pull request
- **Automated Deployments:** free hosting and automated CD with [GitHub pages](https://pages.github.com/)
- **Auto-generated Website:** [Docusaurus](https://docusaurus.io/) to create static files for a modern blog UI
- **Linter:** pre-commit hook to enforce consistent Markdown formatting

## Specifications

- Launched: March 2023
- Link: https://spencerlepine.github.io/blog
