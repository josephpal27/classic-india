import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <div className="mt-[80px] sm:mt-[105px] lg:mt-[85px] xl:mt-[95px] 2xl:mt-[105px]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
