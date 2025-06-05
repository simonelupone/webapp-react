import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <nav>
      <div className="flex gap-4">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/details">Movie details</NavLink>
      </div>
    </nav>
  );
};

export default Header;
