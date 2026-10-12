// Opening block for interior pages: one heading, one lead, optional actions.
export default function PageHeader({ title, lead, children }) {
  return (
    <header className="pageHeader wrap">
      <h1 className="pageTitle">{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}
      {children ? <div className="pageHeaderExtra">{children}</div> : null}
    </header>
  );
}
