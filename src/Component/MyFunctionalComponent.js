import React, { Component } from "react";
export default class MyFunctionalComponent extends Component {
  render() {
    return (
      <div className="text1">
        <h1>This is created using functional Component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline Css</p>
      </div>
    );
  }
}
