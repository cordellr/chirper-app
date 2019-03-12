import React, { Component } from "react";
import "./App.css";
import MessageContainer from "./components/messageContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <MessageContainer />
      </main>
    );
  }
}

export default App;
