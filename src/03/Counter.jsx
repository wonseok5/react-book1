import React, { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  }
  render() {
    console.log("counterRender");
    return (
      <div>
        currentCount: {this.state.count}{" "}
        <button onClick={this.increaseCount}>increase count</button>
      </div>
    );
  }
}

export default Counter;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
