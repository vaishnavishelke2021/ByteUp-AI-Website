import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HomeWork from "../Components/HomeWork";
import AnimatedCursor from "../Components/AnimatedCursor";
import HomeServices from "../Components/HomeServices";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import HomeBlog from "../Components/HomeBlog";
import MarqueeLogo from "../Components/MarqueeLogo";

const Home = () => {
  return (
    <div>
      <AnimatedCursor />
      <Navbar withHeroSection={true} />
      <Hero />
      <MarqueeLogo />
      <HomeWork />
      <HomeServices />
      <HomeBlog />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
