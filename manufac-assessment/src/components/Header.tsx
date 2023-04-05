import { logo } from "../utils/logo";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="Manufac logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Scatter Plot</Link>
          </li>
          <li>
            <Link to="/barChat">Bar Chat</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
