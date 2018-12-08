import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log(product);
    //used arrow fuction in place of the using the constructor
    //this methold will print to the console "increment clicked"  when the user press the button
    this.setState({ count: this.state.count + 1 }); // this will tell react what has changed and react will syinc with dom- everytime the button is pushed the count is counted and displayed
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
    // gave the badges a name called classess
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //method formatCount; if count = 0 than it should print the word zero
  }
}

export default Counter;
