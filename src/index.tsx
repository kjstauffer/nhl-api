import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
// eslint-disable-next-line import/no-unassigned-import
import './App.css';

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
