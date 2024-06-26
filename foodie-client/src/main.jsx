import ReactDOM from "react-dom/client";
import router from "./router/Router.jsx";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    //{" "}
  </AuthProvider>
);
