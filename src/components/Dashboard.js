import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item xs={12} style={{ textAlign: 'left' }}>
          <img src={"Logo.png"} alt="Logo de CYBER GUARD" style={{ height: '150px' }} />
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">Bienvenue sur CYBER GUARD</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center">Dashboard</Typography>
        </Grid>
        <Grid item container spacing={3} justifyContent="center">
          {[1, 2, 3].map((dataCenter) => (
            <Grid key={dataCenter} item xs={12} sm={6} md={4}>
              <div className="data-center-card">
                <img src={"Datacenter.png"} alt={`Data Center ${dataCenter}`} />
                <div className="data-center-buttons">
                  <Button variant="outlined" color="secondary">Éteindre</Button>
                  <Button variant="contained" color="primary">Allumer</Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Button className="logout-button" variant="contained" color="primary" onClick={handleLogout}>Se Déconnecter</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
