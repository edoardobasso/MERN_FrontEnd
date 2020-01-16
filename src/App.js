import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries";
import Personal from "./components/Personal";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/cities" component={Cities} />
          <Route path="/Itineraries" component={Itineraries} />
          <Route path="/Personal" component={Personal} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
