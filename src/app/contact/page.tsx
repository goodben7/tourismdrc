"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Contactez-Nous</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                <Input
                  label="Téléphone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Sujet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  Envoyer le Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="mb-6">Informations de Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Adresse</h3>
                    <p className="text-gray-600">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Téléphone</h3>
                    <a href={`tel:${CONTACT.phone}`} className="text-gray-600 hover:text-primary-600">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <a href={`mailto:${CONTACT.email}`} className="text-gray-600 hover:text-primary-600">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-semibold">Horaires d'Ouverture</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 9h00 - 14h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
