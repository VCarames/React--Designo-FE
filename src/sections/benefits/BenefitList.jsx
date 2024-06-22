import BenefitCard from "./BenefitCard";

function BenefitList() {
  return (
    <ul className="benefits__list" role="list">
      <BenefitCard
        illustration="/assets/home/desktop/illustration-passionate.svg"
        heading="Passionate"
        text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <BenefitCard
        illustration="/assets/home/desktop/illustration-resourceful.svg"
        heading="Resourceful"
        text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <BenefitCard
        illustration="/assets/home/desktop/illustration-friendly.svg"
        heading="Friendly"
        text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </ul>
  );
}

export default BenefitList;
