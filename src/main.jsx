import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {AppRoute} from "./routes/AppRoutes.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
  </React.StrictMode>,
)
