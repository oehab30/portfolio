import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Loader from "../components/common/Loader";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const ErrorPage = lazy(() => import("../pages/Error"));

// Global Loading Component using the new premium Loader
const PageLoader = () => <Loader />;

export const router = createBrowserRouter([
  {
    element: (
      // Best Practice: Wrap the Layout in Suspense so all children use it
      <Suspense fallback={<PageLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "*", 
        element: <ErrorPage /> 
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;