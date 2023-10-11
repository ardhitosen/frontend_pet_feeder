import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import "./style.css";
import logo from "./images/logo-no-background.png";
import { createTheme } from '@mui/material/styles';

const loginPage = () => {


  return (
    <div className="iphone">
      <img className="logo-no-background" alt="Logo no background" src={logo} />
      <Button variant="contained" color="success" className="MUI-button-instance">
        Login
      </Button>
      <br/>
      <Button variant="contained" color="success" className="MUI-button-2">
        Register
      </Button>
    </div>
  );
  
};

export default loginPage;
