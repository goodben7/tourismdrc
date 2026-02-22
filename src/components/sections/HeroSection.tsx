import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Découvrir",
  ctaLink = ROUTES.destinations,
  backgroundImage = "/images/hero-drc.jpg",
}: HeroSectionProps) {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay" />
      <div className="container-custom hero-content">
        <h1 className="mb-6 max-w-4xl animate-fade-in text-balance">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="btn btn-primary btn-lg animate-fade-in animation-delay-400 inline-flex items-center gap-2"
        >
          {ctaText}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
