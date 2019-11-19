import React from "react";
import "./App.css";
import { exportCSVFile } from "./exportToCSV";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageNumber: 0,
      disableNextButton: true,
      disableRatingButtons: false,
      results: [],
      rating: null
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
          rateClickTime: this.state.rateClickTime.getTime()
        });
        return {
          imageNumber: state.imageNumber + 1,
          disableNextButton: true,
          disableRatingButtons: false,
          results: state.results
        };
      });
    } else {
      exportCSVFile(
        {
          rating: "Rating", // remove commas to avoid errors
          picture: "Pic",
          nextClickTime: "nextClickTime",
          rateClickTime: "rateClickTime"
        },
        this.state.results,
        "results"
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Choose Picture </h1>
        </header>
        <div>
          <img src={this.picksArray[this.state.imageNumber]} />
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
              onClick={() => {
                this.rate(1);
              }}
            >
              <span>1</span>
            </li>
            <li
              onClick={() => {
                this.rate(2);
              }}
            >
              <span>2</span>
            </li>
            <li
              onClick={() => {
                this.rate(3);
              }}
            >
              <span>3</span>
            </li>
            <li
              onClick={() => {
                this.rate(4);
              }}
            >
              <span>4</span>
            </li>
            <li
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

export default App;
