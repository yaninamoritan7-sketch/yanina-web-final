
import React from 'react';

const AdminSitemap: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-500 animate-in fade-in">
      {/* Sub Header & Heading */}
      <div className="flex flex-wrap justify-between items-center gap-3 px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm z-30">
        <div className="flex min-w-72 flex-col gap-1">
          <p className="text-slate-900 dark:text-white text-2xl font-black leading-tight tracking-tight font-display">Arquitectura: User Journey Map</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Version 1.0.3 • Actualizado por Equipo Dev • hace 2 mins</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 overflow-hidden mr-4">
            <img alt="Team member" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtcWYkCmteel3FbRIMp7KE7Pq0W0M0RllKBXjHWtUZzjkMRk6IaH6HF0lMrkPcESXqpyBTjKdUFH2rEXm5U6s0PCq6hN-NAU2IfTTM4aKlRddku4Hhnp-LMs21hsePUJyEpuCQ0IDfTWH33zonezWm89wu67E09BUg-90YBqXte37s9adNvNDMuUzY_X_sA2osjq2adbmy39t7VkHGaffyDcsRdFup4HB0-eOQEjZMMh3zFHcYdaFk9WaMwUWFd0n4pwFgNG-pYXdz"/>
            <img alt="Team member" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwtXcw9CK5nCdATxa_8KtTJh7NmG3xX3fCXNnDBr5Xj6LhZDGwyCFEgWW6Zh0eRh73OsV5N-qBB_wcR1h9expX25QW1knrrME1-0TOWLH-AJw2Bh0NikFYplOm-FqMXRBxqQlQ8hJwEaVdjU30pqXNOArhg2ufsi0jvL8B8ujdXfRVcdVi7XV7FnlkVjL0ceSOIZGjpntEKkB-mQ1h_JghEOg2qazZqTup5g3laI6XnCEvQIlEPWjlKlamFRKezzH1tRM9hEVkLvEU"/>
            <div className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500">+3</div>
          </div>
          <button className="flex h-9 items-center justify-center rounded-lg px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white text-sm font-bold shadow-sm hover:bg-slate-50 transition-all font-display">Historial</button>
          <button className="flex h-9 items-center justify-center rounded-lg px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-all font-display">
            <span className="material-symbols-outlined text-[18px] mr-2">edit</span>
            Editar Diagrama
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <main className="flex-1 relative overflow-auto bg-slate-50 dark:bg-[#0f151b] cursor-grab active:cursor-grabbing" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        
        {/* Toolbar Floating */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-full px-3 py-2 flex items-center gap-2 z-40 border border-slate-200/50 dark:border-slate-700/50">
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all">
            <span className="material-symbols-outlined text-[20px]">pan_tool</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
          <button className="p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all">
            <span className="material-symbols-outlined text-[20px]">zoom_in</span>
          </button>
          <span className="text-[10px] font-black text-slate-400 w-12 text-center uppercase tracking-widest font-display">100%</span>
          <button className="p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all">
            <span className="material-symbols-outlined text-[20px]">zoom_out</span>
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
          <button className="p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all">
            <span className="material-symbols-outlined text-[20px]">fit_screen</span>
          </button>
        </div>

        {/* Legend Panel Floating */}
        <div className="fixed top-24 right-6 w-64 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 z-40 p-5">
          <h3 className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 font-display">
            <span className="material-symbols-outlined text-primary text-[18px]">info</span> Referencias
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-blue-100 border-2 border-primary"></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-display">Página Pública</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-slate-200 border-2 border-slate-500"></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-display">Página Admin</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rotate-45 bg-amber-100 border-2 border-amber-400"></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-display">Lógica Condicional</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 border-t-2 border-dashed border-slate-400"></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-display">Trigger de API</span>
            </div>
          </div>
        </div>

        {/* Canvas Content Wrapper */}
        <div className="relative w-[1400px] h-[900px] mx-auto">
          {/* SVG Connectors Layer */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <defs>
              <marker id="arrowhead" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
                <polygon fill="#94a3b8" points="0 0, 10 3.5, 0 7"></polygon>
              </marker>
              <marker id="arrowhead-blue" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
                <polygon fill="#137fec" points="0 0, 10 3.5, 0 7"></polygon>
              </marker>
              <style>{`
                .flow-line { stroke-dasharray: 8; stroke-dashoffset: 100; animation: dash 3s linear infinite; }
                @keyframes dash { to { stroke-dashoffset: 0; } }
              `}</style>
            </defs>

            {/* Path 1: Landing to Quote */}
            <path d="M260,280 C260,350 260,350 260,400" fill="none" markerEnd="url(#arrowhead)" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Path 2: Quote to Logic */}
            <path d="M370,450 L450,450" fill="none" markerEnd="url(#arrowhead-blue)" stroke="#137fec" strokeWidth="2" className="flow-line" />
            
            {/* Path 3: Logic Yes to Family */}
            <path d="M500,450 L600,450" fill="none" markerEnd="url(#arrowhead)" stroke="#94a3b8" strokeWidth="2" />
            <text x="525" y="440" fill="#94a3b8" fontSize="10" fontWeight="bold" className="font-display uppercase tracking-widest">Grupo > 1</text>
            
            {/* Path 4: Logic No to Contact */}
            <path d="M475,475 C475,580 650,580 750,580 L800,580" fill="none" markerEnd="url(#arrowhead)" stroke="#cbd5e1" strokeDasharray="5,5" strokeWidth="2" />
            <text x="485" y="520" fill="#94a3b8" fontSize="10" fontWeight="bold" className="font-display uppercase tracking-widest">Grupo = 1</text>
            
            {/* Path 5: Family to Contact */}
            <path d="M740,450 L800,450" fill="none" markerEnd="url(#arrowhead)" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Path 6: Contact to Success (API Call) */}
            <path d="M940,450 L1000,450" fill="none" markerEnd="url(#arrowhead-blue)" stroke="#137fec" strokeWidth="2" className="flow-line" />
            
            {/* Path 7: API Trigger to Dashboard */}
            <path d="M925,430 C925,280 1000,280 1050,280" fill="none" markerEnd="url(#arrowhead)" stroke="#f59e0b" strokeDasharray="4,4" strokeWidth="2" />
          </svg>

          {/* Nodes Container */}
          <div className="relative w-full h-full p-20">
            {/* Sector Labels */}
            <div className="absolute top-20 left-10 text-[10px] font-black text-primary tracking-[0.3em] uppercase rotate-[270deg] origin-left border-l-2 border-primary pl-4 opacity-50">ÁREA PÚBLICA</div>
            <div className="absolute top-10 left-[1050px] text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase border-b-2 border-slate-200 pb-2 w-48 text-right opacity-50">ÁREA ADMIN</div>

            {/* NODE: LANDING PAGE */}
            <div className="absolute top-[180px] left-[160px] w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-t-4 border-primary p-5 group hover:-translate-y-1 transition-all cursor-pointer z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-[20px] icon-fill">web</span>
                </div>
                <span className="bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">VIVA</span>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2 font-display uppercase tracking-tight">Página de Inicio</h4>
              <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-2 font-medium font-display">
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-slate-300"></span> Hero & Cotizador Rápido</li>
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-slate-300"></span> Beneficios Destacados</li>
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-slate-300"></span> Alianzas Comerciales</li>
              </ul>
            </div>

            {/* NODE: QUOTE STEP 1 */}
            <div className="absolute top-[400px] left-[160px] w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-5 group hover:border-primary/50 transition-all cursor-pointer z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-[20px]">feed</span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">/step-1</span>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2 font-display uppercase tracking-tight">Datos Básicos</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mb-3">Captura inicial de perfil demográfico y laboral.</p>
              <div className="flex gap-1.5">
                <span className="bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded text-[8px] font-bold text-slate-400 uppercase tracking-tighter">React Hook Form</span>
              </div>
            </div>

            {/* NODE: LOGIC GATE */}
            <div className="absolute top-[425px] left-[450px] w-14 h-14 bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-300 dark:border-amber-700 rotate-45 flex items-center justify-center z-10 shadow-lg group hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 -rotate-45 text-[28px] icon-fill">family_restroom</span>
            </div>
            <div className="absolute top-[490px] left-[430px] text-[9px] font-black text-amber-700 dark:text-amber-500 bg-amber-100 dark:bg-amber-900/40 px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm">¿Es Familiar?</div>

            {/* NODE: FAMILY DETAILS */}
            <div className="absolute top-[390px] left-[600px] w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-5 border-l-4 border-l-amber-400 group hover:-translate-y-1 transition-all cursor-pointer z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-xl text-amber-500">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                </div>
                <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-tight font-display">Integrantes</h4>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Formulario dinámico para sumar cónyuge e hijos con validación de edades.</p>
            </div>

            {/* NODE: CONTACT FORM */}
            <div className="absolute top-[400px] left-[800px] w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-5 group hover:border-primary/50 transition-all cursor-pointer z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-primary/5 dark:bg-primary/20 p-2 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-[18px] icon-fill">contact_mail</span>
                </div>
                <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-tight font-display">Finalizar Datos</h4>
              </div>
              <p className="text-[10px] text-slate-500 mb-3 font-medium">Validación de Email y WhatsApp mediante API.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl px-3 py-2 text-[9px] font-black font-mono text-center text-primary border border-primary/10">SUBMIT_LEAD</div>
            </div>

            {/* API TAG */}
            <div className="absolute top-[370px] left-[900px] bg-indigo-600 text-white border border-indigo-700 px-3 py-1.5 rounded-full text-[9px] font-black font-mono shadow-xl z-20 flex items-center gap-2 animate-pulse">
              <span className="size-1.5 rounded-full bg-white"></span>
              POST /api/leads
            </div>

            {/* NODE: SUCCESS / RESULTS */}
            <div className="absolute top-[400px] left-[1030px] w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-t-4 border-green-500 p-5 group hover:-translate-y-1 transition-all cursor-pointer z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded-xl text-green-600">
                  <span className="material-symbols-outlined text-[20px] icon-fill">verified</span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">/success</span>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2 font-display uppercase tracking-tight">Confirmación</h4>
              <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-2 font-medium font-display">
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-green-300"></span> Feedback visual éxito</li>
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-green-300"></span> CTA WhatsApp Asesor</li>
                <li className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-green-300"></span> Recomendaciones IA</li>
              </ul>
            </div>

            {/* NODE: ADMIN DASHBOARD */}
            <div className="absolute top-[240px] left-[1030px] w-56 bg-slate-50 dark:bg-slate-900/50 backdrop-blur rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 p-5 opacity-80 hover:opacity-100 group transition-all z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-xl text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-[20px] icon-fill">dashboard</span>
                </div>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">SEGURO</span>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2 font-display uppercase tracking-tight">Panel Principal</h4>
              <p className="text-[10px] text-slate-500 mb-3 font-medium">Recepción y gestión de leads en tiempo real.</p>
              <div className="flex gap-2">
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">Kanban</span>
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Context Bar */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 z-30 transition-colors">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center bg-slate-50 dark:bg-slate-800 p-1.5 rounded-3xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="hidden md:block w-40 h-24 bg-center bg-no-repeat bg-cover rounded-2xl shrink-0 m-1 shadow-inner opacity-80 grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=400")' }}></div>
            <div className="flex w-full grow flex-col justify-center gap-1.5 px-6 py-4 md:py-0">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-amber-500 animate-pulse"></span>
                <p className="text-slate-900 dark:text-white text-sm font-black uppercase tracking-widest font-display">Selección Actual: Lógica de Cotización (Step 2)</p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed max-w-3xl font-display">
                Este bloque condicional valida la cantidad de integrantes ingresada en el Paso 1. Si es mayor a 1, rutea al formulario de Detalles Familiares. Si es 1, salta directamente a Información de Contacto. Se requiere validación asíncrona en el backend.
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 md:py-0">
              <button className="flex h-10 items-center justify-center rounded-2xl px-5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm font-display">
                Ver Specs
              </button>
              <button className="flex h-10 items-center justify-center rounded-2xl px-6 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 font-display">
                Previsualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSitemap;
