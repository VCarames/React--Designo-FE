import LocationList from "./LocationList";

function LocationSection() {
  return (
    <section className="locations">
      <div className="locations__content">
        <h2 className="visually-hidden">Our Locations</h2>
        <LocationList />
      </div>
    </section>
  );
}

export default LocationSection;
