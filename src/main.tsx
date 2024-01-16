import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import BaseSnackbar from "./components/base/BaseSnackbar/BaseSnackbar.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

export type AppDispatch = typeof store.dispatch;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <div>Test route</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <BaseSnackbar />
    </Provider>
  </React.StrictMode>
);
