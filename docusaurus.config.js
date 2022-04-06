// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./src/css/prism-theme");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const algoliaAppId = process.env.APPLICATION_ID || "";
const algoliaApiKey = process.env.API_KEY || "";

let searchConfig = {};
if (algoliaAppId && algoliaApiKey) {
  searchConfig = {
    algolia: {
      appId: process.env.APPLICATION_ID,
      apiKey: process.env.API_KEY,
      indexName: "docs",
    },
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OPAL.ac",
  tagline: "Fullstack Authorization",
  url: "https://docs.opal.ac",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-black.png",
  organizationName: "permitio", // Usually your GitHub org/user name.
  projectName: "opal", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false, // disables docusaurus blog
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Permit.io",
          src: "img/permitio-logo.svg",
          srcDark: "img/permitio-logo-dark.svg",
          width: 110,
        },
        items: [
          {
            type: "doc",
            docId: "home",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "home",
            position: "left",
            href: "https://opal.ac",
            label: "Home",
          },
          {
            href: "https://github.com/permitio",
            position: "right",
            className: "header-github-link",
            "aria-label": "Github",
          },
          {
            href: "https://twitter.com/opal_ac",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
          {
            href: "https://bit.ly/opal-slack",
            position: "right",
            className: "header-slack-link",
            "aria-label": "Slack community",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Permit, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "csharp", "groovy"],
      },
      //search configuration
      ...searchConfig,
    }),
};

module.exports = config;
