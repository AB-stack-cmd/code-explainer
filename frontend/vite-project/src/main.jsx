import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'

const root = document.getElementById("root")
// document.body.innerHTML= "helloS"

createRoot(root).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
