import fs from 'fs'
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import SiteMetadata from './src/lib/siteMetadata'
import rssGen from './src/lib/rssGen'

const marked = require('marked')

export default {

  getSiteProps: () => ({
    title: 'David York',
    metadata: SiteMetadata.metadata,
  }),

  siteRoot: 'http://davideyork.com',

  getRoutes: async () => {

    var getSiblings = (post) => {
      var idx = 0;
      var found = false;
      for (var i = 0; i < SiteMetadata.posts.length && !found; i++) {
        if (post == SiteMetadata.posts[i]) {
          idx = i;
          found = true;
        }
      }

      var prevIdx = (idx - 1 < 0) ? SiteMetadata.posts.length - 1 : idx - 1;
      var nextIdx = (idx + 1 >= SiteMetadata.posts.length) ? 0 : idx + 1;
      var metaData = SiteMetadata.metadata;

      var rv = {
        prev: metaData[prevIdx],
        next: metaData[nextIdx]
      };

      return rv;
    };

    var getPostsFromTag = (tag) => {
      var rv = [];
      var meta = SiteMetadata.metadata;
      for (var i = 0; i < meta.length; i++) {
        if ((meta[i].tags.indexOf(tag.tag) >= 0) || (meta[i].tags.indexOf(tag.title) >= 0)) {
          rv.push(meta[i]);
        }
      }

      return rv;
    };

    // These are top-level, not children of "domain.com/blog/..."
    var postRoutes = SiteMetadata.metadata.map( meta => {
      const siblings = getSiblings(meta.postname);
      return {
        path: meta.route,
        component: 'src/containers/Post',
        getProps: () => {
          return {
            markdown: meta.markdown,
            metadata: meta,
            next:siblings.prev,
            prev:siblings.next
          };
        }
      };
    });

    // These are the tags that describe groups of posts
    var tagRoutes = SiteMetadata.tags.map( x => {
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

  onBuild: () => {
    rssGen.Generate();
  },

  onStart: ({ devServerConfig }) => {
    rssGen.Generate();
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
