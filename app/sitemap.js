export default function sitemap() {
  const baseUrl = "https://goobagloballtd.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/listings",
    "/products",
    "/products/logix",
    "/products/ronel",
    "/products/webconstruct",
    "/products/customwebsite",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
