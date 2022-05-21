import React, { Component } from "react";
import PropTypes from "prop-types";
export default class NewCounter extends Component {
  static getDerivedStateFromProps(props, state) {
    // 생성주기에서 실행,
    // 갱신주기에서 실행
    const { count } = props;
    return {
      // 처음 컴포넌트 생성될 때 전달된 prop
      // OR 이후 변경되어 내려오는 prop
      // 꽂힌 props는 따로 저장함
      count,
      newCount:
        count === state.count
          ? // 프롭스 변경 X 라면 state값으로 동기화
            state.newCount
          : // 프롭스가 변경 O 라면 프롭스 값으로 동기화
            count,
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState((prev) => ({ ...prev, newCount: prev.newCount + 1 }));
  }
  render() {
    return (
      <div>
        current new count: {this.state.newCount}{" "}
        <button onClick={this.increaseCount}>increase new count</button>
      </div>
    );
  }
}

NewCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
