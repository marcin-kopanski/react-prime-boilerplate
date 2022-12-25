import React from "react";
import ReactDOM from "react-dom/client";

//theme
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primeflex/primeflex.css";
//core css
import "primeicons/primeicons.css";

import { Providers } from "./components/providers";
import { Router } from "./components/router";
import "./main.css";

//icons

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);
