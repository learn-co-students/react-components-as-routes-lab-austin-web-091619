import React from 'react';
import { NavLink } from 'react-router-dom';
const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' exact style={linkStyle} activeStyle={{background:'darkblue'}}>Home</NavLink>
      <NavLink exact to='/movies' style={linkStyle} activeStyle={{background:'darkblue'}}>
        Movies
      </NavLink>
      <NavLink exact to='/directors' style={linkStyle} activeStyle={{background:'darkblue'}}>
        Directors
      </NavLink>
      <NavLink exact to='/actors' style={linkStyle} activeStyle={{background:'darkblue'}}>
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
