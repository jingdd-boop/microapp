import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import './App.css';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' icon={<PieChartOutlined />}>
            <Link to='/app-vue'>Vue应用</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            <Link to='/app-react'>React应用</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <div
            id='container'
            className='site-layout-background'
            style={{ minHeight: 360 }}></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          This Project ©2021 Created by DiDi
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

// 别忘了在index.css或app.css中添加如下样式
