import React, { Component } from "react";
import PropTypes from "prop-types";
class InputWithStyles extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div className="input-field">
        <input
          className={`validate ${errorMessage && "invalid"}`}
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && <span className="helper-text">{errorMessage}</span>}
      </div>
    );
  }
}

InputWithStyles.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};

InputWithStyles.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",
};

export default InputWithStyles;
