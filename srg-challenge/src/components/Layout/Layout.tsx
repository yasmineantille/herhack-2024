import { Outlet } from "react-router-dom";
import GameBar from "../GameBar/GameBar";
import "./Layout.css";
import GamePlay from "../GamePlay/GamePlay";
import { useState } from "react";

const Layout = () => {

    const [showHelp, setShowHelp] = useState(true);

    const toggleShowHelp = () => {
        setShowHelp(prevShowHelp => !prevShowHelp);
    };

    return (
        <div className="container">
            <Outlet />
            <GameBar className="gameBar" toggleShowHelp={toggleShowHelp}></GameBar>
            <GamePlay showHelp={showHelp} toggleShowHelp={toggleShowHelp}/>
        </div>
    )
};

export default Layout;