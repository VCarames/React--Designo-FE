function WhyUsCard({
  contentClass,
  img,
  imgTablet,
  imgDesktop,
  heading,
  textOne,
  textTwo,
}) {
  return (
    <div className={`why-us__content ${contentClass}`}>
      <picture className="why-us__picture">
        <source srcSet={imgDesktop} media="(min-width: 1000px)" />
        <source srcSet={imgTablet} media="(min-width: 760px)" />
        <img src={img} alt="" />
      </picture>
      <div className="why-us__container">
        <h2 className="why-us__heading">{heading}</h2>
        <div className="why-us__container--text">
          <p className="why-us__text">{textOne}</p>
          <p className="why-us__text">{textTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUsCard;
