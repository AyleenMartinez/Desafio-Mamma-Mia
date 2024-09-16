import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">🍕 Pizzería Mamma Mía!</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="btn btn-warning btn-sm mr-2">🍕 Home</button>
          </li>
          
          {!token ? (
            <>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2">🔐 Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2">🔐 Register</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2">🔓 Profile</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning btn-sm mr-2">🔒 Logout</button>
              </li>
            </>
          )}
        </ul>
        <button className="btn btn-warning btn-sm">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
};

export default Navbar;
