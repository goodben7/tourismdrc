"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, MessageSquare } from "lucide-react";
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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-[50vh] overflow-hidden">
        <Image
          src="/ca-1.jpg"
          alt="Contact Background"
          fill
          priority
          className="object-cover transition-transform duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-slate-900/80 to-slate-950/90 mix-blend-multiply" />

        <div className="relative z-10 container-custom mt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl mb-4">
              <MessageSquare className="h-3 w-3 text-primary-400" />
              <span>{t('about_page.contactTitle')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              {t('about_page.contactSubtitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative -mt-16 z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Contact Information (Left Column) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary-900 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-800 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-900 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-50" />

                <h2 className="text-3xl font-black mb-8">{t('contact_page.infoTitle')}</h2>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                      <Phone className="w-6 h-6 text-primary-200" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-300 uppercase tracking-widest font-bold mb-1">
                        {t('about_page.contactPhoneEn')}
                      </div>
                      <div className="text-xl font-medium mb-5">{CONTACT.phoneEn}</div>

                      <div className="text-xs text-primary-300 uppercase tracking-widest font-bold mb-1">
                        {t('about_page.contactPhoneFr')}
                      </div>
                      <div className="text-xl font-medium">{CONTACT.phoneFr}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                      <Mail className="w-6 h-6 text-primary-200" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-300 uppercase tracking-widest font-bold mb-1">
                        {t('about_page.contactEmail')}
                      </div>
                      <div className="text-xl font-medium">{CONTACT.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                      <MapPin className="w-6 h-6 text-primary-200" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-300 uppercase tracking-widest font-bold mb-1">
                        {t('contact_page.addressLabel')}
                      </div>
                      <div className="text-lg font-medium leading-relaxed">{CONTACT.address}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                      <Clock className="w-6 h-6 text-primary-200" />
                    </div>
                    <div>
                      <div className="text-xs text-primary-300 uppercase tracking-widest font-bold mb-3 mt-1">
                        {t('contact_page.hoursTitle')}
                      </div>
                      <div className="space-y-2 text-sm text-primary-100/90 font-medium">
                        <p>{t('contact_page.hoursWeekday')}</p>
                        <p>{t('contact_page.hoursSaturday')}</p>
                        <p className="text-primary-300/80">{t('contact_page.hoursSunday')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 mb-3">{t('contact_page.formTitle')}</h2>
                  <p className="text-slate-500 font-light">{t('about_page.contactText')}</p>
                </div>

                {isSuccess ? (
                  <div className="bg-emerald-50 text-emerald-600 rounded-2xl p-8 text-center animate-fade-in border border-emerald-100">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('contact_page.successMessage')}</h3>
                    <p className="text-emerald-600/80 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact_page.fullName')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-50/50"
                      />
                      <Input
                        label={t('contact_page.emailLabel')}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-50/50"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact_page.phoneLabel')}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-50/50"
                      />
                      <Input
                        label={t('contact_page.subject')}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-50/50"
                      />
                    </div>

                    <Textarea
                      label={t('contact_page.message')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-slate-50/50"
                    />

                    <Button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-primary-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 group"
                      isLoading={isSubmitting}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {t('contact_page.send')}
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
