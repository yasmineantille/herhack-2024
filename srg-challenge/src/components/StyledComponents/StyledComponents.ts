// src/components/StyledComponents.js
import { Card, Typography, Paper, Avatar, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(2),
}));

export const TweetCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: '#f0f2f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
}));

export const TweetAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(1),
}));
