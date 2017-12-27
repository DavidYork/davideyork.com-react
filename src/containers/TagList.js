import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-static'

const TagListStyles = styled.div`
  a {
    color: #000;
  }
  .taglist {
    margin-top: 20px;
    // margin-bottom: 10px;
  }
`

export default function (props) {

  function getTag(tag, append) {
    const target = '/tags/' + tag.toLowerCase().replace(' ', '-') + '/'
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