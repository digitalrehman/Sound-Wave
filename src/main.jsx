import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProviderProduct } from "./context/ContextProduct.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProviderProduct>
      <App />
    </ProviderProduct>
  </BrowserRouter>
);