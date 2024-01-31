import React from 'react'
import { Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-200 mb-2 mb-lg-0">
     <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="CART"><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="|">|</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Login"><i class="fa-regular fa-user"></i> Login Or Register</Link>
        </li>
        
         </ul>
         </div>
         </div>
    
       </nav>
       </div>

    
    
  )
}

export default Nav
