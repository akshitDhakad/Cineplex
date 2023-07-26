// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import MovieExport from './MovieExport';

// function Explore() {
//   const { id } = useParams();

//   const [movieData, setMovieData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [isFetchingMore, setIsFetchingMore] = useState(false);

//   const fetchMoreData = useCallback(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer YOUR_API_KEY', // Replace with your actual API key
//       },
//     };

//     let type = '';
//     if (id === 'movies') {
//       type = 'movie';
//     } else if (id === 'series') {
//       type = 'tv';
//     } else {
//       console.error('Invalid explore type:', id);
//       return;
//     }

//     setIsFetchingMore(true);
//     fetch(`https://api.themoviedb.org/3/discover/${type}?page=${page}`, options)
//       .then((response) => response.json())
//       .then((response) => {
//         setMovieData((prevData) => [...prevData, ...response.results]);
//         setIsFetchingMore(false);
//       })
//       .catch((err) => console.error(err));
//   }, [id, page]);

//   useEffect(() => {
//     // Simulate data fetching delay
//     const delay = 2000;
//     setTimeout(() => {
//       setIsLoading(false);
//     }, delay);
//   }, []);

//   useEffect(() => {
//     fetchMoreData();
//   }, [fetchMoreData]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//         document.documentElement.offsetHeight - 100
//       ) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     };

//     const debounceScroll = debounce(handleScroll, 200); // Debounce scroll event to improve performance

//     window.addEventListener('scroll', debounceScroll);

//     return () => {
//       window.removeEventListener('scroll', debounceScroll);
//     };
//   }, []);

//   return (
//     <div className='explore'>
//       <Navbar />
//       <div className='exploreContainer'>
//         {isLoading ? (
//           <div id='spinner' className='spinner-border text-light' role='status'>
//             <span className='visually-hidden'>Loading...</span>
//             <h5>Loading.....</h5>
//           </div>
//         ) : (
//           movieData && movieData.length > 0 ? (
//             movieData.map((data, index) => (
//               <MovieExport key={index} data={data} />
//             ))
//           ) : (
//             <p>No data found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// // Debounce utility function to limit the rate of function calls
// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), wait);
//   };
// }

// export default Explore;




//  old code with infinte scrolling *********************************************************


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import MovieExport from './MovieExport';

function Explore() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    // Function to fetch more data based on the current page
    const fetchMoreData = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE', // Replace with your actual API key
        },
      };

      let type = '';
      if (id === 'movies') {
        type = 'movie';
      } else if (id === 'series') {
        type = 'tv';
      } else {
        console.error('Invalid explore type:', id);
        return;
      }

      fetch(`https://api.themoviedb.org/3/discover/${type}?page=${page}`, options)
        .then((response) => response.json())
        .then((response) => {
          setMovieData((prevData) => [...prevData, ...response.results]);
          setIsFetchingMore(false);
        })
        .catch((err) => console.error(err));
    };

    setIsFetchingMore(true); // Set to true when fetching new data
    fetchMoreData(); // Fetch new data

  }, [id, page]);

  useEffect(() => {
    // Add a scroll event listener to detect when the user has reached the bottom of the page
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollHeight - (scrollTop + clientHeight) < 100 && !isFetchingMore) {
        setPage((prevPage) => prevPage + 1); // Increase the page number to fetch more data
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFetchingMore]);

  useEffect(() => {
    // Simulate data fetching delay
    const delay = 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <div className='explore'>
      <Navbar />
      <div className='exploreContainer'>
        {isLoading ? (
          <div id='spinner' className='spinner-border text-light' role='status'>
            <span className='visually-hidden'>Loading...</span>
            <h5>Loading.....</h5>
          </div>
        ) : (
          movieData && movieData.length > 0 ? (
            movieData.map((data, index) => <MovieExport key={index} data={data} />)
          ) : (
            <p>No data found.</p>
          )
        )}
      </div>
    </div>
  );
}

export default Explore;








//  old code without scrolling  *************************************************************************

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import MovieExport from './MovieExport';

// function Explore() {
//   const { id } = useParams();

//   const [movieData, setMovieData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE', // Replace with your actual API key
//       },
//     };

//     // Simulate data fetching delay
//     const delay = 2000;

//     // Set the type based on the id directly
//     let type = '';
//     if (id === 'movies') {
//       type = 'movie';
//     } else if (id === 'series') {
//       type = 'tv';
//     } else {
//       console.error('Invalid explore type:', id);
//     }

//     setTimeout(() => {
//       fetch(`https://api.themoviedb.org/3/discover/${type}`, options)
//         .then((response) => response.json())
//         .then((response) => {
//           setMovieData(response.results);
//           setIsLoading(false);
//         })
//         .catch((err) => console.error(err));
//     }, delay);
//   }, [id]);

//   return (
//     <div className='explore'>
//       <Navbar />
//       <div className='exploreContainer'>
//         {/* Conditionally render the loading spinner or the movie data */}
//         {isLoading ? (
//           <div id='spinner' className="spinner-border text-light " role="status">
//             <span className="visually-hidden">Loading...</span>
//             <h5>Loading.....</h5>
//           </div>
//         ) : (
//           movieData && movieData.length > 0 ? (
//             movieData.map((data, index) => <MovieExport key={index} data={data} />)
//           ) : (
//             <p>No data found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Explore;
