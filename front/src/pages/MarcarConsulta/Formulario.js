import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas);

function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    return (
        <form>
            
                <label htmlFor="nome"><FontAwesomeIcon icon={['fas', 'user']} /> Nome</label>
                <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' id='nome' placeholder='Nome' className='form-control' />
            
                <label htmlFor="nomedopais"><FontAwesomeIcon icon={['fas', 'users']} /> Nome dos pais</label>
                <input type='text' value={obj.nomedopais} onChange={eventoTeclado} name='nomedopais' id='nomedopais' placeholder='Nome dos pais' className='form-control' />
           
                <label htmlFor="endereco"><FontAwesomeIcon icon={['fas', 'map-marker']} /> Endereço</label>
                <input type='text' value={obj.endereco} onChange={eventoTeclado} name='endereco' id='endereco' placeholder='Endereço' className='form-control' />
           
                <label htmlFor="cpf"><FontAwesomeIcon icon={['fas', 'id-card']} /> CPF</label>
                <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' id='cpf' placeholder='CPF' className='form-control' />
           
                <label htmlFor="sexo"><FontAwesomeIcon icon={['fas', 'venus-mars']} /> Sexo</label>
                <select value={obj.sexo} onChange={eventoTeclado} name='sexo' id='sexo' className='form-control'>
                    <option value="">Selecione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            
                <label htmlFor="telefone"><FontAwesomeIcon icon={['fas', 'phone']} /> Telefone</label>
                <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' id='telefone' placeholder='Telefone' className='form-control' />
           
                <label htmlFor="altura"><FontAwesomeIcon icon={['fas', 'ruler-vertical']} /> Altura</label>
                <input type='number' value={obj.altura} onChange={eventoTeclado} name='altura' id='altura' placeholder='Altura em cm' className='form-control' />
            
                <label htmlFor="peso"><FontAwesomeIcon icon={['fas', 'weight']} /> Peso</label>
                <input type='number' value={obj.peso} onChange={eventoTeclado} name='peso' id='peso' placeholder='Peso em kg' className='form-control' />
            
                <label htmlFor="data-nascimento"><FontAwesomeIcon icon={['fas', 'calendar-alt']} /> Data de Nascimento</label>
                <input type='number' value={obj.dataNascimento} onChange={eventoTeclado} name='dataNascimento' id='data-nascimento' placeholder='Data de Nascimento' className='form-control' />

            {
                botao
                    ?
                    <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-info' style={{ backgroundColor: '#C7F5A2' }} />

                    :
                    <div>
                        <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning' />
                        <input type='button' value='Remover' onClick={remover} className='btn btn-danger' />
                        <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary' />
                    </div>
            }

        </form>
    )
}

export default Formulario;