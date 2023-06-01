import React, { useEffect, useState } from 'react';
import './index.css';
import '../MarcarConsulta/indexbtn.css';
import Formulario from './FormularioMedico';
import Tabela from './Tabela';
import '../MarcarConsulta/nav.css';
import Navbar from './Navbar';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setClientes] = useState([]);
  const [clienteAtual, setClienteAtual] = useState({
    nome: '',
    nomeDosPais: '',
    cpf: '',
    sexo: '',
    email: '',
    altura:'',
    peso:'',
    dataNascimento:'',
    telefone: '',
    cidade: '',
    texto: '',
    receitas: '',
    exames: '',
    data: '',
    hora:'',
    clienteID: '',
  });

  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/clientes')
      .then((response) => response.json())
      .then((data) => {
        const clientesComID = data.map((cliente) => ({
          ...cliente,
          clienteID: cliente.id,
        }));
        setClientes(clientesComID);
      })
      .catch((error) => {
        console.error('Erro ao listar clientes:', error);
        setHasError(true);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClienteAtual({ ...clienteAtual, [name]: value });
  };

  const cadastrarCliente = () => {
    fetch('http://localhost:8080/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteAtual),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao cadastrar cliente');
        }
      })
      .then((data) => {
        setClientes([...clientes, data]);
        limparFormulario();
        setHasSuccess(true);
        setHasError(false);
        setTimeout(() => {
          setHasSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar cliente:', error);
        
        setHasError(true);
        setHasSuccess(false);
        setTimeout(() => {
          setHasError(true);
        }, 3000);
      });
  };

  const atualizarCliente = (clienteID) => {
    const clienteParaAtualizar = clientes.find(
      (cliente) => cliente.clienteID === clienteID
    );

    if (!clienteParaAtualizar) {
      alert('Cliente não encontrado');
      return;
    }

    const url = `http://localhost:8080/clientes/${clienteID}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteAtual),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao atualizar cliente');
        }
      })
      .then((data) => {
        const updatedClientes = clientes.map((cliente) =>
          cliente.clienteID === data.clienteID ? data : cliente
        );
        setClientes(updatedClientes);
        limparFormulario();
        setHasSuccess(true);
        setHasError(false);
        setTimeout(() => {
          setHasSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Erro ao atualizar cliente:', error);
        
        setHasError(true);
        setHasSuccess(false);
        setTimeout(() => {
          setHasError(false);
        }, 3000);
      });
  };

  const removerCliente = (clienteID) => {
    const url = `http://localhost:8080/clientes/${clienteID}`;

    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const updatedClientes = clientes.filter(
            (cliente) => cliente.clienteID !== clienteID
          );
          setClientes(updatedClientes);
          limparFormulario();
          setHasSuccess(true);
          setHasError(false);
          setTimeout(() => {
            setHasSuccess(false);
          }, 3000);
        } else {
          throw new Error(
            `Erro ao remover cliente: ${response.status} ${response.statusText}`
          );
        }
      })
      .catch((error) => {
        console.error('Erro ao remover cliente:', error);
        
        setHasError(true);
        setHasSuccess(false);
        setTimeout(() => {
          setHasError(false);
        }, 3000);
      });
  };

  const selecionarCliente = (cliente) => {
    const { clienteID, ...dadosCliente } = cliente;
    setClienteAtual({ clienteID, ...dadosCliente });
    setBtnCadastrar(false);
  };

  const limparFormulario = () => {
    setClienteAtual({
    nome: '',
    nomeDosPais: '',
    cpf: '',
    sexo: '',
    email: '',
    altura:'',
    peso:'',
    dataNascimento:'',
    telefone: '',
    cidade: '',
    texto: '',
    receitas: '',
    exames: '',
    data: '',
    hora:'',
    clienteID: '',
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar openModal={openModal} />
      <div style={{ padding: '10px' }}>
      {hasError && (
      <div className="alert alert-danger" role="alert" style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '9999' }}>
        Ocorreu um erro ao cadastrar/remover o cliente. Por favor, tente novamente.
      </div>
    )}
    {hasSuccess && (
      <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '9999' }}>
        Operação realizada com sucesso!
      </div>
    )}
        <Tabela
          vetor={clientes}
          selecionar={selecionarCliente}
          openModal={openModal}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <Formulario
          exibirbtn={btnCadastrar}
          eventoTeclado={handleInputChange}
          cadastrar={cadastrarCliente}
          obj={clienteAtual}
          remover={removerCliente}
          alterar={atualizarCliente}
          cancelar={limparFormulario}
        />
        <div><button onClick={closeModal} className="btn btn-secondary">
          Fechar
        </button></div>
      </Modal>
    </div>
  );
}

export default App;
