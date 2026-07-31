import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Janmashtami — IIT Kanpur | Bhaktivedanta Club",
  description:
    "Experience the divine celebration of Janmashtami at IIT Kanpur, hosted by the Bhaktivedanta Club. A night of soul-stirring Kirtan, spiritual ecstasy, and cosmic awakening.",
  keywords: [
    "Janmashtami",
    "IIT Kanpur",
    "Bhaktivedanta Club",
    "Krishna",
    "Kirtan",
    "Spiritual",
  ],
  openGraph: {
    title: "Janmashtami — Experience the Divine at IIT Kanpur",
    description:
      "A night of soul-stirring Kirtan and spiritual ecstasy. Hosted by the Bhaktivedanta Club.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050208",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} antialiased`}>
      <body
        className="min-h-screen"
        style={{
          background: "#050208",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
