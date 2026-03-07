import { Metadata } from "next";
import BookingClientPage from "./BookingClientPage";

export const metadata: Metadata = {
  title: "Réserver votre Voyage",
  description: "Prêt pour l'aventure ? Remplissez notre formulaire de réservation pour un devis personnalisé et commencez à planifier votre séjour de rêve en RDC.",
  openGraph: {
    title: "Réservation en Ligne | Tourism DRC",
    description: "Planifiez votre voyage sur mesure en République Démocratique du Congo en quelques clics.",
    images: [
      {
        url: "/images/destinations/vi-2.jpg",
        width: 1200,
        height: 630,
        alt: "Réservation Tourism DRC",
      },
    ],
  },
};

export default function Page() {
  return <BookingClientPage />;
}
