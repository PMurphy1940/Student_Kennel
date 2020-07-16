import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push("/")
    }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink className="nav-link" activeStyle={{color: "mintcream" }} exact to="/"> Home </NavLink>
          </li>
          {props.hasUser
            ? <li>
                <NavLink className="nav-link" activeStyle={{color: "mintcream" }} to="/animals"> Animals </NavLink>
              </li>
            : null}
          <li>
            <NavLink className="nav-link" activeStyle={{color: "mintcream" }} to="/locations"> Locations </NavLink>
          </li>
          {props.hasUser
            ? <li>
                <NavLink className="nav-link" activeStyle={{color: "mintcream" }} to="/employees"> Employees </NavLink>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <NavLink className="nav-link" activeStyle={{color: "mintcream" }} to="/owners"> Owners </NavLink>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
            </li>
            : <li>
                <NavLink className="nav-link" to="/login"> Login </NavLink>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
