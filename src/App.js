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
      <div>
        {this.state.persons.map(person => {
          const { username, name, email, id } = person;
          return (
            <div key={person.id}>
              <p>Name:{person.name}</p>

              <p>username:{person.username}</p>
              <p>Email:{person.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
