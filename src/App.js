import React, { Component } from "react";
import "./App.css";
import MessageContainer from "./components/messageContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <h1 className="text-center font-weight-bold m-4">Chirper</h1>
        <MessageContainer />
      </main>
    );
  }
}

export default App;
