# [Documentation] Cross-Post article to Medium

## Instructions

### Prerequisites

- A Medium.com account, with an API key
- Add `MEDIUM_TOKEN` to the repository Github Secrets

### Steps

1. Draft the article, create the MDX file: `content/article-name/index.medium`
2. Commit and push to main branch
3. Navigate to the Medium Action: https://github.com/spencerlepine/blog/actions
4. Trigger a workflow dispatch with input: `content/article-name`
5. Head over to Medium to publish the draft

## Example Article

```md
---
title: Building a README Crawler With Node.js
description: An Overview of the Node.js README Web Crawler project and how I created it.
publish_status: 'draft'
---

![Blog Post Thumbnail](./thumbnail.jpg)

Building a README Crawler with Node.js

An Overview of the Node.js README Web Crawler project and how I created it.
```
