// import NotFound from "@pages/NotFound/NotFound";
import PrivateRoute from "@app/routes/PrivateRoute";
import PublicRoute from "@app/routes/PublicRoute";
import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    // errorElement: <NotFound />,
    children: [...PublicRoute, ...PrivateRoute],
  },
]);

export default router;
