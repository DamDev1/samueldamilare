export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="section-line"></div>
          <span className="section-label">Testimonials</span>
        </div>

        <h2 className="testimonials-title">
          What Clients <span>Say</span>
        </h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              &ldquo;Samuel delivered an exceptional website that exceeded our
              expectations. His attention to detail and ability to translate our
              vision into reality was remarkable.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AO</div>
              <div className="testimonial-author-info">
                <h4>Adewale Okonkwo</h4>
                <p>CEO, TechNova</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              &ldquo;Working with Samuel was a fantastic experience. He brought
              creative solutions to complex problems and delivered on time,
              every time.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">FK</div>
              <div className="testimonial-author-info">
                <h4>Fatima Khalid</h4>
                <p>Product Manager, StartupHub</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              &ldquo;The performance improvements Samuel made to our platform
              were incredible. Page load times dropped by 60% and user
              engagement soared.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JA</div>
              <div className="testimonial-author-info">
                <h4>James Adeyemi</h4>
                <p>CTO, DataFlow Inc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
