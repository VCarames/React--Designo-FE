import DesignCard from "../../components/cards/DesignCard";

function DesignsApp() {
  return (
    <section className="designs">
      <div className="designs__content">
        <ul className="designs__list">
          <DesignCard
            img="/assets/app-design/desktop/image-airfilter.jpg"
            heading="Airfilter"
            text="Solving the problem of poor indoor air quality by filtering the air"
          />
          <DesignCard
            img="/assets/app-design/desktop/image-eyecam.jpg"
            heading="Eyecam"
            text="Product that lets you edit your favorite photos and videos at any time"
          />
          <DesignCard
            img="/assets/app-design/desktop/image-faceit.jpg"
            heading="Faceit"
            text="Get to meet your favorite internet superstar with the faceit app"
          />
          <DesignCard
            img="/assets/app-design/desktop/image-todo.jpg"
            heading="Todo"
            text="A todo app that features cloud sync with
light and dark mode"
          />
          <DesignCard
            img="/assets/app-design/desktop/image-loopstudios.jpg"
            heading="Loopstudios"
            text="A VR experience app made for Loopstudios"
          />
        </ul>
      </div>
    </section>
  );
}

export default DesignsApp;
