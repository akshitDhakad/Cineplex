import {Link} from "react-router-dom"

function Mcard({id,title,date,img ,type}) {
  
 
  return (
    <div className="mcard">
      <div className="img">
        <Link to={`/detail/${type}?id=${id}`}>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="mcard poster"
        />
        </Link>
      </div>
      <div className="details">
        <span>{title}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Mcard;