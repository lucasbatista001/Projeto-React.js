import React from 'react';
import logo from './img/logo.png'

function Navbar(props) {
  return (
    <nav>
     <img src={logo} alt="" style={{ width: '200px', display: 'flex' }} />
      <div className="hamburger">
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
      <ul id="nav-links">
        <button onClick={props.openModal} className='btn btn-info' style={{ backgroundColor: '#C7F5A2',  border: 'none'}}>Cadastrar</button>
      </ul>
    </nav>
  );
}

export default Navbar;
