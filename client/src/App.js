import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import VideoUpload from "../src/components/views/VideoUpload"

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          Hello
          <Route path="/VideoUpload" component={VideoUpload}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
