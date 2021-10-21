export async function get(req, _) {
    let posts = await fetch(`https://paregisme.herokuapp.com/articles`);
    posts = await posts.json();
    let publications = await fetch(`https://paregisme.herokuapp.com/publications`);
    publications = await publications.json();

    posts = posts.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.published_at) - new Date(a.published_at);
    });
    return{
        headers: {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
          },
        body: render(req.headers.host, posts, publications)
    }
}

function render(website, posts, publications) {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
xmlns:xhtml="https://www.w3.org/1999/xhtml"
xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
    <url>
        <loc>https://${website}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${website}/about</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${website}/contact</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${website}/teaching</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://${website}/publications</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>
${posts
    .map(post =>`
    <url>
        <loc>https://${website}/blog/${post.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`)}
${publications
    .map(pub =>`
    <url>
        <loc>https://${website}/publications/${pub.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`)}
</urlset>`;
}
