import React, { Component } from "react";
import MyFunctionalComponent from "./MyFunctionalComponent";
import MyClassComponent from "./MyClassComponent";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFunctionalComponent: false,
      showClassComponent: false,
    };
  }

  toggleFunComp = () => {
    this.setState((prevState) => {
      return {
        showFunctionalComponent: !prevState.showFunctionalComponent,
      };
    });
  };

  toggleClassComp = () => {
    this.setState((prevState) => ({
      showClassComponent: !prevState.showClassComponent,
    }));
  };

  render() {
    console.log("current state:", this.state);
    return (
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
        {this.state.showFunctionalComponent && <MyFunctionalComponent />}
        {this.state.showClassComponent && <MyClassComponent />}
      </div>
    );
  }
}

export default Button;
// react - library
// Features:
// 1. Virtual Dom
// 2. Single Page Application
// 3. JSX (JavaScript embed XML)

// Import/export
// 1. default export
// 2. named export

// States in class Based Component
// 1. create ----> constructor() {this.state }
// 2. acces ---> this.state.stateName
// 3. update ---> this.setState({stateName: UpdatedValue})

// Difference between states and props
//     State                                   Props
// 1. Defined the the comp itself             Those values which we get get the parent
// 2. mutable                                 immutable
// 3. read/write                              readonly
// 4. TO define their own state               these are used to make a comm. between comp
// 5. Comp. rerender on update                Comp. rerender on update

// Difference ways of styles
//     1. CSS
//     2. inline styles
//     3. json style object

// Lifecycle phases of React components
// 1. Mounting
// 2. Updating
// 3. Unmounting

// lifecycle Methods of Class based components
// 1. Mounting
//     * constructor()
//     * render()
//     * componentDidMount()
// 2. Updating
//     * shouldComponentUpdate()
//     * render()
//     * componentDidUpdate()
// 3. Unmounting
//     * componentWillUnmount()

// States in Functions
// 1. useState() hooks
// const [stateName, setterFunction] = useState(initialValueOfState);

// LifeCycle Methods
// 1. useEffect() hook
// useEffect(callbackFunction, dependencyArray)
// callbackFunction -> required argument
// dependencyArray -> optional argument
// ** on the basis of dependency array our callback function will be executed

// Scenarios 1. No dependency array
// * callbackFunction will be executed on every render

// Scenarios 2. empty dependency array
// * callbackFunction will be executed once (on the first render)

// Scenarios 3. Passing the dependency array with values
// * callbackFunction will be executed whenever our values get updated

// Difference between Class bases component and Function based components

//         Classs                                      Function
// 1. to create state-> constructor               we use useState() hook
// 2. this keyword                               No this keyword
// 3. componentDidMount()                         useEffect() hook with [] D.A
// 4. componentDidUpdate()                   useEffect() hook with specified states D.A
// 5. componentWillMount()                 useEffect() hook with return callback function
// 6. render method                        dirently return JSX
// 7. this.props                            get props from argument of function comp
// 8. extends React.Component             Simple JS funtion with jsx being returned
// 9. no hooks                            we have different hooks
