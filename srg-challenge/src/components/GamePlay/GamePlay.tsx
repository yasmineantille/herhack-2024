import {Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import CloseIcon from '@mui/icons-material/Close';
import "./GamePlay.css";

interface GamePlayProps {
    className?: string;
    showHelp: boolean;
    toggleShowHelp: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({showHelp, toggleShowHelp}) => {

    return (
        <Card sx={{ minWidth: 275 }} className={`gameplay ${showHelp ? 'show': 'hide'}`}>
            <CardHeader
                avatar={
                   <Avatar style={{height: '100px', width: '100px'}} />
                }
                action={
                    <IconButton aria-label="settings" onClick={toggleShowHelp}>
                        <CloseIcon />
                    </IconButton>
                }
                title="Skyline Scoop"
                subheader="Detective of digital truth"
            />
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Gameplay
                </Typography>
                <Typography variant="body2">
                    Hi, I'm Scoopy! I'm a detective of digital truth. I'm here to help you learn how to spot fake news and misinformation online. Let's get started!
                </Typography>
            </CardContent>
        </Card>
    );
}

export default GamePlay;