import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Errorpage from './pages/Errorpage.jsx';
import GraphBoard from './pages/GraphBoard.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import GraphGrawing from './component/WholeGraph/GraphDrawing.jsx';
import { AppContextProvider } from './help/ContextManager';
// import axiosInstance from './axiosInstance';
// import ProtectedRoute from './component/ProtectRoute.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/newgraph',
    // element: <ProtectedRoute element={GraphBoard} />
    element: <GraphBoard />
  },
  {
    path: '*',
    element: <Errorpage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/signin',
    element: <Login />
  },
  {
    path: '/graphdrawing',
    // element: <ProtectedRoute element={GraphGrawing} />
    element: <GraphGrawing />
  }
]);

const App = () => {
  // useEffect(() => {
  //   // 发起全局 API 请求示例
  //   axiosInstance.get('/api/endpoint') // 替换为你的 API 端点
  //     .then(response => {
  //       console.log('Initial data:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching initial data:', error);
  //     });
  // }, []); // 空依赖数组表示只在组件挂载时运行一次

  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
