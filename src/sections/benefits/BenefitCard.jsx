function BenefitCard({ illustration, heading, text }) {
  return (
    <li className="benefit-card" role="listitem">
      <img className="benefit-card__illustration" src={illustration} alt="" />
      <div className="benefit-card__container">
        <h3 className="benefit-card__heading">{heading}</h3>
        <p className="benefit-card__text">{text}</p>
      </div>
    </li>
  );
}

export default BenefitCard;
