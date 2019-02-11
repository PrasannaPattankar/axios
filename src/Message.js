import React from "react";

const Greeting = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello{props.name} Good Morning
        <p>{props.children}</p>
      </h1>
    </div>
  );
};

export default Greeting;
