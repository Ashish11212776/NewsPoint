import { NavLink } from "react-router";
import "./Header.css";
const Header = () => {
  const category = ["Home", "About", "Add News", "Trending", "Login"];
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>NewsPoint</h1>

          <div className="header-points">
            {category.map((item, index) => {
              const url = `/${item.toLowerCase()}`; 
              return (
                <NavLink to={url} key={index} activeClassName="active">
                  {item}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
