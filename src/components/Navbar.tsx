import React from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { INFO_LOCAL } from '../data';
import logo from '../../img/logo-EL_TREN.png.png';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden border border-zinc-800">
            <img src={logo} alt="El Tren Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-oswald text-xl tracking-wider font-bold text-white group-hover:text-orange-500 transition-colors uppercase flex items-center gap-1.5">
              El Tren <span className="text-orange-500 font-normal text-sm px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">Fast Food</span>
            </span>
            <span className="text-xs text-zinc-400 font-medium tracking-tight hidden sm:block">
              {INFO_LOCAL.eslogan}
            </span>
          </div>
        </a>



        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          




          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${INFO_LOCAL.whatsapp}?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs transition-colors shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
          </a>

        </div>

      </div>
    </header>
  );
};
