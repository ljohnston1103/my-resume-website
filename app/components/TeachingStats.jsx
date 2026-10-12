import { teaching } from "../siteData";

// Two separate figures, one per age group, never added together.
export default function TeachingStats({ tone = "light" }) {
  return (
    <div className={`teachingStats tone-${tone}`}>
      <ul className="statList">
        {teaching.groups.map((group) => (
          <li key={group.id} className="stat">
            <span className="statFigure">
              {group.years}
              <span className="statUnit"> years</span>
            </span>
            <span className="statLabel">
              {group.label}, {group.ages}
            </span>
          </li>
        ))}
        <li className="stat statText">
          <span className="statFigure statFigureWord">Adults</span>
          <span className="statLabel">{teaching.adults}</span>
        </li>
      </ul>
      <p className="statNote">{teaching.note}</p>
    </div>
  );
}
