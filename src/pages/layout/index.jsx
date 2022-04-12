import React, { useState, Suspense, useEffect } from 'react';
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
  const [collapsed, setCollapsed] = useState(false); // 菜单栏收起状态
  const [width, setWidth] = useState(window.innerWidth); // 窗口宽度
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // 获取窗口宽度
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    width < 650 ? setCollapsed(true) : setCollapsed(false);
  }, [width]);

  return (
    <Layout className={styles.layout}>
      <Sider width="230" theme={configStore.themeStyle} trigger={null} collapsible collapsed={collapsed} className={styles.aside}>
        <SiderMenu collapsed={collapsed} />
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header className={styles['site-layout-background']} style={{ display: 'flex', padding: 0, alignItems: 'center' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles['trigger'],
            onClick: window.innerWidth > 500 ? toggle : null,
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
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default observer(LayoutConfig);
