import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting">
            Hey, <span>there</span>
          </h2>

          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">
              Available for new opportunities
            </span>
          </div>

          <div className="hero-name">
            <p className="hero-name-label">I Am</p>
            <h1 className="hero-name-title">
              SAMUEL
              <br />
              DAMILARE
            </h1>
          </div>

          <div className="hero-role">
            <p className="hero-role-text">
              FRONTEND
              <br />
              DEVELOPER
            </p>
          </div>

          <p className="hero-description">
            Specialized in React, Next.js, and Full Stack Development. Crafting
            modern, performant, and beautiful web experiences that make an
            impact.
          </p>

          <div className="hero-cta">
            <a href="#works" className="btn-primary">
              View My Work
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
            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <Image
              src="/hero-portrait.jpeg"
              alt="Samuel Damilare"
              width={420}
              height={550}
              className="hero-image"
              priority
            />

            <div className="hero-float-card card-top">
              <p className="float-card-label">Experience</p>
              <p className="float-card-value">
                <span>3+</span> Years
              </p>
            </div>

            <div className="hero-float-card card-bottom">
              <p className="float-card-label">Projects</p>
              <p className="float-card-value">
                <span>50+</span> Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
