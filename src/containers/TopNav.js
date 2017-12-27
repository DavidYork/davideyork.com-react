import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Menu, Segment } from 'semantic-ui-react'
import FollowIcon from './FollowIcon'

const TopNavStyles = styled.div`
  i {
    padding-right: 20px;
    padding-top: 4px;
    line-height: 2em;
    color: #444
  }
`

export default class TopNav extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <TopNavStyles>
        <nav>
          <Menu pointing secondary>
            <Menu.Item as={ Link } to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/indie' name='indie' active={activeItem === 'indie'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/procedural-generation' name='procedural generation' active={activeItem === 'procedural generation'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/work' name='work' active={activeItem === 'work'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/gamedev' name='gamedev' active={activeItem === 'gamedev'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/test-blog' name='test-blog' active={activeItem === 'test-blog'} onClick={this.handleItemClick} />

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
