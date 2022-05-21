import React, { PureComponent } from "react";

class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    console.log(this.ref.getBoundinfClientRect(), "getBoundingClientRect()");
    console.log(window.innerHeight, "window.innerHeight");
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log("enter");
    } else {
      console.log("exit");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.checkPosition);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkPosition);
  }
  render() {
    return <div ref={this.setRef} />;
  }
}

export default ScrollSpy;
