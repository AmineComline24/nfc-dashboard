import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Typography, TextField } from '@mui/material';

const EnterCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleButtonClick = () => {
    if (code.length === 4) {
      navigate('/dashboard');
    } else {
      alert('Veuillez entrer un code à 4 chiffres.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item xs={12} style={{ textAlign: 'left' }}>
          <img src={"Logo.png"} alt="Logo de CYBER GUARD" style={{ height: '150px' }} />
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">Bienvenue sur CYBER GUARD</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center">Veuillez entrer le code</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="text"
            value={code}
            onChange={handleCodeChange}
            variant="outlined"
            placeholder="Entrez votre code"
            inputProps={{ maxLength: 4, pattern: "\d*" }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>Suivant</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EnterCode;
