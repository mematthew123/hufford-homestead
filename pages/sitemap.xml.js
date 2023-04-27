import goats from "@/studio-homestead/schemas/goats";

const EXTERNAL_DATA_URL = "https://huffordhomestead.typicode.com/goats";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the 5 URLs we know already-->
     <url>
       <loc>https://huffordhomestead.com.typicode.com</loc>
     </url>
     <url>
       <loc>https://huffordhomestead.typicode.com/chickens</loc>
     </url>
      <url>
        <loc>https://huffordhomestead.typicode.com/goats</loc>
      </url>
      <url>
        <loc>https://huffordhomestead.typicode.com/eggs</loc>
      </url>
      <url>
        <loc>https://huffordhomestead.typicode.com/about</loc>
      </url>




      <!--We then map over the posts array to create URLs for each post-->


     ${goats
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}




function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
