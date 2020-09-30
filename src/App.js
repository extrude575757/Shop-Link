import React from "react";
import "./styles.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Nick's Trinkets</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>
      {/* Rendered by Route components 👇 */}
      <Route exact path="/" component={Home} />
      <Route path="/shop" render={() => <Shop />} />
    </div>
  );
}
