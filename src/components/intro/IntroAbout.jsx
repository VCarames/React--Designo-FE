function IntroAbout({ imgDesktop, imgTablet, img, heading, text }) {
  return (
    <section className="about">
      <div className="about__content">
        <picture className="about__picture">
          <source srcSet={imgDesktop} media="(min-width: 1000px)" />
          <source srcSet={imgTablet} media="(min-width: 760px)" />
          <img src={img} alt="" />
        </picture>
        <div className="about__container">
          <h1 className="about__heading">{heading}</h1>
          <p className="about__text">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroAbout;
