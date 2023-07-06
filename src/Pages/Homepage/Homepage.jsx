import Banner from "./Banner";
import CustomerValue from "./CustomerValue/CustomerValue";
import SolutionCarousel from "./Solutions/SolutionCarousel";
import WhyJB from "./WhyJB/WhyJB";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <SolutionCarousel />
      {/*  */}
      <CustomerValue />
      <WhyJB />
    </div>
  );
};

export default Homepage;
