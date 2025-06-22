import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App.jsx';
import Dashboard from './pages/dashboard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
     
    {/* < Dashboard /> */}
  </HashRouter>
)
