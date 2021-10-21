export async function get(req, _) {
    let posts = await fetch(`https://paregisme.herokuapp.com/articles`);
    posts = await posts.json();

    posts = posts.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.published_at) - new Date(a.published_at);
    });
    return {
        headers: {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
          },
        body: render(req.headers.host, posts)
    }
}

function render(website, posts) {
    return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
    <atom:link href="https://${website}/rss" rel="self" type="application/rss+xml" />
    <title>Paulo Alexandre Regis</title>
    <link>https://${website}</link>
    <description>Paulo's personal website.</description>
    ${posts
      .map(
        (post) => `<item>
    <guid>https://${website}/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://${website}/blog/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
    </channel>
    </rss>
    `;
}
