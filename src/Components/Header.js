import { Link, Outlet } from 'react-router-dom';
// import React, { useContext } from 'react'
// import AuthContext from '../Context/AuthContext'
import './Header.css'

function Header() {
    return (
      <>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link  className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link">Contact</Link>
            </li>
          </ul>

          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" />
            </div>
          </form> 
        </nav>
      </>
    )

}

export default Header;
