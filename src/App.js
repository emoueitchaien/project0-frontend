import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components Import
import Products_info from "./Components/Products.info";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Exports from "./Components/Exports";
import Appbar from "./Components/Appbar";
import Imports from "./Components/Imports";

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Route path="/" exact component={Home} />
        <Route path="/exports" component={Exports} />
        <Route path="/imports" component={Imports} />
        <Route path="/search" component={Search} />
        <Route path="/products" component={Products_info} />
      </div>
    </Router>
  );
}

export default App;
