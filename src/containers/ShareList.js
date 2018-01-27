import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'
import FollowIcon from './FollowIcon'

const TagListStyles = styled.div`
  .heading {
    font-size: 12pt;
    padding-right: 20px;
    padding-top: 4px;
    line-height: 10px;
  }
  .shareList {
    margin-top: 12px;
    text-align: center;
  }
  span {
    padding-right: 6px;
  }
  i {
    color: #444;
  }
`

const shareTargets = [
  {
    to:'https://www.facebook.com/sharer/sharer.php?u=http://davideyork.com/gengam-2016/',
    name:'facebook'
  },
  {
    to:'https://twitter.com/share?text=GenGam%202016&url=http://davideyork.com/gengam-2016/',
    name:'twitter'
  },
  {
    to:'https://plus.google.com/share?url=http://davideyork.com/gengam-2016/',
    name:'google plus square'
  },
  {
    to:'http://reddit.com/submit?url=http://davideyork.com/gengam-2016/&title=GenGam%202016',
    name:'reddit'
  },
  {
    to:'http://www.linkedin.com/shareArticle?mini=true&url=http://davideyork.com/gengam-2016/',
    name:'linkedin'
  },
];

function share (target) {
  return ( <FollowIcon to={ target.to } name={ target.name } key={ target.name }/> )
}

export default function (props) {
  return (
    <TagListStyles>
      <div className='shareList'>
        {/*<span className="heading">Share this article{ shareTargets.map( share ) }</span>*/}
        <hr />
      </div>
    </TagListStyles>
  )
}