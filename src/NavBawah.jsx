import { Avatar, Container, BottomNavigation, BottomNavigationAction,Typography, Button, Grid, Card, Box , IconButton, CardContent, AppBar, Toolbar } from '@mui/material';


function NavBawah(props)
{
    return(
        <BottomNavigation
        className="bottom-navigation"
        showLabels
        value={props.value}
        onChange={props.onChange}
        fullWidth maxWidth={false}
        >
      <BottomNavigationAction label="Pets" />
      <BottomNavigationAction label="Feed"/>
      <BottomNavigationAction label="Profile"/> 
    </BottomNavigation>
    );
}

export default NavBawah;