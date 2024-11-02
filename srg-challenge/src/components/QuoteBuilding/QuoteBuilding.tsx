import React from 'react';
import { Container, Box, Typography, Grid2 as Grid } from '@mui/material';
import { StyledSourceCard, SectionTitle, TweetCard, TweetAvatar } from '../StyledComponents/StyledComponents';
import { EmojiObjects, LocalLibrary, Info } from '@mui/icons-material';
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
                        <StyledSourceCard>
                            <LocalLibrary color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Blogs
                            </Typography>
                            <Typography>
                                Häufig Meinungen, nicht immer überprüft.
                            </Typography>
                        </StyledSourceCard>
                    </Grid>
                    <Grid size={{xs:12, md:6}}>
                        <StyledSourceCard>
                            <Info color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Zusätzliche Quellen
                            </Typography>
                            <Typography>
                                Wenn mehrere seriöse Seiten dieselbe Info teilen, ist sie oft glaubwürdig.
                            </Typography>
                        </StyledSourceCard>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <StyledSourceCard>
                        <Typography variant="h5" color="secondary">
                            Sprache beachten
                        </Typography>
                        <Typography>
                            Sensationelle Wörter können auf weniger vertrauenswürdige Inhalte hinweisen.
                        </Typography>
                    </StyledSourceCard>
                </Box>
            </Box>
        </Container>
    );
};

export default QuoteBuilding;