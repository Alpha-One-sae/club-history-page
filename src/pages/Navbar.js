import React from 'react';
import sae from '../images/saew.png';
import './Navbar.css';
import { Search } from 'lucide-react'

export default function Navbar({ setSearchText }) {

  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value); // Debugging
    setSearchText(e.target.value); 
  };

  return (
    <div className='navcon'>
      
      <div className='saeih'>
      <img src={sae} id='saeimg' alt='sae'></img>
      <h4 id='saeh'>SAE</h4>
      </div>

      {/* <div className='wiki'>
        <h4 id='wikih'>WIKIPEDIA</h4>
      </div> */}

      <div className="search-container">
        <Search className="search-icon" size={16} />
        <input 
          type="text" 
          id="search" 
          placeholder="Search" 
          onChange={handleInputChange} 
          disabled={false}
          readOnly={false}
        />
      </div>

    </div>
  )
}









