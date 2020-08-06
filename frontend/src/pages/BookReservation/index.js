import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './style.css'

import api from '../../api';

import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default function Books(){
    const [title, setTitle] = useState('');
    const [reservation, setReservation] = useState(0);
    const [rent, setRent] = useState(0);
    const [devolution, setDevolution] = useState(0); 
    const [id, setID] = useState(0); 
    const [datas, setDatas] = useState([]);
    const [datasS, setDatasS] = useState([]);

    async function handleBooks(e){
        e.preventDefault();
        
        const data = {
            id,
            title,
            reservation,
            rent,
            devolution
        }; 
        try{
            const response = await api.get('books', data);
            setDatas(response.data);
        }catch(err){
            console.log('Erro no try -> const response = await api.get');
        }
    }

    async function handlePut(e){
        e.preventDefault();
        
        const data = {
            id: 4,
            reservation: 1,
            rent: 0,
            devolution: 0,
        }; 

        try{
            const response = await api.put('reservations', data);
            setDatasS(response.data);
        }catch(err){
            console.log('Erro no try -> const response = await api.put');
        }
    }

    return(
        <div className="main">
            <div className = "divBlock">
                <aside>
                    <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Website">
                            <Menu.Item key="1"><Link to="/books">Visualizar livros</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/bookreservation">Reservar livro</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/cancelreservation">Cancelar reserva</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/bookrent">Alugar livro</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/givebook">Devolver livro</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="/bookstobegiven">Livros a devolver</Link></Menu.Item>
                            <Menu.Item key="1"><Link to="weeklybooks">Dashboard</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                </aside>
            </div>
            <section>
                <ul>
                    <li>
                        <div className="bookBlock">
                            <h3>LIVROS A SEREM RESERVADOS:</h3>
                            <br></br>
                            <div title="title"/>
                            <ul>
                                {datas.map(data => (
                                    (data.reservation === 0) 
                                    ? 
                                    <li key={data.id}>
                                        <strong>Livro disponível para reserva:</strong>
                                        <p>Título do Livro: {(data.reservation === 0) ? <div>{data.title}</div> : <div></div>}</p>
                                        <button onClick={handlePut} type="button">Reservar +</button>
                                    </li> 
                                    :
                                    <a></a>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
                <Button className="expandir" type="primary" onClick={handleBooks}>Expandir</Button>
            </section>
        </div>
    );
};