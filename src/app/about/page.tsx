import { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";

export const metadata: Metadata = {
    title: "À Propos de Nous",
    description: "Découvrez notre mission, notre vision et notre expertise pour faire de votre voyage en RDC une expérience exceptionnelle et sécurisée.",
    openGraph: {
        title: "À Propos de Tourism DRC | Notre Mission",
        description: "Votre partenaire de confiance pour explorer les merveilles de la République Démocratique du Congo.",
        images: [
            {
                url: "/images/packages/5.jpg",
                width: 1200,
                height: 630,
                alt: "À Propos de Tourism DRC",
            },
        ],
    },
};

export default function Page() {
    return <AboutClientPage />;
}
