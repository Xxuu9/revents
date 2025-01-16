import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/layout/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    <RouterProvider router={router} />
  </StrictMode>
);
