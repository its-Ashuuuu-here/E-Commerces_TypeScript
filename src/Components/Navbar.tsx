// Navbar.ts
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logoutUser } from '../Redux/userSlice';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state:RootState) => state.cart.items);
    const isLoggedIn  = useSelector((state:RootState) => state.user.isLoggedIn);

    const dispatch = useDispatch();
    
    const handleLogout = () => {
      // Dispatch the logoutUser action when the logout button is clicked
      dispatch(logoutUser());
    }; 
  
  const calculateTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  };

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-black py-3 shadow-sm bg-body-tertiary ">   
    {/* fixed-top */}
    <div className="container-fluid">
      
      <a className="navbar-brand fw-bold fs-4  " href="/">Shop</a>
      <button
          className="navbar-toggler text-"
          onClick={toggleMenu}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className={`navbar-collapse   ${isOpen ? 'block' : 'hidden'}`} >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-bold fs-6 text-black">
          <li className="nav-item">
            <Link  className="nav-link  active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" >Blog</a>
          </li>
          
          <li className="nav-item">
            <a href="/products" className="nav-link" >Products</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Shop
            </a>
            <ul className="dropdown-menu">
              <li><a href="/" className="dropdown-item">Products</a></li>
              <li><a href='./todo' className="dropdown-item" >Cloth</a></li>
           
            </ul>
          </li> */}
      
          <li className="nav-item">
            <a href="/contact" className="nav-link" >Contact</a>
          </li>
         
        </ul>
        <div className="button">
        {isLoggedIn ? (
          <>
              <button className="btn btn-outline-dark ms-2" onClick={handleLogout}>
                <i className="fa fa-sign-out me-1"></i>
                Logout
              </button>
                <a href='/cart'  className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                {calculateTotalQuantity()}
              </a>
              </>
            ) : (

<>
            <a href='/' className="btn btn-outline-dark ms-2">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </a>

            <a href='/register' className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>
            Register
          </a>
          <a href='/'  className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                {calculateTotalQuantity()}
              </a>

        
        </>
            )
}
            
            
            </div>
     
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
