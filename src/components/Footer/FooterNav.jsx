import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer__nav">
      <ul className="footer__nav-list" role="list">
        <li className="footer__nav-item" role="listitem">
          <Link className="footer__nav-link " to="/about">
            Our Company
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link className="footer__nav-link " to="/locations">
            Locations
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link className="footer__nav-link " to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
