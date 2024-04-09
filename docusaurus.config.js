// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spencer Lepine',
  tagline: 'Spencer Lepine | Software Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://spencer.github.io',
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  organizationName: 'spencerlepine',
  projectName: 'blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        blog: {
          path: 'content',
          blogTitle: 'Blog | Spencer Lepine',
          blogDescription: 'Spencer Lepine\'s Personal Developer Blog',
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 1,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card-thumbnail.jpg',
      navbar: {
        title: 'Spencer Lepine',
        logo: {
          alt: 'Spencer Lepine Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/spencerlepine/blog',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Source Code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/spencerlepine/blog',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Portfolio',
                href: 'https://spencerlepine.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/spencerlepine',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/spencerlepine',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spencer Lepine. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          property: 'og:title',
          content: 'Blog - Spencer Lepine',
        },
        {
          property: 'og:image',
          content: 'https://spencerlepine.github.io/blog/img/social-card-thumbnail.jpg',
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
          content: 'https://spencerlepine.github.io/blog/img/social-card-thumbnail.jpg',
        },
        {
          name: 'twitter:description',
          content: 'Developer blog of Spencer Lepine, a Software Engineer.',
        },
      ],
    }),
};

export default config;
