import React from 'react';
// import MainNavbar from './components/Navbar/Navbar';
import './App.css'
import Homepage from './pages/Homepage/Homepage';
import Navbar2 from './components/Navbar2/Navbar2';
// import Games, { getGamesFromAPI } from './API/Games';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Homepage />
    </div>
  );
}

export default App;
