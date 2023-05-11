import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png'


function Header() {

  const bebasNeue = new FontFace('Bebas Neue', 'url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap)');
  const notoSans = new FontFace('Noto Sans', 'url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap)');

  bebasNeue.load().then(() => {
    document.fonts.add(bebasNeue);
  });

  notoSans.load().then(() => {
    document.fonts.add(notoSans);
  });


  return (
    <article>
      <div className="main" style={{ fontFamily: 'Noto Sans' }}>
        <div className="main-right">
          <div className="card-img"><img src={logo} alt="" style={{ width: '45vw', display: 'flex' }} /></div>
          <div className="card-img"></div>
        </div>
        <div className="main-left">
          <div className="textcard-h3">
            <h3 style={{ marginTop: 0, marginBottom: '170px' }}>Clinica Pediatrica</h3>
          </div>
          <div className="textcard-h2">
            <h2 style={{ marginBottom: 0, fontSize: '22px'}}>ÁREAS DE ATENDIMENTO</h2>
          </div>
          <div className="textcard-h1">
            <h1 style={{ marginTop: 0, marginBottom: '10px' }}>Bem vindo</h1>
          </div>
          <div className="btn01">
            <NavLink to="/Consultas">
              Marcar Consulta
            </NavLink>
          </div>

          <div className="btn02">
            <NavLink to="/AreaMedica">
               Área Medica
            </NavLink>
           

          </div>
        </div>
      </div>
    </article>
  );
}

export default Header;
