export default function PageHero({
  className = "",
  eyebrow,
  title,
  lead,
  actions,
  children,
}) {
  return (
    <section className={`pageHero ${className}`.trim()}>
      <div className="pageHeroCopy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
        {actions ? <div className="buttonRow">{actions}</div> : null}
      </div>
      <div className="pageHeroVisual">{children}</div>
    </section>
  );
}
