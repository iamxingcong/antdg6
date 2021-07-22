
import './App.css';
import React from "react";

import A from "./views/A.js"
import B from "./views/B.js"
import C from "./views/C.js"
import D from "./views/D.js"
import E from "./views/E.js"
import Graph from "./views/Graph.js"
import Z from "./views/Z.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/A">A</Link>
            </li>
           
           
            <li>
              <Link to="/B"> b </Link>
            </li>
            <li>
              <Link to="/C"> c </Link>
            </li>
            <li>
              <Link to="/D"> d </Link>
            </li>
            <li>
              <Link to="/E"> e </Link>
            </li>
            <li>
              <Link to="/Graph">  Graph </Link>
            </li>
            <li>
              <Link to="/Z">  z </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/A">
            <A />
          </Route>
          <Route path="/B">
            <B />
          </Route>
          <Route path="/C">
            <C />
          </Route>
          <Route path="/D">
            <D />
          </Route>
          <Route path="/E">
            <E />
          </Route>
          <Route path="/Graph">
            <Graph />
          </Route>

          <Route path="/Z">
            <Z />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
