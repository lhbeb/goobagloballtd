import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import VisitorTracker from "./components/VisitorTracker";

export const metadata = {
  metadataBase: new URL("https://goobaglobaltd.com/"),
  title: {
    default: "GOOBA GLOBAL LTD — Digital Products & Custom Websites",
    template: "%s | Gooba Global LTD",
  },
  description: "GOOBA GLOBAL LTD sells website templates and UI kits and provides custom website design and development.",
  openGraph: {
    type: "website",
    siteName: "Gooba Global LTD",
    title: "GOOBA GLOBAL LTD — Digital Products & Custom Websites",
    description: "Website templates, UI kits, and custom website design and development.",
  },
  twitter: {
    card: "summary",
    title: "GOOBA GLOBAL LTD — Digital Products & Custom Websites",
    description: "Website templates, UI kits, and custom website design and development.",
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VisitorTracker />
        <Header />
        <main className="min-h-screen pt-[112px]">
          {children}
        </main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
