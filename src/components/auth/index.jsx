import { Navigate } from 'react-router-dom';

// 路由鉴权
function Auth({ children }) {
  const token = '';
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default Auth;
