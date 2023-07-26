import React,{useEffect,useState} from 'react'
import SeriesExport from './SeriesExport';
function Tv() {
    
    const[seriesdata ,seriessetData] = useState("")
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
          // https://api.themoviedb.org/3/trending/tv/week
          fetch(`https://api.themoviedb.org/3/trending/tv/${active}`, options)
            .then(response => response.json())
            .then(response => seriessetData(response.results))
            .catch(err => console.error(err));
    },[active])

    // console.log(data)


  return (
        <div>
            <div className='seriesection'>
            <div className='item1'>
                <div><h3>Top Series</h3></div>
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
                 {seriesdata && seriesdata.length > 0 ? (
                seriesdata.map((data, index) => <SeriesExport key={index} data={data} />)
              ) : (
                <p>Loading...</p>
              )}
                </div>
            </div>
                
             
           
            </div>
        </div>
    </div>
  )
}

export default Tv