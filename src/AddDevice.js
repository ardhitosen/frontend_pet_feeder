import React, { useEffect, useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDevice = () => {
  const [model, setModel] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const navigate = useNavigate();
  let user_id = "";
  let token = "";

  const user = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    if (!user || user.user_id === null) {
      console.log('Redirecting to /');
      navigate('/');
    } else {
      user_id = user.user_id;
      token = user.access_token;
      console.log(user_id);
    }
  },[user_id, token]);
  
  const handleAddDevice = async () => {
    try {
      // Assuming you have the user's ID stored in localStorage
      const user = JSON.parse(localStorage.getItem('userData'));
      const user_id = user.user_id;

      // Make a POST request to add a new device
      await axios.post(`${process.env.REACT_APP_BACKEND_ADDRESS}/device/${user_id}`, {
        model,
        mac_address: macAddress,
        user_id,
      });

      // Redirect to the Devices page or any other page
      navigate('/Devices');
    } catch (error) {
      console.error('Adding device failed', error);
    }
  };

  return (
    <div className="iphone">
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add Device
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddDevice();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="model"
            label="Model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="macAddress"
            label="MAC Address"
            type="text"
            id="macAddress"
            value={macAddress}
            onChange={(e) => setMacAddress(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained" color="success" className="MUI-button-instance"
            sx={{ml: 14}}
          >
            Add Device
          </Button>
        </Box>
      </Box>
    </Container>
    </div>
  );
};

export default AddDevice;
