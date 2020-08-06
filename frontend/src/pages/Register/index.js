import React, { useState } from 'react';

import { FiArrowLeft, FiArrowRightCircle } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom';

import '../Register/style.css'

import api from '../../api';

export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            email,
            nome,
            password
        };

        try{
            const response = await api.post('users', data);
            console.log(response);
            history.push('/');
        }catch(err){
                console.log('Erro no try -> const response = await api.post');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <div>
                    <h2 className="title">Cadastre-se já!</h2>
                </div>    
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </form>
                <div className="svg">
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Voltar
                    </Link>
                </div>
                <div className="svg">
                    <button onClick={handleRegister}>
                        <FiArrowRightCircle size={16} color="#E02041"/>
                            Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
}