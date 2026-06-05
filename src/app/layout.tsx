import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WebCraft Technologies | Premium Website & Web App Development Studio",
  description: "WebCraft Technologies designs and builds world-class, premium, high-converting websites and custom web applications in just 7 days. Request a completely free homepage demo today.",
  keywords: "web development, custom website, doctor website, clinic portal, startup website, portfolio design, next.js, high converting, website in 7 days, free demo website",
  openGraph: {
    title: "WebCraft Technologies | Premium 7-Day Website Studio",
    description: "Get a custom, stunning professional website in 7 days. Receive a free personalized homepage demo before you pay a single rupee.",
    type: "website",
    url: "https://webcraft.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCraft Technologies | Premium 7-Day Website Studio",
    description: "Get a custom, stunning professional website in 7 days. Receive a free personalized homepage demo before you pay a single rupee.",
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
