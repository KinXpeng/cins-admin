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
      title: t('aside.user.nav'),
      children: [
        {
          path: '/userList',
          key: 'userList',
          title: t('aside.user.user_list'),
        },
      ],
    },
    {
      key: 'diary',
      icon: <TableOutlined />,
      title: t('aside.diary.nav'),
      children: [
        {
          path: '/diaryList',
          key: 'diaryList',
          title: t('aside.diary.diary_list'),
        },
        {
          path: '/journeyTake',
          key: 'journeyTake',
          title: t('aside.diary.journey_take'),
        },
      ],
    },
    {
      key: 'moment',
      icon: <SmileOutlined />,
      title: t('aside.moment.nav'),
      children: [
        {
          path: '/momentStatus',
          key: 'momentStatus',
          title: t('aside.moment.moment_status'),
        },
      ],
    },
  ]);

  // 解决刷新页面面包屑导航消失的问题
  useEffect(() => {
    let activeNode = JSON.parse(localStorage.getItem('activeItem'));
    let parentNode = JSON.parse(localStorage.getItem('parentItem'));
    if (parentNode) parentNode = menuList.find((item) => item.key === parentNode.key);
    menuList.forEach((ele) => {
      let result = ele.children.find((item) => item.path === location.pathname);
      if (result) {
        activeNode = result;
      }
    });
    if (activeNode?.title !== undefined && activeNode?.title !== null && location.pathname !== '/') {
      configStore.switchMenuItem(activeNode);
      configStore.operateCrumbMenu(parentNode);
    }
  }, [configStore, location.pathname, menuList]);

  // 返回首页
  const backHome = () => {
    configStore.crumbItem();
    navigate('/', { replace: true });
  };

  // 点击菜单
  const handleClickItem = (item) => {
    let parentNode = item.keyPath[1];
    let result = menuList.find((ele) => ele.key === parentNode);
    let activeNode = result.children.find((ele) => ele.key === item.key);
    configStore.operateCrumbMenu(result);
    configStore.switchMenuItem(activeNode);
    if (setVisible !== undefined) setVisible(false); // 收起drawer菜单
  };

  return (
    <>
      <div className={styles.logo} onClick={backHome}>
        {collapsed ? 'C' : 'CINS'}
      </div>
      <Menu theme={configStore.themeStyle} mode="inline" selectedKeys={[configStore.activeItem.key]} onClick={handleClickItem}>
        {menuList.map((item) => (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {item.children.map((item1) => (
              <Menu.Item key={item1.key}>
                <Link to={item1.path}>{item1.title}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
}

export default observer(SiderMenu);
