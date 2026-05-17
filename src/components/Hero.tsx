import { forwardRef } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { INFO_LOCAL } from '../data';

import img1 from '../../img/WhatsApp Image 2026-05-16 at 11.42.17 PM (1).jpeg';
import img2 from '../../img/WhatsApp Image 2026-05-16 at 11.42.17 PM (2).jpeg';
import img4 from '../../img/WhatsApp Image 2026-05-16 at 11.42.18 PM (1).jpeg';

export const Hero = () => {

  return (
    <section className="relative overflow-hidden bg-zinc-950 border-b border-zinc-800 py-8 px-4 sm:px-6 bg-mesh-pattern">
      
      {/* Decorative gradient glowing orb */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 mb-6 shadow-md shadow-black/50">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Cocina Abierta & Listo para Ordenar</span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
            <Clock className="w-3 h-3 text-orange-500" /> Hoy hasta 11:30 PM
          </span>
        </div>

        {/* Industrial Stencil Title */}
        <h1 className="font-oswald text-4xl sm:text-6xl font-black tracking-tight uppercase text-white mb-4 leading-tight">
          El Sabor <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 glow-orange">Clandestino</span> de la Ciudad
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
          ¡Súbete al tren del sabor! Explora nuestro menú y prepárate para un viaje de puro placer urbano.
        </p>

        {/* Location Banner */}
        <div className="mt-8 flex flex-col items-center justify-center text-xs text-zinc-500 gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>{INFO_LOCAL.direccion}</span>
          </div>
        </div>

        {/* Decorative Image Row */}
        <div className="mt-12 flex items-center justify-center gap-4 overflow-hidden py-4 opacity-70 pointer-events-none">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden transform -rotate-12 shadow-2xl shadow-orange-500/10 border-4 border-zinc-900 opacity-80 hover:opacity-100 transition-opacity">
            <img src={img4} className="w-full h-full object-cover" alt="Pepito" />
          </div>
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20 border-4 border-zinc-800 z-10 hover:scale-105 transition-transform duration-500">
            <img src={img1} className="w-full h-full object-cover" alt="Hamburguesa" />
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden transform rotate-12 shadow-2xl shadow-orange-500/10 border-4 border-zinc-900 opacity-80 hover:opacity-100 transition-opacity">
            <img src={img2} className="w-full h-full object-cover" alt="Pollo" />
          </div>
        </div>

      </div>
    </section>
  );
};
