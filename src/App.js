import React, { Component } from "react";
import Button from "./04/Button";
import "./App.css";
import "./sass/materialize.scss";
class App extends Component {
  render() {
    return (
      <div className="body">
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <Button>button</Button>
      </div>
    );
  }
}

export default App;
