import { FaSearch, FaTruck } from 'react-icons/fa';
import '../../assets/styles/Home/Tracking.css';

export const Tracking = () => {
  return (
    <section className="tracking-section">
      <div className="tracking-container">
        <div className="tracking-content">
          <h2 className="section-title">Rastrea tu envío</h2>
          <p className="section-description">
            Ingresa tu número de guía para conocer el estado actual de tu paquete
          </p>
          
          <div className="tracking-form">
            <input 
              type="text" 
              placeholder="Ej: ABC123456789" 
              className="tracking-input"
            />
            <button className="tracking-button">
              <FaSearch /> Rastrear
            </button>
          </div>
        </div>
        
        <div className="tracking-image">
          <FaTruck />
        </div>
      </div>
    </section>
  );
};