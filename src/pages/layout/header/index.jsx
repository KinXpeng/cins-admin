import { useState, useEffect } from 'react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import styles from './index.module.scss';
import { Menu, Dropdown, Tooltip, Drawer } from 'antd';
import { GlobalOutlined, SettingOutlined, CheckOutlined } from '@ant-design/icons';
import dark from '@/assets/icons/dark.svg';
import light from '@/assets/icons/light.svg';

function HeaderNav() {
  const { configStore } = useStore();
  const [locales, setLocales] = useState(['zh_CN']);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('locale')) {
      setLocales([localStorage.getItem('locale')]);
    }
  }, []);
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

  const menu = (
    <Menu onClick={handleSelect} selectedKeys={locales}>
      <Menu.Item key="zh_CN">🇨🇳 简体中文</Menu.Item>
      <Menu.Item key="en_US">🇬🇧 English</Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      {/* 设置 */}
      <div className={styles.setting} onClick={() => setVisible(true)}>
        <SettingOutlined />
      </div>

      {/* 国际化 */}
      <Dropdown overlay={menu} placement="bottomRight">
        <div className={styles.locales}>
          <GlobalOutlined />
        </div>
      </Dropdown>

      <div className={styles.user}>username</div>

      {/* 设置面板 */}
      <Drawer width="280" className={styles.setting_drawer} placement="right" visible={visible} onClose={() => setVisible(false)} closable={false}>
        {/* 主题style */}
        <div className={styles.panel_style}>
          <h3 className={styles.title}>整体风格设置</h3>
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
          <h3 className={styles.title}>主题色</h3>
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
