import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App, { Welcome } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Welcome></Welcome>
    <App />
  </StrictMode>
);
