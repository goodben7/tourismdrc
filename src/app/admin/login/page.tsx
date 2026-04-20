"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, ArrowRight, Loader } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/admin/bookings");
        router.refresh();
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFF] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo / Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-900/40 mb-8 border border-slate-800">
            <ShieldCheck className="w-10 h-10 text-primary-500" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-4">
            Administration
          </h1>
          <p className="text-slate-500 font-light text-sm tracking-wide">
             Veuillez entrer le mot de passe pour accéder au dashboard.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group">
           {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 -z-10" />

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label 
                htmlFor="password" 
                className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 pl-1"
              >
                Mot de Passe Administratif
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 focus:bg-white outline-none transition-all duration-300 text-slate-800 tracking-widest text-lg font-black"
                />
              </div>
            </div>

            {error && (
              <p className="text-rose-500 text-xs font-bold pl-1 animate-shake">
                ⚠ {error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-primary-600 text-white shadow-xl shadow-slate-900/10 hover:shadow-primary-500/20 transition-all duration-300 font-black tracking-widest text-xs border border-slate-800 hover:border-primary-500 flex items-center justify-center gap-2 group"
            >
              {isLoading ? "VÉRIFICATION..." : "ACCÉDER AU DASHBOARD"}
              {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>
        </div>

        {/* Footer info */}
        <p className="mt-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          Tourism DRC - Secure Admin Panel
        </p>
      </div>
    </div>
  );
}
