import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/Contact/ContactUs";
import Jobs from "./Components/Jobs/Jobs";
import {Nav,NavLink} from "./Components/NavbarElem";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="pageHeader">Drivezy Car Rental</h1>
            <>
            <Nav>
                <NavLink to="/" activeStyle exact={true}>Home</NavLink>
                <NavLink to="/aboutUs" activeStyle>About Us</NavLink>
                <NavLink to="/Jobs" activeStyle>Jobs</NavLink>
                <NavLink to="/contactUs" activeStyle>Contact</NavLink>
              </Nav>
              </>
          
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/contactUs" component={ContactUs} />
              <Route path="/jobs" component={Jobs} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
