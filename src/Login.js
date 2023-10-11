import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import "./style.css";
import logo from "./images/logo-no-background.png";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="iphone">
      <img className="logo-no-background" alt="Logo no background" src={logo} />
      <TextField
        label="Username"
        variant="outlined"
        value={username}
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
      <Button variant="contained" color="success" className="MUI-button-instance">
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
