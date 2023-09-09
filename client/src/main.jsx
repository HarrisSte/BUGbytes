import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './index.css';

import { CurrentUserProvider } from './context';

import App from './App';
import Error from './pages/Error';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SingleGame from './pages/SingleGame';
import Results from './pages/Results/ResultsPage';

import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route index element={<Homepage />} />

      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='/results' element={<Results />} />
      <Route path='/game/:gameId' element={<SingleGame />} />

      <Route
        path='profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <CurrentUserProvider>
        <RouterProvider router={router} />
      </CurrentUserProvider>
    </CookiesProvider>
  </React.StrictMode>
);
