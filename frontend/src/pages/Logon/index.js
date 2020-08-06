import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import reactjs from '../../../src/images/reactjs.png'

import './styles.css';

export default function Logon(){

    return(
        <div className="logon-container">
            <div className="form">

                <img src={reactjs}alt ="reactjs"/>
                
                <form>
                    <input placeholder="Login"></input>
                    <input placeholder="Senha"></input>
                    <Link to="/profile">
                        <button type="submit">Entrar</button>
                    </Link>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </div>
        </div>
    );
}