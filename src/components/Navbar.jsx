
import { useState } from 'react';
import "../assets/styles/Navbar.css";
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Mi Tienda</a>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/productos" className="nav-link">Productos</a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="nav-cart">
          <button className="cart-button">
            <FaShoppingCart />
            {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
          </button>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};