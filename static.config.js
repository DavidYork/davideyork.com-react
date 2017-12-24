import fs from 'fs'
import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { markdown } from 'markdown'
import allPosts from './src/posts/allPosts'

const marked = require('marked')

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // These are top-level, not children of "domain.com/blog/..."
    var postRoutes = allPosts.map( x => {
      return {
        path: x,
        component: 'src/containers/TestMD',
        getProps: () => ({
          markdown: markdown.toHTML(fs.readFileSync('./src/posts/' + x + '.md', 'utf-8')),
          metadata: JSON.parse(fs.readFileSync('./src/posts/' + x + '.json', 'utf-8')),
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
        component: 'src/containers/About',
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
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
