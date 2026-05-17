import { Flame, Clock, Sparkles } from 'lucide-react';
import { MenuItem } from '../data';

interface MenuItemCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onSelect }: MenuItemCardProps) => {

  return (
    <div 
      onClick={() => onSelect(item)}
      className="group relative bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between cursor-pointer"
    >
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between relative">
        
        {/* Top Badges */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-2">
            {item.tag ? (
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-orange-600 to-amber-600 text-black font-extrabold text-[10px] uppercase tracking-wider rounded shadow-md font-oswald flex items-center gap-1">
                {item.tag}
              </span>
            ) : item.popular ? (
              <span className="px-2.5 py-0.5 bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider rounded shadow-md font-oswald flex items-center gap-1">
                <Flame className="w-3 h-3 text-black" /> Favorito
              </span>
            ) : null}

            {item.tiempoPrep && (
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] font-medium rounded border border-zinc-700 flex items-center gap-1">
                <Clock className="w-3 h-3 text-orange-400" /> {item.tiempoPrep}
              </span>
            )}
          </div>
        </div>

        {/* Content Info */}
        <div>
          <h3 className="font-oswald text-xl font-bold tracking-tight text-white group-hover:text-orange-500 transition-colors uppercase mb-1.5">
            {item.nombre}
          </h3>
          
          <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 font-light">
            {item.descripcion}
          </p>

          {item.detalles && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.detalles.map((det, i) => (
                <span key={i} className="text-[10px] bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700">
                  {det}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section: Price & Action */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-lg font-black font-oswald text-white tracking-tight glow-orange">
              ${item.precio.toFixed(2)}
            </span>
          </div>

          <span className="text-xs font-semibold text-orange-500 group-hover:underline flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Detalles
          </span>
        </div>
      </div>
    </div>
  );
};
