import { Archivo, Sora } from "next/font/google";
import SiteChrome from "./components/SiteChrome";
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
