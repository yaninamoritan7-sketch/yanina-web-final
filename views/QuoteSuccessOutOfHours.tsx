
import React from 'react';

interface Props {
  onHome: () => void;
}

const QuoteSuccessOutOfHours: React.FC<Props> = ({ onHome }) => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full max-w-[640px] flex flex-col items-center text-center">
        <div className="size-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-8 shadow-sm">
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-6xl icon-fill">check_circle</span>
        </div>
        <h1 className="text-[#0d141b] dark:text-white tracking-tight text-3xl md:text-4xl font-black leading-tight px-4 pb-4 font-display">
          ¡Solicitud enviada con éxito!
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed pb-8 px-4 max-w-lg font-display">
          Recibimos tu consulta. Te contactaremos mañana a primera hora por WhatsApp para enviarte el presupuesto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 mb-12">
          <button 
            onClick={onHome}
            className="flex items-center justify-center w-full sm:w-auto overflow-hidden rounded-xl h-14 px-10 bg-primary hover:bg-blue-700 transition-all text-white gap-3 shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 active:scale-95 font-display"
          >
            <span className="material-symbols-outlined text-white text-[24px]">home</span>
            <span className="text-lg font-bold leading-normal tracking-wide">Volver al Inicio</span>
          </button>
        </div>

        <div className="w-full bg-white dark:bg-[#1a2633] rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
          <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-8 text-left font-display">Próximos pasos</h3>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5 text-left group">
              <div className="flex-shrink-0 size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black text-base shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">1</div>
              <div>
                <h4 className="font-bold text-[#0d141b] dark:text-white text-base font-display">Revisamos tu perfil</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-display">Analizamos tu situación actual para encontrar el plan ideal.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 text-left group">
              <div className="flex-shrink-0 size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black text-base shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">2</div>
              <div>
                <h4 className="font-bold text-[#0d141b] dark:text-white text-base font-display">Buscamos el mejor precio</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-display">Aplicamos todos los descuentos vigentes disponibles.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 text-left group">
              <div className="flex-shrink-0 size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black text-base shadow-inner group-hover:bg-primary group-hover:text-white transition-colors">3</div>
              <div>
                <h4 className="font-bold text-[#0d141b] dark:text-white text-base font-display">Te contactamos</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-display">Mañana a primera hora tendrás tu cotización lista.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuoteSuccessOutOfHours;
