import Link from "next/link";
import { books, portfolioById } from "../_lib/collections";
import { fileInfo } from "../_lib/publicFiles";
import BookCard from "../components/BookCard";
import Cover from "../components/Cover";
import PageIntro from "../components/PageIntro";
import { capitalize } from "../components/WorkCard";
import { bookDetails, coverCandidates, curriculumPdf } from "../portfolioAssets";

export const dynamic = "force-static";

export const metadata = {
  title: "Books",
  description:
    "To Have and To Hold in first, second, and expanded editions, The Truth About Calvinism, The Truth About the Israel Issue, and One Kingdom Two Names, with full PDFs.",
};

export default function BooksPage() {
  const [featured, ...rest] = books();
  const coauthored = rest.filter((item) => item.kind === "coauthored book");
  const research = rest.filter((item) => item.kind !== "coauthored book");
  const curriculumBooks = ["C02", "C01"].map((id) => portfolioById[id]).filter(Boolean);
  const bookFiles = books().flatMap((item) => {
    const details = bookDetails[item.id] ?? {};
    return details.editions ? details.editions.map((edition) => edition.pdf) : [details.pdf];
  });
  const allBooksReadable = bookFiles.every((href) => fileInfo(href));
  const curriculumReadable = curriculumBooks.every((item) => fileInfo(curriculumPdf(item.id)));

  return (
    <main>
      <PageIntro
        title="Books and research"
        lead={`A book in three editions, two coauthored books, and a research paper.${
          allBooksReadable ? " Open each one in your browser or download it." : ""
        }`}
      />

      <section className="band bandPaper" aria-label={featured.title}>
        <div className="wrap">
          <BookCard item={featured} variant="feature" headingLevel={2} />
        </div>
      </section>

      {coauthored.length ? (
        <section className="band bandTint" aria-labelledby="coauthored-title">
          <div className="wrap">
            <div className="bandHead">
              <h2 id="coauthored-title" className="displayTitle">
                Coauthored books
              </h2>
              <p className="bandLead">Written with Caleb, Jadon, and Micah Johnston.</p>
            </div>
            <div className="bookGrid">
              {coauthored.map((item) => (
                <BookCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {research.length ? (
        <section className="band bandPaper" aria-labelledby="research-title">
          <div className="wrap">
            <div className="bandHead">
              <h2 id="research-title" className="displayTitle">
                Research
              </h2>
            </div>
            <div className="bookGrid">
              {research.map((item) => (
                <BookCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="band bandTint anchorBand" id="curriculum-books" aria-labelledby="curriculum-books-title">
        <div className="wrap">
          <div className="bandHead">
            <h2 id="curriculum-books-title" className="displayTitle">
              Curriculum in book form
            </h2>
            <p className="bandLead">
              {curriculumReadable
                ? "These live with the curriculum, where you can read them in full."
                : "These live with the curriculum."}
            </p>
          </div>
          <ul className="crossList">
            {curriculumBooks.map((item) => (
              <li key={item.id}>
                <Link className="crossItem" href={`/curriculum#${item.id}`}>
                  <Cover
                    candidates={coverCandidates(item)}
                    title={item.title}
                    kind={capitalize(item.kind)}
                    sizes="120px"
                  />
                  <span className="crossText">
                    <span className="workKind">{capitalize(item.kind)}</span>
                    <span className="crossTitle">{item.title}</span>
                    <span className="crossSummary">{item.summary}</span>
                    <span className="crossGo">Open on the Curriculum page</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
