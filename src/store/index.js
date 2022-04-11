import React from 'react';
import ConfigStore from './config.Store';
import LoginStore from './login.Store';
class RootStore {
  constructor() {
    this.configStore = new ConfigStore();
    this.loginStore = new LoginStore();
  }
}

// 实例化根store
const context = React.createContext(new RootStore());
export const useStore = () => React.useContext(context);
