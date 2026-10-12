import Image from "next/image";
import Link from "next/link";
import { books, digitalItems, itemsIn, portfolioById } from "./_lib/collections";
import { fileInfo } from "./_lib/publicFiles";
import { anyFile } from "./components/DocRow";
import { numberWord } from "./_lib/words";
import BookCard from "./components/BookCard";
import Cover from "./components/Cover";
import DocActions from "./components/DocActions";
import HeroVideo from "./components/HeroVideo";
import KeyDocuments from "./components/KeyDocuments";
import SiteCard from "./components/SiteCard";
import TeachingStats from "./components/TeachingStats";
import { capitalize } from "./components/WorkCard";
import { bookDetails, coverCandidates, curriculumDownloadName, curriculumPdf, homeFlagships } from "./portfolioAssets";
import { currentRoles, educationInProgress, keyDocuments, person } from "./siteData";

export const dynamic = "force-static";

export default function Home() {
  const flagships = homeFlagships.map((id) => portfolioById[id]).filter(Boolean);
  const seriesCount = itemsIn("Teaching series").length;
  const bookList = books();
  const sites = digitalItems().filter((item) => ["W1", "S01", "W3"].includes(item.id));
  const resume = keyDocuments.find((doc) => doc.id === "resume");
  const resumeReady = Boolean(fileInfo(resume.href));
  const docsReady = anyFile(keyDocuments.map((doc) => doc.href));
  const bookFiles = bookList.flatMap((item) => {
    const details = bookDetails[item.id] ?? {};
    return details.editions ? details.editions.map((edition) => edition.pdf) : [details.pdf];
  });
  const allBooksReadable = bookFiles.every((href) => fileInfo(href));

  const proof = [
    {
      title: "Curriculum development",
      text: `${numberWord(flagships.length, { capital: true })} flagship curricula, from a 365-day children’s devotional to a 23-session institute workbook, with lesson sequences, teacher answers, and student activities across the set.`,
      href: "/curriculum#flagship",
      link: "Read the curricula",
    },
    {
      title: "Teaching",
      text: `Seven years teaching children ages 6–11 and five years teaching youth ages 12–19, plus adult classes and ${numberWord(seriesCount)} teaching series.`,
      href: "/curriculum#series",
      link: "Browse the teaching series",
    },
    {
      title: "Missions and evangelism training",
      text: "An evangelism class, outreach training, booth-evangelism and A.S.K. materials, and six-week mission-team preparation.",
      href: "/curriculum#missions",
      link: "See the training resources",
    },
    {
      title: "Research and writing",
      text: "To Have and To Hold in three editions, including the expanded study edition, two coauthored books, and a research paper on the kingdom.",
      href: "/books",
      link: "Read the books",
    },
    {
      title: "Publishing",
      text: "Writing, formatting, and independently publishing books and curriculum. PLANTED and To Have and To Hold are published on Amazon.",
      href: "/books",
      link: "See published work",
    },
    {
      title: "Apps and websites",
      text: "Website direction for a Bible handbook and a publishing site, research organization for a manuscript-evidence site, an interactive study app for a course, and content for the JohnstonBros platform.",
      href: "/digital",
      link: "Visit the apps and websites",
    },
    {
      title: "Service and sales",
      text: "Account Representative at State Farm since October 2020, managing client accounts and responding to account and service questions.",
      href: "/resume#current",
      link: "See the full experience",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo src={person.heroVideo} label={`Featured video of ${person.name}`}>
          <div className="wrap heroContent">
            <h1 id="hero-title" className="heroTitle">
              {person.name}
            </h1>
            <p className="heroLead">{person.headline}</p>
            <div className="heroActions">
              <Link className="btn btnGold btnLarge" href="/curriculum">
                Explore the curriculum
              </Link>
              {resumeReady ? (
                <a className="btn btnGlass btnLarge" href={resume.href} target="_blank" rel="noopener">
                  View resume
                  <span className="visuallyHidden"> (PDF, opens in a new tab)</span>
                </a>
              ) : (
                <Link className="btn btnGlass btnLarge" href="/documents">
                  Resume and downloads
                </Link>
              )}
            </div>
          </div>
        </HeroVideo>
      </section>

      <section className="band bandPaper" aria-labelledby="intro-title">
        <div className="wrap introGrid">
          <div className="introPortrait">
            <Image
              src={person.portrait}
              alt={`Portrait of ${person.name}`}
              fill
              sizes="(min-width: 900px) 30vw, 60vw"
            />
          </div>
          <div className="introText">
            <h2 id="intro-title" className="displayTitle">
              Teaching experience
            </h2>
            <p className="leadText">{person.intro}</p>
            <TeachingStats />
          </div>
        </div>
      </section>

      {docsReady ? (
      <section className="band bandNavy" aria-labelledby="docs-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="docs-title" className="displayTitle">
              Read the full documents
            </h2>
            <p className="bandLead">
              Open any document in your browser or download it. Nothing here requires a request.
            </p>
          </div>
          <KeyDocuments tone="dark" />
          <p className="bandFoot">
            <Link className="textLink onDark" href="/documents">
              All downloads: resume, CV, curricula, and books
            </Link>
          </p>
        </div>
      </section>
      ) : null}

      <section className="band bandPaper" aria-labelledby="flagship-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="flagship-title" className="displayTitle">
              {numberWord(flagships.length, { capital: true })} flagship curricula
            </h2>
            <p className="bandLead">From a 365-day children’s devotional to a 23-session institute workbook.</p>
          </div>
          <ul className="shelf">
            {flagships.map((item) => (
              <li key={item.id} className="shelfItem">
                <Link className="shelfLink" href={`/curriculum#${item.id}`}>
                  <Cover
                    candidates={coverCandidates(item)}
                    title={item.title}
                    kind={capitalize(item.kind)}
                    sizes="(min-width: 1100px) 200px, (min-width: 640px) 30vw, 42vw"
                  />
                  <span className="shelfKind">{capitalize(item.kind)}</span>
                  <span className="shelfTitle">{item.title}</span>
                </Link>
                <DocActions
                  href={curriculumPdf(item.id)}
                  downloadName={curriculumDownloadName(item)}
                  label={item.title}
                  size="xs"
                  showMeta={false}
                />
              </li>
            ))}
          </ul>
          <p className="bandFoot">
            <Link className="btn btnOutline" href="/curriculum">
              All curriculum and training
            </Link>
          </p>
        </div>
      </section>

      <section className="band bandTint" aria-labelledby="proof-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="proof-title" className="displayTitle">
              What the work shows
            </h2>
            <p className="bandLead">Each skill, with the work behind it.</p>
          </div>
          <ul className="proofGrid">
            {proof.map((entry) => (
              <li key={entry.title} className="proof">
                <h3 className="proofTitle">{entry.title}</h3>
                <p className="proofText">{entry.text}</p>
                <Link className="textLink" href={entry.href}>
                  {entry.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band bandPaper" aria-labelledby="books-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="books-title" className="displayTitle">
              Books and research
            </h2>
            <p className="bandLead">
              {allBooksReadable ? "Read each one in full. " : ""}To Have and To Hold is available in three editions, including the expanded study edition.
            </p>
          </div>
          <div className="bookRow">
            {bookList.map((item) => (
              <BookCard key={item.id} item={item} variant="compact" />
            ))}
          </div>
          <p className="bandFoot">
            <Link className="btn btnOutline" href="/books">
              Go to Books
            </Link>
          </p>
        </div>
      </section>

      <section className="band bandTint" aria-labelledby="digital-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="digital-title" className="displayTitle">
              Apps and websites
            </h2>
            <p className="bandLead">Bible-study tools and research sites.</p>
          </div>
          <div className="siteRow">
            {sites.map((item) => (
              <SiteCard key={item.id} item={item} compact />
            ))}
          </div>
          <p className="bandFoot">
            <Link className="btn btnOutline" href="/digital">
              All apps and websites
            </Link>
          </p>
        </div>
      </section>

      <section className="band bandPaper" aria-labelledby="now-title">
        <div className="wrap nowGrid">
          <div>
            <h2 id="now-title" className="displayTitle">
              Now
            </h2>
            <p className="bandLead">Current roles and degrees in progress.</p>
            <p className="bandFoot">
              <Link className="btn btnOutline" href="/resume">
                Full experience and education
              </Link>
            </p>
          </div>
          <ul className="nowList">
            {currentRoles.map((role) => (
              <li key={role.title}>
                <span className="nowTitle">{role.title}</span>
                <span className="nowDetail">
                  {[role.org, role.dates.replace("–Present", " to present")].filter(Boolean).join(", ")}
                </span>
              </li>
            ))}
            <li>
              <span className="nowTitle">Degrees in progress, all expected Spring 2027</span>
              <span className="nowDetail">
                {educationInProgress.map((degree) => `${degree.title}, ${degree.org}`).join("; ")}
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="band bandNavy contactBand" aria-labelledby="contact-title">
        <div className="wrap contactGrid">
          <div>
            <h2 id="contact-title" className="displayTitle">
              Contact
            </h2>
            <p className="bandLead">For curriculum, teaching, writing, or training roles.</p>
          </div>
          <div className="contactActions">
            <a className="btn btnGold btnLarge" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <a className="btn btnGlass btnLarge" href={person.phoneHref}>
              {person.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
