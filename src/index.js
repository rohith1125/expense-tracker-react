import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExpenseTrackerProvider } from './Contexts/ExpenseTrackerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseTrackerProvider>
    <App />
    </ExpenseTrackerProvider>
  </React.StrictMode>
);

reportWebVitals();
