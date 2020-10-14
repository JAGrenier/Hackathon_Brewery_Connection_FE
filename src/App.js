import React, { Component } from 'react'
import './App.css';
import BreweryContainer from './Components/BreweryContainer';

export default class App extends Component {

  state = {
    breweries: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/breweries')
      .then(response => response.json())
      .then(breweries => this.setState({breweries}))
  }

  submitFan = (brewery, fan) => {
    console.log(brewery)
    fetch('http://localhost:3000/fans', {
      method: "POST", 
      headers: {
        "Accept": "application/json",
        "Content-type" : "application/json"
      }, 
      body: JSON.stringify({name: fan, brewery_id: brewery.id})
    }).then(response => response.json())
    // .then(brewery => this.setState({breweries: [...this.state.breweries, brewery]}))
  }
  
  render(){

    return (
      <div className="App">
        <h1>Beer Connections</h1>
        <BreweryContainer breweries={this.state.breweries} submitFan={this.submitFan}/>
      </div>
    );
  }
}


