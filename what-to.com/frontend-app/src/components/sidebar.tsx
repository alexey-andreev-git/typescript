import React, {useState} from 'react';
import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/sidebar';

interface SidebarProps {
    // Add any props you need for the sidebar component
}

const Sidebar: React.FC<SidebarProps> = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: 200, height: "100vh",textAlign: "left" }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-0" width="34" height="34"><use xlinkHref="#bootstrap"></use>
      </svg>
      <span className="fs-4">hat To</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      {DASHBOARD_SIDEBAR_LINKS.map((link) => (
        <li key={link.key} className="nav-item">
          <Link to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>
            {link.icon}{' '}{link.label}
          </Link>
        </li>
      ))}
      {/* <li className="nav-item">
        <Link to="/home" 
        className={`nav-link ${isActive('/home') ? 'active' : ''}`} 
        aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard" 
        className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Dashboard
        </Link>
      </li>
      <li>
        <Link to="/orders" className={`nav-link ${isActive('/orders') ? 'active' : ''}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Orders
        </Link>
      </li>
      <li>
        <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Products
        </Link>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          Customers
        </a>
      </li> */}
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;