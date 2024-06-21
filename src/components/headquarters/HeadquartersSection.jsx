import HeadquartersList from "./HeadquartersList";

function HeadquartersSection({ headquartersClasss }) {
  return (
    <>
      <section className={`headquarters ${headquartersClasss}`}>
        <div className="headquarters__content">
          <h2 className="visually-hidden">Our Headquarter</h2>
          <HeadquartersList />
        </div>
      </section>
    </>
  );
}

export default HeadquartersSection;
