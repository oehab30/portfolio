import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "./components/common/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      {loading && <Loader onFinished={() => setLoading(false)} />}
      <div className={loading ? "hidden" : "contents"}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
