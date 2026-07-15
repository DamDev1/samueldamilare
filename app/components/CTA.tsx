export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-card">
        <div className="cta-content">
          <h2 className="cta-title">
            Let&apos;s build something <span>amazing</span> together
          </h2>
          <p className="cta-desc">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can work together to bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <a
              href="mailto:hello@samueldamilare.com"
              className="btn-cta-primary"
            >
              Get In Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/damdev1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
