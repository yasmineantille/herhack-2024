import React from 'react';
import './App.css';
import City from "./components/City/City";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import WorkDesk from "./components/WorkDesk/WorkDesk";
import TitleBuilding from "./components/TitleBuilding/TitleBuilding";

function App() {


  return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<City />} />
                    <Route path="title" element={<TitleBuilding />} />
                    <Route path="workdesk" element={<WorkDesk />} />
                </Route>
            </Routes>
        </Router>
  );
}

export default App;
