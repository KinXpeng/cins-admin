import React, { useEffect } from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { TeamOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

function SiderMenu({ collapsed }) {
  const { configStore } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate(); // 路由跳转

  // 解决刷新页面面包屑导航消失的问题
  useEffect(() => {
    let key = localStorage.getItem('activeItem');
    if (key !== undefined && key !== null) {
      configStore.switchMenuItem({ key: key });
    }
  }, [configStore]);

  // 返回首页
  const backHome = () => {
    configStore.crumbItem();
    navigate('/', { replace: true });
  };
  return (
    <>
      <div className={styles.logo} onClick={backHome}>
        {collapsed ? 'L' : 'logo'}
      </div>
      <Menu theme={configStore.themeStyle} mode="inline" selectedKeys={[configStore.activeItem]} onClick={configStore.switchMenuItem}>
        <SubMenu key="user" icon={<TeamOutlined />} title={t('aside.user_list')}>
          <Menu.Item key="Option 1">
            <Link to="/userList">Option 1</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="diary" icon={<TableOutlined />} title={t('aside.diary_list')}>
          <Menu.Item key="Option 2">
            <Link to="/diaryList">Option 2</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="moment" icon={<SmileOutlined />} title={t('aside.moment_status')}>
          <Menu.Item key="Option 3">
            <Link to="/momentStatus">Option 3</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
