// @ts-check
// docs: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

require("dotenv").config(); // import environment variables from '.env' file

const config = {
  siteUrl: 'spencerlepine.com/blog',
  githubUsername: 'spencerlepine',
  githubRepo: 'blog',
  postsPerPage: 10
};

// environment variables (included in bundle)
const envVars = {
    giscusDiscussionCategory: process.env.GISCUS_DISCUSSION_CATEGORY,
    giscusDiscussionCategoryId: process.env.GISCUS_DISCUSSION_CATEGORY_ID,
    giscusProjectId: process.env.GISCUS_PROJECT_ID,
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    algoliaIndexName: process.env.ALGOLIA_INDEX_NAME
};

/** @type {import('@docusaurus/types').Config} */
const docusaurusConfig = {
  title: 'Spencer Lepine',
  tagline: 'Spencer Lepine | Software Engineer',
  favicon: 'assets/favicon.ico',

  // Set the production url of your site here
  url: `https://${config.githubUsername}.github.io`,

  baseUrl: `/blog/`, // custom, the default: "/"
  organizationName: config.githubUsername,
  projectName: config.githubRepo,
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Giscus Comments
  customFields: {
    giscusDiscussionCategory: process.env.GISCUS_DISCUSSION_CATEGORY,
    giscusDiscussionCategoryId: process.env.GISCUS_DISCUSSION_CATEGORY_ID,
    giscusProjectId: process.env.GISCUS_PROJECT_ID,
  },

  // internationalization (currently only english)
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
        blog: false, // IMPORTANT - use 'recent-blog-posts.js' plugin instead
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
      image: 'assets/social-card-thumbnail.jpg',
      navbar: {
        title: 'Spencer Lepine',
        logo: {
          alt: 'Spencer Lepine Logo',
          src: 'assets/blog-logo.png',
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
          src: "assets/blog-logo.png",
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
        copyright: `Copyright © ${new Date().getFullYear()} Spencer Lepine`,
      },
      algolia: {
        appId: envVars.algoliaAppId,
        apiKey: envVars.algoliaApiKey,
        indexName: envVars.algoliaIndexName,
        placeholder: "Search...",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          property: 'og:title',
          content: 'Spencer Lepine | Developer Blog',
        },
        {
          property: 'og:image',
          content: `https://${config.siteUrl}/assets/blog-og.jpeg`,
        },
        {
          property: 'og:description',
          content: 'Explore insights and tutorials from Spencer Lepine, a passionate Software Engineer, on topics including software development, DevOps, and technology trends.',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Spencer Lepine | Developer Blog',
        },
        {
          name: 'twitter:image',
          content: `https://${config.siteUrl}/assets/blog-og.jpeg`,
        },
        {
          name: 'twitter:description',
          content: 'Explore insights and tutorials from Spencer Lepine, a passionate Software Engineer, on topics including software development, DevOps, and technology trends.',
        },
        {
          name: 'description',
          content: 'Discover the latest in software development and DevOps with Spencer Lepine\'s blog, featuring tutorials, insights, and personal experiences.',
        },
        {
          name: 'keywords',
          content: 'Spencer Lepine, software engineer, developer blog, DevOps, programming, software development, technology trends',
        },
      ],
    }),
};

export default docusaurusConfig;
