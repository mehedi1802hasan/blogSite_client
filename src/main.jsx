import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { Provider } from 'react-redux'

import Providerr from './Pages/LoginRegistration/Provider';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <Providerr>
  <RouterProvider router={router} />
  </Providerr>
  </Provider>
  </React.StrictMode>,
)
