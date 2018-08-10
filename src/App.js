import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';

import routes from './routes';

import './reset.css';
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
      item: {
        imgUrl: '',
        productName: '',
        price: 0,
        id: false,
      },
    }

    this.getAllInventory = this.getAllInventory.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
    this.updateItem = this.updateItem.bind(this);
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

  updateInventory(newInventory) {
    this.setState({
      inventory: newInventory,
    })
  }

  updateItem(newItem) {
    this.setState({
      item: newItem
    })
  }



  render() {
    return (
      <HashRouter>

        <div className="App">
          <Header />
          <p>see words here
        </p>
          <Dashboard
            inventory={this.state.inventory}
            getAllInventory={this.getAllInventory}
            updateInventory={this.updateInventory}
            updateItem={this.updateItem}
          />
          <Form
            getAllInventory={this.getAllInventory}
            item={this.state.item}
            updateItem={this.updateItem}
            updateInventory={this.updateInventory}
          />
          {/* {routes} */}
        </div>

      </HashRouter>
    );
  }
}

export default App;
