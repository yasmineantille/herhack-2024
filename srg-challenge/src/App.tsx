import React from 'react';
import './App.css';
import City from "./components/City/City";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GameBar from "./components/GameBar/GameBar";
import Layout from "./components/Layout/Layout";

function App() {


  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<City />} />
                    <Route path="gameOne" element={<City />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
