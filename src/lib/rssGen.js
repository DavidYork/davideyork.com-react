import fs from 'fs'
import RSS from 'rss'
import mkdirp from 'mkdirp'
import siteMetadata from './siteMetadata'

const maxNumArticlesInFeed = 100;

const getFeed = () => {

  const tags = siteMetadata.tags;
  let categories = [];
  tags.forEach(tag => {
    categories.push(tag.title.toLowerCase());
  });

  const info = {
    title: "David York",
    description: "Personal blog of David York, software engineer and indie game developer.",
    feed_url: 'http://davideyork.com/rss',
    site_url: 'http://davideyork.com',
    image_url: 'http://davideyork.com/content/images/map-decorated-big-1-1.png',
    webMaster: 'david@davideyork.com',
    language: 'en-us',
    categories: categories,
    // pubDate: new Date(),???
    ttl: 60,



    // id: 'http://davideyork.com',
    // link: 'http://davideyork.com',
    // favicon: 'http://davideyork.com/favicon.ico',
    // feedLinks: {
    //   atom: 'http://davideyork.com/atom',
    //   rss: 'http://davideyork.com/rss'
    // },
    // author: author,
    // ttl: 60,
  };

  let feed = new RSS(info);

  let posts = siteMetadata.metadata;
  if (posts.length > maxNumArticlesInFeed) {
    posts = posts.slice(0, maxNumArticlesInFeed);
  }


  posts.forEach(post => {

    let categories = post.tags.map(tag => tag.toLowerCase());
    const postItem = {
      title: post.title,
      categories: categories,
      description: post.oneLiner,
      url: post.url,
      guid: post.guid,
      author: "David York",
      link: post.url,
      image: 'http://davideyork.com' + post.image,
      date: new Date(post.date),
      custom_elements: [
        { 'content:encoded': { _cdata: post.markdown } }
      ]
    };

    feed.item(postItem);
  });

  return feed;
}

const handleError = (err) => {
  if (err) {
    console.error("Problem generating RSS");
    throw err;
  }
}

export default {
  Generate: () => {
    var feed = getFeed();
    var xml = feed.xml();

    mkdirp('public/rss');
    mkdirp('dist/rss');
    fs.writeFileSync('public/rss/index.xml', xml, 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.xml', xml, 'utf8', handleError);
    fs.writeFileSync('public/rss/index.html', xml, 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.html', xml, 'utf8', handleError);
  }
}
