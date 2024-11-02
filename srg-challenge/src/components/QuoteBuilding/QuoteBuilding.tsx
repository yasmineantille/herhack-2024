import React from 'react';
import { Container, Box, Typography, Grid2 } from '@mui/material';
import { StyledCard, SectionTitle, TweetCard, TweetAvatar } from '../StyledComponents/StyledComponents';
import { Newspaper, Twitter, EmojiObjects, LocalLibrary, Info } from '@mui/icons-material';

const QuoteBuilding = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
            {/* Page Title */}
            <Typography variant="h3" align="center" color="primary" gutterBottom>
                Wie erkennt man eine zuverlässige Quelle?
            </Typography>

            {/* Source Types Section */}
            <Box sx={{ my: 4 }}>
                <SectionTitle variant="h4" gutterBottom>
                    Art der Quelle
                </SectionTitle>
                <Grid2 container spacing={3}>
                    <Grid2 size={{xs:12, md:6}}>
                        <StyledCard>
                            <Newspaper color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Zeitungen & Nachrichtenwebseiten
                            </Typography>
                            <Typography>
                                Oft zuverlässiger, da sie Informationen prüfen.
                            </Typography>
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={{xs:12, md:6}}>
                        <StyledCard>
                            <EmojiObjects color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Soziale Medien
                            </Typography>
                            <Typography>
                                Informationen sind selten überprüft, besser woanders bestätigen.
                            </Typography>
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={{xs:12, md:6}}>
                        <StyledCard>
                            <LocalLibrary color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Blogs
                            </Typography>
                            <Typography>
                                Häufig Meinungen, nicht immer überprüft.
                            </Typography>
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={{xs:12, md:6}}>
                        <StyledCard>
                            <Info color="action" fontSize="large" />
                            <Typography variant="h5" color="primary">
                                Zusätzliche Quellen
                            </Typography>
                            <Typography>
                                Wenn mehrere seriöse Seiten dieselbe Info teilen, ist sie oft glaubwürdig.
                            </Typography>
                        </StyledCard>
                    </Grid2>
                </Grid2>
                <Box mt={3}>
                    <StyledCard>
                        <Typography variant="h5" color="secondary">
                            Sprache beachten
                        </Typography>
                        <Typography>
                            Sensationelle Wörter können auf weniger vertrauenswürdige Inhalte hinweisen.
                        </Typography>
                    </StyledCard>
                </Box>
            </Box>

            {/* Halloween Tradition Section */}
            <Box sx={{ my: 4 }}>
                <SectionTitle variant="h4" gutterBottom>
                    Warum werden geschnitzte Kürbisse an Halloween aufgestellt?
                </SectionTitle>
                <Grid2 container spacing={3}>
                    <Grid2 size={{xs:12}}>
                        <StyledCard>
                            <Typography variant="h6" color="primary">
                                Erste Quelle
                            </Typography>
                            <Typography>
                                <strong>Genevieve (12)</strong>, die schon seit langer Zeit in der Schweiz lebt, schnitzt mit ihrer amerikanischen Familie jedes Jahr Kürbisse, die mit einer Kerze beleuchtet werden – die sogenannten «Jack O'Lanterns». Sie werden dann vor die Haustür gestellt und vertreiben die bösen Geister. Gleichzeitig signalisieren sie den Kindern an der Halloweennacht, dass jemand Zuhause ist und die Kinder an der Tür klingeln können.
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                Quelle: SRF Kids
                            </Typography>
                        </StyledCard>
                    </Grid2>

                    <Grid2 size={{xs:12}}>
                        {/* Second Source Styled as Tweet */}
                        <TweetCard>
                            <Box display="flex" alignItems="center" mb={1}>
                                <TweetAvatar alt="Genevieve" src="/path/to/avatar.png" />
                                <Box ml={2}>
                                    <Typography variant="body1">
                                        <strong>@Genevieve_SwissUSA</strong>
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        Oct 31
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body2">
                                Jedes Jahr schnitze ich mit meiner Familie riesige Kürbisse – die sogenannten «Jack O'Lanterns» und stelle sie vor die Haustür. So wissen die Kinder, dass dort Hexen gibt! 🎃👻 #Halloween #JackOLantern #Tradition
                            </Typography>
                            <Twitter color="primary" fontSize="small" />
                        </TweetCard>
                    </Grid2>

                    <Grid2 size={{xs:12}}>
                        <StyledCard>
                            <Typography variant="h6" color="primary">
                                Dritte Quelle
                            </Typography>
                            <Typography>
                                Die Amerikaner schnitzen jedes Jahr Kürbisse, die mit einer Kerze beleuchtet werden – die sogenannten «Jack O'Lanterns». Sie werden vor die Haustür gestellt, um die Kinder zu erschrecken und sie davon abzuhalten, zu klingeln.
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                Quelle: spookycarvingtips.com
                            </Typography>
                        </StyledCard>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
};

export default QuoteBuilding;
