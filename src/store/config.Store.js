import { makeAutoObservable } from 'mobx';
import i18n from 'i18next';

// 全局配置
class ConfigStore {
  constructor() {
    makeAutoObservable(this);
  }

  locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh_CN'; // 默认中文
  themeStyle = localStorage.getItem('themeStyle') ? localStorage.getItem('themeStyle') : 'dark'; // 整体风格
  theme = {
    primaryColor: localStorage.getItem('primaryColor') ? localStorage.getItem('primaryColor') : '#1890FF',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
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
