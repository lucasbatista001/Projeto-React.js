import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas);

function Formulario({ exibirbtn, eventoTeclado, cadastrar, obj, cancelar, remover, alterar, eventoTecladotexto }) {

  return (
    <form>
<div>
  <label htmlFor="nome"><FontAwesomeIcon icon={['fas', 'user']} /> Nome</label>
  <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" id="nome" placeholder="Nome" className="form-control" />
</div>
<div>
  <label htmlFor="nomeDosPais"><FontAwesomeIcon icon={['fas', 'users']} /> Nome dos Pais</label>
  <input type="text" value={obj.nomeDosPais} onChange={eventoTeclado} name="nomeDosPais" id="nomeDosPais" placeholder="Nome dos Pais" className="form-control" />
</div>
<div>
  <label htmlFor="cpf"><FontAwesomeIcon icon={['fas', 'user']} /> CPF</label>
  <input type="text" value={obj.cpf} onChange={eventoTeclado} name="cpf" id="cpf" placeholder="CPF" className="form-control" />
</div>
<label htmlFor="sexo"><FontAwesomeIcon icon={['fas', 'venus-mars']} /> Sexo</label>
          <select value={obj.sexo} onChange={eventoTeclado} name='sexo' id='sexo' className='form-control'>
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
<div>
  <label htmlFor="email"><FontAwesomeIcon icon={['fas', 'user']} /> Email</label>
  <input type="text" value={obj.email} onChange={eventoTeclado} name="email" id="email" placeholder="Email" className="form-control" />
</div>
<div>
  <label htmlFor="altura"><FontAwesomeIcon icon={['fas', 'id-card']} /> Altura</label>
  <input type="text" value={obj.altura} onChange={eventoTeclado} name="altura" id="altura" placeholder="Altura" className="form-control" />
</div>
<div>
  <label htmlFor="peso"><FontAwesomeIcon icon={['fas', 'weight']} /> Peso</label>
  <input type="text" value={obj.peso} onChange={eventoTeclado} name="peso" id="peso" placeholder="Peso" className="form-control" />
</div>
<div>
  <label htmlFor="dataNascimento"><FontAwesomeIcon icon={['fas', 'calendar-alt']} /> Data de Nascimento</label>
  <input type="text" value={obj.dataNascimento} onChange={eventoTeclado} name="dataNascimento" id="dataNascimento" placeholder="Data de Nascimento" className="form-control" />
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
  <label htmlFor="texto" className='Diagnóstico'><FontAwesomeIcon icon={['fas', 'user']} /> Diagnóstico</label>
  <textarea
    value={obj.texto}
    onChange={(event) => eventoTecladotexto(event, 'texto')} 
    name="texto"
    id="texto"
    placeholder="Diagnóstico"
    className="form-control"
  />
</div>
<div>
  <label htmlFor="receitas"><FontAwesomeIcon icon={['fas', 'user']} /> Receitas</label>
  <textarea
    value={obj.receitas}
    onChange={eventoTeclado}
    name="receitas"
    id="receitas"
    placeholder="Receitas"
    className="form-control"
  />
</div>
<div>
  <label htmlFor="exames"><FontAwesomeIcon icon={['fas', 'user']} /> Exames</label>
  <textarea
    value={obj.exames}
    onChange={(event) => eventoTecladotexto(event, 'exames')}
    name="exames"
    id="exames"
    placeholder="Exames"
    className="form-control"
  />
</div>

<div>
  <label htmlFor="data"><FontAwesomeIcon icon={['fas', 'calendar-alt']} /> Data</label>
  <input type="text" value={obj.data} onChange={eventoTeclado} name="data" id="data" placeholder="Data" className="form-control" />
</div>
<div>
  <label htmlFor="hora"><FontAwesomeIcon icon={['fas', 'user']} /> Hora</label>
  <input type="text" value={obj.hora} onChange={eventoTeclado} name="hora" id="hora" placeholder="Hora" className="form-control" />
</div>

      {exibirbtn ? (
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-info" style={{ backgroundColor: '#C7F5A2' }} />
      ) : (
        <div>
          <input type="button" value="Cadastrar" onClick={() => alterar(obj.clienteID)} className="btn btn-warning" />
          <input type="button" value="Remover" onClick={() => remover(obj.clienteID)} className="btn btn-danger" />
          <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
        </div>
      )}
    </form>
  );
}

export default Formulario;
