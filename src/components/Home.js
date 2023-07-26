import React from 'react'
import "./style.scss"
import Navbar from './Navbar'
import  Search from './Search'
import Main from './Main'


function Home() {

  return (
    <div>
    <div className='home'>
      <div className='item1'><Navbar/></div>
      <div className='item2'>
        <h2>CineFlix A Movie Hub</h2>
        <h3> Elevate Your Movie Nights with a Vast Collection of Films, Curated Just for You</h3>
        </div>
      <div className='item3'><Search/></div>
    </div>
    
    <Main/>
    </div>
  )
}

export default Home