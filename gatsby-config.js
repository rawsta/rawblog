const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-sass',
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: `${__dirname}/static/logos/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "snippets",
        path: `${__dirname}/content/snippets/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1920,
            }
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              maintainCase: false,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 2,
              toHeading: 6
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
        ]
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/logos/logo-1024.png",
            sizes: "1024x1024",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: path.resolve("src/netlifycms/index.js"), // default: undefined
        enableIdentityWidget: true,
        publicPath: "admin",
        htmlTitle: "Content Manager",
        includeRobots: false,
        headers: {
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      }
    }
  ]
};
