import {Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import CloseIcon from '@mui/icons-material/Close';

interface GamePlayProps {
    className?: string;
}

const GamePlay: React.FC<GamePlayProps> = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                   <Avatar style={{height: '100px', width: '100px'}} />
                }
                action={
                    <IconButton aria-label="settings">
                        <CloseIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Gameplay
                </Typography>
                <Typography variant="h5" component="div">
                    fhejifhw
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default GamePlay;