import React, {useState} from 'react';
import { Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';
import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { Table ,TableBody ,TableContainer ,Paper ,TableCell ,TableHead ,TableRow ,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Pet.css";
import '@fontsource/roboto/500.css';

const PetFeederPage = () => {
  const [value, setValue] = useState(0);
  const [pet] = useState({
    id: 1,
    name: "ANJING",
    imageUrl: "dog.jpg", // Replace with the actual URL of your pet's image
  });
  // const [pets, setPets] = useState([
  //   { id: 1, name: "Dog 1" },
  //   { id: 2, name: "Dog 2" },
  //   { id: 3, name: "Dog 3" },
  // ]);
  //const [currentPetIndex,setCurrentPetIndex] = useState(0);
  // const nextPet = () => {
  //   setCurrentPetIndex((prevIndex) => (prevIndex + 1) % pets.length);
  // };
  // const previousPet = () => {
  //   setCurrentPetIndex((prevIndex) =>
  //     prevIndex === 0 ? pets.length - 1 : prevIndex - 1
  //   );
  // };
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
        </AccordionDetails>
        </Accordion>
      </div>
      <BottomNavigation
    className="bottom-navigation"
    showLabels
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    fullWidth maxWidth={false}
    >
      <BottomNavigationAction label="Pets" />
      <BottomNavigationAction label="Feed"/>
      <BottomNavigationAction label="Profile"/> 
    </BottomNavigation>

    </div>
  );
};

export default PetFeederPage;
