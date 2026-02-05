
import React, { useState } from 'react';

const AdminQuotes: React.FC = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState('Sofia Martinez');

  const advisors = [
    { rank: 1, name: 'Sofia Martinez', role: 'Senior Advisor', sales: 45, revenue: '$450,000', status: 'On Fire 🔥', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsk_D5zOYOAuoS186GnhGMjSjYz5iM4xL8ivXWBltEvjuCBuf1uo-weCA7LE1ciDA-YbZC5wx9rzydsMGUApAUjLz54w3eBGP8tv8OqZQNabqW0woMHTF-HDEQ_x_4Ec9upa1dztEuRZ_tYKbk4ctel1jddXsWI1b4ILrDYs6-k285pc43ZE-IL_vHhP0CFVw14PNPheeEq80H67aIVgqFredlyCWuYa7wN9Nwf8zXz3cUPS3FcsgEVTRG0HZ3o2GFuAan_C2krz5' },
    { rank: 2, name: 'Juan Perez', role: 'Advisor', sales: 38, revenue: '$390,000', status: 'Steady', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABINfpX8YGNE-DR1MZr5kwdMriWswe3DasuoUwbX0_APRBvZUPMXun_09Rs5LAG9bih7uNBYZiR2uDazOWFaVSBGXasly5q73e2Xw4YVbWEP3_tXXUmRHhFYX9ArKEzlqyBLABU6Y1ne90ML6PUvDhIZIupLidI19WbtymI9e7bpWX-qjvXPhi0MKzbFYvRCQpr2ogF-oqbh8ld8ZhnETKU6SfLBV32Nw1JEr6dBP2ADotMkjdQnvoQIKPlTE9XFXJcRBdR9gL_AbS' },
    { rank: 3, name: 'Lucia Garcia', role: 'Junior Advisor', sales: 32, revenue: '$320,000', status: 'Steady', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVKv0I2Jvb88442dQdqecaN2gzMZummV-M3TYlPkCuTaN5fp1FCfUaSQzN5SjMih5W-XnLn_FP7_MXyKZCqoKGsg2pCUkwBJ3fzRQzt4y5NI7CjJzIzRWUwLVeDxi5zh0qG3En14rw9JGpYqT_BHFdlP6Cb452m12uYUOfDgnTEpy3c4wCT_zuAYr-y5nvw-cTS72q15o7Pw4S4NS0XtXYPKdQFenu-ayc-M_3ci9CqKGbFI88Ls5Iq_QWUrpWPjaLtyOlgc1lSjZY' },
    { rank: 4, name: 'Martin Diaz', role: 'Advisor', sales: 28, revenue: '$250,000', status: 'Improving', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRtrtNuisoGUqYWI_txcQUy7-0KyasWKBz9niSFDeNf4DVgSYlbscMVCAOM8gFyJ8XZ-dDNZNJIzmWuSF0i5T5XmFPycXce49l2Iz5n7d_Y5pZ5zplxKWSxCHEVJZl9tXilDIWJ9PUIefm-be-gQXS_89ZUSiUkavpv1u9zDK0--HREyyu-UimvhEX0KfMnq28xp4pOzDaI1VXRlcDD-kEAT-WWj-N3zMIubzhMZHtgW0ki8ed29QqECe-4ESDC3tl3COf4gxo8iSU' }
  ];

  const radarPoints = "100,25 160,65 155,135 100,170 45,130 35,65";

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">Panel de Metas y Ranking</h2>
          <p className="mt-1 text-base text-slate-500 dark:text-slate-400 font-medium font-display">Seguimiento de equipo • Septiembre 2023</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 shadow-sm transition-colors">
            <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_month</span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 font-display">Septiembre 2023</span>
          </div>
        </div>
      </div>

      {/* Team Goal Card */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 md:p-10 relative overflow-hidden group transition-all hover:border-primary/20">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center relative z-10">
          <div className="flex-1 w-full">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 font-display">Meta Mensual del Equipo</span>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight">Progreso de Ventas</h3>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black text-primary font-display">80%</p>
                <p className="text-sm text-slate-500 font-bold font-display uppercase tracking-tighter">Objetivo alcanzado</p>
              </div>
            </div>
            
            <div className="h-8 w-full bg-slate-100 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-inner mb-4">
              <div className="h-full bg-gradient-to-r from-primary via-blue-400 to-indigo-500 rounded-2xl flex items-center justify-end px-3 transition-all duration-1000 ease-out shadow-lg" style={{ width: '80%' }}>
                <div className="h-3 w-3 bg-white/40 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest font-display">
              <span className="text-slate-700 dark:text-slate-300">$1,200,000 Actual</span>
              <span className="text-green-600 flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[16px] icon-fill">trending_up</span>
                Faltan $300,000
              </span>
              <span className="text-slate-400">$1,500,000 Meta</span>
            </div>
          </div>

          <div className="flex gap-4 lg:border-l lg:border-slate-200 lg:dark:border-slate-700 lg:pl-10 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            <div className="min-w-[160px] p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Deals</span>
              </div>
              <p className="text-3xl font-black text-slate-900 dark:text-white font-display">142</p>
              <p className="text-[10px] text-green-600 font-black mt-1">+12% vs ago</p>
            </div>
            <div className="min-w-[160px] p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">groups</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Leads</span>
              </div>
              <p className="text-3xl font-black text-slate-900 dark:text-white font-display">850</p>
              <p className="text-[10px] text-slate-400 font-black mt-1 uppercase tracking-tighter">En seguimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Ranking Section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col transition-colors">
            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/30 dark:bg-slate-900/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3 font-display">
                <span className="material-symbols-outlined text-primary text-[28px]">leaderboard</span>
                Ranking de Asesores
              </h3>
              <button className="text-xs font-black text-primary uppercase tracking-[0.15em] hover:underline transition-all font-display">Ver Reporte Completo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-50 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/20">
                    <th className="px-6 py-4 w-20 text-center">Rank</th>
                    <th className="px-6 py-4">Asesor</th>
                    <th className="px-6 py-4 text-center">Ventas</th>
                    <th className="px-6 py-4 text-right">Facturación</th>
                    <th className="px-6 py-4 text-center">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                  {advisors.map((advisor) => (
                    <tr key={advisor.rank} className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-6 text-center">
                        {advisor.rank <= 3 ? (
                          <div className={`mx-auto size-9 flex items-center justify-center rounded-full shadow-sm ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ${
                            advisor.rank === 1 ? 'bg-yellow-100 text-yellow-700 ring-yellow-400' : 
                            advisor.rank === 2 ? 'bg-slate-100 text-slate-500 ring-slate-300' : 
                            'bg-orange-100 text-orange-700 ring-orange-300'
                          }`}>
                            <span className="material-symbols-outlined text-[20px] icon-fill">emoji_events</span>
                          </div>
                        ) : (
                          <span className="text-lg font-black text-slate-300 font-display">{advisor.rank}</span>
                        )}
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div className={`size-12 rounded-full overflow-hidden border-2 shadow-sm ${advisor.rank === 1 ? 'border-yellow-400' : 'border-slate-200'}`}>
                            <img className="h-full w-full object-cover" src={advisor.avatar} alt={advisor.name} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white font-display">{advisor.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{advisor.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-center font-black text-slate-700 dark:text-slate-300 font-display text-lg">{advisor.sales}</td>
                      <td className="px-6 py-6 text-right font-black text-slate-900 dark:text-white font-display text-lg">{advisor.revenue}</td>
                      <td className="px-6 py-6 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          advisor.status.includes('Fire') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30'
                        }`}>
                          {advisor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Individual Metrics Section */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 flex flex-col h-full transition-colors">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 font-display">Métricas Individuales</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Análisis de Skills</p>
                <select 
                  value={selectedAdvisor}
                  onChange={(e) => setSelectedAdvisor(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border-none text-[10px] font-black uppercase tracking-widest rounded-full py-1.5 px-4 text-primary focus:ring-4 focus:ring-primary/10 cursor-pointer outline-none transition-all shadow-sm"
                >
                  <option>Sofia Martinez</option>
                  <option>Juan Perez</option>
                  <option>Lucia Garcia</option>
                </select>
              </div>
            </div>

            {/* Radar Chart Container */}
            <div className="flex flex-col items-center justify-center mb-10 relative">
              <div className="w-full aspect-square max-w-[280px] relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" className="fill-none stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />
                  <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" className="fill-none stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />
                  <polygon points="100,60 135,80 135,120 100,140 65,120 65,80" className="fill-none stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />
                  
                  <line x1="100" y1="100" x2="100" y2="20" className="stroke-slate-100 dark:stroke-slate-700" />
                  <line x1="100" y1="100" x2="170" y2="60" className="stroke-slate-100 dark:stroke-slate-700" />
                  <line x1="100" y1="100" x2="170" y2="140" className="stroke-slate-100 dark:stroke-slate-700" />
                  <line x1="100" y1="100" x2="100" y2="180" className="stroke-slate-100 dark:stroke-slate-700" />
                  <line x1="100" y1="100" x2="30" y2="140" className="stroke-slate-100 dark:stroke-slate-700" />
                  <line x1="100" y1="100" x2="30" y2="60" className="stroke-slate-100 dark:stroke-slate-700" />
                  
                  <polygon points={radarPoints} className="fill-primary/20 stroke-primary" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[8px] font-black uppercase tracking-widest text-slate-400">
                  <span className="absolute top-0 bg-white dark:bg-slate-800 px-2 rounded-full border border-slate-100 dark:border-slate-700">Velocidad</span>
                  <span className="absolute bottom-0 bg-white dark:bg-slate-800 px-2 rounded-full border border-slate-100 dark:border-slate-700">CSAT</span>
                  <span className="absolute right-0 translate-x-4 bg-white dark:bg-slate-800 px-2 rounded-full border border-slate-100 dark:border-slate-700 rotate-90">Cierre</span>
                  <span className="absolute left-0 -translate-x-4 bg-white dark:bg-slate-800 px-2 rounded-full border border-slate-100 dark:border-slate-700 -rotate-90">Prospección</span>
                </div>
              </div>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6">
              {[
                { label: 'Velocidad de Respuesta', value: '9.5/10', percentage: 95 },
                { label: 'Tasa de Conversión', value: '7.8/10', percentage: 78 },
                { label: 'Satisfacción (CSAT)', value: '9.0/10', percentage: 90 },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-display">{skill.label}</span>
                    <span className="text-xs font-black text-primary">{skill.value}</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-sm" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Suggestion Card */}
            <div className="mt-10 p-5 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 group transition-all hover:bg-green-100 dark:hover:bg-green-900/30">
              <div className="flex gap-4">
                <div className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px] icon-fill">psychology</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-green-800 dark:text-green-300 uppercase tracking-widest font-display">Tip de IA para {selectedAdvisor.split(' ')[0]}</h4>
                  <p className="text-xs text-green-700 dark:text-green-400 mt-2 leading-relaxed font-display font-medium">
                    Sofía tiene una excelente respuesta inicial. Sugerimos enfocar en técnicas de cierre cruzado para aumentar el ticket promedio un 5% este mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuotes;
