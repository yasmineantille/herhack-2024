import React from 'react';
import './GameBar.css';
import {Link, useLocation} from "react-router-dom";

interface BarProps {
    className?: string;
}

const GameBar: React.FC<BarProps> = ({className}) => {
    const location = useLocation();

    const getButtonText = () => {
        switch (location.pathname) {
            case '/workDesk':
                return 'Back to the city';
            default:
                return 'Write your article';
        }
    };

    const getButtonLink = () => {
        switch (location.pathname) {
            case '/':
                return '/workDesk';
            default:
                return '/';
        }
    }

    return (
        <div className={className}
             style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', padding: '10px'}}>
            <Link to={getButtonLink()} style={{textDecoration: 'none'}}>
                <button style={{
                    padding: '5px 10px',
                    borderRadius: '4px',
                    height: 'auto',
                    width: 'auto',
                    color: 'white',
                }}
                >{getButtonText()}</button>
            </Link>
        </div>
    );
};

export default GameBar;
