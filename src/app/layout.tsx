import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { SiteMotionProvider } from "@/components/motion/site-motion-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home: Isi Kalorimu dengan SEKALORI - SEKALORI Kitchen & Catering",
    template: "SEKALORI - %s",
  },
  description:
    "SEKALORI Kitchen & Catering serves halal meal prep and catering from Bogor with balanced nutrition, fresh local ingredients, and chef-curated menus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteMotionProvider>{children}</SiteMotionProvider>
      </body>
    </html>
  );
}
