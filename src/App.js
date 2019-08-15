import React, { Component } from "react";
import "./App.css";
import Puzzle1 from "./components/puzzle1.js";

class App extends Component {
  state = {
    start: false
  };
  handleStart = () => {
    this.setState({
      start: true
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.start ? (
          <Puzzle1 />
        ) : (
          <>
            <h1>Hidden Objects</h1>
            <p>
              Welcome to Hidden Objects. The objective of the game is to locate
              all objects given to you in the word bank and simply click on the
              image of that word. Be aware there is a time limit! If time runs
              out you will have to restart back at this page and start all the
              way to level 1. As levels go up, your time limit will go down.
            </p>
            <p>Happy Hunting!</p>
            <button onClick={this.handleStart}>START</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
