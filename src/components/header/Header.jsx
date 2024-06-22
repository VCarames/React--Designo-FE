import { Link } from "react-router-dom";
import Logo from "/assets/logos/logo-dark.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" to="/" aria-label="Designo - Home">
          <img src={Logo} alt="" />
        </Link>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
