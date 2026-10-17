import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Variable font: one file covering every weight, instead of the six separate
// static weight files this was requesting before.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoMesh Works | Software · AI · Systems",
  description:
    "AutoMesh Works builds the digital systems behind modern businesses — custom software, AI and automation, AI agents, web and mobile applications and cloud infrastructure, designed and connected around how your business actually works.",
  keywords:
    "AutoMesh Works, software development, AI systems, AI agents, automation, web applications, mobile apps, cloud infrastructure, custom software, full stack development, Next.js, founder-led studio, Karman Singh Talwar",
  openGraph: {
    title: "AutoMesh Works | Software · AI · Systems",
    description:
      "AutoMesh Works — software, AI, mobile apps, web applications and cloud infrastructure, designed, built and connected around how your business actually works.",
    type: "website",
    siteName: "AutoMesh Works",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoMesh Works | Software · AI · Systems",
    description:
      "AutoMesh Works builds the digital systems behind modern businesses. Founder-led. Transparent scope and pricing.",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      // The inline script below stamps data-theme before paint, so the server
      // HTML and the first client render differ on that attribute by design.
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'night';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-luxury-bg text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
