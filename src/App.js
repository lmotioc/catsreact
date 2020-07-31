import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Cat from "./components/Cat";
import AddCat from "./components/AddCat";
import CatList from "./components/CatList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/cats" className="navbar-brand">
            Cats
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cats"} className="nav-link">
                Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/cats"]} component={CatList} />
            <Route path="/cats/:id" component={Cat} />
            <Route path="/add" component={AddCat} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
