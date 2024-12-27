import CreateChat from "Molecules/CreateChat";
import Code from "Pages/Code";
import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Layout from "Templates/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createchat",
        element: <CreateChat />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/code",
    element: <Code />,
  },
]);
