import React from 'react'
import Filter from '../Filter/Filter';
import MoviesAdd from '../MoviesAdd/MoviesAdd';
import Stars from '../Stars/Stars';
import "./header.css"; 
import { Link } from "react-router-dom";

const Header = ({ setSearchRate, searchRate,setSearchTxt}) => { 
  return (
    <div className="header">
        
        <h1>
        Tuni-Best
        </h1>

        
       
       <MoviesAdd />

        
        <Stars 
         isEdit={true}
          setSearchRate={setSearchRate}
          searchRate={searchRate}/>
         
          <li className='piw'>
          <button className='btn1'>
          <Link to="/">
          <a>home</a>
          </Link>
          </button>
 
           <button className='btn1'>
          <Link to="/list">
          <a>List</a>
          </Link>
          </button>
          </li>
         

        <Filter 
        setSearchTxt={setSearchTxt}
        />
       
        

       
    
    </div>
  )
}

export default Header