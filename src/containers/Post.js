import React from 'react'
import { getRouteProps } from 'react-static'
import BigBanner from './BigBanner'

export default getRouteProps(( props ) => (
    <div>
        <BigBanner />
        <div className='content'>
            <h1>{ props.metadata.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
        </div>
    </div>
))