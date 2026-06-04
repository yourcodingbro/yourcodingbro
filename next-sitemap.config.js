/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourcodingbro.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
