module.exports = {
  siteUrl: "https://giftvibelk.lk",
  generateRobotsTxt: true,
  exclude: ["/admin", "/admin/*", "/robots.txt", "/sitemap.xml"],
  transform: async (config, path) => {
    const routeConfig = {
      "/": { changefreq: "weekly", priority: 1 },
      "/collections": { changefreq: "weekly", priority: 0.95 },
      "/about": { changefreq: "monthly", priority: 0.9 },
      "/services": { changefreq: "monthly", priority: 0.8 },
      "/contact": { changefreq: "monthly", priority: 0.7 },
    }[path] ?? { changefreq: "monthly", priority: 0.6 };

    return {
      loc: path,
      changefreq: routeConfig.changefreq,
      priority: routeConfig.priority,
      lastmod: new Date("2026-05-17").toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/"],
      },
    ],
  },
};
