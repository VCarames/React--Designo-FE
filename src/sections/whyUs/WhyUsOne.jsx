import WhyUsCard from "./WhyUsCard";

function WhyUsOne({ whyUsClass, heading }) {
  return (
    <section className={`why-us ${whyUsClass}`}>
      <h2 className="visually-hidden">{heading}</h2>
      <WhyUsCard
        contentClass="why-us__content--one"
        imgDesktop="/assets/about/desktop/image-world-class-talent.jpg"
        imgTablet="/assets/about/tablet/image-world-class-talent.jpg"
        img="/assets/about/mobile/image-world-class-talent.jpg"
        heading="World-class talent"
        textOne="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.  "
        textTwo="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      />
    </section>
  );
}

export default WhyUsOne;
