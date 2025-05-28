import { FaBoxOpen, FaShippingFast, FaMapMarkedAlt, FaMoneyBillWave } from 'react-icons/fa';
import '../../assets/styles/Home/Services.css';

export const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones logísticas adaptadas a tus necesidades</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaShippingFast />
            </div>
            <h3>Envío Express</h3>
            <p>Entrega en 24-48 horas para tus envíos urgentes</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaBoxOpen />
            </div>
            <h3>Paquetería</h3>
            <p>Envíos nacionales e internacionales de todo tamaño</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaMapMarkedAlt />
            </div>
            <h3>Seguimiento</h3>
            <p>Monitoreo en tiempo real de tus envíos</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Tarifas Competitivas</h3>
            <p>Los mejores precios del mercado con calidad garantizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};