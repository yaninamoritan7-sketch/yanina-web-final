
import React, { useState } from 'react';
import { Logo } from '../constants';

interface Props {
  onLogin: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8] p-4 font-display">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Branding */}
        <div className="md:w-1/2 bg-[#0d215c] p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 size-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="bg-white p-4 rounded-2xl w-fit mb-12 shadow-xl shadow-black/20">
              <Logo className="h-10" />
            </div>
            <h1 className="text-3xl font-black mb-6 leading-tight">Portal de Gestión Exclusivo</h1>
            <p className="text-blue-100/80 leading-relaxed font-medium">
              Panel de control avanzado para la gestión de leads, análisis de mercado y configuración de planes de salud en Argentina.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-accent">security</span>
               <span className="text-sm font-bold">Acceso Encriptado SSL</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-accent">verified_user</span>
               <span className="text-sm font-bold">Autenticación de Dos Pasos</span>
             </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Bienvenido de nuevo</h2>
            <p className="text-slate-500 text-sm font-medium">Ingresá tus credenciales para acceder al CRM.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Corporativo</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
                <input 
                  type="email" 
                  defaultValue="admin@tuprepaga.com.ar"
                  className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contraseña</label>
                <button type="button" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Olvidé mi clave</button>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 font-medium"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-slate-300 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Entrar al Sistema
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">login</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Uso exclusivo para empleados autorizados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
