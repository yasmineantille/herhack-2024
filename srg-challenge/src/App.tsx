import React, {useEffect} from 'react';
import './App.css';
import City from "./components/City/City";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import WorkDesk from "./components/WorkDesk/WorkDesk";
import TitleBuilding from "./components/TitleBuilding/TitleBuilding";
import QuoteBuilding from "./components/QuoteBuilding/QuoteBuilding";
import {CssBaseline, ThemeProvider} from "@mui/material";
import getTheme from "./theme";
import EditorView from "./components/EditorView/EditorView";

function App() {

    useEffect(() => {
        document.title = "Skyline Scoop";
    }, []);


    return (
        <ThemeProvider theme={getTheme('light')}>
            <CssBaseline/>
            <Router basename={ROOT}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<City/>}/>
                        <Route path="title" element={<TitleBuilding/>}/>
                        <Route path="workdesk" element={<WorkDesk/>}/>
                        <Route path="quote" element={<QuoteBuilding/>}/>
                        <Route path="editor" element={<EditorView/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;

export const ROOT = "/herhack-2024";