import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="h-24 bg-sky-500 text-white font-semibold text-xl flex items-center pl-4">
      <div className="flex gap-4">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/details">Movie details</NavLink>
      </div>
    </nav>
  );
};

export default Header;
