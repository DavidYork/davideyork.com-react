import React from 'react'
import styled from 'styled-components'
import { Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-static'

const FooterStyles = styled.div`
  .copyright {
    text-align: center;
    margin-top: 100px;
  }
  .footer {
    color: #666;
    background-color: #000;
    font-family: 'Proxima Nova','Helvetica Neue',Helvetica,sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  .grid-col {
    margin-left: 30px;
    margin-right: 30px;
  }
  h3 {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  p {
    line-height: 2em;
  }
  a {
    color: #666;
  }
  a:hover {
    color: #4183c4; // TODO: Get from semantic-ui-react
  }
  .link-text {
    font-size: 20px;
    padding-left: 30px;
  }
`

export default () => (
  <FooterStyles>
    <div className="footer">
      <Grid divided='vertically' stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="grid-col">
              <h3>About</h3>
              <p>Hello, and thanks for visiting! I'm David York, a San Francisco software engineer. I've been programming and designing games since age 10.</p>
              <p>My passions include game development, cooking, photography and travel.</p>
              <p>I'm is currently working as a mobile (iOS and Android) consultant and indie game developer.</p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="grid-col">
              <h3>Follow me</h3>
              <p>
              <Link to='http://twitter.com/DavemanInSF'>
                <Icon link name='twitter' size='huge' />
                <span className='link-text'>@DavemanInSF</span>
              </Link>
              </p>

              <p>
              <Link to='http://www.linkedin.com/in/davideyork'>
                <Icon link name='linkedin' size='huge' />
                <span className='link-text'>David York</span>
              </Link>
              </p>

              <p>
              <Link to='mailto:david@davideyork.com'>
                <Icon link name='mail' size='huge' />
                <span className='link-text'>david@davideyork.com</span>
              </Link>
              </p>

              <p>
              <Link to='/rss'>
                <Icon link name='rss' size='huge' />
                <span className='link-text'>RSS feed</span>
              </Link>
              </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="copyright">© 2017 David York</div>
    </div>
  </FooterStyles>
)