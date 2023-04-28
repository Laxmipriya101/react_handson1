import React from "react";

export class Details extends React.Component {
  render() {
    console.log("Props of Details", this.props);
    return (
      <div>
        <h2>Details</h2>
        <p>age Props:{this.props.ageProps}</p>
      </div>
    );
  }
}
