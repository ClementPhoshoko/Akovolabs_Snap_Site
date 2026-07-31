export default function StepCard({ icon: Icon, title, description }) {
  return (
    <div className="card step">
      <span className="feature-icon">
        <Icon />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
