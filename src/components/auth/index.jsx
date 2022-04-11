import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/token';

// 路由鉴权
function Auth({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default Auth;
