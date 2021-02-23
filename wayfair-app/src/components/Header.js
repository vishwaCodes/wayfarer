import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/wayfarer'}>Wayfarer</Link>
        <Link to={'/login'} >Log In</Link>
        <Link to={'/signup'}>Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;