import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./navbar.css";
import NavItem from "./NavItem";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const handleLogout = () => {
    signOut();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="logo">
          <Link to={"/"} className="link">
            Logo
          </Link>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <NavItem href="/" text="Home" />
            </li>
            {user && (
              <li>
                <NavItem href="/posts" text="Posts" />
              </li>
            )}
            {!user ? (
              <li>
                <Link to={"/login"} className="login-link">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
