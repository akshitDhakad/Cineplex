import {useEffect, useState} from "react"

function Filters(props) {

    const[data,setData]=useState([])


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/genre/${props.genre}/list`, options)
            .then(response => response.json())
            .then(response => setData(response.genres))
            .catch(err => console.error(err));

    },[props])




  return (
    <div className="filter">
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul className="dropdown-menu">
            {
                data.map((item)=>
                    <li key={item.id} onClick={()=>props.data(item.name)}><a className="dropdown-item" >{item.name}</a></li>
                    )
            }
            
            
        </ul>
</div>

    </div>
  )
}

export default Filters