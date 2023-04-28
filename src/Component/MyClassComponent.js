import React, { Component } from "react";

export default class MyClassComponent extends Component {
  render() {
    return (
      <div className="text">
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline Css</p>
      </div>
    );
  }
}
