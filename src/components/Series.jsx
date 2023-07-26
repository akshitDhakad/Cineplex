

import { useEffect, useState, useRef } from "react";
// import Navbar from "./Navbar";
import Mcard from "./Mcard";
import Filters from "./Filters";
import { Link } from 'react-router-dom';

function Series() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const [filter, setfilter] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    const fetchData = () => {
      fetch(`https://api.themoviedb.org/3/discover/tv?page=${page}&with_genres=${filter}`, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(response => {
          if (response.results && Array.isArray(response.results)) {
            setData(prevData => [...prevData, ...response.results]);
            setPage(prevPage => prevPage + 1);
          } else {
            console.error('Invalid API response format');
          }
        })
        .catch(err => console.error(err));
    };

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchData();
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page,filter]);

  return (
    <div className="series">
      <div className="item1">
        <div><Link to={"/explore/movies"}>Movie</Link></div>
        <div><Link to={"/explore/Series"}>Series</Link></div>
        <div>Search</div>
        <div><Filters genre="tv" data={setfilter}/></div>
      </div>
      <div className="item2">
          {data.map((item) =>
            item.name && item.first_air_date && item.poster_path ? (
              
                <Mcard
                  key={item.id}
                  id={item.id}
                  type="tv"
                  title={item.name}
                  date={item.first_air_date}
                  img={item.poster_path}
                />
             
                ) : null
            )}
        <div ref={loaderRef} style={{ height: '10px' }}></div>
      </div>
    </div>
  );
}

export default Series;

