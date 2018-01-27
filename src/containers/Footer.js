import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from 'semantic-ui-react'
import FollowLink from './FollowLink'

const FooterStyles = styled.div`
  .copyright {
    text-align: center;
    margin-top: 100px;
  }
  .footer {
    color: #AAA;
    background-color: #1b1c1d;
    font-family: 'Proxima Nova','Helvetica Neue',Helvetica,sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  .grid-col-left {
    margin-right: 1rem;
  }
  .grid-col-right {
    margin-left: 1rem;
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
    color: #AAA;
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
      <Container>
        <div className='content'>
        <Grid divided='vertically' stackable >
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="grid-col-left">
                <h3>About</h3>
                <p>Hello, and thanks for visiting! I'm David York, a San Francisco software engineer. I've been programming and designing games since age 10.</p>
                <p>My passions include game development, cooking, photography and travel.</p>
                <p>I'm is currently working as a mobile (iOS and Android) consultant and indie game developer.</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="grid-col-right">
                <h3>Follow me</h3>
                <FollowLink to='http://twitter.com/DavemanInSF' name='twitter' text='@DavemanInSF' />
                <FollowLink to='http://www.linkedin.com/in/davideyork' name='linkedin' text='David York' />
                <FollowLink to='mailto:david@davideyork.com' name='mail' text='david@davideyork.com' />
                <FollowLink to='/rss' name='rss' text='RSS feed' />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="copyright">© 2018 David York</div>
      </div>
      </Container>
    </div>
  </FooterStyles>
)