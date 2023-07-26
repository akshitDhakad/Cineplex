import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Spinner from "./Spinner"
import Recommendation from "./Recommendation";



function Details() {
  const { type } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const fetchDetails = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [type, id]);

  const backImg = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="details">
      {loading ? (
        <p><Spinner/></p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="movie_card" id="tomb">
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.title}
              />
              <h4>{data.title}</h4>
              <h6>{data.release_date}, {data.tagline}</h6>
              <span className="minutes">{data.runtime} min</span>
              {data.genres && data.genres.length > 0 && (
                <p className="type">{data.genres[0].name}</p>
              )}
            </div>

            <div className="movie_desc">
              <p className="text">
                {data.overview}
              </p>
            </div>
            <div className="movie_social">
              <ul>
                <li><i className="material-icons">Vote {data.vote_average}</i></li>
                <li><i className="material-icons">Vote Count {data.vote_count}</i></li>
                <li><i className="material-icons">lang {data.original_language}</i></li>
              </ul>
            </div>
          </div>
          <div className="blur_back tomb_back" style={backImg}></div>
        </div>
      )}

      <Recommendation type={type} id={id}/>
    </div>
  );
}

export default Details;
