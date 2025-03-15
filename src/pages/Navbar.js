import React from 'react';
import sae from '../images/saew.png';
import './Navbar.css';
import { Search } from 'lucide-react'

export default function Navbar({ setSearchText }) {
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
          onChange={(e) => setSearchText(e.target.value)} 
        />
      </div>

    </div>
  )
}









