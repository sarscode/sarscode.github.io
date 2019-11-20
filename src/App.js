import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Writing from "./pages/Writing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/writing" component={Writing} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
