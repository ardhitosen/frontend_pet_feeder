import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Feed from './Feed';
import Pet from './Pet';
import LoginPage from './Login';
import Devices from './Devices';
import AddPet from './AddPet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Devices" element={<Devices />} />
        <Route path="pet" element={<Pet />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/addpet" element={<AddPet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
