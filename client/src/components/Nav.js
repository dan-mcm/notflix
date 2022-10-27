import { Link } from "react-router-dom";

function Nav(){
  return(
    <div>
      <ul>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </div>
  )
}

export default Nav;
