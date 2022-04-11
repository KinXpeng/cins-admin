# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project introduction

- 项目是基于 `create-react-app` 脚手架搭建的后台管理系统（react18版本），所有页面及功能采用函数式组件及hooks实现。
- 所用技术/UI框架
  - 脚手架：`create-react-app`
  - React Hooks
  - 路由（v6版本）：`react-router-dom`  
  - 全局状态管理：`mobx` `mobx-react-lite`
  - CSS预编译器（css Modules）：`sass`
  - UI框架：`antd`
  - 配置别名（配置@路径简化路径处理）：`@craco/craco`
  - 国际化：`i18next` `react-i18next`
  - Ajax数据请求：`axios`
- 功能实现：（界面设计参照了antd-pro的风格）
  - 界面风格切换：暗色风格和亮色风格两种。
  - 主题色切换：antd-pro的8种主题色。
  - 国际化：使用 `i18n` 实现国际化，当前支持中英文两种语言的切换。
  - 配置式路由：基于`react-router-dom`实现了和`vue`类似的单独可配置的router，进行统一的管理。
  - 路由鉴权：封装Auth高阶组件，实现登录拦截。
  - axios封装：基于`axios`统一处理，实现请求以及响应拦截，全局接口统一管理。
  - token持久化：封装工具函数使用本地储存实现token持久化。
  - mobx状态管理：以`mobx-react-lite` 作为链接包，实现数据响应式；按功能拆分store，实现mobx的模块化。

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
