import React from 'react';
import { createRoot } from 'react-dom/client';
import './services/styles/index.css';
import App from './App';
import { AppProvider } from './context/AppContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
