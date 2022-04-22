import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TeamOutlined, TableOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

function SiderMenu({ collapsed, setVisible }) {
  const { configStore } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate(); // 路由跳转
  const location = useLocation();
  const [menuList] = useState([
    // 菜单列表
    {
      key: 'user',
      icon: <TeamOutlined />,
      title: t('aside.user_list'),
      children: [
        {
          path: '/userList',
          key: 'Option 1',
        },
      ],
    },
    {
      key: 'diary',
      icon: <TableOutlined />,
      title: t('aside.diary_list'),
      children: [
        {
          path: '/diaryList',
          key: 'Option 2',
        },
        {
          path: '/journeyTake',
          key: 'Option 3',
        },
      ],
    },
    {
      key: 'moment',
      icon: <SmileOutlined />,
      title: t('aside.moment_status'),
      children: [
        {
          path: '/momentStatus',
          key: 'Option 4',
        },
      ],
    },
  ]);

  // 解决刷新页面面包屑导航消失的问题
  useEffect(() => {
    let key = localStorage.getItem('activeItem');
    menuList.forEach((ele) => {
      let result = ele.children.find((item) => item.path === location.pathname);
      if (result) {
        key = result.key;
      }
    });
    if (key !== undefined && key !== null && location.pathname !== '/') {
      configStore.switchMenuItem({ key: key });
    }
  }, [configStore, location.pathname, menuList]);

  // 返回首页
  const backHome = () => {
    configStore.crumbItem();
    navigate('/', { replace: true });
  };

  // 选择菜单
  const handleSelectItem = (item) => {
    configStore.switchMenuItem(item);
    if (setVisible !== undefined) setVisible(false); // 收起drawer菜单
  };
  return (
    <>
      <div className={styles.logo} onClick={backHome}>
        {collapsed ? 'L' : 'logo'}
      </div>
      <Menu theme={configStore.themeStyle} mode="inline" selectedKeys={[configStore.activeItem]} onClick={handleSelectItem}>
        {menuList.map((item) => (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {item.children.map((item1) => (
              <Menu.Item key={item1.key}>
                <Link to={item1.path}>{item1.key}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
