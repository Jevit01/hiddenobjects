import React, { Component } from "react";
import puzzle3 from "../PuzzleImages/puzzle3.jpg";
import puzzle3go from "../PuzzleImages/puzzle3gameover.jpg";
import puzzle3win from "../PuzzleImages/puzzle3win.jpg";
import "./css/puzzle3.css";

class Puzzle3 extends Component {
  state = {
    seconds: "00",
    minutes: "3",
    fishHook: false,
    smokeingPipe: false,
    flute: false,
    handPrint: false,
    spider: false,
    wishBone: false,
    cane: false,
    glue: false,
    cat: false,
    horn: false,
    score: 0,
    level3: false
  };

  componentDidMount() {
    this.startCountDown();
  }

  handleLevel3 = () => {
    this.setState({
      level2: true
    });
  };

  handleFishHookClick = () => {
    this.setState({
      fishHook: true,
      score: this.state.score + 1
    });
  };

  handleSmokingPipeClick = () => {
    this.setState({
      smokeingPipe: true,
      score: this.state.score + 1
    });
  };

  handleFluteClick = () => {
    this.setState({
      flute: true,
      score: this.state.score + 1
    });
  };

  handleHandPrintClick = () => {
    this.setState({
      handPrint: true,
      score: this.state.score + 1
    });
  };

  handleSpiderClick = () => {
    this.setState({
      spider: true,
      score: this.state.score + 1
    });
  };

  handleWishBoneClick = () => {
    this.setState({
      wishBone: true,
      score: this.state.score + 1
    });
  };

  handleCaneClick = () => {
    this.setState({
      cane: true,
      score: this.state.score + 1
    });
  };

  handleGlueClick = () => {
    this.setState({
      glue: true,
      score: this.state.score + 1
    });
  };

  handleCatClick = () => {
    this.setState({
      cat: true,
      score: this.state.score + 1
    });
  };

  handleHornClick = () => {
    this.setState({
      horn: true,
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
            <img src={puzzle1go} alt="" />
            <button onClick={this.restart}>Restart</button>
          </>
        );
      } else if (this.state.score === 10) {
        return (
          <div>
            <h1 style={{ fontSize: 50 }}>STOP!</h1>
            <img src={puzzle1win} alt="" />
            <button onClick={this.handleLevel2}>Next</button>
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
              {this.state.fishHook ? (
                ""
              ) : (
                <button className="fishHook" onClick={this.handleFishHookClick}>
                  fishHook
                </button>
              )}
              {this.state.smokeingPipe ? (
                ""
              ) : (
                <button
                  className="smokingPipe"
                  onClick={this.handleSmokingPipeClick}
                >
                  SmokingPipe
                </button>
              )}
              {this.state.flute ? (
                ""
              ) : (
                <button className="flute" onClick={this.handleFluteClick}>
                  Flute
                </button>
              )}
              {this.state.handPrint ? (
                ""
              ) : (
                <button
                  className="handPrint"
                  onClick={this.handleHandPrintClick}
                >
                  HandPrint
                </button>
              )}
              {this.state.spider ? (
                ""
              ) : (
                <button className="spider" onClick={this.handleSpiderClick}>
                  Spider
                </button>
              )}
              {this.state.wishBone ? (
                ""
              ) : (
                <button className="wishBone" onClick={this.handleWishBoneClick}>
                  WishBone
                </button>
              )}
              {this.state.cane ? (
                ""
              ) : (
                <button className="cane" onClick={this.handleCaneClick}>
                  Cane
                </button>
              )}
              {this.state.glue ? (
                ""
              ) : (
                <button className="glue" onClick={this.handleGlueClick}>
                  Glue
                </button>
              )}
              {this.state.cat ? (
                ""
              ) : (
                <button className="cat" onClick={this.handleCatClick}>
                  Cat
                </button>
              )}
              {this.state.horn ? (
                ""
              ) : (
                <button className="horn" onClick={this.handleHornClick}>
                  Horn
                </button>
              )}
            </div>
            <div className="words">
              {this.state.fishHook ? "" : <p>Fish Hook</p>}
              {this.state.smokeingPipe ? "" : <p>Smoking Pipe</p>}
              {this.state.flute ? "" : <p>Flute</p>}
              {this.state.handPrint ? "" : <p>HandPrint</p>}
              {this.state.spider ? "" : <p>Spider</p>}
              {this.state.wishBone ? "" : <p>WishBone</p>}
              {this.state.cane ? "" : <p>Cane</p>}
              {this.state.glue ? "" : <p>Glue</p>}
              {this.state.cat ? "" : <p>Cat</p>}
              {this.state.horn ? "" : <p>Horn</p>}
            </div>
          </>
        );
      }
    };

    return (
      <>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
      </>
    );
  }
}

export default Puzzle3;