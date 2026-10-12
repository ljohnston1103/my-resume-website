// Opening band for interior pages.
export default function PageIntro({ title, lead, children, id }) {
  return (
    <header className="pageIntro" id={id}>
      <div className="wrap pageIntroInner">
        <h1 className="pageTitle">{title}</h1>
        {lead ? <p className="pageLead">{lead}</p> : null}
        {children ? <div className="pageIntroExtra">{children}</div> : null}
      </div>
    </header>
  );
}
