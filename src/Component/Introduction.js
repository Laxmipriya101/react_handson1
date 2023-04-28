import React, { Component } from "react";
import { Details } from "./Details";
class Introduction extends Component {
  constructor() {
    super();
    this.state = {
      name: "Laxmi",
      age: 20,
    };
    this.occupation = "SD";
  }

  handleChangeName = () => {
    this.setState({ name: "12345", age: 40 });
    this.occupation = "SD";
  };

  render() {
    console.log("state of Introduction", this.state);
    return (
      <div>
        <h1>My Introduction</h1>
        <p>My Name:{this.state.name}</p>
        <p>My Age:{this.state.age}</p>
        <p>Occupation:{this.state.occupation}</p>
        <button onClick={this.handleChangeName}>Change name</button>
        <Details nameProp={"569654"} ageProps={this.state.age} />
      </div>
    );
  }
}

export default Introduction;
