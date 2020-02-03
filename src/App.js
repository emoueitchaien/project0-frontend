import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components Import
import Products_info from "./Components/Products.info";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Exports from "./Components/Exports";
import Appbar from "./Components/Appbar";
import Imports from "./Components/Imports";
import PrintExport from "./Components/PrintExport";
import Login from "./Components/Login";

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    setLogin(loggedIn);
  }, []);
  return isLogin ? (
    <Router>
      <div className="App">
        <Appbar />
        <Route path="/" exact component={Home} />
        <Route path="/exports" component={Exports} />
        <Route path="/imports" component={Imports} />
        <Route path="/search" component={Search} />
        <Route path="/products" component={Products_info} />
        <Route path="/printExport" component={PrintExport} />
      </div>
    </Router>
  ) : (
    <Login isLogin={isLogin} setLogin={setLogin} />
  );
}

export default App;
