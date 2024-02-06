import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
export default function Navbar() {
  return (
   <>
   <div className='menubg py-4'>


   <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand text-uppercase" to="Home">react project
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link "  to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="Portfolio">Portfolio</Link>
        </li>   <li className="nav-item">
          <Link className="nav-link "  to="Contact">Contact</Link>
        </li>   
      </ul>
      
    </div>
  </div>
</nav>
    </div>
   </div>
   </div>
</>
  )
}
