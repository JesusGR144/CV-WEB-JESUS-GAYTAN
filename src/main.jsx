import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importar Preline
import 'preline/preline';

// Inicializar Preline después de que el DOM se cargue
if (typeof window !== 'undefined') {
  import('preline/preline').then(() => {
    window.HSStaticMethods?.autoInit();
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)