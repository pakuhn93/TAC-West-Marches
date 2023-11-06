// boiler plate react stuff
import React from 'react' ;
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// router stuff 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages included on the website
import Home from './Pages/Home.jsx';
import MagicItemShop from './Pages/MagicItemShop.jsx';
import MagicItemDatabase from './Pages/MagicItemDatabase.jsx';

// initialize the router (similar to express)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // *** CURRENT LANDING PAGE IS NOT PERMANENT ***
        index: true,
        element: <Home />,
      },
      {
        path: '/magicitemshop',
        element: <MagicItemShop />
      },
      {
        path: '/magicitemdatabase',
        element: <MagicItemDatabase />
      },
    ]
  }
]);

// renders the current html document with the appropriate ReactDOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);