import { Metadata } from "next";
import ServicesClientPage from "./ServicesClientPage";

export const metadata: Metadata = {
  title: "Nos Services",
  description: "Découvrez nos services premium en RDC : organisation de voyage, hébergement de luxe, transport sécurisé et assistance personnalisée.",
  openGraph: {
    title: "Services Premium en RDC | Tourism DRC",
    description: "Des services d'excellence pour un séjour inoubliable en République Démocratique du Congo.",
    images: [
      {
        url: "/images/services/he-1.jpg",
        width: 1200,
        height: 630,
        alt: "Services Tourism DRC",
      },
    ],
  },
};

export default function Page() {
  return <ServicesClientPage />;
}
