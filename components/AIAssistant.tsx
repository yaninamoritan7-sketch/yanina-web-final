
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '¡Hola! Soy el asistente virtual de Tu prepaga en un click. ¿En qué puedo ayudarte hoy con tu plan de salud?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres el asistente oficial de "Tu prepaga en un click", una plataforma argentina líder en comparación de medicina prepaga. 
          Tu objetivo es ayudar a los usuarios a entender conceptos de salud (copagos, cartilla, aportes, monotributo, derivación de aportes). 
          Responde de forma concisa, empática y profesional. Si el usuario pregunta por precios específicos, recuérdale que lo mejor es completar el flujo de cotización para obtener un presupuesto exacto y descuentos personalizados.`,
        }
      });

      const aiText = response.text || "Lo siento, tuve un pequeño inconveniente técnico. ¿Podrías repetirme tu consulta?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "En este momento no puedo procesar tu solicitud. Por favor, intentá de nuevo más tarde o contactanos por WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-white dark:bg-[#1a2634] w-[350px] sm:w-[380px] h-[550px] max-h-[80vh] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="bg-primary p-6 text-white flex justify-between items-start shadow-lg">
            <div className="flex gap-4 items-center">
              <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                <span className="material-symbols-outlined text-white text-3xl icon-fill">psychology</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest opacity-80">Asistente Virtual</span>
                <span className="font-black text-lg font-display">Tu prepaga en un click</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] font-bold opacity-90 uppercase tracking-tighter">En línea ahora</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="size-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined !text-xl">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50 dark:bg-background-dark/50 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 text-sm font-medium font-display shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-[1.5rem] rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-[1.5rem] rounded-tl-none'
                }`}>
                  {m.text}
                </div>
                <span className="text-[9px] mt-1 font-bold text-slate-400 uppercase tracking-widest px-1">
                  {m.role === 'user' ? 'Tú' : 'Asistente'}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start animate-pulse">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.5rem] rounded-tl-none flex gap-1.5 shadow-sm border border-slate-100 dark:border-white/5">
                  <span className="size-2 bg-primary rounded-full animate-bounce"></span>
                  <span className="size-2 bg-primary rounded-full animate-bounce delay-75"></span>
                  <span className="size-2 bg-primary rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="p-5 border-t dark:border-white/5 bg-white dark:bg-[#1a2634]">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta aquí..." 
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 dark:text-white placeholder:text-slate-400 font-display font-medium"
              />
              <button 
                onClick={handleSend} 
                disabled={!input.trim() || isLoading}
                className={`size-10 rounded-xl flex items-center justify-center transition-all ${
                  input.trim() && !isLoading ? 'bg-primary text-white shadow-lg' : 'text-slate-400 cursor-not-allowed'
                }`}
              >
                <span className="material-symbols-outlined !text-xl">send</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-3 font-bold uppercase tracking-widest font-display">
              Asistente potenciado por Inteligencia Artificial
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 px-5 py-3 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none font-display">
            ¿Dudas? Chatea con nuestra IA
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`size-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative ${
            isOpen ? 'bg-slate-800 text-white' : 'bg-slate-100 text-primary border-2 border-primary/20 shadow-primary/5'
          }`}
        >
          <span className={`material-symbols-outlined text-3xl transition-all duration-300 ${isOpen ? 'rotate-90' : 'icon-fill'}`}>
            {isOpen ? 'close' : 'psychology'}
          </span>
          {!isOpen && (
            <div className="absolute -top-1 -right-1 size-4 bg-red-500 text-[8px] font-black flex items-center justify-center rounded-full border-2 border-white dark:border-background-dark animate-bounce">
              1
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
