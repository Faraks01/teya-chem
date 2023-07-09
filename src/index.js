import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/system";
import {mainTheme} from "./theme";
import {PriceCalculatorContextWrapper} from "./components/PriceCalculator/PriceCalculator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <PriceCalculatorContextWrapper key='PriceCalculatorContextWrapper'>
        <App />
      </PriceCalculatorContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
