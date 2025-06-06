import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Retro-Gaming",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
