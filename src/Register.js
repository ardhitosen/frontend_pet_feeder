import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import logo from "./images/logo-no-background.png";

const RegisterPage = () => {
  const [nama, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const HandleRegister = async() => {
    try{
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_ADDRESS}/auth/`,{
        full_name: fullName,
        name:nama,
        password,
      });
      navigate('/');
    } catch(error){
      console.error('Register failed',error);
    }
  };
  return (
    <div className="iphone">
      <img className="logo-no-background" alt="Logo no background" src={logo} />
      
      <TextField
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <br/>
      <TextField
        label="Username"
        variant="outlined"
        type="Username"
        value={nama}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button onClick={HandleRegister} variant="contained" color="success" className="MUI-button-instance">
        Register
      </Button>
      <br/>
    </div>
  );
};

export default RegisterPage;
