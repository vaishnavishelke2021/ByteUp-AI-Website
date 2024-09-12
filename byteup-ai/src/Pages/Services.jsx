import Navbar from "../Components/Navbar";
import ServiceHero from "../Components/ServiceHero";
import Marquee from "../Components/Marquee";
import ServiceCard from "../Components/ServiceCard";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <div className="mt-[-70px] md:mt-[-40px]">
        <Marquee />
      </div>

      <div className="py-10">
        <ServiceCard />
      </div>

      <div className="mt-[-80px]">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
