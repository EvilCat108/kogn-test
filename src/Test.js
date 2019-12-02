import React from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import blue1 from "./pics/blue1.png";
import blue2 from "./pics/blue2.png";
import blue3 from "./pics/blue3.png";
import blue4 from "./pics/blue4.png";
import blue5 from "./pics/blue5.png";
import blue6 from "./pics/blue6.png";
import blue7 from "./pics/blue7.png";
import red1 from "./pics/red1.png";
import red2 from "./pics/red2.png";
import red3 from "./pics/red3.png";
import red4 from "./pics/red4.png";
import red5 from "./pics/red5.png";
import red6 from "./pics/red6.png";
import red7 from "./pics/red7.png";
import green1 from "./pics/green1.png";
import green2 from "./pics/green2.png";
import green3 from "./pics/green3.png";
import green4 from "./pics/green4.png";
import green5 from "./pics/green5.png";
import green6 from "./pics/green6.png";
import green7 from "./pics/green7.png";

// const baseUrl = "http://34.249.21.232:3002"; //Cahngev it
const baseUrl = "http://localhost:3002"; //Cahngev it

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
    blue1,
    blue2,
    red1
    // green1,
    // red2,
    // green2,
    // green3,
    // red3,
    // blue3,
    // red4,
    // red5,
    // green4,
    // red5,
    // green5,
    // blue4,
    // blue5,
    // blue6,
    // red6,
    // green6,
    // red7,
    // green7,
    // blue7
  ];

  rate = rating => {
    if (!this.state.disableRatingButtons) {
      this.setState((state, props) => ({
        disableNextButton: false,
        disableRatingButtons: true,
        rating: rating,
        rateClickTime: new Date().getTime()
      }));
    }
  };

  next = () => {
    if (this.picksArray.length - 1 >= this.state.imageNumber) {
      this.setState((state, props) => {
        state.results.push({
          rating: this.state.rating,
          picture: this.picksArray[state.imageNumber],
          nextClickTime: new Date().getTime(),
          rateClickTime: this.state.rateClickTime,
          imageLoadedTime: this.state.imageLoadedTime
        });

        if (this.picksArray.length - 1 === this.state.imageNumber) {
          return {
            results: state.results,
            disableNextButton: true,
            disableRatingButtons: true,
            finish: true
          };
        } else {
          return {
            imageNumber: 1 + this.state.imageNumber,
            disableNextButton: true,
            disableRatingButtons: false,
            results: state.results
          };
        }
      });
      if (this.picksArray.length - 1 === this.state.imageNumber) {
        this.sendRequest(this.state.results);
      }
    }
  };

  sendRequest(results) {
    axios.post(baseUrl + "/add", { results }).then(response => {
      console.log("Response", response);
    });
  }

  checked(rating) {
    return this.state.rating === rating ? "checked" : null;
  }

  handleImageLoaded() {
    this.setState((state, props) => ({
      imageLoadedTime: new Date().getTime()
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
        {this.state.finish ? (
          <div className="button-container">
            <Link to="/end">
              <button> Final </button>
            </Link>
          </div>
        ) : (
          <div className="button-container">
            <button onClick={this.next}> Next </button>
          </div>
        )}
      </div>
    );
  }
}
