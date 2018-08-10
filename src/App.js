import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

// importing Components
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    }

    this.getAllInventory = this.getAllInventory.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then((response) => {
        console.log(response);
        this.setState({
          inventory: response.data
        })
      })
  }

  getAllInventory() {
    axios
      .get('/api/inventory')
      .then((response) => {
        console.log(response);
        this.setState({
          inventory: response.data
        })
      })
  }



  render() {
    return (
      <div className="App">
        <p>see words here
        </p>
        <Dashboard
          inventory={this.state.inventory}
          getAllInventory={this.getAllInventory}
        />
        <Form
          getAllInventory={this.getAllInventory}
        />
        <Header />
      </div>
    );
  }
}

export default App;
