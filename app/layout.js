import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import VisitorTracker from "./components/VisitorTracker";
import StripeNotice from "./components/StripeNotice";

export const metadata = {
  metadataBase: new URL("https://goobagloballtd.com"),
  title: {
    default: "Gooba Global LTD — Digital Design & Development",
    template: "%s | Gooba Global LTD",
  },
  description: "Gooba Global LTD creates clear, high-performing websites and digital products for ambitious businesses worldwide.",
  openGraph: {
    type: "website",
    siteName: "Gooba Global LTD",
    title: "Gooba Global LTD — Digital Design & Development",
    description: "Clear, high-performing websites and digital products for ambitious businesses worldwide.",
  },
  twitter: {
    card: "summary",
    title: "Gooba Global LTD — Digital Design & Development",
    description: "Clear, high-performing websites and digital products for ambitious businesses worldwide.",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VisitorTracker />
        <Header />
        <main className="min-h-screen pt-[104px]">
          {children}
        </main>
        <ContactSection />
        <StripeNotice />
        <Footer />
      </body>
    </html>
  );
}
