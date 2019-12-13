import React, { Component } from "react";
import puzzle2 from "../PuzzleImages/puzzle2.jpg";
import puzzle2go from "../PuzzleImages/puzzle2gameover.jpg";
import puzzle2win from "../PuzzleImages/puzzle2win.jpg";
import "./css/puzzle2.css";
import Puzzle3 from "./puzzle3.js";

class Puzzle2 extends Component {
  state = {
    seconds: "00",
    minutes: "2",
    cheetah: false,
    scorpion: false,
    dragonfly: false,
    footPrint: false,
    moth: false,
    tent: false,
    beetle: false,
    snake: false,
    vase: false,
    revolver: false,
    score: 0,
    level3: false
  };

  componentDidMount() {
    this.startCountDown();
  }

  handleLevel3 = () => {
    this.setState({
      level3: true
    });
  };

  handleCheetahClick = () => {
    this.setState({
      cheetah: true,
      score: this.state.score + 1
    });
  };

  handleScorpionClick = () => {
    this.setState({
      scorpion: true,
      score: this.state.score + 1
    });
  };

  handleDragonflyClick = () => {
    this.setState({
      dragonfly: true,
      score: this.state.score + 1
    });
  };

  handleFootPrintClick = () => {
    this.setState({
      footPrint: true,
      score: this.state.score + 1
    });
  };

  handleMothClick = () => {
    this.setState({
      moth: true,
      score: this.state.score + 1
    });
  };

  handleTentClick = () => {
    this.setState({
      tent: true,
      score: this.state.score + 1
    });
  };

  handleBeetleClick = () => {
    this.setState({
      beetle: true,
      score: this.state.score + 1
    });
  };

  handleSnakeClick = () => {
    this.setState({
      snake: true,
      score: this.state.score + 1
    });
  };

  handleVaseClick = () => {
    this.setState({
      vase: true,
      score: this.state.score + 1
    });
  };

  handleRevolverClick = () => {
    this.setState({
      revolver: true,
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

  render() {
    const Timer = () => {
      if (
        this.state.minutes.toString() === "0" &&
        this.state.seconds.toString() === "00" &&
        this.state.score < 10
      ) {
        return (
          <>
            <div>
              <h1 style={{ fontSize: 50 }}>
                {this.state.minutes}:{this.state.seconds}
              </h1>
            </div>
            <div className="puz2">
              <img className="puzzle2go" src={puzzle2go} alt="" />
            </div>

            <div>
              <button className="restart" onClick={this.restart}>
                Restart
              </button>
            </div>
          </>
        );
      } else if (this.state.score === 10) {
        return (
          <div>
            <h1 style={{ fontSize: 50 }}>STOP!</h1>
            <div className="puz2">
              <img className="puzzle2win" src={puzzle2win} alt="" />
            </div>
            <div>
              <button className="next" onClick={this.handleLevel3}>
                Next
              </button>
            </div>
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
            <div className="puz2">
              <img className="puzImg2" src={puzzle2} alt="" />
              {this.state.cheetah ? (
                ""
              ) : (
                <button className="cheetah" onClick={this.handleCheetahClick}>
                  cheetah
                </button>
              )}
              {this.state.scorpion ? (
                ""
              ) : (
                <button className="scorpion" onClick={this.handleScorpionClick}>
                  Scorpion
                </button>
              )}
              {this.state.dragonfly ? (
                ""
              ) : (
                <button
                  className="dragonfly"
                  onClick={this.handleDragonflyClick}
                >
                  Dragonfly
                </button>
              )}
              {this.state.footPrint ? (
                ""
              ) : (
                <button
                  className="footPrint"
                  onClick={this.handleFootPrintClick}
                >
                  Foot Print
                </button>
              )}
              {this.state.moth ? (
                ""
              ) : (
                <button className="moth" onClick={this.handleMothClick}>
                  Moth
                </button>
              )}
              {this.state.tent ? (
                ""
              ) : (
                <button className="tent" onClick={this.handleTentClick}>
                  Tent
                </button>
              )}
              {this.state.beetle ? (
                ""
              ) : (
                <button className="beetle" onClick={this.handleBeetleClick}>
                  Beetle
                </button>
              )}
              {this.state.snake ? (
                ""
              ) : (
                <button className="snake" onClick={this.handleSnakeClick}>
                  Snake
                </button>
              )}
              {this.state.vase ? (
                ""
              ) : (
                <button className="vase" onClick={this.handleVaseClick}>
                  Vase
                </button>
              )}
              {this.state.revolver ? (
                ""
              ) : (
                <button className="revolver" onClick={this.handleRevolverClick}>
                  Revolver
                </button>
              )}
            </div>
            <h2>Word Bank</h2>
            <div className="words">
              {this.state.cheetah ? "" : <p>Cheetah</p>}
              {this.state.scorpion ? "" : <p>Scorpion</p>}
              {this.state.dragonfly ? "" : <p>Dragonfly</p>}
              {this.state.footPrint ? "" : <p>Foot Print</p>}
              {this.state.moth ? "" : <p>Moth</p>}
              {this.state.tent ? "" : <p>Tent</p>}
              {this.state.beetle ? "" : <p>Beetle</p>}
              {this.state.snake ? "" : <p>Snake</p>}
              {this.state.vase ? "" : <p>Vase</p>}
              {this.state.revolver ? "" : <p>Revolver</p>}
            </div>
          </>
        );
      }
    };

    return (
      <>
        {this.state.level3 ? (
          <Puzzle3 />
        ) : (
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        )}
      </>
    );
  }
}

export default Puzzle2;
