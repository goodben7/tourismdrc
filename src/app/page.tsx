import { Metadata } from "next";
import HomeClientPage from "./HomeClientPage";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  openGraph: {
    title: `${APP_NAME} | Votre Passerelle vers la RDC`,
    description: APP_DESCRIPTION,
    url: "/",
    siteName: APP_NAME,
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <HomeClientPage />;
}
