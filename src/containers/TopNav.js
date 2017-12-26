import React, { Component } from 'react'
import { Link } from 'react-static'
import { Menu, Segment } from 'semantic-ui-react'

export default class TopNav extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <nav>
          <Menu pointing secondary>
            <Menu.Item as={ Link } to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/indie' name='indie' active={activeItem === 'indie'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/procedural-generation' name='procedural generation' active={activeItem === 'procedural generation'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/work' name='work' active={activeItem === 'work'} onClick={this.handleItemClick} />
            <Menu.Item as={ Link } to='/tags/gamedev' name='gamedev' active={activeItem === 'gamedev'} onClick={this.handleItemClick} />

            <Menu.Menu position='right'>
              <Menu.Item as={ Link } to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
              <Menu.Item as={ Link } to='/test-blog' name='test-blog' active={activeItem === 'test-blog'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </nav>
      </div>
    )
  }
}
