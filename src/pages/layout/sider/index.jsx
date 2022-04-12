import React from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
          <Menu.Item key="1">
            <Link to="/userList">Option 1</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TableOutlined />} title={t('aside.diary_list')}>
          <Menu.Item key="2">
            <Link to="/diaryList">Option 1</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<SmileOutlined />} title={t('aside.moment_status')}>
          <Menu.Item key="3">
            <Link to="/momentStatus">Option 1</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
