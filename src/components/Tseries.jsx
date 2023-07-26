import {useEffect, useState} from "react";
import Button from "./Button"
import Mcard from "./Mcard";


function Tseries() {

    const[data,setData] = useState([])
    const[type,setType] = useState("day")

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/trending/tv/${type}`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    },[type])
    
   
  return (
    <div className="tseries">

        <div className="item1">
            <div><h4>Top-Series</h4></div>
            <div><Button data={setType}/></div>
        </div>
        <div className="item2">
            <div className="mcard-wrapper">
            {data.map((item) =>
            item.name && item.first_air_date && item.poster_path ? (
             
                <Mcard
                  key={item.id}
                  id={item.id}
                  type={item.media_type}
                  title={item.name}
                  date={item.first_air_date}
                  img={item.poster_path}
                />
              
                ) : null
              )}
                  
            </div>

        </div> 
    </div>
  )
}

export default Tseries