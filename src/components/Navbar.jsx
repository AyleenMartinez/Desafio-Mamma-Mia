import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { calcularTotal } = useContext(CartContext); 
  const { token } = useContext(UserContext);
  const { logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand"> Pizzería Mamma Mía!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="btn btn-warning btn-sm mr-2"> Home</Link>
          </li>
          {!token ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="btn btn-warning btn-sm mr-2"> Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-warning btn-sm mr-2"> Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/profile" className="btn btn-warning btn-sm mr-2"> Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2" onClick={logout}> Logout</button>
              </li>
            </>
          )}
        </ul>
        <Link to="/cart" className="btn btn-warning btn-sm"> Total: ${calcularTotal().toLocaleString()}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
