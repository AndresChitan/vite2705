import { FaShippingFast, FaBoxOpen, FaMapMarkedAlt, FaDollarSign, FaQuestionCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import '../assets/styles/Sidebar.css';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaChevronRight className="chevron-right" />
        <FaChevronLeft className="chevron-left" />
      </button>
      
      <div className="sidebar-content">
        <h3 className="sidebar-title">Servicios de Envío</h3>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <FaShippingFast className="sidebar-icon" />
            <a href="#">Envíos Express</a>
          </li>
          <li className="sidebar-item">
            <FaBoxOpen className="sidebar-icon" />
            <a href="#">Paquetería</a>
          </li>
          <li className="sidebar-item">
            <FaMapMarkedAlt className="sidebar-icon" />
            <a href="#">Rastreo</a>
          </li>
          <li className="sidebar-item">
            <FaDollarSign className="sidebar-icon" />
            <a href="#">Tarifas</a>
          </li>
          <li className="sidebar-item">
            <FaQuestionCircle className="sidebar-icon" />
            <a href="#">Ayuda</a>
          </li>
        </ul>
        
        <div className="sidebar-promo">
          <h4>¡Oferta Especial!</h4>
          <p>15% de descuento en tu primer envío</p>
          <button className="sidebar-button">Código: PRIMERENVIO</button>
        </div>
      </div>
    </div>
  );
};