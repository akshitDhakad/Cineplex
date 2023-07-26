import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Recomendation from "./Recomendation"



function Carddetail() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('id');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE', // Replace with your actual API key
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));
  }, []);


  // console.log(movieId)

  // Move the console.log inside the component to avoid accessing data before it's loaded
  if (!data.genres || data.genres.length === 0) {
    // Handling the case when genres array is empty or undefined
    return <div>Loading...</div>;
  }
  
  const bacckgroundImg = {
    background: `url("https://image.tmdb.org/t/p/original${data.poster_path}")`,
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
  };
 
  return (
    
   
    <div className='cardDetails '>
      <div className="movie_card" id="ave">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="posterimg" loading="lazy"/>
            <h2>{data.title}</h2>
            <h4>{data.release_date}, {data.tagline}</h4>
           
          </div>
          <div className="movie_desc">
          <span className="minutes">{data.runtime}min</span>
            {data.genres && data.genres.length > 0 && (
              <p className="type">{data.genres[0].name}</p>
            )}
            <p className="text">
              {data.overview}
            </p>
          </div>
        </div>
        <div className="blur_back ave_back" style={bacckgroundImg}></div>
      </div>
      <h3>Recomendation</h3>
      <Recomendation id={movieId}/>
    </div>
  );
}

export default Carddetail;
