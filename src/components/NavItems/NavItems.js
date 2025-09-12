import { Link } from "react-router-dom";
import "./NavItems.css";
function NavItems(props) {
  return (
    <li>
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
}

export default NavItems;