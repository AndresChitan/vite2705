import { HeroSection } from '../components/Home/HeroSection';
import { Services } from '../components/Home/Services';
import { Tracking } from '../components/Home/Tracking';
import { Testimonials } from '../components/Home/Testimonials';
import '../assets/styles/HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <Tracking />
      <Testimonials />
    </div>
  );
};