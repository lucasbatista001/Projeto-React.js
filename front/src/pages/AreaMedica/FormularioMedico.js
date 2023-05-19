import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas);

function Formulario({ exibirbtn, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {

  return (
    <form>
      <div>
        <label htmlFor="nome"><FontAwesomeIcon icon={['fas', 'user']} /> Nome</label>
        <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" id="nome" placeholder="Nome" className="form-control" />
      </div>

      <div>
        <label htmlFor="cpf"><FontAwesomeIcon icon={['fas', 'id-card']} /> CPF</label>
        <input type="text" value={obj.cpf} onChange={eventoTeclado} name="cpf" id="cpf" placeholder="CPF" className="form-control" />
      </div>

      <div>
        <label htmlFor="email"><FontAwesomeIcon icon={['fas', 'envelope']} /> Email</label>
        <input type="email" value={obj.email} onChange={eventoTeclado} name="email" id="email" placeholder="Email" className="form-control" />
      </div>

      <div>
        <label htmlFor="telefone"><FontAwesomeIcon icon={['fas', 'phone']} /> Telefone</label>
        <input type="text" value={obj.telefone} onChange={eventoTeclado} name="telefone" id="telefone" placeholder="Telefone" className="form-control" />
      </div>

      <div>
        <label htmlFor="cidade"><FontAwesomeIcon icon={['fas', 'map-marker']} /> Cidade</label>
        <input type="text" value={obj.cidade} onChange={eventoTeclado} name="cidade" id="cidade" placeholder="Cidade" className="form-control" />
      </div>

      <div>
        <label htmlFor="texto"><FontAwesomeIcon icon={['fas', 'comment']} /> Texto</label>
        <textarea value={obj.texto} onChange={eventoTeclado} name="texto" id="texto" placeholder="Texto" className="form-control" />
      </div>

      {exibirbtn ? (
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-info" style={{ backgroundColor: '#C7F5A2' }} />
      ) : (
        <div>
          <input type="button" value="Alterar" onClick={() => alterar(obj.clienteID)} className="btn btn-warning" />
          <input type="button" value="Remover" onClick={() => remover(obj.clienteID)} className="btn btn-danger" />
          <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Formulario;
