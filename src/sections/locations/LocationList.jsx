import LocationCard from "./LocationCard";

function LocationList() {
  return (
    <ul className="locations__list" role="list">
      <LocationCard
        map="/src/assets/locations/desktop/image-map-canada.png"
        mapTablet="/src/assets/locations/tablet/image-map-canada.png"
        mapDesktop="/src/assets/locations/desktop/image-map-canada.png"
        heading="Canada"
        office="Designo Central Office"
        address1="3886 Wellington Street"
        address2="Toronto, Ontario M9C 3J5"
        phone="+1 253-863-8967"
        email="contact@designo.co"
      />
      <LocationCard
        cardClass="location-card--alt"
        map="/src/assets/locations/desktop/image-map-australia.png"
        mapTablet="/src/assets/locations/tablet/image-map-australia.png"
        mapDesktop="/src/assets/locations/desktop/image-map-australia.png"
        heading="Australia"
        office="Designo AU Office"
        address1="19 Balonne Street"
        address2="New South Wales 2443"
        phone="(02) 6720 9092"
        email="contact@designo.au"
      />
      <LocationCard
        map="/src/assets/locations/desktop/image-map-united-kingdom.png"
        mapTablet="/src/assets/locations/tablet/image-map-uk.png"
        mapDesktop="/src/assets/locations/desktop/image-map-united-kingdom.png"
        heading="United Kingdom"
        office="Designo UK Office"
        address1="13 Colorado Way "
        address2="Rhyd-y-fro SA8 9GA"
        phone="078 3115 1400"
        email="contact@designo.uk"
      />
    </ul>
  );
}

export default LocationList;
