"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: "1",
    startDate: "",
    endDate: "",
    destination: "",
    budget: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Demande de devis envoyée avec succès ! Nous vous contacterons dans les 24h.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      numberOfPeople: "1",
      startDate: "",
      endDate: "",
      destination: "",
      budget: "",
      specialRequests: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Demander un Devis</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Nom complet"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Téléphone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="numberOfPeople" className="label">
                  Nombre de personnes
                </label>
                <select
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="select"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "personne" : "personnes"}
                    </option>
                  ))}
                  <option value="10+">10+ personnes</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Date de début"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
              <Input
                label="Date de fin (optionnelle)"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Destination souhaitée"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Ex: Virunga, Kinshasa, Lac Kivu..."
            />

            <Input
              label="Budget approximatif (USD)"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Ex: 1000-2000"
            />

            <Textarea
              label="Demandes spéciales ou informations complémentaires"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={6}
              placeholder="Décrivez vos attentes, préférences, besoins particuliers..."
            />

            <div className="flex justify-center">
              <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
                Envoyer la Demande de Devis
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
