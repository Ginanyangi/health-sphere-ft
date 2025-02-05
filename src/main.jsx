import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { AuthProvider } from './components/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
     <App />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
