import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Routes,Link} from 'react-router-dom';



function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NEW YEAR OFFER</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-200 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Bestseller">Bestseller</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Menwatch">Menwatch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Womenwatch">Womenwatch</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Index1">Index1</Link>
        </li>          
      </ul>

      <div class="profile-section">
    <div class="profile-icon">
    </div>
</div>

      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  <p id='font'><FontAwesomeIcon icon={faUser} /></p>
</nav>

    </div>
  )
}

export default Navbar
