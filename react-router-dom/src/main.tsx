import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Profile from "./pages/Profile.tsx";
import Error from "./pages/Error.tsx";

// const router = BrowserRouter({
//   basename: "/",
//   children: <Profile />,
// });

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <h2>Profile id not match</h2>,
  },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
