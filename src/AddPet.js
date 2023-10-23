import React, {useState,useEffect} from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';

const AddPet = () => {
    const navigate = useNavigate();
    const deviceID= 1 //|| localStorage.getItem('deviceID');
    const [formData, setFormData] = useState({
        nama: '',
        berat: 0,
        tipe_hewan: '',
        ras_hewan: '',
        umur: 0,
      });
    
    const insertPet = async (formData) => {
        const response = await axios.post(`http://localhost:8000/pet/${deviceID}`, formData);
        if (response.status === 201) {
            navigate('/Pet');
        } else {
            navigate('/addPet');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await insertPet(formData);
    };
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="my-name">Name</InputLabel>
                    <Input
                    id="my-name"
                    name="name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-race">Type</InputLabel>
                    <Input
                    id="my-race"
                    name="race"
                    value={formData.race}
                    onChange={(event) => setFormData({ ...formData, tipe_hewan: event.target.value })}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-race">Race</InputLabel>
                    <Input
                    id="my-race"
                    name="race"
                    value={formData.race}
                    onChange={(event) => setFormData({ ...formData, ras_hewan: event.target.value })}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-age">Age</InputLabel>
                    <Input
                    id="my-age"
                    name="age"
                    value={formData.age}
                    onChange={(event) => setFormData({ ...formData, umur: event.target.value })}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-weight">Weight</InputLabel>
                    <Input
                    id="my-weight"
                    name="weight"
                    value={formData.weight}
                    onChange={(event) => setFormData({ ...formData, berat: event.target.value })}
                    />
                </FormControl>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddPet;