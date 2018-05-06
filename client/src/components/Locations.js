import React, { Component } from 'react';
import { Header, Button, Card, Icon, Divider, Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';


class Locations extends Component {
  state = {
    locations: [{}],
  }

  componentDidMount() {
    axios.get('/api/locations')
      .then( res => this.setState({ locations: res.data }) )
  }

  render() {
    const { locations } = this.state
    return (
      <div>
        <Container>
          <Grid centered>
            <Grid.Row columns={5}>
          { locations.map( locations => 
          <Grid.Column>
            <Card key={locations.id}>
              <Card.Content header={locations.name} />
              <Card.Content description={locations.description} />
              <Card.Content extra>
                <Icon name='user' />
                4 Friends
              </Card.Content>
              <Button onClick={() => console.log('this is even better stupid')}> This is working stupid Locations </Button>
            </Card>
          </Grid.Column>
          )}
          </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { locations: state.locations }
}


export default connect(mapStateToProps)(Locations);
