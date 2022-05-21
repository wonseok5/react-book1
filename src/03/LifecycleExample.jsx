import React, { Component } from "react";

export default class LifecycleExample extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps(props, state)");
    console.log("props", props);
    console.log("state", state);
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor(props)");
  }
  componentDidMount() {
    console.log("componentDidMount()");
    this.setState((prev) => ({ ...prev, updated: true }));
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate(prevProps, prevState, snapshot)");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate(prevProps, prevState)");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    return {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate(nextProps, nextState)");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    return false;
  }
  render() {
    console.log("render()");
    return <div>LifecycleExample</div>;
  }
}
