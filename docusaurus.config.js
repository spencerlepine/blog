// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// docs: https://docusaurus.io/docs/api/docusaurus-config

require("dotenv").config();

import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  githubUsername: 'spencerlepine',
  githubRepo: 'blog',
  postsPerPage: 10
};

const organizationName = "spencerlepine";
const projectName = "blog";

/** @type {import('@docusaurus/types').Config} */
const docusaurusConfig = {
  title: 'Blog | Spencer Lepine',
  tagline: 'Spencer Lepine | Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`, // https://spencerlepine.github.io/blog/
  // baseUrl: '/', // "https://blog" - TODO custom domain migration
  organizationName,
  projectName,
  trailingSlash: false, // GitHub Pages adds a trailing slash by default that I don't want

  onBrokenLinks: 'warn', // use instead of 'error' until custom domain TODO
  onBrokenMarkdownLinks: 'warn',

  // // comments feature
  customFields: {
    giscusDiscussionCategory: process.env.GISCUS_DISCUSSION_CATEGORY,
    giscusDiscussionCategoryId: process.env.GISCUS_DISCUSSION_CATEGORY_ID,
    giscusProjectId: process.env.GISCUS_PROJECT_ID,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false, // OVERRIDE - use custom blog plugin (see below)
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      './plugins/recent-blog-posts',
      {
        showReadingTime: true,
        routeBasePath: '/',
        path: 'content',
        postsPerPage: config.postsPerPage,
        blogSidebarTitle: 'Recent posts',
        blogSidebarCount: 0,
        editUrl: ({ blogDirPath, blogPath }) => {
          return `https://github.com/${config.githubUsername}/${config.githubRepo}/edit/main/content/${blogPath}`;
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card-thumbnail.jpg',
      navbar: {
        title: 'Blog | Spencer Lepine',
        logo: {
          alt: 'Spencer Lepine Logo',
          src: 'img/logo.png',
        },
        items: [
          { href: "https://spencerlepine.com", label: "Portfolio", position: "right" },
          {
            href: `https://github.com/${config.githubUsername}/${config.githubRepo}`,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      footer: {
        style: 'dark',
        logo: {
          alt: "SL Logo",
          href: "/",
          src: "img/logo.png",
          height: 50,
          width: 50,
        },
        links: [
          {
            label: 'Portfolio',
            href: 'https://spencerlepine.com',
          },
          {
            label: 'GitHub',
            href: `https://github.com/${config.githubUsername}`,
          },
          {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/spencerlepine',
          },
          {
            label: 'X',
            href: 'https://x.com/spencerlepine',
          },
          {
            label: 'Source Code ',
            href: `https://github.com/${config.githubUsername}/${config.githubRepo}`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spencer Lepine. Built with Docusaurus.`,
      },
      // TODO
      // algolia: {
      //   appId: process.env.ALGOLIA_APP_ID,
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: process.env.ALGOLIA_INDEX_NAME,
      //   placeholder: "Search...",
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          property: 'og:title',
          content: 'Blog | Spencer Lepine',
        },
        {
          property: 'og:image',
          content: `https://${config.siteUrl}/img/social-card-thumbnail.jpg`,
        },
        {
          property: 'og:description',
          content: 'Developer blog of Spencer Lepine, a Software Engineer.',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Blog | Spencer Lepine',
        },
        {
          name: 'twitter:image',
          content: `https://${config.siteUrl}/img/social-card-thumbnail.jpg`,
        },
        {
          name: 'twitter:description',
          content: 'Developer blog of Spencer Lepine, a Software Engineer.',
        },
      ],
    }),
};

export default docusaurusConfig;
