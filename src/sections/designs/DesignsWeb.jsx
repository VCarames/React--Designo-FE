import DesignCard from "../../components/cards/DesignCard";

function DesignsWeb() {
  return (
    <section className="designs">
      <div className="designs__content">
        <ul className="designs__list" role="list">
          <DesignCard
            img="src/assets/web-design/desktop/image-express.jpg"
            heading="Express"
            text="A multi-carrier shipping website for ecommerce businesses"
          />
          <DesignCard
            img="src/assets/web-design/desktop/image-transfer.jpg"
            heading="Transfer"
            text="Site for low-cost money transfers and sending money within seconds"
          />
          <DesignCard
            img="src/assets/web-design/desktop/image-photon.jpg"
            heading="Photon"
            text="A state-of-the-art music player with high-resolution audio and DSP effects"
          />
          <DesignCard
            img="src/assets/web-design/desktop/image-builder.jpg"
            heading="Builder"
            text="Connects users with local contractors based on their location"
          />
          <DesignCard
            img="src/assets/web-design/desktop/image-blogr.jpg"
            heading="Blogr"
            text="Blogr is a platform for creating an online blog or publication"
          />
          <DesignCard
            img="src/assets/web-design/desktop/image-camp.jpg"
            heading="Camp"
            text="Get expert training in coding, data, design, and digital marketing"
          />
        </ul>
      </div>
    </section>
  );
}

export default DesignsWeb;
