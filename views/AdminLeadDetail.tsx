
import React, { useState } from 'react';

interface Props {
  leadId: string | null;
  onBack: () => void;
}

interface Note {
  id: number;
  text: string;
  author: string;
  timestamp: string;
}

const AdminLeadDetail: React.FC<Props> = ({ leadId, onBack }) => {
  const [status, setStatus] = useState('interesado');
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, text: 'El cliente preguntó si cubren odontología sin copagos. Quedé en averiguar y volver a llamar.', author: 'Admin User', timestamp: '12 Oct, 14:30' },
    { id: 2, text: 'Primer contacto exitoso por WhatsApp. Está interesada en planes de Swiss Medical o Galeno.', author: 'Admin User', timestamp: '12 Oct, 10:15' }
  ]);

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: Date.now(),
      text: newNote,
      author: 'Admin User',
      timestamp: 'Hoy, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setNotes([note, ...notes]);
    setNewNote('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto font-display">
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex items-center space-x-2">
          <li><button onClick={onBack} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">Inicio</button></li>
          <li className="text-slate-400 text-sm">/</li>
          <li className="text-slate-900 dark:text-white text-sm font-bold">Detalle de Lead</li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Martina Gomez</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-bold border border-slate-200 dark:border-slate-700">#{leadId || '4829'}</span>
          </div>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Lead generado el 12/10/2023 • Hace 2 días
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-bold cursor-pointer"
          >
            <option value="nuevo">Nuevo</option>
            <option value="interesado">Interesado</option>
            <option value="cerrado">Cerrado</option>
          </select>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">WhatsApp</button>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">Email</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[20px]">person</span> Datos Personales</h2>
              <button className="text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest">Editar</button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><p className="text-[10px] font-black uppercase text-slate-500 mb-1">Nombre Completo</p><p className="font-bold dark:text-white">Martina Gomez</p></div>
              <div><p className="text-[10px] font-black uppercase text-slate-500 mb-1">Edad</p><p className="font-bold dark:text-white">34 años</p></div>
              <div className="md:col-span-2"><p className="text-[10px] font-black uppercase text-slate-500 mb-1">Email</p><p className="font-bold dark:text-white">martina.gomez@example.com</p></div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[20px]">work</span> Perfil Laboral y Salud</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Contribuyente</p>
                  <p className="text-lg font-bold dark:text-white">Monotributista C</p>
                </div>
                <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border-l-4 border-l-primary border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Obra Social Actual</p>
                  <p className="font-bold dark:text-white">OSECAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[400px]">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-base font-bold dark:text-white">Notas del Asesor</h2>
              <span className="text-[10px] font-black uppercase text-slate-400">Solo uso interno</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-800/20">
              {notes.map(note => (
                <div key={note.id} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{note.text}</p>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    <span>{note.author}</span><span>{note.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <textarea 
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary mb-3 resize-none dark:text-white p-3" 
                placeholder="Escribe una nota aquí..." 
                rows={3}
              />
              <button onClick={handleAddNote} className="w-full bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 rounded-lg transition-all shadow-sm">Guardar Nota</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeadDetail;
