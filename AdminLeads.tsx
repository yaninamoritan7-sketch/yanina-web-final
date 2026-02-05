
import React from 'react';
import { Lead } from '../types';

interface Props {
  onSelectLead: (id: string) => void;
}

const AdminLeads: React.FC<Props> = ({ onSelectLead }) => {
  const leads: Lead[] = [
    { id: '4829', name: 'Juan Pérez', age: 34, email: 'jperez@example.com', phone: '11 2344 5566', location: 'CABA', status: 'Nuevo', type: 'Familiar', category: 'Monotributo', currentPrepaga: 'OSDE', timestamp: 'Hace 2 horas' },
    { id: '4830', name: 'María García', age: 28, email: 'mgarcia@example.com', phone: '11 9988 7766', location: 'GBA Norte', status: 'Contactado', type: 'Individual', category: 'Relación de dep.', currentPrepaga: 'Swiss Medical', timestamp: 'Hace 5 horas' },
    { id: '4831', name: 'Carlos López', age: 45, email: 'clopez@example.com', phone: '351 112 3344', location: 'Córdoba', status: 'Cerrado', type: 'Familiar', category: 'Resp. Inscripto', currentPrepaga: 'Galeno', timestamp: 'Ayer' },
    { id: '4832', name: 'Ana Martínez', age: 31, email: 'amartinez@example.com', phone: '11 4455 6677', location: 'CABA', status: 'Nuevo', type: 'Individual', category: 'Monotributo', currentPrepaga: 'Omint', timestamp: 'Ayer' },
    { id: '4833', name: 'Pedro Rodriguez', age: 39, email: 'prodriguez@example.com', phone: '11 1122 3344', location: 'CABA', status: 'Contactado', type: 'Familiar', category: 'Relación de dep.', currentPrepaga: 'Medifé', timestamp: 'Ayer' },
  ];

  const getPrepagaLogo = (name: string) => {
    switch (name) {
      case 'OSDE': return 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdCWWWi6BhR9GM7ynKkoUkdp5DsPIRth5qPJhY4aHUuqE2Rrv2cg2Vz2GdEGuF2sgjS3U_3zMai9oluW0tgr64CvTa1244vsvtXycPO0zHM0SaP4qNf829nN9SMdpHgkf-uuRr7drYXUPc6KTkB9Dx7B-uLp0fQapYynVd-ZFGOTUUNhjwKsR0BykKq0cML8ht2kx1vfDjpW8-P83ftH6-EvO1hjwov5OmcwB-hucA-gu3cD-_jLzuks8930K-ezOnnUrsCncv8nck';
      case 'Swiss Medical': return 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVaz7QoEIWyiawavUXOePjN-Q2JH1MYYZcfcZJAPEXMKzxchNA31Y7GibE0qdpimnIodT6e0A4DCbpnjsl3ef7Lg7viAfmt86EWXzJnii_L_YbN-jIpuFEt8e1PAtveNzz4kMe0_GQ7OLWwNDABspq8W6PhAoXyj71_e4rFql5EjumPw6-KJBj0EPf6BhXGTeEncQQvkSXveG7nvZFoTJVZY2N_MsvUV3folp4jhO0aQJ7KWoXimFdQcddobbRcEV4wVk-VELm0bDw';
      case 'Galeno': return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOIWtc6UPS6BPLe2LySXKb6bnsowv_t5A83ueRuSs4OlnfgrzOQ9eSven6ofKRU_htXjiZKEoGRu3mr2Km16TCeLs7uoDC_1O_oqEhk8c-kxeCbgcGBkVSypOSFrjd2_Mz9LQRqscADqKXTD2gbvRJRxVjdkYxf1JHeSwElHO0ACE00qW6qO9Rxjc71pa1SR1CmZIVQeaQIdN81Wzm6KBnQTg2g8p8BGxhHlvb17ddgknG8wSPOJxUKQh7NyLAfqP9J4ToH07l5F9f';
      case 'Omint': return 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgXMi_slOr-U4CHVty1xlp9kMKAF1o2xVeUtSepg6CzGLETiNFK8lQqBZXoEr0CKmqGNUHKY9u8I0LB0weOcN3hw5GzbwMtAhs7vzuvQHyhqvgPbZTc9waTcZRPAsktp_lPkePrCFVJcO_PVEHFQFyEW3GNd0G09efIOSEXdPfePV_jv3fc0zgU1CwaXkJhQM3q4rZyZVwdg5rfHxWpmYH8JrD0twvjXn1FRlTOkj8w_3I5Jbs1O0KPkB6HDgFFonXmBnoBlIRLwu';
      case 'Medifé': return 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfE_vSsNnWY2CNwH1dn2a3-BZeNdQSPuHRnbwrBamaif1jIUuob388_GSgaAQ-tQMLvxXR8-NRQ6GiLc5we4vs0WoIYex9UM6waUYLsdXkmGYF5k6ZzW7rOhfChDLaT0xP6jb1L49wDNE7XdGB98gutgroLkiafyDY-QCRIZVt8L12Cty0fSFoN5VF5JHOMV5Pf7pAKhGb6lOV-OpeGXWBP4580fK_XvumNO0BR5C1e7IFeWiJDl9yTSJIJTOF3DkGDWgJhVWTuLGs';
      default: return '';
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Nuevo': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'Contactado': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
      case 'Cerrado': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      default: return 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white tracking-tight font-display">Gestión de Leads</h2>
          <p className="text-[#4c739a] dark:text-slate-400 mt-1 font-display">Resumen de actividad diaria y gestión de prospectos.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4c739a] dark:text-slate-400 font-display">
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Hoy, 24 Octubre 2023</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">Leads Hoy</p>
            <span className="material-symbols-outlined text-primary">group_add</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">24</p>
            <p className="text-[#078838] bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded text-xs font-medium font-display">+10%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">En Proceso</p>
            <span className="material-symbols-outlined text-yellow-600">pending_actions</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">12</p>
            <p className="text-[#4c739a] bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-xs font-medium font-display">0%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal font-display">Convertidos</p>
            <span className="material-symbols-outlined text-[#078838]">verified</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight font-display">5</p>
            <p className="text-[#078838] bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded text-xs font-medium font-display">+2%</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] table-auto">
            <thead className="bg-background-light dark:bg-slate-800 border-b border-[#cfdbe7] dark:border-gray-700 font-display">
              <tr>
                <th className="px-6 py-4 text-left text-[#4c739a] text-xs font-bold uppercase">Nombre</th>
                <th className="px-6 py-4 text-center text-[#4c739a] text-xs font-bold uppercase w-24">WhatsApp</th>
                <th className="px-6 py-4 text-left text-[#4c739a] text-xs font-bold uppercase">Prepaga Actual</th>
                <th className="px-6 py-4 text-left text-[#4c739a] text-xs font-bold uppercase">Estado</th>
                <th className="px-4 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#cfdbe7] dark:divide-gray-700 font-display">
              {leads.map((lead) => (
                <tr 
                  key={lead.id} 
                  onClick={() => onSelectLead(lead.id)}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#0d141b] dark:text-white text-sm font-bold">{lead.name}</span>
                        <span className="text-[#4c739a] text-xs">{lead.timestamp}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                      <span className="material-symbols-outlined icon-fill">chat</span>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <img src={getPrepagaLogo(lead.currentPrepaga)} alt={lead.currentPrepaga} className="h-6 w-auto object-contain opacity-80" />
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusStyle(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="material-symbols-outlined text-[#4c739a]">chevron_right</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;
