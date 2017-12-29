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
    const target = '/tags/' + sanitize(tag) + '/'
    return (
      <Link to={ target } key={ tag } >{ tag }{ append }</Link>
    )
  }

  function tagList(tags) {
    const sublist = tags.splice(0, tags.length - 1);
    const last = tags[tags.length - 1];
    var rv = sublist.map( (tag) => getTag(tag, ', ' ));
    rv.push(getTag(last, ''));
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