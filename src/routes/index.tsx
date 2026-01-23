import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Loader from "../components/common/Loader";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const ErrorPage = lazy(() => import("../pages/Error"));

export const router = createBrowserRouter([
  {
    element: (
      // Best Practice: Wrap the Layout in Suspense so all children use it
      <Suspense fallback={<Loader />}>
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