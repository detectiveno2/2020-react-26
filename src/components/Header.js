import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = props => {
  const { blogs } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Header">
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img
                width="150px"
                src="data:image/png;base64,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"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to="/">Home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/blog?page=1">Blog</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/about">About</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route exact path="/">
            <Home blogs={blogs.slice(0, 4)} />
          </Route>
          <Route path="/blog">
            <Blog blogs={blogs} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
