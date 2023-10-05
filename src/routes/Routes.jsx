import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/logIn/Login";
import Register from "../components/register/Register";
import HandleError from "../handleError/HandleError";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <HandleError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
