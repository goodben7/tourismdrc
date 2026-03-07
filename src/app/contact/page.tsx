import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
    title: "Contactez-nous",
    description: "Vous avez des questions ? Notre équipe est à votre disposition pour vous aider à planifier votre prochain voyage en République Démocratique du Congo.",
    openGraph: {
        title: "Contactez Tourism DRC | Support & Réservation",
        description: "Parlons de votre projet de voyage en RDC. Contactez-nous par téléphone, email ou via notre formulaire.",
        images: [
            {
                url: "/logo.jpeg",
                width: 1200,
                height: 630,
                alt: "Contact Tourism DRC",
            },
        ],
    },
};

export default function Page() {
    return <ContactClientPage />;
}
