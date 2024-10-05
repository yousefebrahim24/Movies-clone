import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import SearchBox from "./Search";
import { Usercontext } from "../Context/userContext";
import LogOut from "./Auth/LogOut";

function Navbar() {
  const { userData } = useContext(Usercontext);

  return (
    <>
      {userData === null ? (
         <div className="container-fluid d-flex justify-content-between py-1">
              <Logo />
              <div className="py-1">
                <Link to='/' className="text-light fs-5 px-2 ">Register</Link>
                <Link to='/login' className="text-light fs-5 px-2 ">Login</Link>
              </div>
         </div>

      ) : (
        <nav className="navbar navbar-expand-lg text-light">
          <div className="container-fluid">
            <Logo />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fa fa-bars text-light" aria-hidden="true"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "fit-content" }}
              >
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/Home'>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/Movies'>
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/ComingSoon'>
                    Upcoming
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/Shows'>
                    TV Shows
                  </Link>
                </li>
              </ul>
              <SearchBox />
              <LogOut />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
