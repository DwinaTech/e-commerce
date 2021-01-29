import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <Link to="/" className="brand">
            <p>E-commerce</p>
            <p>Application</p>
          </Link>
          <ul className="list">
            <li>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
