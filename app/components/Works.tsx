export default function Works() {
  return (
    <section className="works-section" id="works">
      <div className="section-header">
        <div className="section-line"></div>
        <span className="section-label">Portfolio</span>
      </div>

      <h2 className="works-title">
        Featured <span>Projects</span>
      </h2>

      <div className="works-grid">
        <div className="work-card">
          <div className="work-card-image-wrapper">
            <div
              className="work-card-image"
              style={{
                height: 240,
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: -1,
                  opacity: 0.3,
                }}
              >
                E-Commerce Platform
              </span>
            </div>
            <div className="work-card-overlay"></div>
          </div>
          <div className="work-card-info">
            <div className="work-card-tags">
              <span className="work-tag">React</span>
              <span className="work-tag">Next.js</span>
              <span className="work-tag">Stripe</span>
            </div>
            <h3 className="work-card-title">E-Commerce Platform</h3>
            <p className="work-card-desc">
              A full-featured e-commerce platform with cart management, secure
              payments, and an admin dashboard.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-image-wrapper">
            <div
              className="work-card-image"
              style={{
                height: 240,
                background:
                  "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #60a5fa 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: -1,
                  opacity: 0.3,
                }}
              >
                SaaS Dashboard
              </span>
            </div>
            <div className="work-card-overlay"></div>
          </div>
          <div className="work-card-info">
            <div className="work-card-tags">
              <span className="work-tag">TypeScript</span>
              <span className="work-tag">Tailwind</span>
              <span className="work-tag">Chart.js</span>
            </div>
            <h3 className="work-card-title">SaaS Analytics Dashboard</h3>
            <p className="work-card-desc">
              A real-time analytics dashboard with interactive charts, data
              visualization, and team collaboration features.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-image-wrapper">
            <div
              className="work-card-image"
              style={{
                height: 240,
                background:
                  "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #bfdbfe 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: -1,
                  opacity: 0.3,
                }}
              >
                Social App
              </span>
            </div>
            <div className="work-card-overlay"></div>
          </div>
          <div className="work-card-info">
            <div className="work-card-tags">
              <span className="work-tag">React</span>
              <span className="work-tag">Node.js</span>
              <span className="work-tag">MongoDB</span>
            </div>
            <h3 className="work-card-title">Social Media Application</h3>
            <p className="work-card-desc">
              A feature-rich social platform with real-time messaging, post
              feeds, and user authentication.
            </p>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-image-wrapper">
            <div
              className="work-card-image"
              style={{
                height: 240,
                background:
                  "linear-gradient(135deg, #0c1524 0%, #1d4ed8 50%, #93c5fd 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: -1,
                  opacity: 0.3,
                }}
              >
                Portfolio CMS
              </span>
            </div>
            <div className="work-card-overlay"></div>
          </div>
          <div className="work-card-info">
            <div className="work-card-tags">
              <span className="work-tag">Next.js</span>
              <span className="work-tag">Sanity</span>
              <span className="work-tag">Vercel</span>
            </div>
            <h3 className="work-card-title">Portfolio CMS</h3>
            <p className="work-card-desc">
              A headless CMS-powered portfolio with dynamic content management,
              blog integration, and blazing-fast performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
