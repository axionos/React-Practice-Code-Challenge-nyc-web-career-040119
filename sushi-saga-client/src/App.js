import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    budget: 100,
    platesEaten: []
  }

  // FETCH DATA FROM API & UPDATE THE STATE
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          sushi: data
        })
      })
  } // END FETCH


  // RENDER EATEN PLATES
  platesEaten = (name) => {
    const copyPlatesEaten = [...this.state.platesEaten]
    this.setState({
      platesEaten: [...copyPlatesEaten, name]
    })
  } // END RENDERING EATEN PLATES


  // MORE SUSHI BUTTON FOR NEXT 4 SUSHIS
  genMoreSushi = () => {
    const moreSushi = [...this.state.sushi]
    this.setState({
      sushi: moreSushi.slice(4)
    })
  } // END MORE SUSHI BTN


  // UPDATE THE BUDGET AMOUNT
  balance = (newBalance) => {
    this.setState({
      budget: newBalance
    })
  } // END UPDATING


  render() {
    console.log("Current App State", this.state)

    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          genMoreSushi={this.genMoreSushi}
          platesEaten={this.platesEaten}
          budget={this.state.budget}
          balance={this.balance}/>
        <Table
          budget={this.state.budget}
          platesEatenStatus={this.state.platesEaten}/>
      </div>
    );
  }
}

export default App;
