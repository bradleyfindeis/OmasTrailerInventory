import React, { Component } from 'react';
import { Button, Card, Divider, Grid, Container, Modal, Advertisement, Image, Header, Form, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteLocation } from '../actions/locations'


class Locations extends Component {
  state = {
    locations: [{}],
    location: {},
    open: false,
    active: false,
  }

  show = dimmer => () => this.setState({ dimmer, open: true, })
  close = () => this.setState({ open: false })

  componentDidMount() {
    axios.get('/api/locations')
      .then( res => this.setState({ locations: res.data }) )
  }

  // handleView(id) {
  //   debugger
  //   axios.get(`/api/locations/${id}`)
  //     .then( res => this.setState({ location: res.data }) )
  //     return (
  //       <Advertisement unit='large rectangle' centered test='Centered' />
  //       )
  // }

  removeLocation = (id) => {
    debugger
    const { dispatch } = this.props
    dispatch(deleteLocation(id))
    // .then( this.setState({ locations: '' }) )
    {this.close()}
  }

  handleClick = () => {
    debugger 
    this.setState({ active: !this.state.active })
  }

  //TODO: Make Edit work
    // Open

  editLocation = () => {
    const { location } = this.state
    return(
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }

  render() {
    const { locations, active } = this.state
    const { open, dimmer } = this.state
    return (
      <div>
        <Divider hidden />
        <Divider hidden />
        <Container>
        <Grid centered>
          <Grid.Row columns={5}>
            { locations.map( ( l ) => 
            <Grid.Column>
              <Card raised key={l.id}>
                <Card.Content header={l.name} />
                <Card.Content description={l.description} />
                <Modal style={inlineStyle.modal}  trigger={<Button color='blue'>View</Button>}>
                  <Modal.Header>{l.name}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' />
                    <Modal.Description>
                      <Header>{l.name}</Header>
                      <p>{l.description}</p>
                    </Modal.Description>
                    <Modal.Actions>
                      <Button color='red' onClick={() => this.removeLocation(l.id)}>
                        Delete
                      </Button>
                      <Button color='green' toggle active={active} onClick={() => this.handleClick}>
                        Edit
                      </Button>
                    </Modal.Actions>
                  </Modal.Content>
                </Modal>
              </Card>
              <Divider hidden />
            </Grid.Column>
            )} 
          </Grid.Row>
        </Grid>
        </Container>
      </div>
    );
  }
}

const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const mapStateToProps = (state) => {
  return { locations: state.locations }
}


export default connect(mapStateToProps)(Locations);
