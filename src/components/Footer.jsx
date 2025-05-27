import '../assets/styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Sobre Nosotros</h3>
          <p className="footer-text">
            Somos una tienda comprometida con ofrecer productos de calidad a nuestros clientes, 
            con atención personalizada y envíos rápidos a todo el país.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/politicas">Políticas de Privacidad</a></li>
            <li><a href="/terminos">Términos y Condiciones</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> Calle Principal 123, Ciudad</li>
            <li><FaPhone /> +1 234 567 890</li>
            <li><FaEnvelope /> info@mitienda.com</li>
            <li><FaClock /> Lunes a Viernes: 9:00 - 18:00</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">Suscríbete para recibir ofertas y novedades</p>
          <form className="footer-form">
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};