import Navbar from "./Navbar"
import Search from "./Search"
function Home() {
  return (
    <div className="home">
      <div className="item1"><Navbar/></div>
      <div className="item2">
        <div>
            <div><h2>Welcome</h2></div>
            <div><h4>Elevate Your Movie Nights with a Vast Collection of Films, Curated Just for You</h4></div>
            <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home