import React, { useEffect, useState } from 'react'
import "./style.css"
import "./style.scss"
import { Link } from 'react-router-dom'



function MovieExport(props) {
  
    const[data,setData]=useState([])

    useEffect(()=>{
        setData(props.data)
    },[props])
  
    // console.log(data.poster_path)
    // console.log(data)

  return (
    <div className='movieexport'>
      

      <div className='card'>
        <div className='cardImg'>
            <Link to={`/carddetails/${data.media_type}?id=${data.id}`}>
              <img loading="lazy" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt='cardImg'/>
            </Link>
            
        </div>
        <div className='cardDetail'>
            <p>{data.title}</p>
            <p>{data.release_date}</p>
        </div>
        </div>

    </div>
  )
}

export default MovieExport

