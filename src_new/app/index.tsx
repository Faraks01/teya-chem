import "./index.css";
import { ThemeProvider } from "@mui/system";
import Routing from "../pages";
import mainTheme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => (
  <BrowserRouter>
    <ThemeProvider<typeof mainTheme> theme={mainTheme}>
      <Routing />

      {/* Toasts Notifications */}
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
