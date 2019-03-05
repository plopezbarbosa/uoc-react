import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import "./styles.css";

class App extends React.Component {
  render() {
    return <Hello name="Pierre" other="John" />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
