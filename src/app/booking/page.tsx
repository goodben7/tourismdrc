"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function BookingPage() {
  const { t } = useTranslation();
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
    alert(t('booking_page.successMessage'));
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
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/forest.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-blue-900/70 to-indigo-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('booking_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('booking_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label={t('booking_page.fullName')}
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
                label={t('booking_page.phone')}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div>
                <label htmlFor="numberOfPeople" className="label">
                  {t('booking_page.numberOfPeople')}
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
                      {num} {num === 1 ? t('booking_page.person') : t('booking_page.people')}
                    </option>
                  ))}
                  <option value="10+">10+ {t('booking_page.people')}</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label={t('booking_page.startDate')}
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
              <Input
                label={t('booking_page.endDate')}
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <Input
              label={t('booking_page.destination')}
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder={t('booking_page.destinationPlaceholder')}
            />

            <Input
              label={t('booking_page.budget')}
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder={t('booking_page.budgetPlaceholder')}
            />

            <Textarea
              label={t('booking_page.specialRequests')}
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={6}
              placeholder={t('booking_page.specialRequestsPlaceholder')}
            />

            <div className="flex justify-center">
              <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
                {t('booking_page.submit')}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
