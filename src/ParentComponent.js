import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vamsi"
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(childName) {
    alert(`${this.state.name} good morning from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.eventHandler} />
      </div>
    );
  }
}

export default ParentComponent;
