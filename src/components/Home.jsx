import Navbar from "./Navbar";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="item1">
        <Navbar />
      </div>
      <div className="item2">
        <div className="flex gap-5">
          <div>
            <div>
              <h2>Welcome</h2>
              <h3>Your Ultimate Movie & Series Destination</h3>
            </div>
            <div>
              <h4 className="tracking-wide">
                Elevate Your Movie Nights with a Vast Collection of Movies and
                Web Series, Curated Just for You
              </h4>
            </div>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
