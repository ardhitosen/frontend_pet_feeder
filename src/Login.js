import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import logo from "./images/logo-no-background.png";

const LoginPage = () => {
  const [nama, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const HandleLogin = async() => {
    try{
      const response = await axios.post('http://localhost:8000/login',{
        nama,
        password,
      });

      navigate('/');
    } catch(error){
      console.error('Login failed',error);
    }
  };
  return (
    <div className="iphone">
      <img className="logo-no-background" alt="Logo no background" src={logo} />
      <TextField
        label="Username"
        variant="outlined"
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
      <Button onClick={HandleLogin} variant="contained" color="success" className="MUI-button-instance">
        Login
      </Button>
      <br/>
      <Button variant="contained" color="success" className="MUI-button-2">
        Register
      </Button>
    </div>
  );
};

export default LoginPage;
