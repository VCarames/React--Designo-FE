import Headquarters from "./Headquarters";
import illustrationCanada from "/src/assets/shared/desktop/illustration-canada.svg";
import illustrationAustralia from "/src/assets/shared/desktop/illustration-australia.svg";
import illustrationUK from "/src/assets/shared/desktop/illustration-united-kingdom.svg";

function HeadquartersList() {
  return (
    <>
      <ul className="headquarters__list">
        <li className="headquarters__list-item" role="listitem">
          <Headquarters
            illustration={illustrationCanada}
            heading="Canada"
            link="/locations"
          />
        </li>

        <li className="headquarters__list-item" role="listitem">
          <Headquarters
            illustration={illustrationAustralia}
            heading="Australia"
            link="/locations"
          />
        </li>

        <li className="headquarters__list-item" role="listitem">
          <Headquarters
            illustration={illustrationUK}
            heading="United Kingdom"
            link="/locations"
          />
        </li>
      </ul>
    </>
  );
}

export default HeadquartersList;
