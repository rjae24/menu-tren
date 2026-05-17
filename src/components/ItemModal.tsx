import React from 'react';
import { X, Clock, Flame } from 'lucide-react';
import { MenuItem } from '../data';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-zinc-950 rounded-3xl border-2 border-zinc-800 shadow-2xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black border border-zinc-700 transition-all shadow-md"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto no-scrollbar flex-grow">
          {/* Header Badges */}
          <div className="p-6 pb-0 flex flex-wrap gap-2 items-center border-b border-zinc-900 pb-4 mb-2">
            {item.tag && (
              <span className="px-3 py-1 bg-orange-600 text-black font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg font-oswald">
                {item.tag}
              </span>
            )}
            {item.popular && !item.tag && (
              <span className="px-3 py-1 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg font-oswald flex items-center gap-1">
                <Flame className="w-3 h-3 text-black" /> Favorito
              </span>
            )}
            {item.tiempoPrep && (
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-full border border-zinc-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-400" /> {item.tiempoPrep}
              </span>
            )}
          </div>

          {/* Details & Customization */}
          <div className="p-6">
            
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-oswald text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {item.nombre}
                </h2>
                <span className="text-xs text-orange-500 font-mono font-medium tracking-wide">
                  Precio unitario: ${item.precio.toFixed(2)}
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
              {item.descripcion}
            </p>



          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-400 font-medium">Precio Regular:</span>
            <span className="font-oswald text-2xl font-black text-white glow-orange tracking-tight">
              ${item.precio.toFixed(2)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex-grow py-3.5 px-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-oswald text-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2"
          >
            <span>Volver al Menú</span>
          </button>
        </div>

      </div>
    </div>
  );
};
