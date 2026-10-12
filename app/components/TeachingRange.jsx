import { teaching } from "../siteData";
import DrawOnView from "./DrawOnView";

// Each age group gets its own row and its own bar on a shared age axis,
// so the two experience figures read as separate, never as a sum.
export default function TeachingRange() {
  const { start, end } = teaching.axis;
  const span = end - start;
  const position = (age) => `${(((age - start) / span) * 100).toFixed(3)}%`;

  return (
    <DrawOnView className="teaching">
      <ul className="teachingList">
        {teaching.groups.map((group, index) => (
          <li className="teachingRow" key={group.id} style={{ "--row": index }}>
            <p className="teachingLabel">
              <span className="teachingGroup">{group.label}</span>{" "}
              <span className="teachingAges">{group.ages}</span>
            </p>
            <p className="teachingYears">
              {group.years} years<span className="visuallyHidden"> teaching</span>
            </p>
            <div className="teachingTrack" aria-hidden="true">
              <span
                className="teachingBar"
                style={{
                  "--bar-start": position(group.from),
                  "--bar-size": `${(((group.to + 1 - group.from) / span) * 100).toFixed(3)}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="teachingAxis" aria-hidden="true">
        <span style={{ "--tick": position(start) }}>Age {start}</span>
        <span style={{ "--tick": position(teaching.groups[1].from) }}>
          {teaching.groups[1].from}
        </span>
        <span className="teachingAxisEnd">{end - 1}</span>
      </div>
      <p className="teachingAdults">
        <span className="teachingGroup">Adults</span> {teaching.adults}
      </p>
      <p className="teachingNote">{teaching.note}</p>
    </DrawOnView>
  );
}
