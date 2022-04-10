import { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import NotFound from '@/pages/404';
function RouterConfig() {
  return (
    <Router>
      <Suspense fallback={<>loading ...</>}>
        <Routes>
          {routes?.map((item) => (
            <Route path={item.path} element={<item.component />} key={item.name}>
              {item.children?.map((child) => (
                <Route path={child.path} element={<child.component />} key={child.name} />
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default RouterConfig;