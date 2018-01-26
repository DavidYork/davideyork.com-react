import fs from 'fs'
import Feed from 'feed'
import mkdirp from 'mkdirp'
import siteMetadata from './siteMetadata'

const maxNumArticlesInFeed = 100;

const getFeed = () => {
  const author = {
    name: 'David York',
    email: 'david@davideyork.com',
    link: 'http://davideyork.com/about'
  };

  const info = {
    title: "David York",
    description: "Personal blog of David York, software engineer and indie game developer.",
    id: 'http://davideyork.com',
    link: 'http://davideyork.com',
    image: 'http://davideyork.com/content/images/map-decorated-big-1-1.png',
    favicon: 'http://davideyork.com/favicon.ico',
    feedLinks: {
      atom: 'http://davideyork.com/atom',
      rss: 'http://davideyork.com/rss'
    },
    author: author,
    ttl: 60,
  };

  var feed = new Feed(info);

  let posts = siteMetadata.metadata;
  if (posts.length > maxNumArticlesInFeed) {
    posts = posts.slice(0, maxNumArticlesInFeed);
  }

  const tags = siteMetadata.tags;
  tags.forEach(tag => {
    feed.addCategory(tag.title.toLowerCase());
  });

  posts.forEach(post => {
    console.log(post);
    const postItem = {
      title: post.title,
      categories: post.tags,
      description: post.oneLiner,
      id: post.url,
      author: author,
      link: post.url,
      image: 'http://davideyork.com' + post.image,
      date: new Date(post.date),
      content: post.markdown,
    };

    feed.addItem(postItem);
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

    mkdirp('public/rss');
    mkdirp('public/atom');
    mkdirp('dist/rss');
    mkdirp('dist/atom');
    fs.writeFileSync('public/rss/index.xml', feed.rss2(), 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.xml', feed.rss2(), 'utf8', handleError);
    fs.writeFileSync('public/rss/index.html', feed.rss2(), 'utf8', handleError);
    fs.writeFileSync('dist/rss/index.html', feed.rss2(), 'utf8', handleError);

    fs.writeFileSync('public/atom/index.xml', feed.atom1(), 'utf8', handleError);
    fs.writeFileSync('dist/atom/index.xml', feed.atom1(), 'utf8', handleError);
  }
}
