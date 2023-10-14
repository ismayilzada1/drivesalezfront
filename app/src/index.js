import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from "./components/app";
import Login from './components/login';
import Register from "./components/register";
import NewAnnouncement from "./components/NewAnnouncement";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </React.StrictMode>
);