import React from 'react'
import "./style.css"
import "./style.scss"


import {
    Link,
  } from "react-router-dom";
import Search from './Search';


function Navbar() {
  return (
        <div className='navbar '>
            <div className='item1'><h1><svg loading="lazy" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg></h1><h1>CineFlix</h1></div>
            <div className='item2'>
                <div className='movies'><Link to={"/"}>Home</Link></div>
                <div className='movies'><Link to={"/explore/movies"}>Movies</Link></div>
                <div className='series'><Link to={"/explore/series"}>Series</Link></div>
                <div><Search/></div>

            </div>
        
        </div>
  )
}

export default Navbar