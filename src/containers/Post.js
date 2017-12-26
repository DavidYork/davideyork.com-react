import React from 'react'
import { getRouteProps } from 'react-static'
import Banner from './Banner'

export default getRouteProps(( props ) => (
    <div>
        <Banner />
        <div className='content'>
            <h1>{ props.metadata.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
        </div>
    </div>
))