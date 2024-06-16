import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import { mainTheme } from "@/config/theme";
import {
  PriceCalculatorContextWrapper,
  DialogMenuContextWrapper,
} from "@/components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <DialogMenuContextWrapper key="DialogMenuContextWrapper">
        <PriceCalculatorContextWrapper key="PriceCalculatorContextWrapper">
          <App />
        </PriceCalculatorContextWrapper>
      </DialogMenuContextWrapper>
    </ThemeProvider>
  </React.StrictMode>,
);
