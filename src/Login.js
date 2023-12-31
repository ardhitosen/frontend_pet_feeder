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

  function navigateRegister()
  {
    navigate("/register");
  }

  const HandleLogin = async () => {
    try {
      console.log(process.env.REACT_APP_BACKEND_ADDRESS)
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_ADDRESS}/auth/token`,
        `username=${nama}&password=${password}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      localStorage.setItem('userData', JSON.stringify(response.data));
      localStorage.setItem('accessToken', response.data.access_token);
      navigate('/Devices');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <div className="iphone">
      <img className="logo-no-background" alt="Logo no background" src={logo} />
      <TextField
        label="Name"
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
      <Button onClick={navigateRegister} variant="contained" color="success" className="MUI-button-2">
        Register
      </Button>
    </div>
  );
};

export default LoginPage;
