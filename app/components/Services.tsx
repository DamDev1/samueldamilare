export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-header">
          <div className="section-line"></div>
          <span className="section-label">What I Do</span>
        </div>

        <h2 className="services-title">
          Services I <span>Offer</span>
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚛️</div>
            <h3 className="service-name">Frontend Development</h3>
            <p className="service-desc">
              Building responsive, performant web applications using React,
              Next.js, and modern JavaScript frameworks with pixel-perfect
              attention to detail.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3 className="service-name">UI/UX Implementation</h3>
            <p className="service-desc">
              Translating stunning designs into interactive, accessible
              interfaces. From Figma to code, I bring creative visions to life.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3 className="service-name">Full Stack Solutions</h3>
            <p className="service-desc">
              End-to-end web development with Node.js, databases, and APIs.
              Complete solutions from backend architecture to frontend delivery.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3 className="service-name">Responsive Design</h3>
            <p className="service-desc">
              Creating seamless experiences across all devices and screen sizes.
              Mobile-first approach ensuring your app looks great everywhere.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="service-name">Performance Optimization</h3>
            <p className="service-desc">
              Auditing and optimizing web applications for speed, SEO, and Core
              Web Vitals. Faster sites mean happier users and better rankings.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3 className="service-name">API Integration</h3>
            <p className="service-desc">
              Connecting your frontend with RESTful APIs, GraphQL, and
              third-party services. Seamless data flow for dynamic applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
