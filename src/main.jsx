import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Upload from "./components/Upload.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IDEAS from "./components/IDEAS.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <IDEAS />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
