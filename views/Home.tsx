
import React from 'react';
import { ARG_PROVINCES } from '../constants';

interface Props {
  onStartQuote: () => void;
}

const Home: React.FC<Props> = ({ onStartQuote }) => {
  const prepagas = [
    { name: 'Sancor Salud', color: '#1e3482', textColor: 'white' },
    { name: 'Swiss Medical', color: '#f8fafc', textColor: '#d01026', border: true },
    { name: 'Omint', color: '#1e2e60', textColor: 'white' },
    { name: 'Medifé', color: '#0096d6', textColor: 'white' },
    { name: 'Avalian', color: '#004a44', textColor: 'white' },
    { name: 'Prevención Salud', color: '#00a1e4', textColor: 'white' },
    { name: 'Premedic', color: '#0055a5', textColor: 'white' },
    { name: 'Doctored', color: '#101922', textColor: 'white' },
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-background-dark pt-12 pb-20 lg:pt-24 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute -top-24 -right-24 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-48 -left-24 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl"></div>
        
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 -z-10 opacity-[0.15] dark:opacity-[0.1] pointer-events-none transition-opacity duration-1000 hidden lg:block"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
          }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-2xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary font-display">
                <span className="material-symbols-outlined text-[16px] icon-fill">verified</span>
                El comparador #1 de argentina
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-dark dark:text-white sm:text-5xl lg:text-7xl font-display">
                    Encontrá tu prepaga <br/>
                    <span className="text-primary">en un click</span> al mejor precio.
                  </h1>
                </div>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-display font-medium max-w-lg">
                    Compará las mejores coberturas médicas del país en segundos. Analizamos tu perfil para ofrecerte opciones a medida, sin costos extras ni letra chica.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 md:size-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined icon-fill">savings</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Ahorro Garantizado</h4>
                    <p className="text-xs text-slate-500">Descuentos exclusivos hoy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 md:size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined icon-fill">card_membership</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Planes a medida</h4>
                    <p className="text-xs text-slate-500">100% personalizados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 md:size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                    <span className="material-symbols-outlined icon-fill">handshake</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Honestidad y Confianza</h4>
                    <p className="text-xs text-slate-500">Transparencia total</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="relative w-full lg:ml-auto lg:max-w-[480px]">
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 dark:bg-[#1a2634] dark:ring-white/10 p-8 md:p-10">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-2xl font-black text-primary-dark dark:text-white font-display">Cotizá en 1 click</h3>
                      <span className="bg-accent/10 text-accent text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-widest animate-pulse">Ofertas Activas</span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 font-display">Encontrá tu plan ideal ahora</p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">Provincia</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">location_on</span>
                          <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white py-3.5 pl-12 pr-10 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-display">
                            {ARG_PROVINCES.map(prov => (
                              <option key={prov} value={prov}>{prov}</option>
                            ))}
                          </select>
                          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xl">expand_more</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">Cód. Postal</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">pin_drop</span>
                          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white py-3.5 pl-12 pr-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-display" placeholder="Ej. 1425" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">Tu Edad</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">cake</span>
                        <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white py-3.5 pl-12 pr-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-display" placeholder="Ej. 30" type="number" />
                      </div>
                    </div>
                    <button onClick={onStartQuote} className="mt-4 flex w-full items-center justify-center rounded-2xl bg-primary py-5 text-lg font-black text-white shadow-[0_20px_40px_-12px_rgba(19,127,236,0.4)] transition-all hover:bg-primary-dark hover:-translate-y-1 active:scale-95 font-display">
                      Cotizar mi Plan
                      <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">lock</span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-display">
                      Datos protegidos por SSL de 256 bits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Partners Bar */}
      <section className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-12 font-display">Comparamos las mejores prepagas del país</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {prepagas.map((p) => (
              <div 
                key={p.name} 
                className={`h-10 w-auto min-w-[120px] px-4 py-2 rounded-lg flex items-center justify-center shadow-sm transition-transform hover:scale-110 ${p.border ? 'border border-slate-200 bg-white' : ''}`}
                style={{ backgroundColor: p.color }}
              >
                <span className="text-[9px] font-black uppercase tracking-tight" style={{ color: p.textColor }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white dark:bg-background-dark py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary-dark dark:text-white font-display mb-4">¿Cómo funciona?</h2>
          <p className="text-slate-500 font-display text-lg">Encontramos tu plan ideal al mejor precio en solo 3 pasos</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center gap-6 p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
            <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">1</div>
            <h3 className="text-xl font-bold font-display dark:text-white">Cargá tus datos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Completá un breve formulario con tu edad y situación laboral.</p>
          </div>
          <div className="flex flex-col items-center gap-6 p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
            <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">2</div>
            <h3 className="text-xl font-bold font-display dark:text-white">Compará planes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Nuestro algoritmo filtra las mejores opciones de cartillas y precios.</p>
          </div>
          <div className="flex flex-col items-center gap-6 p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
            <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">3</div>
            <h3 className="text-xl font-bold font-display dark:text-white">Ahorrá hasta 50%</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Elegí tu plan y aprovechá descuentos por derivación de aportes.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-dark py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white font-display leading-tight">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Planes Cuota Cero', icon: 'verified', desc: 'Accedé a planes diseñados para tu presupuesto real.' },
                { title: 'Asesoría Digital', icon: 'devices', desc: 'Todo el proceso desde tu celular, sin papeles.' },
                { title: 'Soporte VIP', icon: 'auto_awesome', desc: 'Asesoría personalizada siempre.' },
                { title: 'Rapidez', icon: 'speed', desc: 'Resultados en menos de 2 minutos.' },
              ].map(item => (
                <div key={item.title} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-primary mb-3 text-3xl">{item.icon}</span>
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-blue-100/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative p-2 bg-white/5 rounded-[40px] border border-white/10 shadow-2xl">
              <img 
                src="input_file_0.png" 
                alt="App Mockup Cuota Cero" 
                className="rounded-[32px] w-full shadow-2xl transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">touch_app</span>
                </div>
                <div>
                  <h5 className="font-black text-slate-900 dark:text-white text-lg font-display">Todo en un click</h5>
                  <p className="text-xs text-slate-500">Simple, rápido y seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
