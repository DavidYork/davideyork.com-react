import fs from 'fs'
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import allPosts from './src/allPosts'

const marked = require('marked')

export default {

  getSiteProps: () => ({
    title: 'React Static',
    posts: allPosts,
    metadata: allPosts.posts.map( x => {
      const filename = './src/posts/' + x + '.json';
      const meta = fs.readFileSync(filename, 'utf-8');
      return JSON.parse(meta);
    })
  }),

  siteRoot: 'http://davideyork.com',

  getRoutes: async () => {

    // These are top-level, not children of "domain.com/blog/..."
    var postRoutes = allPosts.posts.map( x => {
      const meta = JSON.parse(fs.readFileSync('./src/posts/' + x + '.json', 'utf-8'));
      return {
        path: meta.route,
        component: 'src/containers/Post',
        getProps: () => ({
          markdown: marked(fs.readFileSync('./src/posts/' + x + '.md', 'utf-8')),
          metadata: meta,
        })
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
            { renderMeta.styleTags }
          </Head>
          <Body>{ children }</Body>
        </Html>
      )
    }
  },
}
