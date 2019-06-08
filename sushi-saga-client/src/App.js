import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: []

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


  // MORE SUSHI BUTTON FOR NEXT 4 SUSHIS
  genMoreSushi = () => {
    const moreSushi = [...this.state.sushi]
    this.setState({
      sushi: moreSushi.slice(4)
    })
  } // END MORE SUSHI BTN


  render() {
    console.log("Current App State", this.state)

    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          genMoreSushi={this.genMoreSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;
