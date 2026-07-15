export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...Array(2)].map((_, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-text">React</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">Next.js</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">TypeScript</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">Node.js</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">Tailwind</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">Figma</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">JavaScript</span>
            <span className="marquee-dot"></span>
            <span className="marquee-text">CSS</span>
            <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
