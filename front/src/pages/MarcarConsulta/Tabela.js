function Tabela({ vetor, selecionar, openModal }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Cidade</th>
          <th>Ver</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((cliente) => (
          <tr key={cliente.clienteID} onClick={() => selecionar(cliente)}>
            <td>{cliente.clienteID}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.cpf}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.cidade}</td>
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




