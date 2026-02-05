
import React, { useState } from 'react';
import { ViewState } from '../types';
import { Logo, ARG_PROVINCES } from '../constants';

interface Props {
  currentStep: ViewState;
  navigate: (view: ViewState) => void;
  setQuoteData: (data: any) => void;
  quoteData: any;
}

const MONO_CATEGORIES = [
  { cat: 'A', limit: 'Ingresos hasta $6.45M' },
  { cat: 'B', limit: 'Ingresos hasta $9.45M' },
  { cat: 'C', limit: 'Ingresos hasta $13.25M' },
  { cat: 'D', limit: 'Ingresos hasta $16.45M' },
  { cat: 'E', limit: 'Ingresos hasta $19.35M' },
  { cat: 'F', limit: 'Ingresos hasta $24.25M' },
  { cat: 'G', limit: 'Ingresos hasta $29.00M' },
  { cat: 'H', limit: 'Ingresos hasta $44.00M' },
  { cat: 'I', limit: 'Ingresos hasta $49.25M' },
  { cat: 'J', limit: 'Ingresos hasta $56.40M' },
  { cat: 'K', limit: 'Ingresos hasta $68.00M' },
];

const QuoteFlow: React.FC<Props> = ({ currentStep, navigate, setQuoteData, quoteData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '30',
    whatsapp: '',
    email: '',
    province: 'CABA',
    zipCode: '',
    location: '',
    hasSpouse: false,
    spouseAge: '30',
    spouseIncome: '0',
    unifyAportes: false,
    childrenCount: 0,
    childrenAges: [] as string[],
    workStatus: 'dependency',
    monotributoCat: 'A',
    monthlyIncome: '1500000',
    maxBudget: '150000',
    comments: '',
    privacyAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Helper para formatear el número de WhatsApp visualmente
  const formatWhatsApp = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  };

  const updateField = (field: string, value: any) => {
    let finalValue = value;
    
    // Si es WhatsApp, aplicamos máscara visual
    if (field === 'whatsapp') {
      finalValue = formatWhatsApp(value);
    }

    setFormData(prev => ({ ...prev, [field]: finalValue }));
    
    // Limpiar error en tiempo real
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 'QUOTE_STEP_1') {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'El nombre y apellido es obligatorio';
      }
      
      if (!formData.age.trim()) {
        newErrors.age = 'La edad es obligatoria';
      } else if (parseInt(formData.age) < 18 || parseInt(formData.age) > 100) {
        newErrors.age = 'Edad inválida (18-100)';
      }
      
      const cleanWhatsapp = formData.whatsapp.replace(/\D/g, '');
      if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = 'El WhatsApp es obligatorio';
      } else if (cleanWhatsapp.length < 10) {
        newErrors.whatsapp = 'Mínimo 10 dígitos numéricos';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'El email es obligatorio';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Formato de email inválido';
      }
    }
    
    if (currentStep === 'QUOTE_STEP_2') {
      if (!formData.province.trim()) {
        newErrors.province = 'La provincia es obligatoria';
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'El código postal es obligatorio';
      }
      if (!formData.location.trim()) {
        newErrors.location = 'La localidad es obligatoria';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep === 'QUOTE_STEP_1') navigate('QUOTE_STEP_2');
    else if (currentStep === 'QUOTE_STEP_2') navigate('QUOTE_STEP_3');
    else if (currentStep === 'QUOTE_STEP_3') navigate('QUOTE_STEP_4');
    else if (currentStep === 'QUOTE_STEP_4') {
      navigate('QUOTE_PROCESSING');
      setQuoteData(formData);
      setTimeout(() => navigate('QUOTE_RESULTS'), 3000);
    }
  };

  const handleBack = () => {
    if (currentStep === 'QUOTE_STEP_4') navigate('QUOTE_STEP_3');
    else if (currentStep === 'QUOTE_STEP_3') navigate('QUOTE_STEP_2');
    else if (currentStep === 'QUOTE_STEP_2') navigate('QUOTE_STEP_1');
    else navigate('HOME');
  };

  const setChildrenCount = (count: number) => {
    const newCount = Math.max(0, Math.min(10, count));
    const currentAges = [...formData.childrenAges];
    if (newCount > currentAges.length) {
      for (let i = currentAges.length; i < newCount; i++) currentAges.push('');
    } else if (newCount < currentAges.length) {
      currentAges.length = newCount;
    }
    updateField('childrenCount', newCount);
    updateField('childrenAges', currentAges);
  };

  const updateChildAge = (index: number, age: string) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = age;
    updateField('childrenAges', newAges);
  };

  const getStepProgress = () => {
    switch(currentStep) {
      case 'QUOTE_STEP_1': return { p: 25, n: 1 };
      case 'QUOTE_STEP_2': return { p: 50, n: 2 };
      case 'QUOTE_STEP_3': return { p: 75, n: 3 };
      case 'QUOTE_STEP_4': return { p: 95, n: 4 };
      default: return { p: 0, n: 0 };
    }
  };

  if (currentStep === 'QUOTE_PROCESSING') {
    return (
      <main className="flex-grow flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[600px] flex flex-col items-center gap-12 animate-in fade-in duration-500">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="relative size-48">
              <div className="absolute inset-0 rounded-full border-[8px] border-primary/10"></div>
              <div className="absolute inset-0 rounded-full border-[8px] border-t-primary border-r-primary/50 border-b-transparent border-l-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl font-black text-primary font-display">85%</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-primary-dark dark:text-white font-display">
              Estamos analizando tu perfil...
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm font-display leading-relaxed">
              Buscamos entre más de 50 planes el que mejor se adapte a tus necesidades y presupuesto mensual.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const { p: progress, n: stepNumber } = getStepProgress();

  return (
    <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-16 px-4 sm:px-6 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-[640px] flex flex-col gap-8">
        
        {/* Progress Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-end font-display">
            <p className="text-slate-900 dark:text-white text-base font-bold">
              Paso {stepNumber} de 4
            </p>
            <p className="text-primary text-sm font-bold">
              {progress}% completado
            </p>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-soft border border-slate-100 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Paso 1: Datos Personales */}
          {currentStep === 'QUOTE_STEP_1' && (
            <>
              <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-display">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Información de Contacto</h1>
                <p className="text-slate-500 dark:text-slate-400">Completá tus datos para recibir tu cotización personalizada.</p>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-6 font-display">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      Nombre y Apellido <span className="text-red-500">*</span>
                    </span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">person</span>
                      <input 
                        autoFocus
                        value={formData.fullName} 
                        onChange={e => updateField('fullName', e.target.value)}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-slate-900 border ${errors.fullName ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                        placeholder="Ej: Juan Pérez" type="text"
                      />
                    </div>
                    {errors.fullName && <span id="fullName-error" className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.fullName}</span>}
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      Edad <span className="text-red-500">*</span>
                    </span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">cake</span>
                      <input 
                        type="number" 
                        value={formData.age} 
                        onChange={e => updateField('age', e.target.value)}
                        aria-invalid={!!errors.age}
                        className={`w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-slate-900 border ${errors.age ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                        placeholder="30"
                      />
                    </div>
                    {errors.age && <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.age}</span>}
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      WhatsApp <span className="text-red-500">*</span>
                    </span>
                    <div className="flex items-stretch rounded-lg shadow-sm font-display">
                      <div className={`bg-green-50 dark:bg-green-900/20 border ${errors.whatsapp ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} border-r-0 rounded-l-lg px-3 flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-[#25D366] text-xl">chat</span>
                      </div>
                      <input 
                        value={formData.whatsapp} 
                        onChange={e => updateField('whatsapp', e.target.value)}
                        aria-invalid={!!errors.whatsapp}
                        className={`flex-1 h-12 px-4 bg-white dark:bg-slate-900 border ${errors.whatsapp ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-r-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                        placeholder="11 1234-5678" type="tel"
                      />
                    </div>
                    {errors.whatsapp ? (
                      <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.whatsapp}</span>
                    ) : (
                      <span className="text-slate-400 text-[9px]">Código de área + número (Ej: 11 1234-5678)</span>
                    )}
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      Email <span className="text-red-500">*</span>
                    </span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                      <input 
                        value={formData.email} 
                        onChange={e => updateField('email', e.target.value)}
                        aria-invalid={!!errors.email}
                        className={`w-full h-12 pl-12 pr-4 bg-slate-50 dark:bg-slate-900 border ${errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                        placeholder="nombre@ejemplo.com" type="email"
                      />
                    </div>
                    {errors.email && <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.email}</span>}
                  </label>
                </div>

                <div className="pt-4 flex flex-col gap-3 font-display">
                  <button 
                    onClick={handleNext} 
                    className="w-full bg-primary hover:bg-blue-600 text-white font-black text-lg h-14 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    Siguiente Paso
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button onClick={() => navigate('HOME')} className="text-sm font-bold text-slate-400 hover:text-primary transition-colors py-2 font-display">Volver al inicio</button>
                </div>
              </div>
            </>
          )}

          {/* Paso 2: Ubicación */}
          {currentStep === 'QUOTE_STEP_2' && (
            <>
              <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-display">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">¿De dónde sos?</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">Necesitamos tu ubicación para mostrarte los sanatorios cercanos.</p>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-6 font-display">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      Provincia <span className="text-red-500">*</span>
                    </span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                      <select 
                        value={formData.province} 
                        onChange={e => updateField('province', e.target.value)}
                        aria-invalid={!!errors.province}
                        className={`w-full h-12 pl-12 pr-10 appearance-none bg-white dark:bg-slate-900 border ${errors.province ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`}
                      >
                        <option value="">Selecciona...</option>
                        {ARG_PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                    </div>
                    {errors.province && <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.province}</span>}
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                      Código Postal <span className="text-red-500">*</span>
                    </span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">pin_drop</span>
                      <input 
                        value={formData.zipCode} 
                        onChange={e => updateField('zipCode', e.target.value)}
                        aria-invalid={!!errors.zipCode}
                        className={`w-full h-12 pl-12 pr-4 bg-white dark:bg-slate-900 border ${errors.zipCode ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                        placeholder="Ej: 1425" type="text"
                      />
                    </div>
                    {errors.zipCode && <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.zipCode}</span>}
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold flex items-center gap-1">
                    Localidad <span className="text-red-500">*</span>
                  </span>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">home_pin</span>
                    <input 
                      value={formData.location} 
                      onChange={e => updateField('location', e.target.value)}
                      aria-invalid={!!errors.location}
                      className={`w-full h-12 pl-12 pr-4 bg-white dark:bg-slate-900 border ${errors.location ? 'border-red-500 ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-600'} rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium font-display`} 
                      placeholder="Ej: Palermo" type="text"
                    />
                  </div>
                  {errors.location && <span className="text-red-500 text-[11px] font-bold animate-in fade-in slide-in-from-top-1">{errors.location}</span>}
                </label>
                
                <div className="pt-4 flex flex-col gap-4 font-display">
                  <button onClick={handleNext} className="w-full bg-primary hover:bg-blue-600 text-white font-black text-lg h-14 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                    Siguiente Paso
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button onClick={handleBack} className="text-sm font-bold text-slate-400 hover:text-primary transition-colors font-display">Volver atrás</button>
                </div>
              </div>
            </>
          )}

          {/* Paso 3: Composición Familiar */}
          {currentStep === 'QUOTE_STEP_3' && (
            <>
              <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-display">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Composición Familiar</h1>
                <p className="text-slate-500 dark:text-slate-400">¿Quiénes más estarán cubiertos en el plan?</p>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-8 font-display">
                <div className="flex flex-col gap-6">
                  <label className="flex items-center gap-4 cursor-pointer group bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                    <input 
                      type="checkbox" 
                      checked={formData.hasSpouse}
                      onChange={e => updateField('hasSpouse', e.target.checked)}
                      className="h-6 w-6 rounded border-slate-300 text-primary focus:ring-primary" 
                    />
                    <div className="flex-1">
                      <span className="text-slate-900 dark:text-white text-base font-bold">Sumar a mi pareja</span>
                      <p className="text-slate-500 text-xs">Aplica descuentos por grupo familiar.</p>
                    </div>
                  </label>
                  
                  {formData.hasSpouse && (
                    <div className="pl-6 flex flex-col gap-6 animate-in slide-in-from-top-2 fade-in border-l-2 border-primary/20 ml-6">
                      <label className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Edad de tu pareja</span>
                        <input 
                          type="number" 
                          value={formData.spouseAge} 
                          onChange={e => updateField('spouseAge', e.target.value)}
                          className="h-10 w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white font-bold px-4 focus:ring-2 focus:ring-primary/20"
                        />
                      </label>
                      
                      <label className="flex items-center gap-3 cursor-pointer group bg-blue-50/50 dark:bg-blue-900/10 p-3 rounded-xl border border-blue-100 dark:border-blue-900/20">
                        <input 
                          type="checkbox" 
                          checked={formData.unifyAportes}
                          onChange={e => updateField('unifyAportes', e.target.checked)}
                          className="h-5 w-5 rounded border-blue-300 text-primary focus:ring-primary" 
                        />
                        <div>
                          <span className="text-blue-900 dark:text-blue-200 text-sm font-bold">¿Unifican aportes?</span>
                          <p className="text-[10px] text-blue-600 dark:text-blue-400 leading-tight">Para derivar aportes de ambos a una misma cuenta.</p>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 font-display">
                  <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                    <div className="flex flex-col">
                      <span className="text-slate-900 dark:text-white font-bold">Hijos menores de 21</span>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Hasta 10 integrantes</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-1 rounded-lg border dark:border-slate-700">
                      <button onClick={() => setChildrenCount(formData.childrenCount - 1)} className="size-8 rounded bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 flex items-center justify-center font-black dark:text-white transition-colors">-</button>
                      <span className="font-bold w-4 text-center dark:text-white">{formData.childrenCount}</span>
                      <button onClick={() => setChildrenCount(formData.childrenCount + 1)} className="size-8 rounded bg-primary text-white flex items-center justify-center font-black transition-transform active:scale-90">+</button>
                    </div>
                  </div>
                  
                  {formData.childrenCount > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl animate-in fade-in border dark:border-slate-700">
                      {formData.childrenAges.map((age, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hijo {i+1}</span>
                          <input 
                            type="number" 
                            value={age} 
                            onChange={e => updateChildAge(i, e.target.value)}
                            className="h-10 w-full rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 font-bold text-center dark:text-white focus:ring-2 focus:ring-primary/20"
                            placeholder="Edad"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex flex-col gap-4 font-display">
                  <button onClick={handleNext} className="w-full bg-primary hover:bg-blue-600 text-white font-black text-lg h-14 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                    Siguiente Paso
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button onClick={handleBack} className="text-sm font-bold text-slate-400 hover:text-primary transition-colors font-display">Volver atrás</button>
                </div>
              </div>
            </>
          )}

          {/* Paso 4: Datos Laborales e Ingresos */}
          {currentStep === 'QUOTE_STEP_4' && (
            <>
              <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 font-display">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Perfil Económico</h1>
                <p className="text-slate-500 dark:text-slate-400">¿Cuál es tu situación laboral y nivel de ingresos?</p>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-8 font-display">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <label className="flex flex-col gap-2 font-display">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Situación Laboral</span>
                    <div className="relative">
                      <select 
                        value={formData.workStatus} 
                        onChange={e => updateField('workStatus', e.target.value)}
                        className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold px-4 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none transition-all"
                      >
                        <option value="dependency">Relación de dependencia</option>
                        <option value="monotributo">Monotributista</option>
                        <option value="private">Particular / Autónomo</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </label>

                  {formData.workStatus === 'monotributo' ? (
                    <label className="flex flex-col gap-2 font-display animate-in fade-in zoom-in-95 duration-300">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Categoría Monotributo</span>
                      <div className="relative">
                        <select 
                          value={formData.monotributoCat} 
                          onChange={e => updateField('monotributoCat', e.target.value)}
                          className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold px-4 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none transition-all"
                        >
                          {MONO_CATEGORIES.map(c => (
                            <option key={c.cat} value={c.cat}>Categoría {c.cat} ({c.limit})</option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">list</span>
                      </div>
                    </label>
                  ) : (
                    <label className="flex flex-col gap-2 font-display animate-in fade-in zoom-in-95 duration-300">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Remuneración Bruta Titular</span>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                        <input 
                          type="number" 
                          value={formData.monthlyIncome} 
                          onChange={e => updateField('monthlyIncome', e.target.value)}
                          className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold pl-8 pr-4 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                          placeholder="1500000"
                        />
                      </div>
                    </label>
                  )}

                  {formData.hasSpouse && (
                    <label className="flex flex-col gap-2 font-display animate-in fade-in zoom-in-95 duration-300 md:col-span-2">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Remuneración Bruta Cónyuge</span>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                        <input 
                          type="number" 
                          value={formData.spouseIncome} 
                          onChange={e => updateField('spouseIncome', e.target.value)}
                          className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold pl-8 pr-4 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                          placeholder="Ej: 1200000"
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 italic">Indica el sueldo bruto de tu pareja para calcular la unificación de aportes.</p>
                    </label>
                  )}
                </div>

                <div className="flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-end mb-2 font-display">
                    <div>
                      <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Presupuesto para cuota</label>
                      <p className="text-xs text-slate-500">¿Cuánto estás dispuesto a invertir en tu salud?</p>
                    </div>
                    <div className="bg-primary text-white px-4 py-2 rounded-xl font-black text-lg shadow-lg shadow-primary/20 transition-all">
                      ${Number(formData.maxBudget).toLocaleString()}
                    </div>
                  </div>
                  <div className="relative flex items-center h-10">
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="5000"
                      value={formData.maxBudget} 
                      onChange={e => updateField('maxBudget', e.target.value)}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">
                    <span>$50.000</span>
                    <span>$1.000.000</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-display">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-slate-400">rate_review</span>
                    Aclaraciones o Comentarios para el asesor
                  </label>
                  <textarea 
                    value={formData.comments}
                    onChange={e => updateField('comments', e.target.value)}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none dark:text-white"
                    rows={3}
                    placeholder="Escribí aquí cualquier detalle adicional importante..."
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col gap-4 font-display">
                  <button onClick={handleNext} className="w-full bg-primary hover:bg-blue-600 text-white font-black text-lg h-14 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                    Cotizar mi Plan
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button onClick={handleBack} className="text-sm font-bold text-slate-400 hover:text-primary transition-colors font-display">Volver atrás</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default QuoteFlow;
