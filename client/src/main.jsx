import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './index.css'

import { CurrentUserProvider } from './context';

import './index.css'

import App from "./App";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleGame from './pages/SingleGame';
import Search from './components/Search';

import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route index element={<Homepage />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/search' element={<Search />} />
      <Route path="/game/:gameId" element={<SingleGame />} />

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
