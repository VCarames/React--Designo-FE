function Intro({ introContentClass, heading, text }) {
  return (
    <section className="intro">
      <div className={`intro__content ${introContentClass}`}>
        <h1 className="intro__heading">{heading}</h1>
        <p className="intro__text">{text}</p>
      </div>
    </section>
  );
}

export default Intro;
