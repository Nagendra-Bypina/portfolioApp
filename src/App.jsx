// src/App.js
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/routes/Routes";

function App() {
  return (
    <Router>
      <div>
        <h1>My Web page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
