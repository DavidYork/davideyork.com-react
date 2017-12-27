import React from 'react'
import { getRouteProps } from 'react-static'
import Banner from './Banner'
import TagList from './TagList'
import ShareList from './ShareList'

export default getRouteProps(( props ) => (
    <div>
        <Banner />
        <div className='content'>
            <h1>{ props.metadata.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
            <TagList tags={ props.metadata.tags } />
            <ShareList />
        </div>
    </div>
))