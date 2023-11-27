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

const PetFeederPage = () => {
  const deviceID= localStorage.getItem('deviceID');
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [pet, setPet] = useState([]);
  const [open, setOpen] = useState(false);
  const [editedPet, setEditedPet] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  useEffect(()=> {
    console.log(deviceID);
    const GetPets = async() => {
        try{
          console.log("TES");
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/pet/${deviceID}`);
          setPet(response.data);
          localStorage.setItem('petData', JSON.stringify(response.data));
          console.log(pet);
        } catch(error){
          console.error('No Devices', Error);
          navigate('/addPet');
        }
      };
      GetPets();
    },[]);

    const handleSubmit = async () => {
      const updatedPetData = {
        nama: document.getElementById('my-name').value,
        ras_hewan: document.getElementById('my-race').value,
        porsi_makan: 0,
        umur: parseInt(document.getElementById('my-age').value, 10),
        berat: parseInt(document.getElementById('my-weight').value,10),
        tipe_hewan: document.getElementById('my-tipe').value,
        device_id: deviceID,
      };
    
      try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_ADDRESS}/pet/edit/${pet.pet_id}`, updatedPetData);
        console.log('Pet updated successfully');
        setEditedPet(response.data);
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
  function createData(Category, Value) {
    return { Category, Value};
  }
  
  const rows = [
    createData('Name', editedPet.nama || pet.nama),
    createData('Race', editedPet.ras_hewan || pet.ras_hewan),
    createData('Age', editedPet.umur || pet.umur),
    createData('Weight', editedPet.berat || pet.berat),
  ];
  
  return (
    <div className="container">
      <div className="pet-list">
        <Typography variant="h5" gutterBottom>
          Pet Profile
        </Typography>
        <Avatar alt={pet.name} src={pet.imageUrl} sx={{ width: 150, height: 150 }} />
        <Typography variant="h6" gutterBottom>
          {pet.name}
        </Typography>
      </div>
      <div className="pet-info">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Biodata</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Value</TableCell>
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
            <div className='center-wrapper'>
              <Button variant="contained" onClick={handleClickOpen}>Edit</Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='center-wrapper'>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          {/* <Button variant="contained" onClick={handleClickOpen}>Add a Pet</Button> */}
          <Button variant="contained" /*onClick={this.props.onDelete(this.props.id)}*/ >Delete</Button>
        </Stack> 
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please put in your pet Biodata:
          </DialogContentText>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-name">Name</InputLabel>
              <Input id="my-name" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-race">Race</InputLabel>
              <Input id="my-race" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-age">Age</InputLabel>
              <Input id="my-age" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-weight">Weight</InputLabel>
              <Input id="my-weight" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-tipe">Type</InputLabel>
              <Input id="my-tipe" />
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <NavBawah value={value} onChange={handleChange} />

    </div>
  );
};

export default PetFeederPage;
