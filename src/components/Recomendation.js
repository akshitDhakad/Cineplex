import React,{useEffect, useState} from 'react'
import MovieExport from './MovieExport'


function Recomendation(props) {
    const [data,setData] = useState()

 

    useEffect(()=>{

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${props.id}/recommendations`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));

    },[props])
    console.log(data)

  return (
    <div className='recomendataion'>
         <div className='explore'>
            <div className='exploreContainer'>
                {data && data.length > 0 ? (
            data.map((data, index) => <MovieExport key={index} data={data} />)
            ) : (
            <p>Loading...</p>
            )}
            </div>
        </div>
    </div>
  )
}

export default Recomendation