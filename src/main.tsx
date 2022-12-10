import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./components/providers";
import { Router } from "./components/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);
