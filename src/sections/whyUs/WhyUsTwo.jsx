import WhyUsCard from "./WhyUsCard";

function WhyUsTwo({ heading }) {
  return (
    <section className="why-us">
      <h1 className="visually-hidden">{heading}</h1>
      <WhyUsCard
        contentClass="why-us__content--two"
        imgDesktop="/src/assets/about/desktop/image-real-deal.jpg"
        imgTablet="/src/assets/about/tablet/image-real-deal.jpg"
        img="/src/assets/about/mobile/image-real-deal.jpg"
        heading="The real deal"
        textOne="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        textTwo="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      />
    </section>
  );
}

export default WhyUsTwo;
