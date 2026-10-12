import Link from "next/link";
import PageHeader from "../components/PageHeader";
import PortfolioEntry from "../components/PortfolioEntry";
import { portfolio, portfolioCategories } from "../portfolioData";

export const metadata = {
  title: "Work",
  description: "Luke Johnston's curriculum, teaching, missions training, books, research, and digital resources.",
};
const sectionId = (category) => category.toLowerCase().replaceAll(" ", "-");

export default function WorkPage() {
  return (
    <main>
      <PageHeader title="Work" lead="Curriculum, classroom resources, missions training, books, and digital learning. Open an entry to explore its purpose and my contribution." />
      <nav className="wrap portfolioNav" aria-label="Portfolio categories">
        {portfolioCategories.map((category) => (
          <a className="textLink" href={`#${sectionId(category)}`} key={category}>{category}</a>
        ))}
      </nav>
      <div className="wrap portfolioGuide">
        <div className="buttonRow">
          <a className="button secondary" href="/documents/luke-johnston-portfolio-guide.pdf" target="_blank" rel="noopener">Portfolio guide <span className="buttonMeta">PDF</span></a>
          <a className="button secondary" href="/documents/luke-johnston-curriculum-samples.pdf" target="_blank" rel="noopener">Teaching samples <span className="buttonMeta">PDF</span></a>
        </div>
        <p className="sectionNote">Teacher and student editions, slides, and revisions are grouped with their curriculum or series. Complete teaching files are available on request.</p>
      </div>
      {portfolioCategories.map((category) => (
        <section className="section wrap split" id={sectionId(category)} aria-labelledby={`${sectionId(category)}-title`} key={category}>
          <h2 id={`${sectionId(category)}-title`} className="sectionTitle">{category}</h2>
          <ul className="entryList">
            {portfolio.filter((item) => item.category === category).map((item) => (
              <li key={item.id}><PortfolioEntry item={item} /></li>
            ))}
          </ul>
        </section>
      ))}
      <section className="section wrap split" aria-labelledby="sample-request-title">
        <h2 id="sample-request-title" className="sectionTitle">Discuss a role or request samples</h2>
        <p className="bodyText">For curriculum, teaching, writing, or training opportunities, <a className="textLink" href="mailto:luke.johnston1103@gmail.com?subject=Portfolio%20sample%20request">email me</a>. My broader work history and education are on the <Link className="textLink" href="/resume">Experience</Link> page.</p>
      </section>
    </main>
  );
}
