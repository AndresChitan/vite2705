import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../../assets/styles/Home/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "María González",
    comment: "Excelente servicio! Mi paquete llegó antes de lo esperado y en perfectas condiciones.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Martínez",
    comment: "Muy profesional el equipo, el seguimiento fue preciso y el trato excelente.",
    rating: 4
  },
  {
    id: 3,
    name: "Ana López",
    comment: "Los uso regularmente para mi negocio y nunca he tenido problemas. 100% recomendados.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">Experiencias reales de quienes confían en nosotros</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonial.comment}</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "star filled" : "star"} 
                  />
                ))}
              </div>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};