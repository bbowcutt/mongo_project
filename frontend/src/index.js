import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import Stores, { fetchStore } from './Stores';
import SingleStore, { getStore } from './SingleStore.js';
import CreateProduct from './NewStore.js'; 
import Items, { getItems } from './Items';

import SingleItem, { getItem } from './SingleItem.js';
import CreateItem, {getItemNew} from './NewItem.js'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
        children: [
            {
                path: "/stores",
                loader: fetchStore,
                element: <Stores />,
            },
            {
                path: "/stores/:storeId",
                loader: getStore,
                element: (
                    <SingleStore />
                ),
            },
            {
                path: "/stores/new",
                element: (
                    <CreateProduct />
                ),
            },
            {
                path: "/stores/:storeId/items/:itemId",
                loader: getItem,
                element: (
                    <SingleItem />
                ),
            },
            {
                path: "/stores/:storeId/items/new",
                loader: null,
                element: (
                    <CreateItem />
                ),
            },
            {
                path: "/stores/:storeId/items",
                loader: getItems,
                element: (
                    <Items />
                ),
            }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
