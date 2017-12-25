import React from 'react'
import { getRouteProps } from 'react-static'

export default getRouteProps(( props ) => (
    <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
))