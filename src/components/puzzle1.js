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
    dove: false,
    done: 0
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

  gameDone = () => {
    const {
      hammer,
      handCuff,
      shoe,
      spoon,
      bullet,
      scissors,
      kitten,
      goldKey,
      horseShoe,
      dove
    } = this.state;
    if (
      hammer &&
      handCuff &&
      shoe &&
      spoon &&
      bullet &&
      scissors &&
      kitten &&
      goldKey &&
      horseShoe &&
      dove === true
    ) {
      this.setState({
        done: true
      });
    }
    console.log(this.state.done);
  };

  render() {
    return (
      <>
        <div className="puz1">
          <img src={puzzle1} alt="" />
        </div>
        <button className="hammer" onClick={this.handleHammerClick}>
          hammer
        </button>
        <button className="cuff" onClick={this.handleHandCuffClick}>
          HandCuff
        </button>
        <button className="shoe" onClick={this.handleShoeClick}>
          Shoe
        </button>
        <button className="spoon" onClick={this.handleSpoonClick}>
          Spoon
        </button>
        <button className="bullet" onClick={this.handleBulletClick}>
          Bullet
        </button>
        <button className="scissors" onClick={this.handleScissorsClick}>
          Scissors
        </button>
        <button className="kitten" onClick={this.handleKittenClick}>
          Kitten
        </button>
        <button className="key" onClick={this.handleGoldKeyClick}>
          GoldKey
        </button>
        <button className="hshoe" onClick={this.handleHorseShoeClick}>
          HorseShoe
        </button>
        <button className="dove" onClick={this.handleDoveClick}>
          Dove
        </button>
        <div className="words">
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
        </div>
      </>
    );
  }
}

export default Puzzle1;
