import React, { Component } from "react";
import Sound from "react-sound";
import puzzle3 from "../PuzzleImages/puzzle3.jpg";
import puzzle3go from "../PuzzleImages/puzzle3gameover.jpg";
import puzzle3win from "../PuzzleImages/puzzle3win.jpg";
import puz3sound from "../Sounds/Puz3sound.mp3";
import gameover3sound from "../Sounds/gameover3sound.mp3";
import "./css/puzzle3.css";

class Puzzle3 extends Component {
  state = {
    seconds: "00",
    minutes: "1",
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
    score: 0
  };

  componentDidMount() {
    this.startCountDown();
  }

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
          <div className="puzzle3page">
            <div className="time">
              <h1 style={{ fontSize: 50 }}>
                {this.state.minutes}:{this.state.seconds}
              </h1>
            </div>
            <div className="puz3">
              <img className="puzzle3go" src={puzzle3go} alt="" />
            </div>
            <br />
            <div>
              <button className="restart" onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
      } else if (this.state.score === 10) {
        return (
          <div className="puzzle3page">
            <div className="time">
              <h1 style={{ fontSize: 50 }}>STOP!</h1>
            </div>
            <div className="puz3">
              <img className="puzzle3win" src={puzzle3win} alt="" />
            </div>
            <div className="congrats">
              <p>CONGRATULATIONS YOU BEAT HIDDEN OBJECTS!</p>
              <p>More levels coming soon....</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="puzzle3page">
            <div className="time">
              <h1 style={{ fontSize: 50 }}>
                {this.state.minutes}:{this.state.seconds}
              </h1>
            </div>
            <div className="puz3">
              <img className="puzImg3" src={puzzle3} alt="" />
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
            <h2 className="time">Word Bank</h2>
            <div className="wordbank">
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
            </div>
          </div>
        );
      }
    };

    return (
      <div className="puzzle3page">
        {this.state.minutes.toString() === "0" &&
        this.state.seconds.toString() === "00" &&
        this.state.score < 10 ? (
          <Sound url={gameover3sound} playStatus={Sound.status.PLAYING} />
        ) : (
          <Sound url={puz3sound} playStatus={Sound.status.PLAYING} />
        )}
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
      </div>
    );
  }
}

export default Puzzle3;
