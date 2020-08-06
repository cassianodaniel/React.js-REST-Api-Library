import React from 'react';

import './style.css'

import { Link } from 'react-router-dom';
import '../Profile/style.css';

import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default function WeeklyBooks() {
  return (
    <div class="main">
      <div class = "divBlock">
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
                    <Menu.Item key="1"><Link to="weeklybooks">Livros alugados</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          </aside>
      </div>
    </div>
  );
}