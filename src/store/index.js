import React from 'react';
import ConfigStore from './config.Store';
class RootStore {
  constructor() {
    this.configStore = new ConfigStore();
  }
}

// 实例化根store
const context = React.createContext(new RootStore());
export const useStore = () => React.useContext(context);
