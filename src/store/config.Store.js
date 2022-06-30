import { makeAutoObservable } from 'mobx';
import i18n from 'i18next';

// 全局配置
class ConfigStore {
  constructor() {
    makeAutoObservable(this);
  }
  parentItem = ''; // 默认激活的一级菜单
  activeItem = ''; // 默认激活的二级菜单
  locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh_CN'; // 默认中文
  themeStyle = localStorage.getItem('themeStyle') ? localStorage.getItem('themeStyle') : 'dark'; // 整体风格
  theme = {
    primaryColor: localStorage.getItem('primaryColor') ? localStorage.getItem('primaryColor') : '#1890FF',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  };

  // 面包屑导航一级菜单
  operateCrumbMenu = (item) => {
    this.parentItem = item;
    let parentNode = {
      title: item.title,
      key: item.key,
    };
    localStorage.setItem('parentItem', JSON.stringify(parentNode));
  };

  // 菜单切换
  switchMenuItem = (item) => {
    this.activeItem = item;
    localStorage.setItem('activeItem', JSON.stringify(item));
  };

  // 点击logo返回首页
  crumbItem = () => {
    this.activeItem = '';
    this.parentItem = '';
    localStorage.removeItem('activeItem');
    localStorage.removeItem('parentItem');
  };

  // 语言切换
  switchLanguage = (lang) => {
    this.locale = lang;
    localStorage.setItem('locale', lang);
    i18n.changeLanguage(lang === 'zh_CN' ? 'zh' : 'en');
  };

  // 切换风格
  switchStyle = (style) => {
    this.themeStyle = style;
    localStorage.setItem('themeStyle', style);
  };

  // 切换主题色
  switchColor = (color) => {
    this.theme.primaryColor = color;
    localStorage.setItem('primaryColor', color);
  };
}

export default ConfigStore;
