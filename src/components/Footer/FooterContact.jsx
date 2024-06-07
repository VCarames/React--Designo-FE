import { Link } from "react-router-dom";

function FooterContact() {
  return (
    <ul className="contact__list" role="list">
      <li className="contact__list-item" role="listitem">
        <address className="address">
          <p className="address__heading ">Designo Central Office</p>
          <Link
            className="address__location"
            href="http://maps.google.com/?q=3886 Wellington Street Toronto, Ontario M9C 3J5 "
          >
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </Link>
        </address>
      </li>
      <li className="contact__list-item" role="listitem">
        <address className="address">
          <p className="address__heading">Contact Us (Central Office)</p>
          <Link className="address__phone" href="tel:+1 253-863-8967">
            P : +1 253-863-8967
          </Link>
          <a className="address__email  " href="mailto:contact@designo.co">
            M : contact@designo.co
          </a>
        </address>
      </li>
    </ul>
  );
}

export default FooterContact;
