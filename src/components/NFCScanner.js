import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NFCScanner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/enter-code');
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'left' }}>
          <img src={"Logo.png"} alt="Logo de CYBER GUARD" style={{ height: '150px' }} />
        </Grid>
        {/* Contenu central */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Bienvenue sur CYBER GUARD</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">Veuillez scanner votre carte NFC</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>Scanner</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NFCScanner;
