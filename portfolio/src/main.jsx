import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import ContextProvider from "./components/contextApi/ContextProvider.jsx";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </BrowserRouter>
);
