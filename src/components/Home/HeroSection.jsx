import { FaShippingFast } from 'react-icons/fa';
import '../../assets/styles/Home/HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Envíos rápidos y seguros a todo el país</h1>
        <p>Entregamos tus paquetes con la mayor eficiencia y cuidado</p>
        <div className="hero-icon">
          <FaShippingFast />
        </div>
        <button className="hero-button">Solicitar envío ahora</button>
      </div>
    </section>
  );
};