import React, {useState,useEffect} from 'react';
import { Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar, Stack } from '@mui/material';
import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { Table ,TableBody ,TableContainer ,Paper ,TableCell ,TableHead ,TableRow ,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Pet.css";
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import '@fontsource/roboto/500.css';
import NavBawah from './NavBawah';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { AlignHorizontalCenter, AlignHorizontalLeft } from '@mui/icons-material';
import { FormGroup, FormControl, Input, InputLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const Profile = () => {
  const userID= localStorage.getItem('userData');
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedPet, setEditedPet] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  useEffect(()=> {
    console.log(userID);
    const GetPets = async() => {
        try{
          console.log("TES")
          console.log(userID);
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/profile/${userID}`);
          setUser(response.data);
          console.log(user);
        } catch(error){
          console.error('No Devices', Error);
          navigate('/addPet');
        }
      };
      GetPets();
    },[]);

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
  function createData(Category, Value) {
    return { Category, Value};
  }
  
  const rows = [
    createData('UserName', user.full_name),
  ];
  
  return (
    <div className="container">
      <div className="pet-list">
        <Typography variant="h5" gutterBottom>
          Profile
        </Typography>
        <Avatar alt={user.full_name} src={user.imageUrl} sx={{ width: 150, height: 150 }} />
        <Typography variant="h6" gutterBottom>
          {user.full_name}
        </Typography>
      </div>
      <div className="pet-info">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            halaman dengan detail user.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>User</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
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
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Profile;
