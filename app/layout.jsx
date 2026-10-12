import { Geist, Instrument_Serif } from "next/font/google";
import SiteChrome from "./components/SiteChrome";
import { person } from "./siteData";
import "./globals.css";

// Instrument Serif sets display headings; Geist sets reading text and
// interface. Both are self-hosted by next/font at build time.
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(person.site),
  title: {
    default: "Luke Johnston | Curriculum, teaching, and Bible resources",
    template: "%s | Luke Johnston",
  },
  description:
    "Luke Johnston’s curriculum, teaching series, books, and Bible-study apps and websites, with his resume, CV, and curriculum documents.",
};

export const viewport = {
  themeColor: "#102039",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
