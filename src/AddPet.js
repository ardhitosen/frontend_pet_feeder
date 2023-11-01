import React, {useState,useEffect} from 'react';
import { Typography, FormGroup, FormControl, Input, InputLabel, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import "./addpet.css"
import { Margin } from '@mui/icons-material';

const AddPet = () => {
    const navigate = useNavigate();
    const deviceID = localStorage.getItem('deviceID');
    const handleSubmit = async () => {
        const formData = {
            nama: document.getElementById('my-name').value,
            ras_hewan: document.getElementById('my-race').value,
            porsi_makan: 0,
            umur: parseInt(document.getElementById('my-age').value, 10),
            berat: parseInt(document.getElementById('my-weight').value,10),
            tipe_hewan: document.getElementById('my-tipe').value,
        };
        
        try {
            await axios.post(`http://localhost:8000/pet/${deviceID}`, formData);
            console.log('Pet added successfully');
            navigate('/Pet');
        } catch (error) {
            console.error('Error', error);
            navigate('/addPet');
        }
    };
    
    return (
        <div className="container">
            <div>
                <Typography variant="h2" >
                    Add Your Pet
                </Typography>
            </div>
            <FormGroup>
                <FormControl sx={{mt : 2, mb: 2}}>
                    <InputLabel htmlFor="my-name">Name</InputLabel>
                    <Input
                    id="my-name"
                    />
                </FormControl>
                <FormControl sx={{mt : 2, mb: 2}}>
                    <InputLabel htmlFor="my-tipe">Type</InputLabel>
                    <Input
                    id="my-tipe"
                    />
                </FormControl>
                <FormControl sx={{mt : 2, mb: 2}}>
                    <InputLabel htmlFor="my-race">Race</InputLabel>
                    <Input
                    id="my-race"
                    />
                </FormControl>
                <FormControl sx={{mt : 2, mb: 2}}>
                    <InputLabel htmlFor="my-age">Age</InputLabel>
                    <Input
                    id="my-age"
                    />
                </FormControl>
                <FormControl sx={{mt : 2, mb: 2}}>
                    <InputLabel htmlFor="my-weight">Weight</InputLabel>
                    <Input
                    id="my-weight"
                    />
                </FormControl>
            </FormGroup>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default AddPet;