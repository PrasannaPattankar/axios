import React from "react";

import axios from "axios";

// How to use Axios(get method) in react
class App extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/jdtvk`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <table className="tat" border="1px">
        <tr>
          <th>Name</th>
          <th>User name</th>
          <th>Email</th>
        </tr>
        {this.state.persons.map(person => {
          const { username, name, email, id } = person;
          return (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
export default App;
