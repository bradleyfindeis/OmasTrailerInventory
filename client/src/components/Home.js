import React, { Component } from 'react';
import { Header, Button, Segment, Container, Divider, Image } from 'semantic-ui-react';
import Locations from './Locations'

class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{ textAlign: 'center'}}>
          <Segment>
            <Divider hidden />
            <Header as='h1'> Oma's Trailer </Header>
            <Divider hidden />
            <Image src='http://www.cliparthut.com/clip-arts/737/rv-silhouette-clip-art-737553.png' size='medium' verticalAlign='middle' />
            <Segment >
              <Button color='green' size='large' onClick={() => {Locations}}> Locations </Button>
              <Button color='blue' size='large' onClick={() => console.log('stupid')}> Items </Button>
            </Segment>
          </Segment>
        </Container>
      </div>
    );
  }
}


export default Home;
