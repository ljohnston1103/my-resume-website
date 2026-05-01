import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { books } from "../siteData";

export const metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <main className="pageShell">
      <PageHero
        className="booksHero"
        eyebrow="Books"
        title="Books and curriculum by Dr. Luke Johnston."
        lead="This page features my two published titles, with direct Amazon links for each."
        actions={
          <>
            <Link className="button" href="/about">
              About Dr. Luke
            </Link>
            <Link className="button secondary" href="/resume">
              Resume Page
            </Link>
          </>
        }
      >
        <div className="featuredBookCover">
          <Image
            src="/book-kjv-cover.jpg"
            alt="To Have and To Hold book cover"
            fill
            sizes="(max-width: 860px) 100vw, 30vw"
            className="featuredBookCoverImage"
          />
        </div>
      </PageHero>

      <section className="section bookGrid">
        {books.map((book) => (
          <article className="bookCard" key={book.title}>
            <div className="bookCardImageWrap">
              <Image
                src={book.cover}
                alt={`${book.title} cover`}
                width={387}
                height={500}
                className="bookCardImage"
              />
            </div>
            <p className="eyebrow">{book.eyebrow}</p>
            <h2>{book.title}</h2>
            <p className="detailLine">{book.detail}</p>
            <p>{book.text}</p>
            <div className="cardFooter">
              <span className="statusBadge">{book.status}</span>
              <a
                className="inlineLink"
                href={book.href}
                target="_blank"
                rel="noreferrer"
              >
                {book.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
