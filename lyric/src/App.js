import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";
import { Provider } from "./context.js";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
