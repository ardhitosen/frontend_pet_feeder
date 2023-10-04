import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const PetFeederPage = () => {


  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Automatic Pet Feeder
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Feeding Schedule
              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Food Status
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" fullWidth>
        Feed My Pet
      </Button>
    </Container>
  );
};

export default PetFeederPage;
