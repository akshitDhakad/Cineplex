import {useEffect,useState} from "react"
import { useLocation } from "react-router-dom";
import Button from "./Button"
import Mcard from "./Mcard";
import Navbar from "./Navbar";
import Footer from "./Footer";


function SearchCard() {

    const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");

  const[data,setData] = useState([])
  const[sdata,ssetData] = useState([])

 

  useEffect(()=>{
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/search/movie?query=${name}`, options)
          .then(response => response.json())
          .then(response => setData(response.results))
          .catch(err => console.error(err));

    
        // SERIES DATA HANDLER
        fetch(`https://api.themoviedb.org/3/search/tv?query=${name}`, options)
          .then(response => response.json())
          .then(response => ssetData(response.results))
          .catch(err => console.error(err));
  },[name])
 


   
  return (
    <>
      <Navbar />
      <div className="tmovies">
        <div className="item1">
          <div>
            <h4 className="font-semibold text-blue-200">Movies</h4>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="item2">
          <div className="mcard-wrapper p-3">
            {data.map((item) =>
              item.original_title && item.release_date && item.poster_path ? (
                <Mcard
                  key={item.id}
                  type={item.media_type}
                  id={item.id}
                  title={item.original_title}
                  date={item.release_date}
                  img={item.poster_path}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className="tseries">
        <div className="item1">
          <div>
            <h4 className="font-semibold text-blue-200">Top-Series</h4>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="item2">
          <div className="mcard-wrapper p-3">
            {sdata.map((item) =>
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
      <Footer/>
    </>
  );
}

export default SearchCard