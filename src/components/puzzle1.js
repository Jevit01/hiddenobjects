import React, { Component } from "react";
import puzzle1 from "../PuzzleImages/puzzle1.jpg";
import puzzle1go from "../PuzzleImages/puzzle1gameover.jpg";
import puzzle1win from "../PuzzleImages/puzzle1win.jpg";
import "./puzzle1.css";

class Puzzle1 extends Component {
  state = {
    seconds: "00",
    minutes: "1",
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
    score: 0
  };

  componentDidMount() {
    this.timeStartAndStop();
  }

  handleHammerClick = () => {
    this.setState({
      hammer: true,
      score: this.state.score + 1
    });
  };

  handleHandCuffClick = () => {
    this.setState({
      handCuff: true,
      score: this.state.score + 1
    });
  };

  handleShoeClick = () => {
    this.setState({
      shoe: true,
      score: this.state.score + 1
    });
  };

  handleSpoonClick = () => {
    this.setState({
      spoon: true,
      score: this.state.score + 1
    });
  };

  handleBulletClick = () => {
    this.setState({
      bullet: true,
      score: this.state.score + 1
    });
  };

  handleScissorsClick = () => {
    this.setState({
      scissors: true,
      score: this.state.score + 1
    });
  };

  handleKittenClick = () => {
    this.setState({
      kitten: true,
      score: this.state.score + 1
    });
  };

  handleGoldKeyClick = () => {
    this.setState({
      goldKey: true,
      score: this.state.score + 1
    });
  };

  handleHorseShoeClick = () => {
    this.setState({
      horseShoe: true,
      score: this.state.score + 1
    });
  };

  handleDoveClick = () => {
    this.setState({
      dove: true,
      score: this.state.score + 1
    });
  };

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  };

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  };

  restart = () => {
    window.location.reload();
  };

  timeStartAndStop = () => {
    if (this.props.timer === true) {
      this.startCountDown();
    }
    if (this.state.score === 10) {
      this.setState({
        minutes: "-1"
      });
    }
  };

  render() {
    const Timer = () => {
      if (
        this.state.minutes.toString() === "0" &&
        this.state.seconds.toString() === "00"
      ) {
        return (
          <>
            <div>
              <h1 style={{ fontSize: 50 }}>
                {this.state.minutes}:{this.state.seconds}
              </h1>
            </div>
            <img src={puzzle1go} alt="" />
            <button onClick={this.restart}>Restart</button>
          </>
        );
      } else if (this.state.score === 10) {
        return (
          <div>
            <h1 style={{ fontSize: 50 }}>STOP!</h1>
            <img src={puzzle1win} alt="" />
          </div>
        );
      } else {
        return (
          <>
            <div>
              <h1 style={{ fontSize: 50 }}>
                {this.state.minutes}:{this.state.seconds}
              </h1>
            </div>
            <div className="puz1">
              <img className="puzImg1" src={puzzle1} alt="" />
              {this.state.hammer ? (
                ""
              ) : (
                <button className="hammer" onClick={this.handleHammerClick}>
                  hammer
                </button>
              )}
              {this.state.handCuff ? (
                ""
              ) : (
                <button className="cuff" onClick={this.handleHandCuffClick}>
                  HandCuff
                </button>
              )}
              {this.state.shoe ? (
                ""
              ) : (
                <button className="shoe" onClick={this.handleShoeClick}>
                  Shoe
                </button>
              )}
              {this.state.spoon ? (
                ""
              ) : (
                <button className="spoon" onClick={this.handleSpoonClick}>
                  Spoon
                </button>
              )}
              {this.state.bullet ? (
                ""
              ) : (
                <button className="bullet" onClick={this.handleBulletClick}>
                  Bullet
                </button>
              )}
              {this.state.scissors ? (
                ""
              ) : (
                <button className="scissors" onClick={this.handleScissorsClick}>
                  Scissors
                </button>
              )}
              {this.state.kitten ? (
                ""
              ) : (
                <button className="kitten" onClick={this.handleKittenClick}>
                  Kitten
                </button>
              )}
              {this.state.goldKey ? (
                ""
              ) : (
                <button className="key" onClick={this.handleGoldKeyClick}>
                  GoldKey
                </button>
              )}
              {this.state.horseShoe ? (
                ""
              ) : (
                <button className="hshoe" onClick={this.handleHorseShoeClick}>
                  HorseShoe
                </button>
              )}
              {this.state.dove ? (
                ""
              ) : (
                <button className="dove" onClick={this.handleDoveClick}>
                  Dove
                </button>
              )}
            </div>
          </>
        );
      }
    };

    return (
      <>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
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
