export default function Works() {
  // You can update these links to your actual project URLs to automatically fetch screenshots!
  const projects = [
    {
      title: "Nubcast",
      desc: "An AI-powered casting platform and mobile app for actors to practice monologues, improve accents, and connect with producers.",
      tags: ["Next.js", "Tailwind", "React Native", "TypeScript"],
      link: "https://www.trynubcast.com",
    },
    {
      title: "Al Falah Trading",
      desc: "A comprehensive point-of-sale and business management dashboard designed to seamlessly record sales data and generate printable receipts.",
      tags: ["TypeScript", "Tailwind", "Next.js"],
      link: "https://al-falah-trading.ventures/admin/dashboard",
    },
    {
      title: "Paypaxe",
      desc: "A comprehensive fintech application allowing users to track expenses, set savings goals, join Ajo/Esusu circles, and manage funds via a digital wallet.",
      tags: ["React", "React Native", "Fintech"],
      link: "https://paypaxe.com",
    },
    {
      title: "Havre de Grace Schools",
      desc: "A comprehensive educational platform providing essential information, resources, and communication tools for students, parents, and faculty.",
      tags: ["React", "Education", "Web Design"],
      link: "https://havredegraceschools.com/", 
    },
  ];

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
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <div className="work-card-image-wrapper">
              {project.link ? (
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(
                    project.link
                  )}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={`${project.title} Preview`}
                  className="work-card-image"
                  style={{
                    height: 240,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  loading="lazy"
                />
              ) : (
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
                    {project.title}
                  </span>
                </div>
              )}
              <div className="work-card-overlay"></div>
            </div>
            <div className="work-card-info">
              <div className="work-card-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="work-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-desc">{project.desc}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "1.25rem",
                    color: "var(--accent)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  Visit Website &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
