function Tabela({ vetor, selecionar, openModal }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Nome dos Pais</th>
          <th>Data da Consulta</th>
          <th>Horario</th>
          <th>Ver Paciente</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((cliente) => (
          <tr key={cliente.clienteID} onClick={() => selecionar(cliente)}>
            <td>{cliente.clienteID}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.nomeDosPais}</td>
            <td>{cliente.data}</td>
            <td>{cliente.hora}</td>
            <td>
              <button onClick={() => openModal(cliente)} className='btn btn-info' style={{ backgroundColor: '#C7F5A2',  border: 'none'}}>Ver</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default Tabela;




