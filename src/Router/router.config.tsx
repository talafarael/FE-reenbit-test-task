import Code from "Pages/Code";
import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
