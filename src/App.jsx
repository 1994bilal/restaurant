
import Dishes from './Components/Dishes';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Mission from './Components/Mission';
import Expertise from './Components/Expertise';
import Review from './Components/Review';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';


const App = () => {
  return (

    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar/>
      <HeroSection/> 
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <ContactSection/>
      <Footer/>
    
</main>
  );
};

export default App;