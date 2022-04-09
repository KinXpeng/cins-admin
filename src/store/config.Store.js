import { makeAutoObservable } from 'mobx';

// 全局配置
class ConfigStore {
  constructor() {
    makeAutoObservable(this);
  }

  locale = 'zh_CN'; // 默认中文
  themeStyle = 'dark'; // 整体风格
  theme = {
    // primaryColor: '#25b864', // 主色调
    primaryColor: '#1890FF',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  };

  // 语言切换
  switchLanguage = (lang) => {
    this.locale = lang;
  };

  // 切换风格
  switchStyle = (style) => {
    this.themeStyle = style;
  };

  // 切换主题色
  switchColor = (color) => {
    this.theme.primaryColor = color;
  };
}

export default ConfigStore;
