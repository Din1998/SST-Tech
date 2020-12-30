import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
             <img className="img-logo" src="http://www.ssttechbd.com/assets/images/logo.png" alt="abc"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ?  'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Work" className="nav-links" onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Service" className="nav-links" onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                Contact 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
