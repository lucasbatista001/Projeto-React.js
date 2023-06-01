import React from 'react';
import estetoscopio from './img/Estetoscópio (2).png'

function Navbar(props) {
  return (
    <nav>
      <img src={estetoscopio} alt="" style={{ width: '3vw', display: 'flex' }} />

     <h3>Área Medica</h3>
      <div className="hamburger">
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
      
        <button onClick={props.openModal} className='btn btn-info' style={{ backgroundColor: '#C7F5A2',  border: 'none', marginLeft: '760px'}}>Cadastrar</button>
    </nav>
  );
}

export default Navbar;
