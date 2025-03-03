// src/Components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';

// Custom styling for the AppBar, but minimal inline style usage
const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" className="navbar-title">
          Aniket Saini
        </Typography>
        <NavLink to="/" className="navbar-link">
          <Button className="navbar-button">Home</Button>
        </NavLink>
        <NavLink to="/about" className="navbar-link">
          <Button className="navbar-button">About</Button>
        </NavLink>
        <NavLink to="/projects" className="navbar-link">
          <Button className="navbar-button">Projects</Button>
        </NavLink>
        <NavLink to="/contact" className="navbar-link">
          <Button className="navbar-button">Contact</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

console.log(Navbar);
export default Navbar;
