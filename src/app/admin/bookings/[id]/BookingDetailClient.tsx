'use client';

import { useState } from 'react';
import {
   Users,
   Clock,
   MapPin,
   User,
   Mail,
   Phone,
   Calendar,
   DollarSign,
   MessageSquare,
   ShieldCheck,
   CheckCircle2,
   Check,
   X,
   Trash2,
   Loader2,
   Info,
   CreditCard
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useRouter } from "next/navigation";

import { useTranslation } from "@/i18n/LanguageProvider";

interface BookingDetailClientProps {
   booking: any;
}

type Status = 'pending' | 'paid' | 'cancelled';

export default function BookingDetailClient({ booking: initialBooking }: BookingDetailClientProps) {
   const { t, locale } = useTranslation();
   const router = useRouter();
   const [booking, setBooking] = useState(initialBooking);
   const [isUpdating, setIsUpdating] = useState(false);

   const updateBookingStatus = async (newStatus: Status) => {
      setIsUpdating(true);
      try {
         const response = await fetch(`/api/admin/bookings/${booking.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
         });

         if (response.ok) {
            const updated = await response.json();
            setBooking(updated);
         } else {
            alert(t('admin.updateError'));
         }
      } catch (error) {
         console.error("Update failed:", error);
         alert(t('admin.updateError'));
      } finally {
         setIsUpdating(false);
      }
   };

   const deleteBooking = async () => {
      if (!confirm(t('admin.confirmDelete'))) return;

      setIsUpdating(true);
      try {
         const response = await fetch(`/api/admin/bookings/${booking.id}`, {
            method: 'DELETE',
         });

         if (response.ok) {
            router.push('/admin/bookings');
         } else {
            alert(t('admin.deleteError'));
         }
      } catch (error) {
         console.error("Delete failed:", error);
         alert(t('admin.deleteError'));
      } finally {
         setIsUpdating(false);
      }
   };

   const statusColors = {
      paid: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', icon: 'bg-emerald-600', dot: 'bg-emerald-500' },
      cancelled: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100', icon: 'bg-rose-600', dot: 'bg-rose-500' },
      pending: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', icon: 'bg-amber-600', dot: 'bg-amber-500' }
   }[booking.status as Status] || { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-100', icon: 'bg-slate-600', dot: 'bg-slate-500' };

   return (
      <div className="space-y-6">
         {/* Compact Header Section */}
         <div className={`p-8 ${statusColors.bg} rounded-[2rem] border ${statusColors.border} relative overflow-hidden`}>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
               <div className={`w-20 h-20 rounded-2xl ${statusColors.icon} flex items-center justify-center text-white font-black text-3xl shadow-lg`}>
                  {booking.name.charAt(0)}
               </div>
               <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                     <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-white shadow-sm ${statusColors.text}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${statusColors.dot}`} />
                        {booking.status === 'paid' ? t('admin.confirmedStatus') :
                           booking.status === 'cancelled' ? t('admin.cancelledStatus') :
                              t('admin.pendingStatus')}
                     </div>
                     <div className="px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 bg-white/50 border border-white tracking-widest uppercase shadow-sm">
                        ID: <span className="font-mono text-slate-800">{booking.id.toUpperCase().slice(-8)}</span>
                     </div>
                  </div>

                  <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
                     {booking.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                     <div className="flex items-center gap-2 group cursor-pointer hover:text-primary-600 transition-colors">
                        <Mail className="w-4 h-4 text-slate-400" />
                        {booking.email}
                     </div>
                     <div className="flex items-center gap-2 group cursor-pointer hover:text-primary-600 transition-colors">
                        <Phone className="w-4 h-4 text-slate-400" />
                        {booking.phone}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content Details */}
            <div className="lg:col-span-2 space-y-6">

               <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-4">
                        <MapPin className="w-1 h-1 text-primary-500" />
                        Détails Logistique
                     </h3>

                     <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <div>
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{t('admin.package')}</p>
                              <p className="font-black text-primary-600 text-sm">{booking.packageName || 'Standard'}</p>
                           </div>
                           <ShieldCheck className="w-6 h-6 text-primary-200" />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <div>
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{t('admin.passengers')}</p>
                              <p className="font-black text-slate-800 text-sm">{booking.numberOfPeople} Personnes</p>
                           </div>
                           <Users className="w-6 h-6 text-slate-300" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h3 className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-4">
                        <Clock className="w-1 h-1 text-primary-500" />
                        Planning
                     </h3>

                     <div className="grid gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Période du Séjour</p>
                           <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span className="font-bold text-slate-800 text-sm">
                                 {format(new Date(booking.startDate), 'dd MMM yyyy', { locale: locale === 'fr' ? fr : undefined })}
                                 {booking.endDate && ` — ${format(new Date(booking.endDate), 'dd MMM yyyy', { locale: locale === 'fr' ? fr : undefined })}`}
                              </span>
                           </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Durée Prévue</p>
                           <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-slate-400" />
                              <span className="font-bold text-slate-800 text-sm">{booking.duration || '0'} Jours</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {booking.specialRequests && booking.specialRequests !== "-" && (
                  <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-4">
                     <h3 className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest">
                        <MessageSquare className="w-4 h-4 text-amber-500" />
                        Commentaires Client
                     </h3>
                     <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100/50">
                        <p className="text-sm font-medium leading-relaxed text-slate-700 italic">
                           "{booking.specialRequests}"
                        </p>
                     </div>
                  </div>
               )}
            </div>

            {/* Compact Sidebar Sidebar */}
            <div className="space-y-6">
               {/* Financial Status Card */}
               <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Résumé Financier</p>

                  <div className="flex flex-col gap-1 mb-8">
                     <span className="text-4xl font-black tracking-tight leading-none">
                        ${parseInt(booking.budget || '0').toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')}
                     </span>
                     <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">USD</span>
                  </div>

                  <div className={`inline-flex items-center gap-2 text-[9px] font-black tracking-widest uppercase ${booking.status === 'paid' ? 'text-emerald-400' : 'text-slate-400'
                     }`}>
                     {booking.status === 'paid' ? 'Transaction Confirmée' : 'Paiement en Attente'}
                  </div>
               </div>

               {/* Compact Action Menu */}
               <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Actions Rapides</p>

                  <div className="grid gap-2">
                     {booking.status !== 'paid' && (
                        <button
                           disabled={isUpdating}
                           onClick={() => updateBookingStatus('paid')}
                           className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10 disabled:opacity-50"
                        >
                           {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                           Marquer comme Payé
                        </button>
                     )}

                     {booking.status !== 'pending' && (
                        <button
                           disabled={isUpdating}
                           onClick={() => updateBookingStatus('pending')}
                           className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                           {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Clock className="w-3.5 h-3.5" />}
                           Mettre en Attente
                        </button>
                     )}

                     {booking.status !== 'cancelled' && (
                        <button
                           disabled={isUpdating}
                           onClick={() => updateBookingStatus('cancelled')}
                           className="w-full py-3 rounded-xl bg-white border border-slate-200 text-rose-600 hover:bg-rose-50 font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                           {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <X className="w-3.5 h-3.5" />}
                           Annuler Dossier
                        </button>
                     )}

                     <div className="h-px bg-slate-50 mx-2 my-1" />

                     <button
                        disabled={isUpdating}
                        onClick={deleteBooking}
                        className="w-full py-3 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                     >
                        {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                        Supprimer Définitivement
                     </button>
                  </div>

                  <div className="p-4 bg-primary-50/50 rounded-xl flex items-start gap-3">
                     <Info className="w-3.5 h-3.5 text-primary-500 mt-0.5" />
                     <p className="text-[9px] text-primary-700 leading-relaxed font-bold">
                        Toute action sur le statut notifiera le client par email.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
