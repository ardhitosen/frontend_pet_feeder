import React from 'react';
import { Container, Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const PetFeederPage = () => {


  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, mb:2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" /*sx={{ flexGrow: 1 }}*/>
              Home
            </Typography>
            <Typography variant="h5" component="div" align='center' sx={{ flexGrow: 1 }}>
              Automatic Pet Feeder
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
      </Box>
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
      <Button variant="contained" color="primary" fullWidth sx={{ flexGrow: 1, mt:2 }}>
        Feed My Pet
      </Button>
    </Container>
  );
};

export default PetFeederPage;
