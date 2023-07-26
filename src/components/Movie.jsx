import React, { useEffect, useState, useRef } from "react";
import Mcard from "./Mcard";
import Filters from "./Filters";
import { Link } from 'react-router-dom';

function Movie() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setfilter] = useState("");
  const loaderRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${filter}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { results } = await response.json();
      setData((prevData) => [...prevData, ...results]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
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
  }, [page, filter]);

  return (
    <div className="movie">
      <div className="item1">
        <div><Link to={"/explore/movies"}>Movie</Link></div>
        <div><Link to={"/explore/Series"}>Series</Link></div>
        <div><Filters genre="movie" data={setfilter} /></div>
      </div>
      <div className="item2">
        {data.map((item) => (
          item.original_title && item.release_date && item.poster_path ? (
            <Mcard
              key={item.id}
              id={item.id}
              type="movie"
              title={item.original_title}
              date={item.release_date}
              img={item.poster_path}
            />
          ) : null
        ))}
        <div ref={loaderRef} style={{ height: '10px' }}></div>
      </div>
    </div>
  );
}

export default Movie;


// import { useEffect, useState, useRef } from "react";
// // import Navbar from "./Navbar";
// import Mcard from "./Mcard";
// import Filters from "./Filters";
// import { Link } from 'react-router-dom';

// function Movie() {
//   const apiKey = import.meta.env.VITE_API_KEY
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filter, setfilter] = useState("");
//   const loaderRef = useRef(null);
 

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${apiKey}}`,
//       },
//     };
//     // https://api.themoviedb.org/3/discover/movie?page=2&with_genres=Action'
//     const fetchData = () => {
//       fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${filter}`, options)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(response => {
//           if (response.results && Array.isArray(response.results)) {
//             setData(prevData => [...prevData, ...response.results]);
//             setPage(prevPage => prevPage + 1);
//           } else {
//             console.error('Invalid API response format');
//           }
//         })
//         .catch(err => console.error(err));
//     };

//     const handleObserver = (entries) => {
//       const target = entries[0];
//       if (target.isIntersecting) {
//         fetchData();
//       }
//     };

//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: '20px',
//       threshold: 1.0,
//     });

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => {
//       if (loaderRef.current) {
//         observer.unobserve(loaderRef.current);
//       }
//     };
//   }, [page,filter]);

//   return (
//     <div className="movie">
//       <div className="item1">
//         <div><Link to={"/explore/movies"}>Movie</Link></div>
//         <div><Link to={"/explore/Series"}>Series</Link></div>
     
//         <div><Filters genre="movie" data={setfilter}/></div>
//       </div>
//       <div className="item2">
//         {data.map((item) =>
//           item.original_title && item.release_date && item.poster_path ? (
            
//               <Mcard
//                 key={item.id}
//                 id={item.id}
//                 type="movie"
//                 title={item.original_title}
//                 date={item.release_date}
//                 img={item.poster_path}
//               />
            
//           ) : null
//         )}
//         <div ref={loaderRef} style={{ height: '10px' }}></div>
//       </div>
//     </div>
//   );
// }

// export default Movie;








// old code
// import { useEffect,useState } from "react"
// import Navbar from "./Navbar"
// import Mcard from "./Mcard"


// function Movie() {
//   const[data,setData]= useState([])

//   useEffect(()=>{
//     // https://api.themoviedb.org/3/discover/movie?page=2
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE'
//       }
//     };
    
//     fetch('https://api.themoviedb.org/3/discover/movie', options)
//       .then(response => response.json())
//       .then(response => setData(response.results))
//       .catch(err => console.error(err));

//   },[])




//   return (
//     <div className="movie">
//       <div className="item1"><Navbar/></div>
//       <div className="item2">
//       {data.map((item) =>
          
//             item.original_title && item.release_date && item.poster_path ? (
//               <div key={item.id}>
//                 <Mcard
//                   title={item.original_title}
//                   date={item.release_date}
//                   img={item.poster_path}
//                 />
//               </div>
//             ) : null
          
//           )}
//       </div>
      
//     </div>
//   )
// }

// export default Movie