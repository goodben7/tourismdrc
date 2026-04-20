"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Lock, ChevronLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

function CheckoutMockContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const amount = searchParams.get("amount") || "1800";
  const packageName = searchParams.get("package") || "Luxury Expedition";
  const email = searchParams.get("email") || "client@example.com";
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate payment delay
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/booking/success?session_id=mock_demo_123");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] flex flex-col md:flex-row">
      {/* Left Column: Order Summary (Stripe style) */}
      <div className="md:w-1/2 p-8 md:p-20 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
        <div>
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors mb-12 text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to TourismDRC
          </button>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-xl">T</div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">TourismDRC</span>
          </div>

          <div className="mb-8">
            <p className="text-slate-500 font-medium mb-1">Pay TourismDRC</p>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">${parseInt(amount).toLocaleString('en-US')}.00</h1>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-slate-200">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-slate-400" />
                 </div>
                 <div>
                    <p className="font-bold text-slate-800 tracking-tight">{packageName}</p>
                    <p className="text-sm text-slate-400">1 x Full Experience</p>
                 </div>
              </div>
              <span className="font-bold text-slate-800">${parseInt(amount).toLocaleString('en-US')}.00</span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-500 font-medium tracking-tight">Subtotal</span>
              <span className="text-slate-800 font-medium">${parseInt(amount).toLocaleString('en-US')}.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium tracking-tight">Tax</span>
              <span className="text-slate-800 font-medium">$0.00</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <span className="text-slate-900 font-black tracking-tight uppercase text-sm">Total due</span>
              <span className="text-slate-900 font-black text-xl">${parseInt(amount).toLocaleString('en-US')}.00</span>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0 flex items-center gap-2 text-slate-400 text-xs font-medium">
          <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-500 font-bold uppercase tracking-widest text-[8px]">Powered by stripe</span>
          <div className="w-px h-3 bg-slate-200" />
          <Link href="#" className="hover:text-slate-600">Terms</Link>
          <Link href="#" className="hover:text-slate-600">Privacy</Link>
        </div>
      </div>

      {/* Right Column: Payment Form */}
      <div className="md:w-1/2 bg-white p-8 md:p-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Payment Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input 
                type="text" 
                defaultValue={email}
                className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Card information</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="1234 5678 9101 1121"
                  className="w-full h-12 pl-4 pr-32 bg-white border border-slate-200 rounded-t-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm border-b-0"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                   <div className="h-6 w-10 bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={24} height={8} className="opacity-60" />
                   </div>
                   <div className="h-6 w-10 bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MC" width={24} height={14} className="opacity-60" />
                   </div>
                </div>
              </div>
              <div className="flex">
                 <input 
                  type="text" 
                  placeholder="MM / YY"
                  className="w-1/2 h-12 px-4 bg-white border border-slate-200 rounded-bl-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm border-r-0"
                />
                <input 
                  type="text" 
                  placeholder="CVC"
                  className="w-1/2 h-12 px-4 bg-white border border-slate-200 rounded-br-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name on card</label>
              <input 
                type="text" 
                placeholder="Jane Doe"
                className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <p className="text-xs text-slate-500 leading-normal">
                  Securely save my information for 1-click checkout with TourismDRC. 
                  <span className="text-primary-600 hover:underline cursor-pointer ml-1">More information</span>
                </p>
              </div>

              <Button 
                onClick={handlePay}
                isLoading={isProcessing}
                className="w-full h-14 rounded-lg bg-[#635BFF] hover:bg-[#5851E0] text-white font-black tracking-tight text-lg shadow-lg active:scale-[0.98] transition-all"
              >
                {isProcessing ? "Processing..." : `Pay $${parseInt(amount).toLocaleString('en-US')}.00`}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest font-black pt-4">
              <div className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Secure Server</div>
              <div className="w-1 h-1 rounded-full bg-slate-200" />
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutMockPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F6F9FC]" />}>
      <CheckoutMockContent />
    </Suspense>
  );
}
