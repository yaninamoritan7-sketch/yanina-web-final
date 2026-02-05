
import React from 'react';
import { Advisor } from '../types';

const AdminAdvisors: React.FC = () => {
  const advisors: Advisor[] = [
    {
      id: '1',
      name: 'Camila Rodriguez',
      role: 'Senior Advisor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg2yZPc-w8A9fihc0i3-7_4dofoKocZPA5MhvWsncBy4r26lNoICwk9f3UEEfZl_upINWAfCZBqeF11O2yScaFo9XT2dkWVHSAgvTh3JULJ8-nysx90uKrfzMfDnccFXgwZEsOjSlUa26ErUt1puv0VNwmEEF31ENlUFGbeIlUs5YU0QJfJEWNywbnN0BK_zz-suZ7eKuEEPmVgQEwhdPHR5Oz1OI-_ngF__-K0eKS-fTlyhJaTPNQad1yHqiWy-5ZawfqGozMrIUE',
      status: 'Online',
      assignedLeads: 45,
      contactedPercentage: 84,
      conversionRate: '12.5%'
    },
    {
      id: '2',
      name: 'Juan Pérez',
      role: 'Junior Advisor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABINfpX8YGNE-DR1MZr5kwdMriWswe3DasuoUwbX0_APRBvZUPMXun_09Rs5LAG9bih7uNBYZiR2uDazOWFaVSBGXasly5q73e2Xw4YVbWEP3_tXXUmRHhFYX9ArKEzlqyBLABU6Y1ne90ML6PUvDhIZIupLidI19WbtymI9e7bpWX-qjvXPhi0MKzbFYvRCQpr2ogF-oqbh8ld8ZhnETKU6SfLBV32Nw1JEr6dBP2ADotMkjdQnvoQIKPlTE9XFXJcRBdR9gL_AbS',
      status: 'Online',
      assignedLeads: 32,
      contactedPercentage: 62,
      conversionRate: '8.4%'
    },
    {
      id: '3',
      name: 'Maria González',
      role: 'Team Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0ha67wippWm2kpA-Gqff6nEwZ5_dx4BrU8Bslii27mdQjarCoAMk5kE_7UVRNEc74A7iMheyPiItzsRWOemYMnY1AP_fJJvUd0gckGFFYYXzkGgrOMdU3jTJI5BsHiPogU1DaTuNQcFSc0fZa-DnAbea6aC96sU2ohq8kqHiGBE8_ntYZ1T4a3oKPVT007wCwA3gbDyqJPNKSWNzQJE8cK4ann47New4czjugaPLj_aUPL6uPT4vjhZRdg9qoDWYri_smL6RZmznI',
      status: 'Offline',
      assignedLeads: 50,
      contactedPercentage: 96,
      conversionRate: '18.2%'
    },
    {
      id: '4',
      name: 'Lucas Mendieta',
      role: 'Junior Advisor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRtrtNuisoGUqYWI_txcQUy7-0KyasWKBz9niSFDeNf4DVgSYlbscMVCAOM8gFyJ8XZ-dDNZNJIzmWuSF0i5T5XmFPycXce49l2Iz5n7d_Y5pZ5zplxKWSxCHEVJZl9tXilDIWJ9PUIefm-be-gQXS_89ZUSiUkavpv1u9zDK0--HREyyu-UimvhEX0KfMnq28xp4pOzDaI1VXRlcDD-kEAT-WWj-N3zMIubzhMZHtgW0ki8ed29QqECe-4ESDC3tl3COf4gxo8iSU',
      status: 'Online',
      assignedLeads: 28,
      contactedPercentage: 53,
      conversionRate: '5.1%'
    }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-display">
        <span className="text-slate-500 dark:text-slate-400">Dashboard</span>
        <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
        <span className="text-slate-900 font-bold dark:text-white">Gestión de Asesores</span>
      </div>

      {/* Page Heading & Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-display">Gestión y Asignación de Asesores</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl font-display">Administra tu equipo de ventas, monitorea el rendimiento y configura las reglas de distribución de leads.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm transition-all shadow-sm font-display">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            Configurar Reglas
          </button>
          <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-primary/20 font-display">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Agregar Nuevo Asesor
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Status Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-primary/30 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
              <span className="material-symbols-outlined text-2xl">hub</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input checked readOnly className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 font-display">Asignación Automática</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-display leading-relaxed">Round Robin activo. Distribuyendo leads equitativamente entre asesores disponibles.</p>
          </div>
        </div>

        {/* Metrics Summary Card 1 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-green-500/30 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600">
              <span className="material-symbols-outlined text-2xl">group</span>
            </div>
            <span className="text-[10px] font-black bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-full uppercase tracking-wider font-display">+12% vs mes anterior</span>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 font-display">1,248</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-display">Total Leads Asignados (Este mes)</p>
          </div>
        </div>

        {/* Metrics Summary Card 2 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between group hover:border-purple-500/30 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
            </div>
            <span className="text-[10px] font-black bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full uppercase tracking-wider font-display">Meta: 15%</span>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 font-display">14.2%</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-display">Tasa de Conversión Promedio</p>
          </div>
        </div>
      </div>

      {/* Active Rules Section */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 font-display">Reglas de Asignación Activas</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 shadow-sm transition-colors">
            <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
            <span className="font-display">Ubicación: <strong className="text-slate-900 dark:text-white font-bold">Buenos Aires</strong> → Equipo A</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 shadow-sm transition-colors">
            <span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
            <span className="font-display">Prepaga: <strong className="text-slate-900 dark:text-white font-bold">Swiss Medical</strong> → Camila Rodriguez</span>
          </div>
          <button className="flex items-center gap-1 text-primary text-xs font-black uppercase tracking-widest px-3 hover:underline transition-all font-display">
            + Ver todas las reglas
          </button>
        </div>
      </div>

      {/* Advisor List Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 font-display">Asesor</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center font-display">Estado</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right font-display">Leads Asignados</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/4 font-display">Leads Contactados</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right font-display">Conversión</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right font-display">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {advisors.map((advisor) => (
                <tr key={advisor.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-600 shadow-sm" 
                        style={{ backgroundImage: `url("${advisor.avatar}")` }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm font-display">{advisor.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-display">{advisor.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      advisor.status === 'Online' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-700/50 dark:text-slate-400'
                    }`}>
                      <span className={`size-2 rounded-full ${advisor.status === 'Online' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                      {advisor.status}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-slate-900 dark:text-white font-display">
                    {advisor.assignedLeads}
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px] font-bold font-display">
                        <span className="text-slate-900 dark:text-white">{Math.round((advisor.assignedLeads * advisor.contactedPercentage) / 100)}</span>
                        <span className="text-slate-500 dark:text-slate-400">{advisor.contactedPercentage}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden shadow-inner">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            advisor.contactedPercentage > 80 ? 'bg-primary' : advisor.contactedPercentage > 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${advisor.contactedPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-black text-slate-900 dark:text-white font-display">{advisor.conversionRate}</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-display">
            Mostrando <span className="text-slate-900 dark:text-white">{advisors.length}</span> de <span className="text-slate-900 dark:text-white">12</span> asesores
          </p>
          <div className="flex gap-2">
            <button disabled className="flex items-center justify-center size-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 transition-all font-display">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button className="flex items-center justify-center size-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-display shadow-sm">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAdvisors;
