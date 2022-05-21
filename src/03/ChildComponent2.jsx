import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ChildComponent2 extends Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        <div>obj: {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
  requiredStringValue: PropTypes.string.isRequired,
};
