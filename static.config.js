import fs from 'fs'
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import siteMetadata from './src/siteMetadata'

const marked = require('marked')

export default {

  getSiteProps: () => ({
    title: 'React Static',
    metadata: siteMetadata.posts.map( x => {
      const filename = './src/posts/' + x + '.json';
      const meta = fs.readFileSync(filename, 'utf-8');
      return JSON.parse(meta);
    })
  }),

  siteRoot: 'http://davideyork.com',

  getRoutes: async () => {

    var postMetadata = null;

    var getAllPostMetadata = () => {
      // Parse all the posts
      if (postMetadata == null) {
        postMetadata = siteMetadata.posts.map( x => {
          const filename = './src/posts/' + x + '.json';
          const fileData = fs.readFileSync(filename, 'utf-8');
          var meta = JSON.parse(fileData);
          meta['name'] = x;
          return meta;
        })
      }

      return postMetadata;
    };

    var getPostMetadata = (post) => {
      var postMeta = getAllPostMetadata();

      // Find the post
      for (var i=0; i < postMeta.length; i++) {
        if (postMeta[i].name == post) {
          return postMeta[i];
        }
      }

      return null;
    };

    var getSiblings = (post) => {
      var idx = 0;
      var found = false;
      for (var i = 0; i < siteMetadata.posts.length && !found; i++) {
        if (post == siteMetadata.posts[i]) {
          idx = i;
          found = true;
        }
      }

      var prevIdx = (idx - 1 < 0) ? siteMetadata.posts.length - 1 : idx - 1;
      var nextIdx = (idx + 1 >= siteMetadata.posts.length) ? 0 : idx + 1;
      var metaData = getAllPostMetadata();

      var rv = {
        prev: metaData[prevIdx],
        next: metaData[nextIdx]
      };

      return rv;
    };

    var getPostsFromTag = (tag) => {
      var rv = [];
      var meta = getAllPostMetadata();
      for (var i = 0; i < meta.length; i++) {
        if ((meta[i].tags.indexOf(tag.tag) >= 0) || (meta[i].tags.indexOf(tag.title) >= 0)) {
          rv.push(meta[i]);
        }
      }

      return rv;
    };

    // These are top-level, not children of "domain.com/blog/..."
    var postRoutes = siteMetadata.posts.map( x => {
      const meta = JSON.parse(fs.readFileSync('./src/posts/' + x + '.json', 'utf-8'));
      const siblings = getSiblings(x);
      return {
        path: meta.route,
        component: 'src/containers/Post',
        getProps: () => {
          return {
            markdown: marked(fs.readFileSync('./src/posts/' + x + '.md', 'utf-8')),
            metadata: meta,
            next: siblings.prev,
            prev: siblings.next,
          }
        }
      }
    });

    // These are the tags that describe groups of posts
    var tagRoutes = siteMetadata.tags.map( x => {
      return {
        path: 'tags/' + x.tag,
        component: 'src/containers/TagFlow',
        getProps: () => {
          var props = {
            tag: x,
            posts: getPostsFromTag(x)
          };

          return props;
        }
      }
    });

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/Page',
        getProps: () => ({
          markdown: marked(fs.readFileSync('./src/pages/about.md', 'utf-8')),
          metadata: JSON.parse(fs.readFileSync('./src/pages/about.json', 'utf-8'))
        })
      },
      {
        path: '/test-blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          postRoutes,
        }),
      },

      ...tagRoutes,

      ...postRoutes,

      {
        is404: true,
        component: 'src/containers/404',
      },
    ];
  },

  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },

  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>David York</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
            <link rel="stylesheet" href="/css/davideyork.css" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/content/images/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/content/images/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/content/images/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/content/images/apple-touch-icon-144x144.png" />
            { renderMeta.styleTags }
          </Head>
          <Body>{ children }</Body>
        </Html>
      )
    }
  },
}
