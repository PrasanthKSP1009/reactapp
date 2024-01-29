import "../../css/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ol>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/experience" className="link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/ref" className="link">
            useRef
          </Link>
        </li>
        <li>
          <Link to="/memo" className="link">
            useMemo
          </Link>
        </li>
        <li>
          <Link to="/call" className="link">
            useCallback
          </Link>
        </li>
      </ol>
    </div>
  );
};
export default NavBar;
