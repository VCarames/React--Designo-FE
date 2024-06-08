import HeadquartersList from "./HeadquartersList";

function HeadquartersSection() {
  return (
    <>
      <section className="headquarters">
        <div className="headquarters__content">
          <h2 className="visually-hidden">Our Headquarter</h2>
          <HeadquartersList />
        </div>
      </section>
    </>
  );
}

export default HeadquartersSection;
