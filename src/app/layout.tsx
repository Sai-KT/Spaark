import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spaarkenterprises.com"),
  title: {
    default: `${companyData.name} | B2B Security, CCTV, Fire Alarm & AV Systems in Pune`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "CCTV Pune",
    "Security Systems Pune",
    "Commercial CCTV Installation Chakan",
    "Fire Alarm System Pune",
    "EPABX Intercom Pune",
    "Interactive Flat Panels Pune",
    "Public Address Systems Pune",
    "Access Control Biometrics Pune",
    "Time Attendance System Pune",
    "Visitor Management System Pune",
    "Security AMC Pune PCMC",
    "Old Sangavi Systems Integrator",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.spaarkenterprises.com",
    siteName: companyData.name,
    title: `${companyData.name} | Enterprise Security & AV Systems Integrator in Pune`,
    description: companyData.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
