// import Search from "./Search";
import "./style.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  p-3 ">
     
        <div className="item1">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </h2>

          <h2 className="tracking-widest font-bold">Cineflix</h2>
        </div>
      
      <button
        className="navbar-toggler navbar-toggler-bg-color"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon navbar-toggler-bg-color"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="item2">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/explore/movies"}>Movie</Link>
          </div>
          <div>
            <Link to={"/explore/Series"}>Series</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
