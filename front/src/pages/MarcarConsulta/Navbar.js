import React from 'react';
import livro from './img/livro.png'

function Navbar(props) {
  return (
    <nav>

    <img src={livro} alt="" style={{ width: '3vw', display: 'flex' }} />

    <h3>Marcação de Consulta</h3>

      <div className="hamburger">
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
      <ul id="nav-links">
        <button onClick={props.openModal} className='btn btn-info' style={{ backgroundColor: '#C7F5A2',  border: 'none', marginLeft: '600px'}}>Cadastrar</button>
      </ul>
    </nav>
  );
}

export default Navbar;
