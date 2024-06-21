import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo-light.png";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

function Footer({ footerClass }) {
  return (
    <footer className={`footer ${footerClass}`}>
      <div className="footer__content">
        <div className="footer__container--one">
          <Link className="footer__logo" to="/" aria-label="Designo - Home">
            <img src={Logo} alt="" />
          </Link>
          <FooterNav />
        </div>

        <div className="footer__container--two">
          <FooterContact />
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
