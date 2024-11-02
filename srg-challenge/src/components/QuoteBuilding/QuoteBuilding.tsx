import React from 'react';
import { Container, Box, Typography, Grid2 as Grid } from '@mui/material';
import FlippableCard from '../FlippableCard/FlippableCard';
import './QuoteBuilding.css';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';

const QuoteBuilding = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h3" align="center" color="primary" gutterBottom>
                How to Recognize a Reliable Source?
            </Typography>

            <Box sx={{ my: 4 }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FlippableCard
                            title={'Newspapers & News Websites'}
                            icon={'newspaper'}
                            flipsideText={'Often more reliable, as they check information.'}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FlippableCard
                            title={'Social Media'}
                            icon={'connect'}
                            flipsideText={'Information is rarely verified; better to confirm elsewhere.'}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FlippableCard
                            title={'Blogs'}
                            icon={'locallibrary'}
                            flipsideText={'Often opinions, not always verified.'}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FlippableCard
                            title={'Additional Sources'}
                            icon={'book'}
                            flipsideText={'If several reputable sites share the same info, it’s often credible.'}
                        />
                    </Grid>
                </Grid>
            </Box>
            <div className="avatarContainer">
                <Avatar className="avatar" />
                <div className="speech-bubble neutral">
                    <h4>Pay Attention to Language</h4>
                    <p>
                        Sensational words can indicate less trustworthy content.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default QuoteBuilding;
