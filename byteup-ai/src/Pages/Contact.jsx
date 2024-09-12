import Navbar from "../Components/Navbar";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import ReachOut from "../Components/ReachOut";

const Contact = () => {
  return (
    <div>
      <Navbar withHeroSection={false} />
      <ContactUs />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default Contact;
