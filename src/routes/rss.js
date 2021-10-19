export function get(req, res) {
    const res = await fetch(`https://paregisme.herokuapp.com/articles`);
    let posts = await res.json();
    posts = posts.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.published_at) - new Date(a.published_at);
    });
    
}