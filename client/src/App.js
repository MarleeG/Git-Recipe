import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./home/pages/home";

import "./App.css";
import Recipe from "./recipe/pages/recipe";

function App() {
  return (
      <Router>
        <main>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/recipe' exact>
              <Recipe/>
            </Route>

            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
