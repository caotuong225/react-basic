import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          TodoList
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>

        {/* <Link to="/">Home</Link>
        <Link to="/todo">TodoList</Link>
        <Link to="/about">About</Link> */}

        {/* <a className="active" href="/">
          Home
        </a>
        <a href="/todo">TodoList</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}
export default Nav;
