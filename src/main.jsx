import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ListingBooks from "./ListingBooks.jsx";
import AddBook from "./AddBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListingBooks />,
  },
  {
    path: "/add",
    element: <AddBook />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
