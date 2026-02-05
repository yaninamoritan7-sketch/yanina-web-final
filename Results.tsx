
import React from 'react';
import { isBusinessHours } from '../constants';

interface Props {
  onCompare: () => void;
  favorites: string[];
  onToggleFavorite: (planId: string) => void;
  navigate: (view: any) => void;
}

const Results: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-700 overflow-hidden">
        {/* Header con Icono */}
        <div className="bg-primary/5 dark:bg-primary/10 p-10 flex flex-col items-center text-center border-b border-slate-100 dark:border-slate-700">
          <div className="size-20 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Estamos calculando los mejores planes para vos
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl font-display leading-relaxed">
            Hemos recibido tus datos correctamente. Un asesor comercial te contactará a la brevedad para enviarte las mejores propuestas.
          </p>
        </div>

        {/* Detalles y Próximos Pasos */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] font-display">Próximos Pasos</h3>
            
            <div className="flex gap-4 group">
              <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white font-display">Análisis de perfil</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-display">Cruzamos tu edad y zona con las cartillas de prestadores disponibles.</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white font-display">Búsqueda de descuentos</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-display">Aplicamos promociones vigentes y beneficios por derivación de aportes.</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center font-black shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white font-display">Contacto Personalizado</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-display">Te enviaremos el comparativo por WhatsApp de forma gratuita.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 flex flex-col justify-between border border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest font-display">Solicitud en proceso</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                {isBusinessHours() ? 'Atención en curso' : 'Prioridad programada'}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-display leading-relaxed">
                {isBusinessHours() 
                  ? 'Nuestro equipo comercial está procesando tu solicitud para brindarte una respuesta inmediata.' 
                  : 'Fuera de horario comercial. Recibirás tu cotización mañana a primera hora por WhatsApp.'}
              </p>
            </div>

            <button 
              onClick={() => navigate('HOME')}
              className="mt-8 w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-xl hover:opacity-90 transition-all active:scale-[0.98] font-display flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="material-symbols-outlined">home</span>
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">
          © 2024 Tu prepaga en un click • Servicio 100% Gratuito
        </p>
      </div>
    </div>
  );
};

export default Results;
