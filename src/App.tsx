import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}
