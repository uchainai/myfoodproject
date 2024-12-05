import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Saifullsir/Form.jsx";
import AppOne from "./AppOne.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Form /> */}
    {/* <AppOne/> */}
  </StrictMode>
);
