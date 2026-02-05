
import React from 'react';

interface Props {
  onHome: () => void;
  onQuote?: () => void;
}

const NotFound: React.FC<Props> = ({ onHome, onQuote }) => {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12 md:px-10 bg-background-light dark:bg-background-dark">
      <div className="layout-content-container flex max-w-[1100px] flex-1 flex-col justify-center">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
            {/* Text Content */}
            <div className="flex flex-1 flex-col gap-6 text-center lg:items-start lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20 dark:text-blue-300 font-display">
                  <span className="mr-1 font-bold">404</span> Página no encontrada
                </div>
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#0d141b] md:text-5xl dark:text-white font-display">
                  ¡Ups! Parece que esta página no está en nuestra cartilla
                </h1>
                <p className="text-lg text-slate-600 md:text-xl dark:text-slate-300 font-display leading-relaxed">
                  No te preocupes, te ayudamos a encontrar el camino de regreso a tu mejor cobertura.
                </p>
              </div>
              <div className="flex flex-col flex-wrap gap-3 pt-4 sm:flex-row sm:justify-center lg:justify-start">
                <button 
                  onClick={onHome}
                  className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-blue-600 shadow-lg shadow-primary/20 transform hover:-translate-y-0.5 active:scale-[0.98] font-display"
                >
                  <span className="material-symbols-outlined mr-2 !text-lg">home</span>
                  <span className="truncate">Volver al Inicio</span>
                </button>
                <button 
                  onClick={onQuote}
                  className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white border border-slate-200 px-6 text-base font-bold leading-normal tracking-[0.015em] text-[#0d141b] transition-all hover:bg-slate-50 dark:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-display"
                >
                  <span className="material-symbols-outlined mr-2 !text-lg">calculate</span>
                  <span className="truncate">Cotizar mi Plan</span>
                </button>
              </div>
              <div className="mt-2 flex justify-center lg:justify-start">
                <button className="group flex cursor-pointer items-center gap-2 rounded-lg py-2 text-sm font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-300 font-display">
                  <span className="material-symbols-outlined !text-[20px] transition-transform group-hover:scale-110">chat_bubble</span>
                  <span>Hablar con un Asesor (WhatsApp)</span>
                </button>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full bg-blue-50 dark:bg-gray-800/50 p-8 md:p-12 shadow-inner border-4 border-white dark:border-slate-800">
                {/* Abstract decorative circles */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-200/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div 
                  className="h-full w-full bg-center bg-no-repeat bg-contain relative z-0" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7v-ecb5zWpu1EkdYoJCsxuaWKvweJxCZmgZuLV44_KrdVy6WFPKFy6nXqMyoRiXrZZqnwjGkewKGPAdpkZ4Pm7wZAVhD2l1Ebhbhfir4E9oJFBCDDY20dlKNCJCINFyWru4vmL9mqjBGT2JFGg-FlOqbb0jsu4t6ZyPDzpk8jcYNjfOik4QXMzkuVVUzEGdfqUbDUEGXQwuPX-Z8e_SSzaUuhTGXHP8fZA-Q47QlFxSpmY_1RGYt-_-0zYto1nu3Ln6vWuCYt4T9Z")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/90 via-transparent to-transparent dark:from-slate-900/80 mix-blend-overlay"></div>
                </div>

                {/* Floating Magnifying Glass Icon Overlay */}
                <div className="absolute bottom-[20%] right-[15%] flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl rotate-12 animate-bounce dark:bg-gray-700" style={{ animationDuration: '3s' }}>
                  <span className="material-symbols-outlined !text-5xl text-primary icon-fill">search</span>
                </div>
                <div className="absolute top-[20%] left-[10%] flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg -rotate-6 animate-pulse dark:bg-gray-700">
                  <span className="material-symbols-outlined !text-3xl text-red-400">fmd_bad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
