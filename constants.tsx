
import React from 'react';

export const COLORS = {
  primary: '#137fec',
  primaryDark: '#0d215c',
  accent: '#00b8ff',
  success: '#22c55e',
  background: '#f6f7f8',
  dark: '#101922'
};

// --- CONFIGURA TUS DATOS AQUÍ ---
export const CONTACT_INFO = {
  whatsapp: "https://wa.me/message/SMBD2WWVCKJAM1", // Link directo de WhatsApp Business proporcionado
  email: "tuprepagaenunclick@gmail.com",
  instagram: "https://www.instagram.com/tuprepagaenunclick?igsh=Nzd1ZDBoeDZtcjds",
  facebook: "https://www.facebook.com/share/14SQoSWhjCM/",
  tiktok: "http://tiktok.com/@tu.prepaga.en.un",
  waDefaultMessage: "¡Hola! Vengo de la web y me gustaría recibir asesoramiento para contratar un plan de salud."
};

export const getWhatsAppLink = (message?: string) => {
  // Si el valor en CONTACT_INFO ya es una URL completa (como un link de mensaje de negocio), 
  // la usamos directamente ya que estos links manejan su propio mensaje predeterminado.
  if (CONTACT_INFO.whatsapp.startsWith('http')) {
    return CONTACT_INFO.whatsapp;
  }
  const text = encodeURIComponent(message || CONTACT_INFO.waDefaultMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`;
};

export const ARG_PROVINCES = [
  "CABA", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", 
  "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", 
  "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
];

export const isBusinessHours = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isWeekend = day === 0 || day === 6;
  return !isWeekend && hour >= 9 && hour < 18;
};

export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative flex items-center justify-center size-10 rounded-xl bg-[#137fec]/10 text-[#137fec]">
      <span className="material-symbols-outlined text-[24px]">smartphone</span>
      <div className="absolute -top-1 -right-1 size-5 bg-[#137fec] rounded-full flex items-center justify-center border-2 border-white dark:border-background-dark shadow-sm">
        <span className="material-symbols-outlined text-[12px] text-white font-black icon-fill">add</span>
      </div>
    </div>
    <h1 className="font-display font-bold text-xl tracking-tight text-[#0d141b] dark:text-white">
      Tu prepaga en un click
    </h1>
  </div>
);

export const PLANS = [
  {
    id: 'smg-20',
    name: 'SMG20',
    company: 'Swiss Medical',
    rating: 4.8,
    price: 145000,
    oldPrice: 168000,
    tags: ['Recomendado'],
    description: 'Ideal para quienes buscan cobertura completa en CABA y GBA sin copagos y con acceso a los mejores sanatorios.',
    color: '#d32f2f',
    sanatorios: 'Trinidad, Juncal, Suizo Argentina',
    sanatoriosFull: 'Suizo Argentina, Los Arcos, Agote, San Lucas',
    odontologia: 'General + Ortodoncia al 100%',
    odontologiaSub: 'Hasta 18 años incluido',
    optica: '1 Par de anteojos',
    opticaSub: 'Por año por persona',
    asistencia: 'Regional',
    asistenciaSub: 'Países limítrofes',
    asistenciaIcon: 'public',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVaz7QoEIWyiawavUXOePjN-Q2JH1MYYZcfcZJAPEXMKzxchNA31Y7GibE0qdpimnIodT6e0A4DCbpnjsl3ef7Lg7viAfmt86EWXzJnii_L_YbN-jIpuFEt8e1PAtveNzz4kMe0_GQ7OLWwNDABspq8W6PhAoXyj71_e4rFql5EjumPw6-KJBj0EPf6BhXGTeEncQQvkSXveG7nvZFoTJVZY2N_MsvUV3folp4jhO0aQJ7KWoXimFdQcddobbRcEV4wVk-VELm0bDw',
    recommended: true
  },
  {
    id: 'sancor-3000',
    name: 'Plan 3000',
    company: 'Sancor Salud',
    rating: 4.5,
    price: 135500,
    oldPrice: 155000,
    tags: ['Precio/Calidad'],
    description: 'Excelente red de prestadores en todo el país con una de las cartillas más amplias del mercado.',
    color: '#009688',
    sanatorios: 'Fleni, Mater Dei, Austral, Otamendi',
    sanatoriosFull: 'Fleni, Mater Dei, Hospital Austral, Otamendi',
    odontologia: 'Completa + Prótesis al 100%',
    odontologiaSub: 'Ortodoncia sin límite',
    optica: 'Cristales y Armazones',
    opticaSub: 'Cobertura 100% en red',
    asistencia: 'Internacional',
    asistenciaSub: 'Cobertura Mundial',
    asistenciaIcon: 'flight_takeoff',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg9ipxJz3ieje3-2bPoctvRbz-5Wn_SwZ5EJnelzNRnTde87CWmOFdQQfHUdwPVVZny-VAtIsjIjy8sMr0tANeDIWHejQHpED4W1JUxg1LFCTDk0_IDE8OoY-9gqzTDK-1siMAiaV4D_l9jsb2biOAG00pz6BM_nhO6mg4Ip6cJsV83UP-iKPw-b-pZm2B1AS60sOXqvI_r9s5yvCZskXjUxxuZDlLoMoVGq1JYJRgi4eeZ03PgKLhUxxz_a51U0It302P4OFeuW2Q',
    recommended: false
  }
];
