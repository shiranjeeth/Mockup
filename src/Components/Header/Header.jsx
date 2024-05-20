import React, { useState } from 'react'
import '../Header/header.css';
import { IoMdContact } from "react-icons/io";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { IoIosSearch } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/logo.png'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

    return (
    <header className={menuOpen ? "open" : ""} >
      <GiHamburgerMenu className="menu" onClick={() => setMenuOpen(!menuOpen)} /> 
      
        <div className='header-container-top'>
       
        <div className='header-container'>
   <div className="logo"><img src={Logo}/></div>
   {menuOpen && (
   <div className='after-logo-links'>
      <div className='header-links'>
        <ul >
          <li><a href="#">Art</a></li>
          <li><a href="#">Collectable</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Explore</a></li>
        </ul>
        </div>
        <div  className='header-wrap'>
      <div className="header-search-bar">
        <input type="text" placeholder="Search items...." />
        <IoIosSearch className="search-icon" />
      </div>
      <div className="button-links">
      <button>Create</button>
      <IoMdContact className='user-icon' />
      <RiContactsBookUploadLine  className='after-user-icon'/>
      </div>
      </div>
      </div>
        )}
      </div>
  
      </div>
    
      </header>

     
  )
}

export default Header