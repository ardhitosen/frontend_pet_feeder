import React, {useState,useEffect} from 'react';
import { Button, FormControl, Input, InputLabel, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';


const AddPet = () => {
    console.log("JUAN");
    return (
        <div className="container">
            <div>
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
                {/* <Button onClick={handleClose}>Cancel</Button> */}
                {/* <Button onClick={handleClose}>Submit</Button> */}
                {/* <NavBawah value={value} onChange={handleChange} /> */}
            </div>
        </div>
    );
};

export default AddPet;