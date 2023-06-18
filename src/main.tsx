import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Admin from './pages/Admin.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import globalTheme from './styles/global.ts';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard.tsx';
import { AuthProvider } from './hooks/AuthContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={globalTheme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
