import { Link } from "react-router-dom";
import Favourites from "../screens/Favourites";
import Search from "../screens/Favourites";

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
