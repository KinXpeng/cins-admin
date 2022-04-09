import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import SiderMenu from './sider/index';
import HeaderNav from './header/index';
const { Header, Content, Sider } = Layout;

function LayoutConfig() {
  const { configStore } = useStore();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={styles.layout}>
      <Sider width="230" theme={configStore.themeStyle} trigger={null} collapsible collapsed={collapsed} className={styles.aside}>
        <SiderMenu />
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header className={styles['site-layout-background']} style={{ display: 'flex', padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles['trigger'],
            onClick: toggle,
          })}
          <HeaderNav />
        </Header>
        <Content
          className={styles['site-layout-background']}
          style={{
            margin: '10px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default observer(LayoutConfig);
