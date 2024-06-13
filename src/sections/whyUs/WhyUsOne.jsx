import WhyUsCard from "./WhyUsCard";

function WhyUsOne({ heading }) {
  return (
    <section className="why-us">
      <h1 className="visually-hidden">{heading}</h1>
      <WhyUsCard
        contentClass="why-us__content--one"
        imgDesktop="/src/assets/about/desktop/image-world-class-talent.jpg"
        imgTablet="/src/assets/about/tablet/image-world-class-talent.jpg"
        img="/src/assets/about/mobile/image-world-class-talent.jpg"
        heading="World-class talent"
        textOne="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.  "
        textTwo="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      />
    </section>
  );
}

export default WhyUsOne;
