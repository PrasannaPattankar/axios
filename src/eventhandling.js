import React from "react";

//Example for event handling using class component
class EventHandling extends React.Component {
  constructor(props) {
    super(props);
  }

  changeMessage() {
    console.log("Class component");
  }

  render() {
    return (
      <div>
        <button onClick={this.changeMessage}> Click here</button>
      </div>
    );
  }
}
export default EventHandling;
