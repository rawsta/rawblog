const config = {
  siteTitle: "rawBlog - rawsta's playground", // Site title.
  siteTitleShort: "rawBlog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "rawBlog - playground", // Alternative site title for SEO.
  siteLogo: "/logos/logo-512.png", // Logo used for SEO and manifest.
  siteUrl: "https://rawblog.netlify.app", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Playground of Sebastian Fiele.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/", // Path to the RSS file.
  postDefaultCategoryID: "test", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD.MM.YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  menuLinks: [
    {
      name: 'rawsta',
      link: '/about/',
      iconClassName: "far fa-address-card"
    },
    {
      name: 'Snippets',
      link: '/snippets/',
      iconClassName: "fas fa-code"
    },
    {
      name: 'Blog',
      link: '/blog/',
      iconClassName: "far fa-newspaper"
    },
    {
      name: 'Contact',
      link: '/contact/',
      iconClassName: "fas fa-pager"
    },
  ],
  userName: "Sebastian Fiele", // Username to display in the author segment.
  userEmail: "rawsta@rawsta.de", // Email used for RSS feed's author segment
  userTwitter: "rawsta", // Optionally renders "Follow Me" in the UserInfo segment.
  userGithub: "rawsta", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Münster, Germany", // User location to display in the author segment.
  userAvatar: "https://avatars3.githubusercontent.com/u/1809314?s=460&v=4", // User avatar to display in the author segment.
  userDescription:
    "Just a Developer with far too many Interests.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rawsta/",
      iconClassName: "fab fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/rawsta/",
      iconClassName: "fab fa-twitter"
    },
    {
      label: "E-Mail",
      url: "mailto:rawsta@rawsta.de",
      iconClassName: "far fa-envelope"
    }
  ],
  copyright: "&copy;2022 Sebastian Fiele", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#830000", // Used for setting manifest and progress theme colors.
  backgroundColor: "#363636" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
