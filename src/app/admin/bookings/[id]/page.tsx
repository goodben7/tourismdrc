import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import BookingDetailClient from "./BookingDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  if (!id) {
    notFound();
  }

  let booking = null;

  try {
    booking = await prisma.booking.findUnique({
      where: { id }
    });
  } catch (e) {
    console.error("Prisma Fetch Error:", e);
  }

  if (!booking) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-32 pb-24">
      <div className="container-custom max-w-5xl">
        <Link 
          href="/admin/bookings" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all shadow-sm mb-12"
        >
          <ChevronLeft className="w-5 h-5" />
          Retour à la liste
        </Link>

        <BookingDetailClient booking={booking} />
      </div>
    </div>
  );
}
