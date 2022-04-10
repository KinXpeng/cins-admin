import React from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { TeamOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

function SiderMenu({ collapsed }) {
  const { configStore } = useStore();
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.logo}>{collapsed ? 'L' : 'logo'}</div>
      <Menu theme={configStore.themeStyle} mode="inline" defaultSelectedKeys={['sub1']}>
        <SubMenu key="sub1" icon={<TeamOutlined />} title={t('aside.user_list')}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TableOutlined />} title={t('aside.diary_list')}>
          <Menu.Item key="3">Option 1</Menu.Item>
          <Menu.Item key="4">Option 2</Menu.Item>
          <Menu.Item key="5">Option 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<SmileOutlined />} title={t('aside.moment_status')}>
          <Menu.Item key="6">Option 1</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
