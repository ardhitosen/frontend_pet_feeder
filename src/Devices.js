import React, {useState, useEffect} from 'react';
import { Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';
import { Accordion,AccordionSummary,AccordionDetails} from '@mui/material';
import { Table ,TableBody ,TableContainer ,Paper ,TableCell ,TableHead ,TableRow ,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Devices.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/500.css';

const Devices = () => {

  const navigate = useNavigate();
  let user_id = "";
  let token = "";
  
  const user = JSON.parse(localStorage.getItem('userData'));
  console.log('user:', user);
  
  
  
    const [devices, setDevices] = useState([]);

    const [selectedDevice, setSelectedDevice] = useState(null);


    useEffect(()=> {
    console.log(user_id);
    
    if (!user || user.user_id === null) {
      console.log('Redirecting to /');
      navigate('/');
    } else {
      user_id = user.user_id;
      localStorage.setItem('user_id', user.user_id);
      token = user.access_token;
    }
    
    const GetDevices = async() => {
        try{
          console.log("TES");
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/device/${user_id}`,{
            headers: {
              Authorization: 'Bearer ${token}',
            },
          });
          setDevices(response.data);
          console.log(devices);
        } catch(error){
          console.error('No Devices', Error);
        }
      };
      GetDevices();
    },[user_id, token]);

    const handleDeviceSelect = (device) => {
        setSelectedDevice(device);
        console.log(device.device_id);
        localStorage.setItem('deviceID', device.device_id);
        navigate('/Pet');

      };

      const handleAddDevice = () =>{
        navigate('/adddevice')
      };

    return (
        <div className="container">
        <Typography variant="h5" gutterBottom>
          Select your device
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Grid container spacing={3}>
            {devices.map((device, index) => (
              //<Grid item xs={12} sm={6} md={4} key={index}>
              <Grid item key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{device.model}</Typography>
                    <Button onClick={() => handleDeviceSelect(device)} variant="outlined">
                      Select
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        <Button onClick={() => handleAddDevice()}variant="outlined">
          + Add Device
        </Button>
      </div>
    );
};

export default Devices;
