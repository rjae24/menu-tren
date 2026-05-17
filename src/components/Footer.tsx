import { Clock, MapPin, Phone, Camera, ShieldCheck } from 'lucide-react';
import { INFO_LOCAL } from '../data';
import logo from '../../img/logo-EL_TREN.png.png';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-12 pb-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-stripes-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-zinc-900 text-center md:text-left">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg border border-zinc-800 overflow-hidden">
                <img src={logo} alt="El Tren Fast Food Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-oswald text-2xl font-bold tracking-wider text-white uppercase flex flex-col items-start leading-none">
                <span>El Tren</span>
                <span className="text-orange-500 text-sm">Fast Food</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              {INFO_LOCAL.eslogan} Conectando el auténtico sabor urbano con ingredientes premium y atención de primera.
            </p>
          </div>

          {/* Schedule Col */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
            <h4 className="font-oswald font-bold text-white uppercase tracking-wider text-base flex items-center gap-1.5 text-orange-500">
              <Clock className="w-4 h-4" /> Horario de Estación
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm font-medium">
              {INFO_LOCAL.horario}
            </p>
            <span className="inline-block text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
              🟢 Cocina en Servicio
            </span>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-center md:items-start space-y-2.5 text-sm">
            <h4 className="font-oswald font-bold text-white uppercase tracking-wider text-base flex items-center gap-1.5 text-orange-500">
              <MapPin className="w-4 h-4" /> Ubicación & Contacto
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm">
              {INFO_LOCAL.direccion}
            </p>
            <div className="flex items-center space-x-4 pt-1">
              <a
                href={`https://wa.me/${INFO_LOCAL.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-xs font-semibold text-orange-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{INFO_LOCAL.telefono}</span>
              </a>
              <a
                href={`https://instagram.com/${INFO_LOCAL.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-xs font-semibold text-pink-400 hover:text-pink-500 transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{INFO_LOCAL.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex flex-col space-y-1 sm:text-left text-center">
            <div className="flex items-center space-x-1 justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>Menú Digital Interactivo • Single Page Application (SPA)</span>
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              Diseñado por Roberto Arrieche, contacto del programador <a href="https://wa.me/584126796865" target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline">+58 4126796865</a>
            </div>
          </div>
          
          <div className="text-center sm:text-right">
            <span>&copy; {new Date().getFullYear()} El Tren Fast Food. Todos los derechos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
