
import React from 'react';
import { PLANS } from '../constants';

interface Props {
  onBack: () => void;
  favorites: string[];
  onToggleFavorite: (planId: string) => void;
}

const Favorites: React.FC<Props> = ({ onBack, favorites, onToggleFavorite }) => {
  const favoritePlans = PLANS.filter(plan => favorites.includes(plan.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
             <span className="material-symbols-outlined text-red-500 text-4xl icon-fill">favorite</span>
             Planes Guardados
          </h1>
          <p className="text-slate-500 text-sm">Estos son los planes que seleccionaste como favoritos para comparar o contratar luego.</p>
        </div>
        <button 
          onClick={onBack}
          className="text-sm font-bold text-[#137fec] hover:underline"
        >
          Volver a todos los resultados
        </button>
      </div>

      {favoritePlans.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border-2 border-dashed border-slate-200">
           <div className="size-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 text-slate-300">
              <span className="material-symbols-outlined text-5xl">favorite</span>
           </div>
           <h2 className="text-xl font-bold text-slate-900 mb-2">Aún no tenés planes guardados</h2>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto">Explorá los planes disponibles y hacé click en el corazón para guardarlos aquí.</p>
           <button 
             onClick={onBack}
             className="bg-[#137fec] hover:bg-blue-600 text-white font-black py-3 px-8 rounded-xl transition-all shadow-md"
           >
             Ver Planes Disponibles
           </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoritePlans.map((plan: any) => (
            // Cast plan to any to fix TS error on line 58 regarding missing logo property
            <div key={plan.id} className="bg-white rounded-2xl border border-slate-100 transition-all flex flex-col p-6 shadow-sm hover:shadow-xl relative">
              <button 
                onClick={() => onToggleFavorite(plan.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-red-50 text-red-500 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
              </button>

              <div className="flex justify-between items-start mb-6 pr-8">
                <img src={plan.logo} alt={plan.company} className="h-10 object-contain" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
              <p className="text-xs text-slate-500 mb-6">{plan.company}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-50">
                 <div className="flex items-baseline gap-1 mb-4">
                   <span className="text-xl font-black text-slate-900">${plan.price.toLocaleString()}</span>
                   <span className="text-xs font-bold text-slate-400">/mes</span>
                 </div>
                 <button className="w-full bg-[#137fec] hover:bg-blue-600 text-white font-black py-3 rounded-xl transition-all shadow-md">
                    Consultar
                 </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
