import { Archivo, Sora } from "next/font/google";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import ScrollParallax from "./ScrollParallax";
import "./globals.css";

const displayFont = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Dr. Luke Johnston",
    template: "%s | Dr. Luke Johnston",
  },
  description:
    "Official website for Dr. Luke Johnston featuring ministry background, published books, JohnstonBros media work, resume, and academic documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <ScrollParallax />
        <SiteHeader />
        {children}
        <footer className="footer">
          <div>
            <p className="footerTitle">Dr. Luke Johnston</p>
            <p>Ministry, books, media, and academic documents</p>
          </div>
          <div className="footerLinks">
            <a href="mailto:luke.johnston1103@gmail.com">
              luke.johnston1103@gmail.com
            </a>
            <a
              href="/documents/luke-johnston-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume PDF
            </a>
            <Link href="/documents">Document Center</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
