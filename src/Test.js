import React from "react";
import "./App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const baseUrl = "http://localhost:3000"; //Cahngev it

export class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      imageNumber: 0,
      disableNextButton: true,
      disableRatingButtons: false,
      results: [],
      rating: null,
      finish: false
    };
  }

  picksArray = [
    "https://image.freepik.com/free-vector/abstract-gradient-psychedelic-effect-background_52683-13503.jpg",
    "https://image.freepik.com/free-photo/abstract-saturated-psychedelic-vivid-background_23-2148235697.jpg",
    "https://image.freepik.com/free-photo/gradient-iridescent-translucent-psychedelic-background_23-2148235693.jpg",
    "https://image.freepik.com/free-vector/speed-effect-background_23-2148062578.jpg",
    "https://image.freepik.com/free-vector/abstract-gradient-psychedelic-effect-background_52683-13505.jpg"
  ];

  rate = rating => {
    if (!this.state.disableRatingButtons) {
      this.setState((state, props) => ({
        disableNextButton: false,
        disableRatingButtons: true,
        rating: rating,
        rateClickTime: new Date()
      }));
    }
  };

  next = () => {
    if (this.picksArray.length > this.state.imageNumber) {
      this.setState((state, props) => {
        state.results.push({
          rating: this.state.rating,
          picture: this.picksArray[state.imageNumber],
          nextClickTime: new Date().getTime(),
          rateClickTime: this.state.rateClickTime.getTime(),
          imageLoadedTime: this.state.imageLoadedTime.getTime()
        });
        return {
          imageNumber: state.imageNumber + 1,
          disableNextButton: true,
          disableRatingButtons: false,
          results: state.results
        };
      });
    } else {
      this.sendRequest(this.state.results);
    }
  };

  sendRequest(results) {
    const history = useHistory();
    axios.post(baseUrl + "/add", { results }).then(response => {
      console.log("Response", response);
      history.push("/end");
    });
  }

  checked(rating) {
    return this.state.rating === rating ? "checked" : null;
  }

  handleImageLoaded() {
    this.setState((state, props) => ({
      imageLoadedTime: new Date()
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Choose Picture </h1>
        </header>
        <div>
          <img
            onLoad={this.handleImageLoaded.bind(this)}
            src={this.picksArray[this.state.imageNumber]}
            alt="react on "
          />
        </div>
        <div className="rating-container">
          <ul
            className={
              this.state.disableRatingButtons
                ? "disabled-rating rating-list"
                : "rating-list"
            }
          >
            <li
              className={this.checked(1)}
              onClick={() => {
                this.rate(1);
              }}
            >
              <span>1</span>
            </li>
            <li
              className={this.checked(2)}
              onClick={() => {
                this.rate(2);
              }}
            >
              <span>2</span>
            </li>
            <li
              className={this.checked(3)}
              onClick={() => {
                this.rate(3);
              }}
            >
              <span>3</span>
            </li>
            <li
              className={this.checked(4)}
              onClick={() => {
                this.rate(4);
              }}
            >
              <span>4</span>
            </li>
            <li
              className={this.checked(5)}
              onClick={() => {
                this.rate(5);
              }}
            >
              <span>5</span>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button onClick={this.next}> Next </button>
        </div>
      </div>
    );
  }
}
