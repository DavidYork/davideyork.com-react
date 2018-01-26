import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import FollowIcon from './FollowIcon'

const TopNavStyles = styled.div`
  i {
    padding-right: 20px;
    padding-top: 4px;
    line-height: 2em;
    color: #AAA
  }
`

export default class TopNav extends Component {
  state = { activeItem: '' }

  render() {
    const { activeItem } = this.state

    return (
      <TopNavStyles>
        <nav>
          <Menu stackable inverted fixed='top' >
            <Menu.Item as={ Link } to='/' name='home' />
            <Menu.Item as={ Link } to='/tag/indie-games' name='indie'>Indie Gamedev</Menu.Item>
            <Menu.Item as={ Link } to='/tag/procedural-generation' name='procedural generation' />
            <Menu.Item as={ Link } to='/tag/work' name='work' />
            <Menu.Item as={ Link } to='/about' name='about'>Who am I?</Menu.Item>

            <Menu.Menu position='right'>
              <FollowIcon to='http://twitter.com/DavemanInSF' name='twitter' />
              <FollowIcon to='http://www.linkedin.com/in/davideyork' name='linkedin' />
              <FollowIcon to='mailto:david@davideyork.com' name='mail' />
              <FollowIcon to='/rss' name='rss' />
            </Menu.Menu>
          </Menu>
        </nav>
      </TopNavStyles>
    )
  }
}
