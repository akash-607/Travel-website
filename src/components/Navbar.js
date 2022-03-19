// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from './button'
// import './navbar.css'

// function Navbar() {
//   const [click, setclick] = useState(false);
//   const [btstate, setbtstate] = useState(true);
//   const handleclick = () => setclick(!click)
//   const closemobilemenu = () => setclick(false)
//   const showbtn = () => {
//     if (window.innerWidth <= 960) {
//       setbtstate(false);
//     } else {
//       setbtstate(true);
//     }
//   }
//   window.addEventListener('resize', showbtn);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo">TRVL</Link>
//           <div className="menu-icon" onClick={handleclick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closemobilemenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/services' className='nav-links' onClick={closemobilemenu}>
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/products' className='nav-links' onClick={closemobilemenu}>
//                 Products
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/signup' className='nav-links-mobile' onClick={closemobilemenu}>
//                 Sign up
//               </Link>
//             </li>
//             {btstate && <Button buttonstyle='btn-outline'>Sign Up</Button>}
//           </ul>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVEL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonstyle='btn-outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;