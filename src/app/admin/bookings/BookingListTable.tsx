'use client';

import { useState, useMemo } from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  Eye, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  DollarSign, 
  CheckCircle2,
  LayoutDashboard,
  Search,
  Check,
  Trash2,
  Loader2
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";

interface BookingListProps {
  bookings: any[];
}

type Status = 'pending' | 'paid' | 'cancelled';

export default function BookingListTable({ bookings: initialBookings }: BookingListProps) {
  const { t, locale } = useTranslation();
  const [bookings, setBookings] = useState(initialBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesSearch = 
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [bookings, searchTerm, statusFilter]);

  const updateBookingStatus = async (id: string, newStatus: Status) => {
    setIsUpdating(id);
    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updated = await response.json();
        setBookings(prev => prev.map(b => b.id === id ? updated : b));
      } else {
        alert(t('admin.updateError'));
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert(t('admin.updateError'));
    } finally {
      setIsUpdating(null);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm(t('admin.confirmDelete'))) return;

    setIsUpdating(id);
    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBookings(prev => prev.filter(b => b.id !== id));
      } else {
        alert(t('admin.deleteError'));
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert(t('admin.deleteError'));
    } finally {
      setIsUpdating(null);
    }
  };

  const stats = useMemo(() => {
    const confirmed = bookings.filter(b => b.status === 'paid');
    const revenue = confirmed.reduce((acc, b) => acc + parseInt(b.budget || '0'), 0);
    return { revenue, confirmedCount: confirmed.length };
  }, [bookings]);

  return (
    <>
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-[10px] font-bold uppercase tracking-widest">
            <LayoutDashboard className="w-3.5 h-3.5" />
            {t('admin.subtitle')}
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            {t('admin.title')}
          </h1>
        </div>

        <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t('admin.totalRevenue')}</p>
              <p className="text-xl font-black text-slate-900 leading-none">
                ${stats.revenue.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')}
              </p>
            </div>
          </div>
          
          <div className="w-px h-10 bg-slate-100" />
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
              <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t('admin.confirmed')}</p>
              <p className="text-xl font-black text-slate-900 leading-none">
                {stats.confirmedCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="relative flex-grow group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
          <input 
            type="text"
            placeholder={t('admin.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-[1.5rem] py-4 pl-14 pr-6 text-sm font-medium focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all shadow-sm"
          />
        </div>

        <div className="flex items-center bg-white p-1.5 rounded-[1.5rem] border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: t('admin.filterAll') },
            { id: 'pending', label: t('admin.filterPending') },
            { id: 'paid', label: t('admin.filterConfirmed') },
            { id: 'cancelled', label: t('admin.filterCancelled') },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setStatusFilter(filter.id)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                statusFilter === filter.id 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('admin.client')}</th>
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('admin.package')}</th>
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('admin.period')}</th>
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">{t('admin.amount')}</th>
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">{t('admin.status')}</th>
                <th className="px-6 py-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredBookings.length === 0 ? (
                 <tr>
                    <td colSpan={6} className="px-8 py-24 text-center">
                       <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300">
                             <Search className="w-8 h-8" />
                          </div>
                          <p className="text-slate-400 font-medium italic">{t('admin.noBookings')}</p>
                       </div>
                    </td>
                 </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr 
                    key={booking.id}
                    className="hover:bg-primary-50/20 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black shadow-sm ${
                          booking.status === 'paid' ? 'bg-emerald-100 text-emerald-700' : 
                          booking.status === 'cancelled' ? 'bg-rose-100 text-rose-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {booking.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 group-hover:text-primary-600 transition-colors">{booking.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 tracking-tight">{booking.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-[0.15em] uppercase ${
                        booking.packageName?.toLowerCase().includes('gold') ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                        booking.packageName?.toLowerCase().includes('silver') ? 'bg-slate-50 text-slate-600 border border-slate-100' :
                        'bg-primary-50 text-primary-600 border border-primary-100'
                      }`}>
                        {booking.packageName || 'Standard'}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col text-xs">
                        <span className="font-black text-slate-700">
                           {format(new Date(booking.startDate), 'dd MMM yyyy', { locale: locale === 'fr' ? fr : undefined })}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-0.5">
                           <Users className="w-2.5 h-2.5" /> {booking.numberOfPeople} Pers.
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm font-black text-slate-900">
                        ${parseInt(booking.budget || '0').toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest border ${
                        booking.status === 'paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                        booking.status === 'cancelled' ? 'bg-rose-50 text-rose-700 border-rose-100' :
                        'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          booking.status === 'paid' ? 'bg-emerald-500 animate-pulse' : 
                          booking.status === 'cancelled' ? 'bg-rose-500' : 
                          'bg-amber-500'
                        }`} />
                        {booking.status === 'paid' ? t('admin.confirmedStatus') : 
                         booking.status === 'cancelled' ? t('admin.cancelledStatus') :
                         t('admin.pendingStatus')}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/admin/bookings/${booking.id}`}
                          className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/20 transition-all group/btn"
                        >
                          <Eye className="w-4 h-4 group-hover/btn:scale-110" />
                        </Link>
                        
                        <div className="w-px h-4 bg-slate-100 mx-1" />
                        
                        {booking.status !== 'paid' && (
                          <button 
                            disabled={isUpdating === booking.id}
                            onClick={() => updateBookingStatus(booking.id, 'paid')}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-50"
                          >
                            {isUpdating === booking.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                          </button>
                        )}
                        
                        <button 
                          disabled={isUpdating === booking.id}
                          onClick={() => deleteBooking(booking.id)}
                          className="w-9 h-9 flex items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white transition-all disabled:opacity-50"
                        >
                          {isUpdating === booking.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
