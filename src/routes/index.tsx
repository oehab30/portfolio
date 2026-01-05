import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Loader2 } from "lucide-react";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const ErrorPage = lazy(() => import("../pages/Error"));
// Added missing imports below:

// Global Loading Component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
    <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
  </div>
);

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
  
    
     
    ],
  },
  { 
    path: "*", 
    element: (
      <Suspense fallback={<PageLoader />}>
        <ErrorPage />
      </Suspense>
    ) 
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;