import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Feed from './Feed';
import Pet from './Pet';
import LoginPage from './Login';
import Register from './Register';
import Devices from './Devices';
import AddPet from './AddPet';
import Profile from './Profile';
import AddDevice from './AddDevice'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="pet" element={<Pet />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/addpet" element={<AddPet/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/adddevice" element={<AddDevice/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
