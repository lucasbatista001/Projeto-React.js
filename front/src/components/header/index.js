import React, { useState } from 'react';
import './index.css';
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {

  const [chave, setChave] = useState('');
  const navigate = useNavigate();

  const handleEnviar = () => {
    const url = `http://localhost:8080/clientes/redirect?tipoDePessoa=${chave}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Erro na requisição');
        }
      })
      .then(data => {
        if (data.startsWith('redirect:http://localhost:3000/AreaMedica')) {
          navigate('/AreaMedica'); // Redireciona para a página AreaMedica
          window.history.replaceState(null, '', '/'); // Remove a página de login do histórico
        } else if (data.startsWith('redirect:http://localhost:3000/Consultas')) {
          navigate('/Consultas'); // Redireciona para a página Consultas
          window.history.replaceState(null, '', '/'); // Remove a página de login do histórico
        } else {
          alert('Senha incorreta');
          console.log(chave);
          console.log(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Impede que o usuário volte para as páginas de Consulta ou Área Médica após sair delas
  const handlePopState = event => {
    navigate('/');
  };

  useState(() => {
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  
  return (
    <article>
      <div className="main" style={{ fontFamily: 'Noto Sans' }}>
        <div className="main-right">
          <div className="card-img">
            <img src={logo} alt="" style={{ width: '45vw', display: 'flex' }} />
          </div>
          <div className="card-img"></div>
        </div>
        <div className="main-left">
          <div className="textcard-h3">
            <h3 style={{ marginTop: 0, marginBottom: '400px', fontSize: '22px' }}>
              Clinica Pediatrica
            </h3>
          </div>

          <div className="textcard-h1">
            <h1 style={{ marginTop: 0, marginBottom: '' }}>Bem vindo</h1>
          </div>

          <div className="input-chave">
            <label htmlFor="exampleInput">Digite a Chave de acesso:</label>
            <input
              type="text"
              placeholder="Chave"
              className="form-control"
              value={chave}
              onChange={e => setChave(e.target.value)}
            />
          </div>

          <div className="btn02">
            <button type="button" className="btn btn-primary" onClick={handleEnviar}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Header;
