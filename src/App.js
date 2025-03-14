import React, { useState } from 'react'
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <Home searchText={searchText} />
      <Toaster />
    </div>
  );
}

export default App;
