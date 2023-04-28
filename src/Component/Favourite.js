import React, { Component } from "react";

export class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      icecream: "Valilla",
    };
  }
  render() {
    console.log("render method called");
    return (
      <div>
        <h1>My Favourite things</h1>
        <p>My </p>
      </div>
    );
  }
}
