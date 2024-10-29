import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contac from "./components/Conctact/Contac";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contac></Contac>,
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
