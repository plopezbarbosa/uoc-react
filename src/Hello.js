import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>How are you {this.props.other}</h2>
      </div>
    );
  }
}

export default Hello;
