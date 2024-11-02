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
        <Card sx={{ minWidth: 475 }} className={`gameplay ${showHelp ? 'show': 'hide'}`}>
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
                    Hi, I'm Scoopy! I'm a detective of digital truth. I'm here to help you learn how to spot fake news and misinformation online.
                </Typography>
                <Typography variant="body2">
                    To get started click on any location in town to begin your investigation. You'll be presented with information that you'll need to write an unbiased and trustworthy article
                </Typography>
                <Typography variant="body2">
                    Be careful though, there are some tricky articles out there that are trying to fool you. You'll need to be on the lookout for clickbait and fake news.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default GamePlay;