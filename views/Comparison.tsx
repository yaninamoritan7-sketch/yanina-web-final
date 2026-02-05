
import React, { useState } from 'react';
import { PLANS, getWhatsAppLink } from '../constants';

interface Props {
  onBack: () => void;
  onConfirm: () => void;
}

const Comparison: React.FC<Props> = ({ onBack, onConfirm }) => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);

  const activePlan = PLANS[activePlanIndex];

  const rows = [
    { label: 'Nivel de Sanatorios', key: 'sanatoriosFull' },
    { label: 'Odontología', key: 'odontologia', subKey: 'odontologiaSub' },
    { label: 'Cobertura en Ópticas', key: 'optica', subKey: 'opticaSub' },
    { label: 'Asistencia al Viajero', key: 'asistencia', subKey: 'asistenciaSub', iconKey: 'asistenciaIcon' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:flex mx-auto max-w-[1200px] w-full px-10 py-8 flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-[#4c739a] font-medium mb-1">
              <button onClick={onBack} className="hover:underline flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Modificar datos
              </button>
            </div>
            <h1 className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">Comparativa de Beneficios Recomendados</h1>
            <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-normal">Hemos seleccionado los mejores planes según tu perfil y presupuesto.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">print</span> Imprimir
            </button>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">share</span> Compartir
            </button>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          {/* Sidebar Section */}
          <aside className="w-72 shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-xl p-6 shadow-sm sticky top-24 transition-colors">
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-4 flex items-center gap-2 pb-3 border-b border-[#e7edf3] dark:border-slate-700 font-display">
                <span className="material-symbols-outlined text-primary">person_search</span>
                Datos del Perfil
              </h3>
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wide block mb-1">Grupo Familiar</span>
                  <p className="text-sm font-bold text-[#0d141b] dark:text-white">Titular (34 años)</p>
                  <p className="text-sm font-medium text-[#0d141b] dark:text-white">Cónyuge (32 años)</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wide block mb-1">Situación Laboral</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-primary">work</span>
                    <p className="text-sm font-medium text-[#0d141b] dark:text-white">Monotributo</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4c739a] dark:text-slate-400 uppercase tracking-wide block mb-1">Aportes</span>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                    <span className="material-symbols-outlined text-base icon-fill">check_circle</span>
                    <p className="text-sm">Deriva Aportes</p>
                  </div>
                </div>
              </div>
              <button onClick={onBack} className="mt-6 w-full py-2.5 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm font-bold text-[#4c739a] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">edit</span> Editar Búsqueda
              </button>
            </div>
          </aside>

          {/* Table Section */}
          <div className="flex-1 w-full min-0">
            <div className="w-full overflow-x-auto pb-4 rounded-xl border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-colors">
              <table className="w-full min-w-[750px] text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900 sticky top-0 z-20 shadow-sm">
                  <tr>
                    <th className="p-6 w-1/4 min-w-[180px] bg-slate-50 dark:bg-slate-900 z-30 align-bottom border-b border-[#e7edf3] dark:border-slate-700">
                      <span className="text-sm font-bold uppercase tracking-wider text-[#4c739a] dark:text-slate-400">Prestaciones</span>
                    </th>
                    {PLANS.map((plan, i) => (
                      <th key={plan.id} className="p-6 w-1/4 min-w-[200px] bg-slate-50 dark:bg-slate-900 align-top border-b border-[#e7edf3] dark:border-slate-700 relative">
                        {i === 1 && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-[10px] font-bold px-3 py-1 rounded-b-md uppercase tracking-wide border-x border-b border-amber-200 dark:border-amber-800 shadow-sm transition-colors">
                            Mejor Relación Precio/Calidad
                          </div>
                        )}
                        <div className={`flex flex-col gap-3 items-center text-center ${i === 1 ? 'mt-4' : ''}`}>
                          <div className="h-10 w-full flex items-center justify-center mb-1">
                            <div className="text-lg font-black italic tracking-tighter" style={{ color: plan.color }}>{plan.company}</div>
                          </div>
                          <h3 className="text-xl font-extrabold text-[#0d141b] dark:text-white font-display">{plan.name}</h3>
                          {i === 0 && <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold border border-blue-100 dark:border-blue-900/30">Recomendado</div>}
                          {i === 2 && <div className="inline-flex px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold">Premium</div>}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[#0d141b] dark:text-white divide-y divide-[#e7edf3] dark:divide-slate-700">
                  {rows.map((row) => (
                    <tr key={row.label} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="p-6 text-sm font-bold">{row.label}</td>
                      {PLANS.map((plan: any, i) => (
                        <td key={i} className="p-6 text-center text-sm text-[#4c739a] dark:text-slate-400 leading-relaxed">
                          <div className="font-bold text-[#0d141b] dark:text-white mb-1 flex items-center justify-center gap-1">
                            {plan[row.iconKey] && <span className="material-symbols-outlined text-base text-primary">{plan[row.iconKey]}</span>}
                            {plan[row.key]}
                          </div>
                          {plan[row.subKey] && <div className="text-xs">{plan[row.subKey]}</div>}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                    <td className="p-6 border-none">
                      <span className="text-xs text-[#4c739a] dark:text-slate-500 italic">* Los valores finales varían según DDJJ.</span>
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="p-6 text-center border-none">
                        <a 
                          href={getWhatsAppLink(`Hola, me interesa el plan ${plan.name} de ${plan.company}. ¿Me darías el presupuesto final?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex flex-col items-center justify-center overflow-hidden rounded-lg min-h-[56px] px-3 bg-[#25D366] text-white hover:bg-green-600 transition-all shadow-md active:scale-95"
                        >
                          <svg className="w-6 h-6 mb-1 fill-current" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                          <span className="text-sm font-bold leading-tight">Presupuesto Final<br/><span className="text-[10px] opacity-90 font-normal">vía WhatsApp</span></span>
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden flex flex-col min-h-screen relative pb-32">
        <main className="flex-1 overflow-y-auto">
          <div className="px-5 py-6">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-2 font-display">Comparativa de Planes</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Analiza los beneficios principales y elegí la mejor opción.</p>
          </div>
          
          <div className="px-5 mb-6 sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-2">
            <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg">
              {PLANS.map((plan, i) => (
                <button 
                  key={plan.id}
                  onClick={() => setActivePlanIndex(i)}
                  className={`flex-1 py-2 px-3 rounded-md text-sm text-center transition-all ${activePlanIndex === i ? 'bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-white font-bold' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700'}`}
                >
                  {plan.company}
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div className="relative h-40" style={{ backgroundColor: activePlan.color }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <img alt="Medical bg" className="w-full h-full object-cover mix-blend-overlay opacity-60" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"/>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase">
                    <span className="material-symbols-outlined text-[12px] icon-fill">star</span> {activePlan.tags[0]}
                  </div>
                  <h3 className="text-2xl font-bold font-display">{activePlan.name}</h3>
                  <p className="text-blue-100 text-xs">Plan Seleccionado</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wide font-semibold">Precio Mensual</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">${activePlan.price.toLocaleString()}</span>
                      <span className="text-sm text-slate-400 dark:text-slate-500 line-through">${activePlan.oldPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">-15% OFF</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activePlan.description}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-5">
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified</span> Beneficios Destacados
              </h4>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="py-4 first:pt-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-lg">apartment</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Sanatorios</p>
                      <p className="text-slate-900 dark:text-white font-medium text-sm">{activePlan.sanatorios}</p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-lg">dentistry</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Odontología</p>
                      <p className="text-slate-900 dark:text-white font-medium text-sm">{activePlan.odontologia}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Opiniones de usuarios</h4>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="text-sm font-bold text-slate-900 dark:text-white mr-1">{activePlan.rating}</span>
                  <span className="material-symbols-outlined text-[16px] icon-fill">star</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">"Excelente cobertura en internación, nunca tuve problemas con autorizaciones."</p>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-30">
          <a 
            href={getWhatsAppLink(`Hola, me gustaría consultar el precio final del plan ${activePlan.name} de ${activePlan.company}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">chat</span> Consultar Precio por WhatsApp
          </a>
          <p className="text-center text-[10px] text-slate-400 mt-2">Respuesta promedio: menos de 5 minutos</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
