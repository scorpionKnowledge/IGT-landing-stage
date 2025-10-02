import Preloader from "@/components/Preloader";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "CRM Consulting & SaaS Solutions | Infinity Global Tech",
    default: "CRM Consulting & SaaS Solutions | Infinity Global Tech", // a default is required when creating a template
  },
  description: "Infinity Global Tech is a trusted Salesforce consulting partner offering Salesforce implementation, Quick Start packages, and Data Cloud & Einstein AI solutions tailored for businesses.",
  keywords: "CRM consulting services, CRM implementation, Salesforce Quick Start packages, Software testing ser-vices, Salesforce Partner, SaaS software products, Custom software solutions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
