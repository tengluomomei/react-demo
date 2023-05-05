import './index.scss'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
  import { Button, Layout } from 'antd';
  import { useState } from 'react';
  import { Outlet } from 'react-router-dom';

  import Mysider from './Mysider'
  import MyHeader from './MyHeader'
  const { Header, Sider, Content } = Layout;


function LayoutPage(){
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='my-layout'>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Mysider></Mysider>  
                </Sider>
                <Layout>
                    <Header
                    style={{
                        padding: 0,
                        color: '#fff'
                    }}
                    >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: '#fff'
                        }}
                    />
                    <MyHeader></MyHeader>
                    </Header>
                    <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
                </Layout>
        </div>
    )
}

export default LayoutPage