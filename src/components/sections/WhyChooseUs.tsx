import { Shield, Users, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Votre sécurité est notre priorité absolue. Nous travaillons avec des partenaires de confiance.",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description: "Nos guides locaux expérimentés vous font découvrir la RDC de manière authentique.",
  },
  {
    icon: Award,
    title: "Expériences Uniques",
    description: "Des itinéraires sur mesure pour des moments inoubliables et des découvertes exclusives.",
  },
  {
    icon: HeartHandshake,
    title: "Service Personnalisé",
    description: "Un accompagnement dédié avant, pendant et après votre voyage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Pourquoi Choisir Tourism DRC ?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Une expertise locale, un service premium et un engagement pour votre satisfaction
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
