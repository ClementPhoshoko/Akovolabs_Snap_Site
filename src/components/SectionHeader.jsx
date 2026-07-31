export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="section-header">
      {kicker && <span className="badge badge-accent kicker">{kicker}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
