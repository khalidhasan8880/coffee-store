import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Edit from './components/Edit.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch(`http://localhost:5000/coffee`)
  },
  {
    path: "/edit/:id",
    element: <Edit></Edit>,
    loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update-coffee",
    element: <UpdateCoffee></UpdateCoffee>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)