"use client";

import { useState, useEffect } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  Plane,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Mail,
  User,
  Phone
} from "lucide-react";

export default function BookingPage() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
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
    <div className="min-h-screen bg-[#FBFBFF]">
      {/* Hero Section - Cinematic Parallax */}
      <section className="relative h-[55vh] min-h-[350px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-[#FBFBFF] z-20" />
          <Image
            src="/images/destinations/vi-2.jpg"
            alt="Hero Background"
            fill
            className="w-full h-[120%] object-cover scale-110"
            priority
          />
        </div>

        <div className="container-custom relative z-30 pt-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              {t('booking_page.heroTitle')}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6 animate-slide-up">
              {t('booking_page.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-xl animate-slide-up animation-delay-100">
              {t('booking_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-24 -mt-16 relative z-40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left: Registration Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 -z-10 group-hover:scale-110 transition-transform duration-700" />

                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">{t('booking_page.formTitle')}</h2>
                  <p className="text-slate-500 font-light">{t('booking_page.formSubtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                        <User className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t('booking_page.personalInfo')}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Input
                          label={t('booking_page.fullName')}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t('booking_page.personalInfoPlaceholder')}
                        />
                      </div>
                      <div className="group">
                        <Input
                          label="Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t('booking_page.emailPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('booking_page.phone')}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t('booking_page.phonePlaceholder')}
                      />
                      <div>
                        <label htmlFor="numberOfPeople" className="block text-sm font-bold text-slate-700 mb-2 pl-1">
                          {t('booking_page.numberOfPeople')}
                        </label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                          <select
                            id="numberOfPeople"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200 text-slate-800 text-sm appearance-none"
                            required
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? t('booking_page.person') : t('booking_page.people')}
                              </option>
                            ))}
                            <option value="10+">10+ {t('booking_page.people')}</option>
                          </select>
                          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Plane className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t('booking_page.tripDetails')}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Input
                          label={t('booking_page.destination')}
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder={t('booking_page.destinationPlaceholder')}
                        />
                        <MapPin className="absolute right-4 top-[42px] w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                      <div className="relative">
                        <Input
                          label={t('booking_page.budget')}
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder={t('booking_page.budgetPlaceholder')}
                        />
                        <DollarSign className="absolute right-4 top-[42px] w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message & Submit */}
                  <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">{t('booking_page.additionalInfo')}</h3>
                    </div>

                    <Textarea
                      label={t('booking_page.specialRequests')}
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t('booking_page.specialRequestsPlaceholder')}
                    />

                    <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-2 text-slate-500 text-sm italic">
                        <ShieldCheck className="w-4 h-4 text-primary-500" />
                        {t('booking_page.dataProtection')}
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        isLoading={isSubmitting}
                        className="w-full md:w-auto px-10 h-14 rounded-full bg-slate-900 hover:bg-primary-600 text-white shadow-xl shadow-slate-900/10 hover:shadow-primary-500/30 transition-all duration-500 font-black tracking-widest text-xs border border-slate-800 hover:border-primary-500"
                      >
                        {t('booking_page.submit')}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Sidebar / Trust Section */}
            <div className="lg:col-span-4 space-y-8">
              {/* Help Box */}
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />

                <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  {t('booking_page.quickResponse')}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                  {t('booking_page.quickResponseDesc')}
                </p>

                <div className="space-y-4">
                  {[
                    t('booking_page.feature1'),
                    t('booking_page.feature2'),
                    t('booking_page.feature3'),
                    t('booking_page.feature4')
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">{t('booking_page.needHelp')}</h3>
                <p className="text-slate-500 text-sm font-light">{t('booking_page.contactExpert')}</p>

                <div className="space-y-4">
                  <a href="mailto:contact@tourismdrc.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-bold text-slate-800">contact@tourismdrc.com</p>
                    </div>
                  </a>
                  <a href={`tel:${t('booking_page.phoneFr')}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('booking_page.labelPhoneFr')}</p>
                      <p className="text-sm font-bold text-slate-800">{t('booking_page.phoneFr')}</p>
                    </div>
                  </a>
                  <a href={`tel:${t('booking_page.phoneEn')}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('booking_page.labelPhoneEn')}</p>
                      <p className="text-sm font-bold text-slate-800">{t('booking_page.phoneEn')}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="text-center p-6 border-2 border-dashed border-slate-200 rounded-[2rem] opacity-60">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('booking_page.trustPartner')}</p>
                <Image
                  src="/logo1.jpeg"
                  alt="TourismDRC Trust"
                  width={150}
                  height={32}
                  className="mx-auto mt-4 grayscale opacity-50 h-8 w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
