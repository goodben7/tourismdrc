import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="block">
      <Card className="group overflow-hidden h-full">
        <CardImage>
          <Image
            src={destination.coverImage.url}
            alt={destination.coverImage.alt}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="badge badge-primary inline-flex items-center">
              <MapPin className="mr-1 h-3 w-3" />
              {destination.province}
            </div>
          </div>
        </CardImage>
        <CardContent>
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {destination.name}
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed line-clamp-2">
            {destination.shortDescription}
          </p>
          <div className="flex items-center text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
            <span>Découvrir</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
