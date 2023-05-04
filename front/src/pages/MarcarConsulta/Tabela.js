import { useState } from 'react';

function Tabela({vetor, selecionar}) {
  const [mostrarTabela, setMostrarTabela] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarTabela(!mostrarTabela)} className='btn btn-success' id='btnlista'>
        {mostrarTabela ? 'Ocultar Tabela' : 'Mostrar Tabela'}
      </button>

      {mostrarTabela && (
        <table className=''>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Marca</th>
              <th>Nome dos Pais</th>
              <th>Selecionar</th>
            </tr>
          </thead>

          <tbody>
            {
              vetor.map((obj, indice) => (
                <tr key={indice}>
                  <td>{indice+1}</td>
                  <td>{obj.nome}</td>
                  <td>{obj.marca}</td>
                  <td>{obj.nomedopais}</td>
                  <td>
                    <button onClick={() => selecionar(indice)} className="btn btn-success">
                      Selecionar
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tabela;
