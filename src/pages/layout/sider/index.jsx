import React from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

function SiderMenu() {
  const { configStore } = useStore();
  return (
    <>
      <div className={styles.logo}>logo</div>
      <Menu theme={configStore.themeStyle} mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
