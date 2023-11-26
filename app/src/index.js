import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/app";
import Login from './components/login';
import Register from "./components/register";
import NewAnnouncement from "./components/NewAnnouncement";
import NotFound from "./components/NotFound";
import {Provider} from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
);