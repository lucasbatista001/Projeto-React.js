import React, { useEffect, useState } from 'react';
import './index.css';
import '../MarcarConsulta/indexbtn.css';
import Formulario from './Formulario';
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
    cpf: '',
    email: '',
    telefone: '',
    cidade: '',
    texto: '',
    clienteID: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/clientes')
      .then((response) => response.json())
      .then((data) => {
        const clientesComID = data.map((cliente) => ({
          ...cliente,
          clienteID: cliente.id, // Assumindo que o ID do cliente está armazenado em 'id'
        }));
        setClientes(clientesComID);
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
      .then((response) => response.json())
      .then((data) => {
        setClientes([...clientes, data]);
        limparFormulario();
        alert('Cliente cadastrado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar cliente:', error);
        alert('Erro ao cadastrar cliente');
      });
  };

  //
  const recarregarPagina = () => {
    window.location.reload();
  };
  

  const atualizarCliente = (clienteID) => {
    const clienteParaAtualizar = clientes.find(cliente => cliente.clienteID === clienteID);
    
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
      .then((data) => {
        const updatedClientes = clientes.map((cliente) =>
          cliente.clienteID === data.clienteID ? data : cliente
        );
        setClientes(updatedClientes);
        limparFormulario();
        alert('Cliente atualizado com sucesso!');
        recarregarPagina();
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao atualizar cliente');
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
          alert('Cliente removido com sucesso!');
        } else {
          throw new Error(
            `Erro ao remover cliente: ${response.status} ${response.statusText}`
          );
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao remover cliente');
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
      cpf: '',
      email: '',
      telefone: '',
      cidade: '',
      texto: '',
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
        <button onClick={closeModal} className="btn btn-secondary">
          Fechar
        </button>
      </Modal>
    </div>
  );
}

export default App;
