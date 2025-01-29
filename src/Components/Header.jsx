import { NavLink } from "react-router-dom";
import "./Header.css";

const categories = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Add News", path: "/add-news" },
  { name: "Trending", path: "/trending" },
  { name: "Login", path: "/login" }
];

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">NewsPoint</h1>
      <nav className="nav-links">
        {categories.map((item, index) => (
          <NavLink to={item.path} key={index}>{item.name}</NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
