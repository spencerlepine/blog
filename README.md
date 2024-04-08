# Spencer Lepine Blog Site

Personal blog site built with MDX and [Docusaurus](https://docusaurus.io/), hosted for free on [GitHub pages](https://pages.github.com/). Includes automated workflows to publish
articles to [Medium](https://medium.com/@spencerlepine) and [Dev.to](https://dev.to/spencerlepine) as well.

![Architecture](./architecture.png)

## 💻 Local Development

```sh
$ yarn install
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## 🏗️ Production Build

```sh
$ yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## ⭐ Features

- **Automated Image Optimizer:** a [GitHub Actions](https://github.com/features/actions) workflow using [CalibreApp](https://github.com/calibreapp/image-actions) to compress images
  on every pull request
- **Automated Deployments:** free hosting and automated CD with [GitHub pages](https://pages.github.com/)
- **Auto-generated Website:** [Docusaurus](https://docusaurus.io/) to create static files for a modern blog UI
- **Linter:** pre-commit hook to enforce consistent Markdown formatting
- **Medium Publishing:** GitHub Actions workflow to publish articles to Medium account
- **Dev.to Publishing:** GitHub Actions workflow to publish articles to Dev.to account

## ℹ️ Specifications

- Launched: March 2023
- Docusaurus: `v3.1.0`
- Links:
  - https://spencerlepine.github.io/blog
  - https://spencerlepine.medium.com
  - https://dev.to/spencerlepine

## ⏳ Development

- [feature] Fix twitter preview images
- [article] Add images to #100daysofCode article from twitter

### Dev.to Articles

- [ ] building-a-readme-crawler-with-node-js
- [ ] building-llama-as-a-service
- [ ] creating-custom-git-commands
- [ ] git-project-configuration-with-husky-and-eslint
- [ ] manyshiba-the-worlds-greatest-twitter-bot
- [ ] portfolio-site-continuous-integration-github-action
- [ ] preparing-for-my-amazon-front-end-engineer-interview
- [ ] quickly-open-github-repo-in-browser-from-terminal
- [ ] software-engineering-workflow
- [ ] typescript-development-set-up-for-vscode
- [ ] what-i-learned-during-100-days-of-code

### Medium Articles

- [x] building-a-readme-crawler-with-node-js
- [ ] building-llama-as-a-service
- [x] creating-custom-git-commands
- [ ] git-project-configuration-with-husky-and-eslint
- [ ] manyshiba-the-worlds-greatest-twitter-bot
- [ ] portfolio-site-continuous-integration-github-action
- [ ] preparing-for-my-amazon-front-end-engineer-interview
- [x] quickly-open-github-repo-in-browser-from-terminal
- [x] software-engineering-workflow
- [x] typescript-development-set-up-for-vscode
- [x] what-i-learned-during-100-days-of-code
