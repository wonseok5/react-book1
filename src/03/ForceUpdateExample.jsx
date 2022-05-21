import React, { Component } from "react";

export default class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.loading = true;
    this.formData = "no data";
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <span>{`loading: ${this.loading}`}</span>
        <span>{`formData: ${this.formData}`}</span>
      </div>
    );
  }
}
