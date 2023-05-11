import { useState } from 'react';

function Tabela({vetor, selecionar}) {
  const [mostrarTabela, setMostrarTabela] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarTabela(!mostrarTabela)} className='btn btn-success' id='btnlista' style={{ backgroundColor: '#C7F5A2', color: 'black'}}>
        {mostrarTabela ? 'Ocultar Tabela' : 'Mostrar Tabela'}
      </button>

      {mostrarTabela && (
        <table className=''>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Nome dos Pais</th>
            <th>Endereço</th>
            <th>CPF</th>
            <th>Sexo</th>
            <th>Telefone</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Data de Nascimento</th>
            <th>Diagnostico</th>
            <th>Receita</th>
            <th>Exames Médicos</th>
            <th>Selecionar</th>
          </tr>
        </thead>
      
        <tbody>
          {vetor.map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.nome}</td>
              <td>{obj.nomedopais}</td>
              <td>{obj.endereco}</td>
              <td>{obj.cpf}</td>
              <td>{obj.sexo}</td>
              <td>{obj.telefone}</td>
              <td>{obj.altura}</td>
              <td>{obj.peso}</td>
              <td>{obj.datanascimento}</td>
              <td>{obj.diagnostico}</td>
              <td>{obj.receita}</td>
              <td>{obj.exames}</td>
              <td>
                <button onClick={() => selecionar(indice)} className="btn btn-success">
                  Selecionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      )}
    </div>
  );
}

export default Tabela;
