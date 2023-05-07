import './index.scss'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, ConfigProvider } from 'antd';
  import { useState } from 'react';
  import { Outlet } from 'react-router-dom';

  import Mysider from './Mysider'
  import MyHeader from './MyHeader'
  import {useSelector} from 'react-redux'
  const { Header, Sider, Content } = Layout;
 

function LayoutPage(){
    const [collapsed, setCollapsed] = useState(false);
    const {size} = useSelector(state => state.app)

    return (
        <ConfigProvider componentSize={size}>
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
        </ConfigProvider>
    )
}

export default LayoutPage