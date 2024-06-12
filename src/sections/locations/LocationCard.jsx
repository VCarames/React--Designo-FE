import { Link } from "react-router-dom";

function LocationCard({
  cardClass,
  mapDesktop,
  mapTablet,
  map,
  heading,
  office,
  address1,
  address2,
  phone,
  email,
}) {
  return (
    <li className={`location-card ${cardClass}`}>
      <picture className="location-card__picture">
        <source srcSet={mapDesktop} media="(min-width: 1000px)" />
        <source srcSet={mapTablet} media="(min-width: 760px)" />
        <img src={map} alt="" />
      </picture>
      <address className="location-card__container">
        <h3 className="location-card__location">{heading}</h3>
        <div className="location-card__container--office">
          <p className="location-card__office">{office}</p>
          <Link className="location-card__address">
            {address1} <span>{address2}</span>
          </Link>
        </div>
        <div className="location-card__container--contact">
          <p className="location-card__contact">Contact</p>

          <Link className="location-card__phone">P : {phone}</Link>
          <Link className="location-card__email">M :{email}</Link>
        </div>
      </address>
    </li>
  );
}

export default LocationCard;
