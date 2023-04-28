
import createClient from "/Users/matthewrhoads/Developer/hufford-homestead/sanityClient.js";

const createSitemap = (data, baseUrl) => `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.posts
      .map(
        ({ slug }) => `
      <url>
        <loc>${baseUrl}/posts/${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("")}
    ${data.eggs
      .map(
        ({ slug }) => `
      <url>
        <loc>${baseUrl}/eggs/${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("")}
    ${data.chickens
      .map(
        ({ slug }) => `
      <url>
        <loc>${baseUrl}/chickens/${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("")}
    ${data.goats
      .map(
        ({ slug }) => `
      <url>
        <loc>${baseUrl}/goats/${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("")}
  </urlset>
`;

const Sitemap = () => {};

export const getStaticProps = async () => {
  const baseUrl = "https://huffordhomestead.com"; 
  const query = `
    {
      "eggs": *[_type == "egg"]{ "slug": slug.current },
      "chickens": *[_type == "chicken"]{ "slug": slug.current },
      "goats": *[_type == "goat"]{ "slug": slug.current }
    }
  `;
  const data = await createClient.fetch(query);
  const sitemap = createSitemap(data, baseUrl);

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);

  return {
    props: {},
    revalidate: 86400, // Revalidate after 24 hours (86400 seconds)
  };
};

export default Sitemap;
