// ... (other imports and code)
import  React,{useState,useEffect} from "react"
import SearchDetail from "./SearchDetail";



function SearchPage() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const query = searchParams.get('query');
    setName(query);
  }, []);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzdlYTkxNGY3OTY3M2Q1OTRiYzU5OTNhYjEwNmNkMCIsInN1YiI6IjY0YWU3MDllOGEwZTliMDBhZGFjMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nMuIyE282XdwUdFXPHYgKOe2pKu47fW3BPUsmv1OCE', // Replace with your actual API key
      },
    };

    fetch(`https://api.themoviedb.org/3/search/multi?query=${name}`, options)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(err => console.error(err));
  }, [name]);

  return (
    <div className='searchPage'>
      <div className='item1'>
        {data && data.length > 0 ? (
          data.map(item =>
            item.poster_path && item.title ? (
              <div className='item1Card' key={item.id} onClick={() => setId(item.id)}>
                <p className='item1Cardpara1'>{item.title}</p>
                <p className='item1Cardpara2'>{item.release_date}</p>
                <img loading="lazy" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title + ' Poster'} />
              </div>
            ) : null
          )
        ) : (
          <div>No data available</div>
        )}
      </div>
      <div className='item2 container'>
        {/* Check if id is not empty and there is valid data */}
        {id && data.length > 0 && <SearchDetail id={id} oldID={data[0].id} />}
      </div>
    </div>
  );
}

export default SearchPage;
