import { Hanken_Grotesk, Literata } from "next/font/google";
import SiteChrome from "./components/SiteChrome";
import "./globals.css";

// Literata, a book face, carries headings and figures. Hanken Grotesk
// carries reading text and interface. Both are variable fonts, self-hosted
// by next/font at build time; no request leaves the site at runtime.
const serif = Literata({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Luke Johnston",
    template: "%s | Luke Johnston",
  },
  description:
    "Luke Johnston develops curriculum and teaching resources, leads youth and discipleship ministries, writes and publishes books, and creates digital content.",
};

export const viewport = {
  themeColor: "#f7f9f8",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
