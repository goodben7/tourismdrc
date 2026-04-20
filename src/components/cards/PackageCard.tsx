import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star } from "lucide-react";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Package } from "@/types";

import { useTranslation } from "@/i18n/LanguageProvider";

interface PackageCardProps {
  package: Package;
}

const categoryLabels: Record<Package["category"], string> = {
  safari: "Safari",
  "culture-heritage": "Culture & Patrimoine",
  "adventure-nature": "Aventure & Nature",
  "business-travel": "Voyage d'Affaires",
};

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const { locale } = useTranslation();
  
  return (
    <Link href={`/packages/${pkg.slug}`} className="block">
      <Card className="group overflow-hidden h-full flex flex-col">
        <CardImage>
          <Image
            src={pkg.coverImage.url}
            alt={pkg.coverImage.alt}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {pkg.featured && (
            <div className="absolute top-4 right-4">
              <div className="badge badge-warning flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" />
                <span>Populaire</span>
              </div>
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <div className="badge badge-secondary">
              {categoryLabels[pkg.category]}
            </div>
          </div>
        </CardImage>
        <CardContent className="flex-1 flex flex-col">
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {pkg.name}
          </h3>
          <p className="mb-4 text-gray-600 leading-relaxed line-clamp-2 flex-1">
            {pkg.shortDescription}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary-600" />
                <span className="font-medium">{pkg.duration} {pkg.durationUnit === "days" ? "jours" : "heures"}</span>
              </div>
              {pkg.maxGroupSize && (
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary-600" />
                  <span className="font-medium">Max {pkg.maxGroupSize}</span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">À partir de</p>
              <p className="text-lg font-bold text-primary-600">
                {pkg.price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} {pkg.currency}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
