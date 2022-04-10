import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// 引入antd样式文件
import 'antd/dist/antd.variable.min.css';
// 引入全局样式文件
import './index.scss';
// 引入国际化
import './i18n/i18n';

createRoot(document.getElementById('root')).render(<App />);
