import React, { useEffect,useState } from 'react'
import MovieExport from './MovieExport';


function Trending() {
    const[data ,setData] = useState("")
    const [active, setActive] = useState("day");

    const toggleTab = (tabName) => {
      setActive(tabName); // Update active state with the clicked tab name
    };

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/trending/all/${active}`, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
    },[active])

  return (
   
        <div className='trending '>
                <div className='item1'>
                  <div><h3>Trending</h3></div>
                    <div className="switchingTabs">
                        <div className="tabItems">
                        <span
                            onClick={() => toggleTab("day")} // Pass the tab name as a parameter
                            className={`tabItem ${active === "day" ? "active" : ""}`}
                          >
                            Day
                          </span>
                          <span
                            onClick={() => toggleTab("week")} // Pass the tab name as a parameter
                            className={`tabItem ${active === "week" ? "active" : ""}`}
                          >
                            Week
                          </span>
                        <span className="movingBg" style={{left: "0px"}}></span>
                        </div>
                    </div>
                  </div>
            <div className='item2'>
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
        </div>
      )
}

export default Trending