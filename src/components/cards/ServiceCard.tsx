import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  icon: LucideIcon;
}

export default function ServiceCard({ service, icon: Icon }: ServiceCardProps) {
  return (
    <div className="service-card group">
      <div className="service-card-icon">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">
        {service.name}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {service.shortDescription}
      </p>
    </div>
  );
}
