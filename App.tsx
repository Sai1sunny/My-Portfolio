import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import AppMainLayout from "./Layouts/AppMainLayout";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import useAppContext from "./context/AppContext/useAppContext";
import { ReactNode } from "react";
import routes from "./routes";
import NoPage from "./pages/NoPage";

function App(): ReactNode {
  const { mode } = useAppContext();

  let theme = createTheme({
    palette: {
      mode: mode,
      // primary: {
      primary: {
        // main: "#f44336",
        main: "#1B512D",
      },
      secondary: {
        // main: "#f50057",
        main: "#F5D500",
      },
      common: {
        white: "#CEDFD9",
      },
    },

    typography: {
      h1: {
        fontSize: 30,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Router>
          <AppMainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {routes.map((item) => (
                <Route
                  key={item.navLabel}
                  path={item.path}
                  element={item.element}
                />
              ))}
              <Route path="*" element={<NoPage />} />
            </Routes>
          </AppMainLayout>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
