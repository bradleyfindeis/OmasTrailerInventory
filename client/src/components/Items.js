import React, { Component } from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react';

// handleSubmit = () => {
//   axios.post(`/api/items/${id}`)
//     .then( res => this.setState({ items: [res.data, ...items ], showForm: false }) )
// }

class Items extends React.Component {
  state = {
    showForm: false,
  }
  
  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }) )
  }

  render() {
    return (
      <Header> What up homie? </Header>
    )
  }
}


export default Items;