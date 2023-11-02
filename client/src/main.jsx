import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MagicShop from './Pages/MagicShop/MagicShop.jsx';
import Home from './Pages/Home/Home.jsx';

// creates the router that guides our endpoints
const router = createBrowserRouter ([
  {
    path: '/',
    // root pathway, not index page
    element: <App />,
    children: [
      {
        index: true,
        element: <MagicShop />
      },
      {
        path: 'magicshop',
        element: <MagicShop />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);