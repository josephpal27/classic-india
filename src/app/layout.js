import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const oliGrostesk = localFont({
  src: "../../public/fonts/Oli Grotesk L Regular.woff2",
  variable: "--font-oliGrostesk",
});

export const metadata = {
  title: "Classic India",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oliGrostesk.variable}`}>
      <body>
        <Navbar />
        <div className="mt-[105px]"></div>
        {children}
      </body>
    </html>
  );
}
