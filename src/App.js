import "./App.css";
import React, { Component } from "react";
import MyFunctionalComponent from "./Component/MyFunctionalComponent";
import MyClassComponent from "./Component/MyClassComponent";
// import Introduction from "./Component/Introduction";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFunctionalComponent: false,
      showClassComponent: false,
    };
  }

  toggleFunComp = () => {
    this.setState((prevState) => ({
      showFunctionalComponent: !prevState.showFunctionalComponent,
    }));
  };

  toggleClassComp = () => {
    this.setState((prevState) => ({
      showClassComponent: !prevState.showClassComponent,
    }));
  };

  render() {
    console.log("current state:", this.state);
    return (
      <div>
        <h2 className="head">Styling using Functional and Class Component</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div>
            <button className="btn" onClick={this.toggleFunComp}>
              To see styling in functional component
            </button>
          </div>
          <div>
            <button className="btn" onClick={this.toggleClassComp}>
              To see styling in class component
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="btn-render">
          {this.state.showFunctionalComponent && <MyFunctionalComponent />}
          {this.state.showClassComponent && <MyClassComponent />}
        </div>
      </div>
    );
  }
}

export default App;
