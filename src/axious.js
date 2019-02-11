import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/1dbpw0`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
