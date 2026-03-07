import { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Explorez nos articles et guides sur le tourisme en RDC. Conseils de voyage, culture, safaris et découvertes au cœur de l'Afrique.",
  openGraph: {
    title: "Blog Tourism DRC | Récits de Voyage",
    description: "Les meilleures histoires et conseils pour votre voyage en République Démocratique du Congo.",
    images: [
      {
        url: "/images/destinations/vi-2.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Tourism DRC",
      },
    ],
  },
};

export default function Page() {
  return <BlogClientPage />;
}
