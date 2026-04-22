import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: {
    default: "Healing Path Psychotherapy Services",
    template: "%s | Healing Path Psychotherapy Services",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
