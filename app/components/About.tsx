export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <div className="section-line"></div>
        <span className="section-label">About Me</span>
      </div>

      <div className="about-grid">
        <div>
          <h2 className="about-title">
            Passionate about crafting <span>digital experiences</span> that
            matter
          </h2>
          <p className="about-text">
            I&apos;m Samuel Damilare, a Frontend Developer with a passion for
            creating beautiful, functional, and user-centered digital
            experiences. With expertise in React, Next.js, and modern web
            technologies, I transform ideas into polished, performant web
            applications.
          </p>
          <p className="about-text">
            I believe great software is built at the intersection of clean code,
            thoughtful design, and genuine user empathy. Every project I take on
            is an opportunity to push boundaries and deliver something
            exceptional.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <p className="stat-number">4+</p>
            <p className="stat-label">Years Exp.</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">50+</p>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">30+</p>
            <p className="stat-label">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
