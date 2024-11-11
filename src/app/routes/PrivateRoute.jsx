// import { lazy } from 'react';
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute.jsx";

const PrivateRoute = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <p>Private Page</p>,
      },
    ],
  },
];

export default PrivateRoute;
