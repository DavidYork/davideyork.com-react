import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'

const TagListStyles = styled.div`
  a {
    color: #000;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
  }
  a:hover {
    color: #4183c4; // TODO: Get from semantic-ui-react
  }
  .taglist {
    margin-top: 20px;
    text-align: center;
  }
`

export default function (props) {

  function sanitize(tag) {
    while (tag.indexOf(' ') >= 0) {
      tag = tag.replace(' ', '-');
    }
    return tag.toLowerCase();
  }

  function getTag(tag, append) {
    const target = '/tag/' + sanitize(tag) + '/'
    return (
      <Link key={ target } to={ target } key={ tag } >{ tag }{ append }</Link>
    )
  }

  // Create an array of <Link>s separated by commas
  function tagList(tags) {
    let rv = [];
    for (var i = 0; i < tags.length; i++) {
      const separator = (i == tags.length - 1) ? '' : ', ';
      rv.push(getTag(tags[i], separator));
    }

    return rv;
  }

  return (
    <TagListStyles>
      <div className='taglist'>
        <Icon name='tag' />
        { tagList(props.tags )}
      </div>
    </TagListStyles>
  )
}