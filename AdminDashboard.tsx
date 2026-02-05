
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard: React.FC = () => {
  const data = [
    { name: '01 Jun', leads: 400 },
    { name: '05 Jun', leads: 300 },
    { name: '10 Jun', leads: 600 },
    { name: '15 Jun', leads: 800 },
    { name: '20 Jun', leads: 500 },
    { name: '25 Jun', leads: 900 },
    { name: '30 Jun', leads: 1200 },
  ];

  const pieData = [
    { name: 'Rel. de Dependencia', value: 45, color: '#137fec' },
    { name: 'Monotributo', value: 30, color: '#0ea5e9' },
    { name: 'Particular', value: 25, color: '#6366f1' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-[1200px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white tracking-tight font-display">Resumen de Estadísticas</h2>
          <p className="text-[#4c739a] dark:text-slate-400 mt-1 font-display">Métricas de rendimiento y actividad del equipo comercial.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4c739a] dark:text-slate-400 font-display">
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Hoy, 24 Octubre 2023</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">Leads Totales</p>
            <span className="material-symbols-outlined text-primary">group_add</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">1,240</p>
            <p className="text-[#078838] bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded text-xs font-bold font-display">+12%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">Tasa de Conversión</p>
            <span className="material-symbols-outlined text-yellow-600">trending_up</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">12%</p>
            <p className="text-[#078838] bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded text-xs font-bold font-display">+2.4%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">Ticket Promedio</p>
            <span className="material-symbols-outlined text-[#078838]">payments</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">$45k</p>
            <p className="text-[#4c739a] bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-bold font-display">0%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#cfdbe7] dark:border-gray-700 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white font-display">Crecimiento de Prospectos</h3>
              <p className="text-xs text-[#4c739a] dark:text-slate-400 font-display">Volumen histórico de leads registrados</p>
            </div>
          </div>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7edf3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold', color: '#137fec' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#cfdbe7] dark:border-gray-700 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-[#0d141b] dark:text-white mb-6 font-display">Mix de Perfiles</h3>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              {pieData.map(item => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-[#4c739a] dark:text-slate-400 font-medium font-display">{item.name}</span>
                  </div>
                  <span className="font-bold text-[#0d141b] dark:text-white font-display">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
