
import React from 'react';
import { ViewState } from '../types';

interface Props {
  children: React.ReactNode;
  currentView: ViewState;
  navigate: (view: ViewState) => void;
  onLogout: () => void;
}

const AdminLayout: React.FC<Props> = ({ children, currentView, navigate, onLogout }) => {
  const menuItems = [
    { id: 'ADMIN_DASHBOARD', label: 'Estadísticas', icon: 'bar_chart' },
    { id: 'ADMIN_LEADS', label: 'Leads Recientes', icon: 'person_search' },
    { id: 'ADMIN_ADVISORS', label: 'Asesores', icon: 'support_agent' },
    { id: 'ADMIN_CONFIG', label: 'Configuración', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden font-display transition-colors duration-200">
      {/* Sidebar - Matching exactly snippet 1 */}
      <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#1a2632] border-r border-[#cfdbe7] dark:border-gray-700 transition-colors duration-200">
        <div className="flex flex-col h-full p-4">
          {/* Logo Section */}
          <div className="flex flex-col gap-1 mb-8 px-2 pt-2">
            <div className="h-12 w-full flex items-center mb-2">
              <div className="size-8 text-primary flex items-center justify-center bg-blue-50 rounded-lg mr-3">
                <span className="material-symbols-outlined text-2xl">health_and_safety</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-base font-extrabold truncate">Tu Prepaga CRM</h1>
            </div>
            <p className="text-[#4c739a] dark:text-slate-400 text-[10px] font-black uppercase tracking-widest truncate">Panel de Administración</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 flex-1">
            {menuItems.map((item) => {
              const isActive = currentView === item.id || (item.id === 'ADMIN_LEADS' && currentView === 'ADMIN_LEAD_DETAIL');
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id as ViewState)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                    ? 'bg-[#e7edf3] dark:bg-primary/20 text-primary dark:text-white' 
                    : 'text-[#4c739a] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'icon-fill' : ''}`}>
                    {item.icon}
                  </span>
                  <p className="text-sm font-bold leading-normal">{item.label}</p>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="mt-auto pt-4 border-t border-[#cfdbe7] dark:border-gray-700">
            <button 
              onClick={onLogout}
              className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="truncate">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-background-light dark:bg-background-dark">
        {/* Mobile Header (Hidden on LG) */}
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#1a2632] border-b border-[#cfdbe7] dark:border-gray-700 lg:hidden">
          <h1 className="text-lg font-bold text-[#0d141b] dark:text-white font-display">Administración</h1>
          <button className="text-[#0d141b] dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
