function DesignCard({ img, heading, text }) {
  return (
    <li className="design-card" role="listitem">
      <img className="design-card__img" src={img} alt="" />
      <div className="design-card__container">
        <h3 className="design-card__heading">{heading}</h3>
        <p className="design-card__text">{text}</p>
      </div>
    </li>
  );
}

export default DesignCard;
