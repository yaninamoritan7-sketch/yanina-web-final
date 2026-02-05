
import React, { useState } from 'react';

interface DaySchedule {
  day: string;
  isOpen: boolean;
  start: string;
  end: string;
}

const AdminConfig: React.FC = () => {
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: 'Lunes', isOpen: true, start: '09:00', end: '18:00' },
    { day: 'Martes', isOpen: true, start: '09:00', end: '18:00' },
    { day: 'Miércoles', isOpen: true, start: '09:00', end: '18:00' },
    { day: 'Jueves', isOpen: true, start: '09:00', end: '18:00' },
    { day: 'Viernes', isOpen: true, start: '09:00', end: '17:00' },
    { day: 'Sábado', isOpen: false, start: '', end: '' },
    { day: 'Domingo', isOpen: false, start: '', end: '' },
  ]);

  const [awayMessage, setAwayMessage] = useState('¡Gracias por contactarnos! En este momento no estamos en la oficina, pero tu consulta ya ingresó. Te contactaremos mañana a primera hora por WhatsApp.');
  const [hideWhatsApp, setHideWhatsApp] = useState(false);

  const toggleDay = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index].isOpen = !newSchedule[index].isOpen;
    if (newSchedule[index].isOpen && !newSchedule[index].start) {
      newSchedule[index].start = '09:00';
      newSchedule[index].end = '18:00';
    }
    setSchedule(newSchedule);
  };

  const updateTime = (index: number, field: 'start' | 'end', value: string) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const copyToAll = (index: number) => {
    const source = schedule[index];
    setSchedule(schedule.map(s => ({
      ...s,
      isOpen: source.isOpen,
      start: source.start,
      end: source.end
    })));
  };

  return (
    <div className="flex flex-col gap-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-display">
        <span className="text-slate-500 dark:text-slate-400">Inicio</span>
        <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
        <span className="text-slate-900 font-bold dark:text-white">Configuración</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">Configuración de Horarios y Atención</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-3xl font-display">
          Define tus horarios de atención semanal y personaliza los mensajes automáticos para cuando el equipo no esté disponible.
        </p>
      </div>

      {/* Section 1: Weekly Schedule */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/30 dark:bg-slate-900/20">
          <div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold font-display">Horarios de Atención</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-display">Configura la disponibilidad para cada día de la semana.</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 text-[10px] font-black uppercase tracking-widest font-display">
              <tr>
                <th className="px-6 py-4 w-1/4">Día</th>
                <th className="px-6 py-4 w-1/4 text-center">Estado</th>
                <th className="px-6 py-4 w-1/4">Inicio</th>
                <th className="px-6 py-4 w-1/4">Fin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {schedule.map((item, idx) => (
                <tr key={item.day} className={`hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors ${!item.isOpen ? 'bg-slate-50/50 dark:bg-white/5' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className={`text-sm font-bold font-display ${item.isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                        {item.day}
                      </span>
                      {item.isOpen && (
                        <button 
                          onClick={() => copyToAll(idx)}
                          className="text-[10px] font-black text-primary uppercase tracking-wider hover:underline transition-all opacity-0 group-hover:opacity-100 sm:opacity-100 font-display"
                        >
                          Copiar a todos
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={item.isOpen} 
                          onChange={() => toggleDay(idx)} 
                          className="sr-only peer" 
                        />
                        <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                      </label>
                      <span className={`text-xs font-black uppercase tracking-wider font-display ${item.isOpen ? 'text-primary' : 'text-slate-400'}`}>
                        {item.isOpen ? 'Abierto' : 'Cerrado'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative group">
                      <span className={`material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg ${item.isOpen ? 'text-slate-400' : 'text-slate-200'}`}>schedule</span>
                      <input 
                        type="time" 
                        disabled={!item.isOpen}
                        value={item.start}
                        onChange={(e) => updateTime(idx, 'start', e.target.value)}
                        className={`block w-full pl-10 pr-3 py-2 text-sm rounded-xl border transition-all font-bold font-display focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none ${
                          item.isOpen 
                          ? 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white' 
                          : 'border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                        }`} 
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative group">
                      <span className={`material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg ${item.isOpen ? 'text-slate-400' : 'text-slate-200'}`}>schedule</span>
                      <input 
                        type="time" 
                        disabled={!item.isOpen}
                        value={item.end}
                        onChange={(e) => updateTime(idx, 'end', e.target.value)}
                        className={`block w-full pl-10 pr-3 py-2 text-sm rounded-xl border transition-all font-bold font-display focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none ${
                          item.isOpen 
                          ? 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white' 
                          : 'border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                        }`} 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Out of Office Behavior */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/20">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold font-display">Comportamiento Fuera de Horario</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-display">Personaliza la experiencia del usuario cuando el centro de atención está cerrado.</p>
        </div>
        <div className="p-6 flex flex-col lg:flex-row gap-10">
          {/* Message Settings */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-bold text-slate-900 dark:text-white font-display">Mensaje de Ausencia</label>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-display">Este mensaje se mostrará automáticamente en el chat cuando un usuario intente contactar fuera del horario laboral.</p>
              <textarea 
                value={awayMessage}
                onChange={(e) => setAwayMessage(e.target.value.slice(0, 300))}
                rows={4}
                className="block w-full p-4 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none text-slate-900 dark:text-white font-display transition-all resize-none"
                placeholder="Escribe el mensaje de respuesta automática..."
              />
              <div className="flex justify-end mt-2">
                <span className={`text-[10px] font-black uppercase tracking-wider ${awayMessage.length > 280 ? 'text-red-500' : 'text-slate-400'}`}>
                  {awayMessage.length} / 300 caracteres
                </span>
              </div>
            </div>

            {/* Extra Options */}
            <div className="p-5 border border-slate-100 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between group transition-all hover:border-primary/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px] icon-fill">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-display">Botón de WhatsApp Flotante</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-display">Ocultar acceso directo cuando estemos cerrados</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={hideWhatsApp} 
                  onChange={() => setHideWhatsApp(!hideWhatsApp)} 
                  className="sr-only peer" 
                />
                <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <label className="block mb-4 text-xs font-black uppercase tracking-widest text-slate-400 font-display">Vista Previa</label>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 h-[300px] flex flex-col justify-end shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-b border-slate-200/50 flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-bold text-slate-500">Soporte en línea (Auto)</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="self-end bg-primary text-white px-4 py-2.5 rounded-2xl rounded-tr-none text-xs max-w-[85%] shadow-sm animate-in fade-in slide-in-from-right-4 duration-500 font-display">
                  Hola, ¿qué precio tiene el plan de Swiss Medical?
                </div>
                <div className="self-start bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs max-w-[90%] shadow-md animate-in fade-in slide-in-from-left-4 duration-700 delay-300 font-display leading-relaxed">
                  {awayMessage || '...'}
                </div>
                <div className="text-[9px] font-bold text-slate-400 text-center mt-2 uppercase tracking-tighter">
                  Respuesta automática • 18:32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="fixed bottom-0 left-72 right-0 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 z-50 transition-all">
        <button className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-display">
          Descartar Cambios
        </button>
        <button className="px-8 py-2.5 rounded-xl bg-primary text-white font-black text-sm shadow-xl shadow-primary/30 hover:bg-blue-600 transition-all flex items-center gap-2 transform active:scale-95 font-display">
          <span className="material-symbols-outlined text-[20px]">save</span>
          Guardar Configuración
        </button>
      </div>
    </div>
  );
};

export default AdminConfig;
