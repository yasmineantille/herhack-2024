import React from 'react';
import { Container, Box, Typography, Grid2 as Grid } from '@mui/material';
import { StyledFlippableCard, SectionTitle, TweetCard, TweetAvatar } from '../StyledComponents/StyledComponents';
import FlippableCard from '../FlippableCard/FlippableCard';
import './QuoteBuilding.css';

const QuoteBuilding = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h3" align="center" color="primary" gutterBottom>
                Wie erkennt man eine zuverlässige Quelle?
            </Typography>

            <Box sx={{ my: 4 }}>
                <Grid container spacing={3}>
                    <Grid size={{xs:12, md:6}}>
                        <FlippableCard
                            title={'Zeitungen & Nachrichtenwebseiten'}
                            icon={'newspaper'}
                            flipsideText={'Oft zuverlässiger, da sie Informationen prüfen.'}
                        />
                    </Grid>
                    <Grid size={{xs:12, md:6}}>
                        <FlippableCard
                            title={'Soziale Medien'}
                            icon={'connect'}
                            flipsideText={'Informationen sind selten überprüft, besser woanders bestätigen.'}
                        />
                    </Grid>
                    <Grid size={{xs:12, md:6}}>
                        <FlippableCard
                            title={'Blogs'}
                            icon={'locallibrary'}
                            flipsideText={'Häufig Meinungen, nicht immer überprüft.'}
                        />
                    </Grid>
                    <Grid size={{xs:12, md:6}} >
                        <FlippableCard
                            title={'Zusätzliche Quellen'}
                            icon={'book'}
                            flipsideText={'Wenn mehrere seriöse Seiten dieselbe Info teilen, ist sie oft glaubwürdig.'}
                        />
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <StyledFlippableCard>
                        <Typography variant="h5" color="secondary">
                            Sprache beachten
                        </Typography>
                        <Typography>
                            Sensationelle Wörter können auf weniger vertrauenswürdige Inhalte hinweisen.
                        </Typography>
                    </StyledFlippableCard>
                </Box>
            </Box>
        </Container>
    );
};

export default QuoteBuilding;