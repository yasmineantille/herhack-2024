import { Outlet } from "react-router-dom";
import GameBar from "../GameBar/GameBar";
import "./Layout.css";

const Layout = () => {
    return (
        <div className="container">
            <Outlet />
            <GameBar className="gameBar"></GameBar>
        </div>
    )
};

export default Layout;