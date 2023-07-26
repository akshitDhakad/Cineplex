import React, { useEffect, useState } from 'react'
import "./style.css"
import "./style.scss"



function SeriesExport(props) {
  
    const[data,setData]=useState([])

    useEffect(()=>{
        setData(props.data)
    },[])
  
   

  return (
    <div className='movieexport'>
      

      <div className='card'>
        <div className='cardImg'>
            <img loading="lazy" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt='cardImg'/>
        </div>
        <div className='cardDetail'>
            <p>{data.name}</p>
            <p>{data.first_air_date}</p>
        </div>
        </div>

    </div>
  )
}

export default SeriesExport

