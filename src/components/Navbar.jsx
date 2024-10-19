import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">🍕 Pizzería Mamma Mía!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
           <Link to="/" className="btn btn-warning btn-sm mr-2">🍕 Home</Link>
          </li>
          
          {!token ? (
            <>
              <li className="nav-item">
               <Link to="/login" className="btn btn-warning btn-sm mr-2">🔐 Login</Link> 
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-warning btn-sm mr-2">🔐 Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
               <Link to="/profile" className="btn btn-warning btn-sm mr-2">🔓 Profile</Link>  
              </li>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2">🔒 Logout</button>
              </li>
            </>
          )}
        </ul>
        <Link to="/cart" className="btn btn-warning btn-sm">🛒 Total: ${total.toLocaleString()}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
