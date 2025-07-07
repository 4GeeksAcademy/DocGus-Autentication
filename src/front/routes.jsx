import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import ProtectedRoute from "./pages/ProtectedRoute"; // <-- importa tu wrapper

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/private",
    element: (
      <ProtectedRoute>
        <Private />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export { router };
