import ReactDOM from "react-dom/client";
import router from "./router/Router.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
  <RouterProvider router={router} />
  // </AuthProvider>,
);
