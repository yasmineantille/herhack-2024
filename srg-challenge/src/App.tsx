import React from 'react';
import './App.css';
import City from "./components/City/City";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import WorkDesk from "./components/WorkDesk/WorkDesk";
import TitleBuilding from "./components/TitleBuilding/TitleBuilding";
import QuoteBuilding from "./components/QuoteBuilding/QuoteBuilding";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import getTheme from "./theme";

function App() {
  return (
      <ThemeProvider theme={getTheme('light')}>
          <CssBaseline />
        <Router basename={ROOT}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<City />} />
                    <Route path="title" element={<TitleBuilding />} />
                    <Route path="workdesk" element={<WorkDesk />} />
                    <Route path="quote" element={<QuoteBuilding />} />
                </Route>
            </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;

export const ROOT = "/herhack-2024";