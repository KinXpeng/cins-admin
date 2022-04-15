import { useState, useEffect } from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';
import { Breadcrumb, Menu, Dropdown, Tooltip, Drawer, Avatar } from 'antd';
import { GlobalOutlined, SettingOutlined, CheckOutlined, ImportOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import dark from '@/assets/icons/dark.svg';
import light from '@/assets/icons/light.svg';
import user from '@/assets/imgs/user.jpeg';
function HeaderNav({ width }) {
  const { configStore, loginStore } = useStore();
  const { t } = useTranslation(); // 国际化
  const navigate = useNavigate(); // 路由跳转
  const [locales, setLocales] = useState(['zh_CN']); // 默认中文环境
  const [visible, setVisible] = useState(false); // 设置面板显示状态

  useEffect(() => {
    if (localStorage.getItem('locale')) {
      setLocales([localStorage.getItem('locale')]);
    }
  }, []);

  // 语言切换
  const handleSelect = ({ key }) => {
    if (locales[0] !== key) {
      setLocales([key]);
      configStore.switchLanguage(key);
    }
  };

  // 主题风格
  const themeList = [
    {
      zh_CN_name: '暗色菜单风格',
      en_US_name: 'Dark style',
      style: 'dark',
      icon: dark,
    },
    {
      zh_CN_name: '亮色菜单风格',
      en_US_name: 'Light style',
      style: 'light',
      icon: light,
    },
  ];

  // 主题色
  const colorList = [
    {
      zh_CN_name: '薄暮',
      en_US_name: 'Dust Red',
      color: '#F5222D',
    },
    {
      zh_CN_name: '火山',
      en_US_name: 'Volcano',
      color: '#FA541C',
    },
    {
      zh_CN_name: '日暮',
      en_US_name: 'Sunset Orange',
      color: '#FAAD14',
    },
    {
      zh_CN_name: '明青',
      en_US_name: 'Cyan',
      color: '#13C2C2',
    },
    {
      zh_CN_name: '极光绿',
      en_US_name: 'Polar Green',
      color: '#52C41A',
    },
    {
      zh_CN_name: '拂晓蓝（默认）',
      en_US_name: 'Daybreak Blue (default)',
      color: '#1890FF',
    },
    {
      zh_CN_name: '极客蓝',
      en_US_name: 'Geek Glue',
      color: '#2F54EB',
    },
    {
      zh_CN_name: '酱紫',
      en_US_name: 'Golden Purple',
      color: '#722ED1',
    },
  ];

  // 退出登录
  const handleUserLogout = ({ key }) => {
    if (key === 'logout') {
      loginStore.logout();
      navigate('/login', { replace: true });
    }
  };

  // 国际化菜单
  const languageMenu = (
    <Menu onClick={handleSelect} selectedKeys={locales}>
      <Menu.Item key="zh_CN">🇨🇳 简体中文</Menu.Item>
      <Menu.Item key="en_US">🇬🇧 English</Menu.Item>
    </Menu>
  );

  // 用户下拉设置
  const userMenu = (
    <Menu onClick={handleUserLogout}>
      <Menu.Item key="logout">
        <ImportOutlined /> 退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      {/* 面包屑导航 */}
      <Breadcrumb>
        {configStore.activeItem && width > 500 ? (
          <>
            <Breadcrumb.Item onClick={configStore.crumbItem}>
              <Link to="/">{t('home')}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{configStore.activeItem}</Breadcrumb.Item>
          </>
        ) : (
          ''
        )}
      </Breadcrumb>

      <div className={styles['header_right']}>
        {/* 用户信息  */}
        <Dropdown overlay={userMenu} placement="bottomRight">
          <div className={styles.user}>
            <Avatar src={user} />
          </div>
        </Dropdown>

        {/* 国际化 */}
        <Dropdown overlay={languageMenu} placement="bottomRight">
          <div className={styles.locales}>
            <GlobalOutlined />
          </div>
        </Dropdown>

        {/* 设置 */}
        <div className={styles.setting} onClick={() => setVisible(true)}>
          <SettingOutlined />
        </div>
      </div>

      {/* 设置面板 */}
      <Drawer width="280" className={styles.setting_drawer} placement="right" visible={visible} onClose={() => setVisible(false)} closable={false}>
        {/* 主题style */}
        <div className={styles.panel_style}>
          <h3 className={styles.title}>{t('header.page_style')}</h3>
          <div className={styles.diffstyles}>
            {themeList.map((item) => (
              <span key={item.style} onClick={() => configStore.switchStyle(item.style)}>
                <Tooltip title={item[configStore.locale + '_name']} color={configStore.theme.primaryColor + 'B3'} key={configStore.theme.primaryColor}>
                  <img src={item.icon} alt="" />
                </Tooltip>
                {configStore.themeStyle === item.style ? <CheckOutlined className={styles.selected} style={{ color: configStore.theme.primaryColor }} /> : ''}
              </span>
            ))}
          </div>
        </div>

        {/* 主题色 */}
        <div className={styles.theme_color}>
          <h3 className={styles.title}>{t('header.theme_color')}</h3>
          <div className={styles.colors}>
            {colorList.map((item) => (
              <Tooltip title={item[configStore.locale + '_name']} color={item.color + 'B3'} key={item.color}>
                <span style={{ background: item.color }} onClick={() => configStore.switchColor(item.color)}>
                  {configStore.theme.primaryColor === item.color ? <CheckOutlined /> : ''}
                </span>
              </Tooltip>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default observer(HeaderNav);
