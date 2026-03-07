import { Metadata } from "next";
import { getDestinationBySlug } from "@/data/destinations";
import DestinationClientPage from "./DestinationClientPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination non trouvée",
    };
  }

  return {
    title: destination.name.fr,
    description: destination.description.fr,
    openGraph: {
      title: `${destination.name.fr} | Tourism DRC`,
      description: destination.description.fr,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.name.fr,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name.fr} | Tourism DRC`,
      description: destination.description.fr,
      images: [destination.heroImage],
    },
  };
}

export default function Page({ params }: PageProps) {
  return <DestinationClientPage params={params} />;
}
