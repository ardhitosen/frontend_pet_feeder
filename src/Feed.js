import React, {useState, useEffect} from 'react';
import { List, ListItem, Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Feed.css";
import axios from 'axios';
import '@fontsource/roboto/500.css';
import NavBawah from './NavBawah';
import { useNavigate } from 'react-router-dom';
import { FormGroup, FormControl, Input, InputLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const FeedPage = () => {
  const petData= JSON.parse(localStorage.getItem('petData'));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [editedPetSchedule, setEditedSchedule] = useState(petData.jam_makan || '');
  const [editedPetPortion, setEditedPortion] = useState(petData.porsi_makan || '');
  const [value, setValue] = useState(1);
  const [pet] = useState({
    name: petData.nama,
    PorsiMakan : petData.porsi_makan,
    FeedingSchedules: petData.jam_makan,
    imageUrl: "dog.jpg", // Replace with the actual URL of your pet's image
  });


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleSubmitSchedule = async () => {
    const updatedPetSchedule = {
      jam_makan: document.getElementById("my-schedule").value,
    };
  
    try {
      console.log(updatedPetSchedule);  
      const response = await axios.put(`http://localhost:8000/pet/edit/jam_makan/${petData.pet_id}`, updatedPetSchedule);
      setEditedSchedule(updatedPetSchedule);
      console.log('Updated successfully');
    } catch (error) {
      console.error('Error', error);
    }
  
    handleClose();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/Pet');
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

  useEffect(()=> {
    console.log("HELLO");
    console.log(petData);
    },[]);

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
            <Typography variant="h5" gutterBottom>
            {editedPetSchedule.jam_makan || pet.FeedingSchedules}
            </Typography>
            
            <Button style={{margin:'10px'}} variant="contained" onClick={handleClickOpen} >Edit Schedules</Button>
            <Button variant="contained" onClick={handleClickOpen2}>Edit Portion</Button>
        </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please put in your pet schedule:
          </DialogContentText>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-schedule">Schedule</InputLabel>
              <Input id="my-schedule" />
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmitSchedule}>Submit</Button>
        </DialogActions>
      </Dialog>
      
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please put in your pet portion:
          </DialogContentText>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-schedule">Portion</InputLabel>
              <Input id="my-schedule" />
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleSubmitSchedule}>Submit</Button>
        </DialogActions>
      </Dialog>

      <NavBawah value={value} onChange={handleChange} />
    </div>
  );
};

export default FeedPage;
