import DesignCard from "../../components/cards/DesignCard";

function DesignsGraphics() {
  return (
    <section className="designs">
      <div className="designs__content">
        <ul className="designs__list" role="list">
          <DesignCard
            img="/assets/graphic-design/desktop/image-change.jpg"
            heading="Tim Brown"
            text="A book cover designed for Tim Brown’s new release, ‘Change’"
          />
          <DesignCard
            img="/assets/graphic-design/desktop/image-boxed-water.jpg"
            heading="Box Water"
            text="A simple packaging concept made for Boxed Water"
          />
          <DesignCard
            img="/assets/graphic-design/desktop/image-science.jpg"
            heading="Science!"
            text="A poster made in collaboration with 
the Federal Art Project"
          />
        </ul>
      </div>
    </section>
  );
}

export default DesignsGraphics;
