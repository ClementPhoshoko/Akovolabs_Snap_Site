export default function SectionHeader({ kicker, title, subtitle, as = "h2" }) {
  const Tag = as;
  return (
    <div className="section-header">
      {kicker && <span className="badge badge-accent kicker">{kicker}</span>}
      <Tag>{title}</Tag>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
