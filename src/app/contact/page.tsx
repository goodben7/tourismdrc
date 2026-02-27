"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useTranslation();
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
    alert(t('contact_page.successMessage'));
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/kinshasa.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-800/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('contact_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('contact_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">{t('contact_page.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label={t('contact_page.fullName')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label={t('contact_page.emailLabel')}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label={t('contact_page.phoneLabel')}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label={t('contact_page.subject')}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  label={t('contact_page.message')}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  {t('contact_page.send')}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="mb-6">{t('contact_page.infoTitle')}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{t('contact_page.addressLabel')}</h3>
                    <p className="text-gray-600">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{t('contact_page.phoneLabel')}</h3>
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
                    <h3 className="mb-1 font-semibold">{t('contact_page.emailLabel')}</h3>
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
                    <h3 className="mb-1 font-semibold">{t('contact_page.whatsappLabel')}</h3>
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
                <h3 className="mb-4 font-semibold">{t('contact_page.hoursTitle')}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t('contact_page.hoursWeekday')}</p>
                  <p>{t('contact_page.hoursSaturday')}</p>
                  <p>{t('contact_page.hoursSunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
