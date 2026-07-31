export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="card feature-card">
      <span className="feature-icon">
        <Icon />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
