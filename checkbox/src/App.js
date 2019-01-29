import React, { Component } from 'react';
// import './App.css';

const PositiveMessage = () => <p>Tak</p>
const NegativeMessage = () => <p>Nie</p>

class App extends Component {

  state = {
    isConfirmed: false,
  }
  
  handleChecboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NegativeMessage />
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Buy ticket</h1>
        <input type="checkbox" id="age"
        onChange={this.handleChecboxChange} checked={this.state.isConfirmed}/>
        <label htmlFor="age">Mam 18 lat</label>
        {this.displayMessage()}             
      </div>
    );
  }
}

export default App;
