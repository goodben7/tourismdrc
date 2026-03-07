import { Metadata } from "next";
import PackagesClientPage from "./PackagesClientPage";

export const metadata: Metadata = {
  title: "Nos Forfaits",
  description: "Choisissez parmi nos forfaits exclusifs : Standard, Silver et Gold. Des expériences sur mesure pour explorer la RDC en toute sérénité.",
  openGraph: {
    title: "Forfaits de Voyage en RDC | Tourism DRC",
    description: "Des offres exclusives pour découvrir les merveilles de la République Démocratique du Congo.",
    images: [
      {
        url: "/images/packages/5.jpg",
        width: 1200,
        height: 630,
        alt: "Forfaits Tourism DRC",
      },
    ],
  },
};

export default function Page() {
  return <PackagesClientPage />;
}
