import React, { Component } from "react";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Quantity
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete Row
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
    // gave the badges a name called classess
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    //method formatvalue; if value = 0 than it should print the word zero
  }
}

export default Counter;
