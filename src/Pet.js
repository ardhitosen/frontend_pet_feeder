import React, {useState} from 'react';
import { Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar, Stack } from '@mui/material';
import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { Table ,TableBody ,TableContainer ,Paper ,TableCell ,TableHead ,TableRow ,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Pet.css";
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/500.css';
import NavBawah from './NavBawah';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { AlignHorizontalCenter, AlignHorizontalLeft } from '@mui/icons-material';
import { FormHelperText, FormControl, Input, InputLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const PetFeederPage = () => {
  const deviceID= localStorage.getItem('deviceID');
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [pet, setPet] = useState([]);
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
    createData('Name', "dog"),
    createData('Race', "dog"),
    createData('Age', 262),
    createData('Weight', 305),
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
        
        {/* <IconButton onClick={previousPet}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={nextPet}>
          <ArrowForwardIosIcon />
        </IconButton> */}
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
              <Button variant="contained" >Edit</Button>
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
          <Button variant="contained" onClick={handleClickOpen}>Add a Pet</Button>
          <Button variant="contained" /*onClick={this.props.onDelete(this.props.id)}*/ >Delete</Button>
        </Stack>  
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please put in your pet Biodata:
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      <NavBawah value={value} onChange={handleChange} />

    </div>
  );
};

export default PetFeederPage;
