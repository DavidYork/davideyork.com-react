import React from 'react'
import { getRouteProps } from 'react-static'

export default getRouteProps(( props ) => (
    <div>
        <h1>{ props.metadata.title }</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
    </div>
))