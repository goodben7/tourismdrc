import prisma from "@/lib/prisma";
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  DollarSign, 
  User, 
  Mail, 
  Phone,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import BookingListTable from "./BookingListTable";

// Désactiver le cache Next.js - toujours récupérer les données fraîches
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminBookingsPage() {
  let bookings: any[] = [];
  let error = null;

  try {
    // Fetch all bookings from database
    bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (e) {
    console.error("Prisma Fetch Error:", e);
    error = "La base de données n'est pas encore connectée ou les migrations n'ont pas été lancées.";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FBFBFF] pt-32 text-center">
        <div className="container-custom max-w-xl mx-auto p-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Base de données non prête</h1>
          <p className="text-slate-500 mb-8">{error}</p>
          <div className="bg-slate-50 p-6 rounded-2xl text-left text-sm font-mono text-slate-600">
            npx prisma db push<br/>
            npx prisma generate
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-24 pb-12">
      <div className="container-custom">
        <BookingListTable bookings={bookings} />
      </div>
    </div>
  );
}
