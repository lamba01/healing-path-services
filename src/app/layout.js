import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import AOSInit from "@/components/aosinit";
import SchemaMarkup from "@/components/schemamarkup";

export const metadata = {
  title: {
    default: "Healing Path Psychotherapy Services",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  description:
    "Healing Path Psychotherapy offers warm, culturally competent and collaborative psychotherapy services across Ontario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
