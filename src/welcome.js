import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super();
    //console.log(props);
    this.state = {
      message: "0"
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({ message: "welcome suresh" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message} Good Morning</h1>
        <button onClick={this.changeMessage}>Change Button</button>
      </div>
    );
  }
}
export default Welcome;
