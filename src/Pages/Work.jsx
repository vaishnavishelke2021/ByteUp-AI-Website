import MarqueeLogo from "../Components/MarqueeLogo";
import Navbar from "../Components/Navbar";
import WorkHero from "../Components/workHero";
import WorkShowcase from "../Components/WorkShowcase";
import ReachOut from "../Components/ReachOut";
import Footer from "../Components/Footer";

const Work = () => {
  return (
    <div>
      <Navbar />
      <WorkHero />
      <div className="mt-[-10px] mb-[-4rem]">
        <MarqueeLogo />
      </div>

      <WorkShowcase />

      <ReachOut />
      <Footer />
    </div>
  );
};

export default Work;
