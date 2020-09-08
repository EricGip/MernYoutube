import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import VideoUpload from "./components/views/VideoUpload/VideoUpload";
import HomePage from "./components/views/HomePage/HomePage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>Hello - Todo: make header / navbar</header>
          <br></br>
          <Link to="/"> Home </Link>
          <br></br>
          <Link to="/HomePage"> Videos </Link>
          <br></br>
          <Link to="/VideoUpload"> Video upload page </Link>
          <Route path="/VideoUpload" component={VideoUpload}></Route>
          <Route path="/HomePage" component={HomePage}></Route>
        </BrowserRouter>
        <br></br>
        Hello - Todo: make footer
      </div>
    );
  }
}

export default App;
