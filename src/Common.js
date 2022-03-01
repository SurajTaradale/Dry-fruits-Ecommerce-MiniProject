import Home from "./Components/Home";
import Navbar1 from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Products from "./Components/Product";
import Button from './Components/Button'
function Common() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Services/:keyword" component={Services}></Route>
          <Route exact path="/Products/" component={Products}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/About" component={About}></Route>
        </Switch>
        <Button />
      </Router>
    </>
  );
}

export default Common;
