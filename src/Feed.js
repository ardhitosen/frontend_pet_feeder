import React, { useState, useEffect } from "react";
import { Table ,TableBody ,TableContainer ,Paper ,TableCell ,TableHead ,TableRow ,  } from '@mui/material';
import {
  List,
  ListItem,
  Avatar,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  Box,
  IconButton,
  CardContent,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Feed.css";
import axios from "axios";
import "@fontsource/roboto/500.css";
import NavBawah from "./NavBawah";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const FeedPage = () => {
  const petData = JSON.parse(localStorage.getItem("petData"));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [history, setHistory] = useState([])
  const [editedPetSchedule, setEditedSchedule] = useState(
    petData.jam_makan || ""
  );
  const [editedPetPortion, setEditedPortion] = useState(
    petData.porsi_makan || ""
  );
  const [value, setValue] = useState(1);
  const [pet] = useState({
    name: petData.nama,
    PorsiMakan: petData.porsi_makan,
    FeedingSchedules: petData.jam_makan,
    imageUrl: "dog.jpg", // Replace with the actual URL of your pet's image
  });

  const handleEditSchedule = (id, value) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.schedule_id === id ? { ...schedule, jam_makan: value } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const GetFeedingTime = async () => {
    try {
      console.log("TES");
      
      const response_feed = await axios.get(
        `${process.env.REACT_APP_BACKEND_ADDRESS}/pet/${petData.pet_id}/feedtime`,
        {
          headers: {
            Authorization: "Bearer ${token}",
          },
        }
      );
      setSchedules(response_feed.data || []);
      console.log(response_feed.data);
      schedules = response_feed.data.map((schedule) => schedule.jam_makan);
    } catch (error) {
      console.error("Error Fetching Feeding Time", Error);
    }
  };

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

  const handleSaveSchedule = async (id) => {
    try {
      const updatedSchedule = schedules.find((schedule) => schedule.schedule_id === id);
  
      if (updatedSchedule) {
        console.log(`Saving schedule with ID ${id}: ${updatedSchedule.jam_makan}`);
  
        const [hour, minute] = updatedSchedule.jam_makan.split(':');
        const formattedTime = `${hour}:${minute}:00`;
  
        const response_save = await axios.put(
          `${process.env.REACT_APP_BACKEND_ADDRESS}/pet/schedule/edit/${id}?time_edited=${formattedTime}`
        );
  
        console.log(`Updated schedule with ID ${id}: ${updatedSchedule.jam_makan}`);
      } else {
        console.error(`Schedule with ID ${id} not found`);
      }
    } catch (error) {
      console.error('Error updating schedule', error);
    }
  };
  
  
  
  const handleSubmitSchedule = async () => {
    const updatedPetSchedule = {
      jam_makan: document.getElementById("my-schedule").value,
    };

    try {
      console.log(updatedPetSchedule);
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_ADDRESS}/pet/edit/jam_makan/${petData.pet_id}`,
        updatedPetSchedule
      );
      setEditedSchedule(updatedPetSchedule);
      console.log("Updated successfully");
    } catch (error) {
      console.error("Error", error);
    }

    handleClose();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/Pet");
        break;
      case 1:
        navigate("/feed");
        break;
      case 2:
        navigate("/profile");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("HELLO");
    console.log(petData);
    const GetHis = async() => {
      try{
        console.log("TES")
        console.log(petData);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/feed/${petData.pet_id}`);
        setHistory(response.data);
        console.log(history);
      } catch(error){
        console.error('No History', Error);
      }
    };
    GetHis();
    GetFeedingTime();
  }, []);

  function createData(Category, Value) {
    return { Category, Value};
  }
  
  const rows = [
    createData(history.feeding_date , history.dimakan )
  ];
  
  return (
    <div> 
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
            {schedules.map((schedule) => (
              <div style={{padding:'10%'}} key={schedule.schedule_id}>
                <TextField
                  type="time"
                  value={schedule.jam_makan}
                  onChange={(e) =>
                    handleEditSchedule(schedule.schedule_id, e.target.value)
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                <Button
                  variant="contained"
                  onClick={() => handleSaveSchedule(schedule.schedule_id)}
                  sx={{mt: 2}}
                  >
                  Save
                </Button>
              </div>
            ))}
            </Typography>
            <Button variant="contained" onClick={handleClickOpen2}>
              Edit Portion
            </Button>
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
            <DialogContentText>Please put in your pet portion:</DialogContentText>
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

        
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">History</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Category}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Category}
                  </TableCell>
                  <TableCell align="right">{row.Value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <NavBawah value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FeedPage;
