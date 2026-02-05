
import React from 'react';
import { ViewState } from '../types';
import { Logo, CONTACT_INFO, getWhatsAppLink } from '../constants';

interface Props {
  children: React.ReactNode;
  currentView: ViewState;
  navigate: (view: ViewState) => void;
}

const PublicLayout: React.FC<Props> = ({ children, currentView, navigate }) => {
  const prepagas = [
    { name: 'Sancor Salud', color: '#1e3482' },
    { name: 'Swiss Medical', color: '#d01026' },
    { name: 'Omint', color: '#1e2e60' },
    { name: 'Medifé', color: '#0096d6' },
    { name: 'Avalian', color: '#004a44' },
    { name: 'Prevención Salud', color: '#00a1e4' },
    { name: 'Premedic', color: '#0055a5' },
    { name: 'Doctored', color: '#101922' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-200 font-display">
      <header className="sticky top-0 z-50 w-full border-b border-[#e7edf3] bg-white/90 backdrop-blur-md dark:bg-[#101922]/90 dark:border-slate-800">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('HOME')}>
            <Logo />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('HOME')} className="text-sm font-bold text-[#0d141b] hover:text-[#137fec] transition-colors dark:text-slate-300">Inicio</button>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('QUOTE_STEP_1')}
              className="flex h-11 items-center justify-center rounded-xl bg-[#137fec] px-6 text-sm font-black text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-95"
            >
              Cotizar mi Plan
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col overflow-x-hidden">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white pt-16 pb-8 dark:border-slate-800 dark:bg-[#101922]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Logo />
              <div className="flex flex-col gap-2">
                <p className="text-sm text-primary font-black uppercase tracking-widest">Encontrá tu prepaga en un click al mejor precio.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Ayudamos a los argentinos a cuidar su salud encontrando el plan perfecto al precio justo. Comparamos las mejores opciones del mercado.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a className="flex w-fit h-10 items-center justify-center gap-2 rounded-full bg-green-500 px-5 text-sm font-bold text-white transition-all hover:bg-green-600 shadow-md hover:scale-105" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  WhatsApp
                </a>
                <div className="flex gap-3">
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" aria-label="Instagram">
                    <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" aria-label="Facebook">
                    <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={CONTACT_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm" aria-label="TikTok">
                    <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-4.17.07-8.33.07-12.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0d141b] dark:text-white">Nuestra App</h4>
              <button onClick={() => navigate('HOME')} className="text-left text-sm text-slate-500 hover:text-[#137fec] dark:text-slate-400 font-bold transition-colors">Inicio</button>
              <a className="text-sm text-slate-500 hover:text-[#137fec] dark:text-slate-400 font-bold text-left transition-colors" href="#">Contacto</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0d141b] dark:text-white">Contacto Directo</h4>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-slate-500 dark:text-slate-400 font-bold hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
              <a href={getWhatsAppLink("Hola, necesito asesoramiento comercial online.")} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2 group">
                Asesoramiento Comercial Online
                <span className="material-symbols-outlined text-[18px] text-green-500 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-100 pt-12 dark:border-slate-800">
            <h4 className="mb-10 text-center text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 font-display">
              Empresas de Medicina Prepaga Disponibles
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
              {prepagas.map((p) => (
                <div 
                  key={p.name} 
                  className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 bg-slate-50/50 dark:bg-slate-800/50 dark:border-slate-700/50 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div 
                    className="absolute top-3 right-3 size-1.5 rounded-full shadow-sm opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all"
                    style={{ backgroundColor: p.color }}
                  ></div>
                  
                  <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-tight text-center group-hover:text-primary transition-colors">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-100 pt-8 dark:border-slate-800 sm:flex-row">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2024 Tu prepaga en un click. Todos los derechos reservados.</p>
            <div className="mt-4 flex gap-6 sm:mt-0">
               <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Privacidad</span>
               <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">Términos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
