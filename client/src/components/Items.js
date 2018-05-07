import React, { Component } from 'react';
import { Header, Button, Card, Icon, Divider, Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';


class Items extends Component {
  state = {
    items: [{}],
  }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <Container>
          <Grid centered>
            <Grid.Row columns={5}>
          { items.map( items => 
          <Grid.Column>
            <Card key={items.id}>
              <Card.Content header={items.name} />
              <Card.Content description={items.description} />
              <Card.Content extra>
                <Icon name='user' />
                4 Friends
              </Card.Content>
              <Button color='blue' onClick={() => console.log('this is even better stupid')}> This is working stupid Locations </Button>
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
  return { items: state.items}
}


export default connect(mapStateToProps)(Items);
