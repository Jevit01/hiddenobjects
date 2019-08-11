import React, { Component } from "react";
import puzzle1 from "../PuzzleImages/puzzle1.jpg";

class Puzzle1 extends Component {
  state = {
    timer: 10,
    hammer: false,
    handCuff: false,
    shoe: false,
    spoon: false,
    bullet: false,
    scissors: false,
    kitten: false,
    goldKey: false,
    horseShoe: false,
    dove: false
  };

  handleHammerClick = () => {
    this.setState({
      hammer: true
    });
  };

  handleHandCuffClick = () => {
    this.setState({
      handCuff: true
    });
  };

  handleShoeClick = () => {
    this.setState({
      shoe: true
    });
  };

  handleSpoonClick = () => {
    this.setState({
      spoon: true
    });
  };

  handleBulletClick = () => {
    this.setState({
      bullet: true
    });
  };

  handleScissorsClick = () => {
    this.setState({
      scissors: true
    });
  };

  handleKittenClick = () => {
    this.setState({
      kitten: true
    });
  };

  handleGoldKeyClick = () => {
    this.setState({
      goldKey: true
    });
  };

  handleHorseShoeClick = () => {
    this.setState({
      horseShoe: true
    });
  };

  handleDoveClick = () => {
    this.setState({
      dove: true
    });
  };

  render() {
    return (
      <>
        <img src={puzzle1} alt="" />
        <button onClick={this.handleHammerClick}>hammer</button>
        <button onClick={this.handleHandCuffClick}>HandCuff</button>
        <button onClick={this.handleShoeClick}>Shoe</button>
        <button onClick={this.handleSpoonClick}>Spoon</button>
        <button onClick={this.handleBulletClick}>Bullet</button>
        <button onClick={this.handleScissorsClick}>Scissors</button>
        <button onClick={this.handleKittenClick}>Kitten</button>
        <button onClick={this.handleGoldKeyClick}>GoldKey</button>
        <button onClick={this.handleHorseShoeClick}>HorseShoe</button>
        <button onClick={this.handleDoveClick}>Dove</button>
        {this.state.hammer ? "" : <p>Hammer</p>}
        {this.state.handCuff ? "" : <p>Hand Cuff</p>}
        {this.state.shoe ? "" : <p>Shoe</p>}
        {this.state.spoon ? "" : <p>Spoon</p>}
        {this.state.bullet ? "" : <p>Bullet</p>}
        {this.state.scissors ? "" : <p>Scissors</p>}
        {this.state.kitten ? "" : <p>Kitten</p>}
        {this.state.goldKey ? "" : <p>Gold Key</p>}
        {this.state.horseShoe ? "" : <p>Horse Shoe</p>}
        {this.state.dove ? "" : <p>Dove</p>}
      </>
    );
  }
}

export default Puzzle1;
