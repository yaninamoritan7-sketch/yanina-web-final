
import React from 'react';

const FAQ: React.FC = () => {
  const prepagas = [
    { name: 'Sancor Salud', color: '#1e3482', textColor: 'white' },
    { name: 'Swiss Medical', color: '#f8fafc', textColor: '#d01026', border: true },
    { name: 'Omint', color: '#1e2e60', textColor: 'white' },
    { name: 'Medifé', color: '#0096d6', textColor: 'white' },
    { name: 'Avalian', color: '#004a44', textColor: 'white' },
    { name: 'Prevención Salud', color: '#00a1e4', textColor: 'white' },
    { name: 'Premedic', color: '#0055a5', textColor: 'white' },
    { name: 'Doctored', color: '#101922', textColor: 'white' },
  ];

  const faqs = [
    { 
      q: '¿Cómo derivar mis aportes de obra social?', 
      a: 'El trámite es 100% digital y gratuito. Solo necesitás tu clave fiscal nivel 3 de AFIP. Nosotros te guiamos paso a paso en el proceso para que tus aportes vayan directo a la prepaga elegida, reduciendo significativamente el costo de tu cuota mensual.' 
    },
    { 
      q: '¿Tengo que pagar algo por el asesoramiento?', 
      a: '¡No! Nuestro servicio de asesoramiento es completamente gratuito para vos. Nosotros recibimos una comisión por parte de las empresas de medicina prepaga, lo que garantiza que el precio que pagás es el mismo (o mejor, gracias a convenios) que si contrataras directo, pero con nuestra ayuda experta.' 
    },
    { 
      q: '¿Cuánto tiempo demora el alta?', 
      a: 'El tiempo de alta depende de cada prepaga, pero generalmente demora entre 48 y 72 horas hábiles una vez presentada toda la documentación. Te mantendremos informado vía email o WhatsApp sobre el estado de tu solicitud en todo momento.' 
    },
    { 
      q: '¿Qué pasa si ya tengo una enfermedad preexistente?', 
      a: 'Las enfermedades preexistentes deben ser declaradas en la Declaración Jurada de Salud. Las prepagas no pueden rechazarte por este motivo, pero pueden cobrar un valor diferencial o establecer periodos de carencia para ciertas prestaciones relacionadas con esa condición. Nuestros asesores te ayudarán a encontrar la mejor opción para tu caso particular.' 
    },
    { 
      q: '¿Cómo comparo los planes?', 
      a: 'Podés utilizar nuestro comparador online ingresando tu edad y zona de residencia. Te mostraremos una tabla detallada con precios, cartilla médica, sanatorios y nivel de cobertura de cada plan para que puedas tomar una decisión informada fácilmente.' 
    },
  ];

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark font-display text-[#0d141b] antialiased">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#1a2632] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
        <div className="absolute right-0 top-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl filter dark:bg-primary/5"></div>
        <div className="absolute left-0 bottom-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl filter dark:bg-blue-900/20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#0d141b] dark:text-white sm:text-5xl md:text-6xl">
            Preguntas Frecuentes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 font-display">
            Todo lo que necesitás saber sobre tu futura cobertura médica, trámites y beneficios en un solo lugar.
          </p>
          <div className="mx-auto mt-10 max-w-lg">
            <div className="relative flex items-center w-full h-14 rounded-xl border border-gray-200 bg-white shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-gray-700 dark:bg-[#111a22]">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="peer h-full w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 dark:text-white border-none focus:ring-0" 
                id="search" 
                placeholder="Buscar una pregunta..." 
                type="text"
              />
              <div className="pr-2">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: FAQ & Sidebar */}
      <main className="flex-grow py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-2 font-display">Temas Populares</h2>
                <p className="text-gray-600 dark:text-gray-400 font-display">Las consultas más comunes de nuestros usuarios.</p>
              </div>

              {/* Accordions */}
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <details 
                    key={i} 
                    className="group rounded-xl border border-gray-200 bg-white p-1 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-[#1a2632] open:border-primary/50 dark:open:border-primary/50"
                    open={i === 0}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 outline-none focus:bg-gray-50 dark:focus:bg-white/5 rounded-lg list-none">
                      <h3 className="text-base font-bold text-[#0d141b] dark:text-white group-hover:text-primary transition-colors font-display">
                        {faq.q}
                      </h3>
                      <span className="material-symbols-outlined text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 font-display">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="mt-10 lg:col-span-4 lg:mt-0">
              <div className="sticky top-24 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 dark:bg-[#1a2632] dark:ring-gray-700">
                <div className="relative bg-primary px-6 py-8 text-center text-white">
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-50"></div>
                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-white/20"></div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/20"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <span className="material-symbols-outlined text-3xl">support_agent</span>
                    </div>
                    <h3 className="text-xl font-bold font-display">¿Todavía tenés dudas?</h3>
                    <p className="mt-2 text-sm text-blue-100 font-display">Nuestros expertos están listos para ayudarte a elegir el plan perfecto para vos.</p>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] hover:shadow-md">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hablá con un asesor
                  </button>
                  <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400 font-display">
                    Respuesta inmediata de Lu a Vie de 9 a 18hs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Partners Trust Section */}
      <section className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-[#1a2632]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h4 className="mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-display">
            Trabajamos con las mejores prepagas del país
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:gap-8">
            {prepagas.map((p) => (
              <div 
                key={p.name} 
                className={`h-10 w-auto min-w-[120px] px-5 py-2 rounded flex items-center justify-center shadow-sm transition-transform hover:scale-105 ${p.border ? 'border border-slate-200' : ''}`}
                style={{ backgroundColor: p.color }}
              >
                <span className="text-[9px] font-black uppercase tracking-tight" style={{ color: p.textColor }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
