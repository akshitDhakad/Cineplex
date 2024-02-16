import React, { useEffect, useState, useRef } from "react";
import Mcard from "./Mcard";

function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const scrolledDistance =
        window.innerHeight + document.documentElement.scrollTop;
      const totalHeight = document.documentElement.offsetHeight;

      if (totalHeight - scrolledDistance < scrollThreshold) {
        setIsFetching(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) {
      callback();
      setIsFetching(false);
    }
  }, [isFetching, callback]);

  return isFetching;
}

function Recommendation() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    // Replace with your actual API key
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE`,
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/667538/recommendations?page=${page}`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      setData((prevData) => [...prevData, ...responseData.results]);
    } catch (error) {
      console.error(error);
    }
  };

  const isFetching = useInfiniteScroll(fetchData);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="Recommendation">
      <div className="item1 z-2 min-w-full">
      
        <h4 className="tracking-wider text-xl ">Recommendation</h4>
      </div>
      <div className="item2">
        {data.map((item) =>
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
        )}
        {isFetching && <div className="loading-element">Loading...</div>}
      </div>
    </div>
  );
}

export default Recommendation;
