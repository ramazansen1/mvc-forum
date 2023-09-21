import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>MVC Forum</h1>

        <div className="link">
          <NavLink to={"/"}>Gönderiler</NavLink>
          <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
