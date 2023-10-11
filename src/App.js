import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Feed from './Feed';
import Pet from './Pet';
import LoginPage from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pet />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
