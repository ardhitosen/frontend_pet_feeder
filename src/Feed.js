import React, {useState} from 'react';
import { List, ListItem, Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Feed.css";
import '@fontsource/roboto/500.css';
import NavBawah from './NavBawah';
import { useNavigate } from 'react-router-dom';

const FeedPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [pet] = useState({
    id: 1,
    name: "ANJING",
    PorsiMakan : "200",
    FeedingSchedules: ["08.00 AM","15.00 PM"],
    imageUrl: "dog.jpg", // Replace with the actual URL of your pet's image
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/feed');
        break;
      case 2:
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
        <Grid className="feeder" container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
            {pet.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
            Porsi
            </Typography>
            <Typography variant="h5" gutterBottom>
            {pet.PorsiMakan} Grams
            </Typography>
            <List>
                {pet.FeedingSchedules.map((time, index) => (
                    <ListItem key={index} id="list"> 
                    {time}
                </ListItem>
                ))}
            </List>
            <Button style={{margin:'10px'}} variant="contained">Edit Schedules</Button>
            <Button variant="contained">Edit Portion</Button>
        </Grid>
        </Grid>
      <NavBawah value={value} onChange={handleChange} />
    </div>
  );
};

export default FeedPage;
