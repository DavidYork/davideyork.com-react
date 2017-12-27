
import React from 'react'
import { getRouteProps, Link } from 'react-static'

export default getRouteProps(( props ) => (
  <div className='content'>
    <h1>Index of Articles</h1>
    <ul>
      {props.postRoutes.map(post => (
        <li key={post.path}>
          <Link to={`/${post.path}/`}>{post.path}</Link>
        </li>
      ))}
    </ul>
  </div>
))
