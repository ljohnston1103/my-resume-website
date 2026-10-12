// A role, degree, or training record: title, organization, dates, points.
// On wide screens the dates move into their own left column.
export default function ResumeEntry({ entry, level = 3 }) {
  const Heading = `h${level}`;
  const where = [entry.org, entry.place].filter(Boolean).join(", ");

  return (
    <article className="resumeEntry">
      <Heading className="resumeEntryTitle">{entry.title}</Heading>
      {where ? <p className="resumeEntryOrg">{where}</p> : null}
      {entry.dates ? (
        <p className="resumeEntryDates">
          {entry.dates}
          {entry.dateNote ? <span className="resumeEntryNote">{entry.dateNote}</span> : null}
        </p>
      ) : null}
      {entry.points?.length ? (
        <ul className="resumeEntryPoints">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
