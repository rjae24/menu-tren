import { Utensils, Flame, Sparkles, Sandwich, Salad, Coffee } from 'lucide-react';
import { MENU_DATA } from '../data';

interface CategoryNavProps {
  activeSection: string;
}

export const CategoryNav = ({ activeSection }: CategoryNavProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4" />;
      case 'Salad': return <Salad className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const yOffset = -140; // Offset for navbar + sticky category nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-3.5 px-4 overflow-x-auto no-scrollbar transition-all">
      <div className="max-w-6xl mx-auto flex items-center space-x-2 sm:space-x-3 min-w-max">
        {MENU_DATA.map((cat) => {
          const isActive = activeSection === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleScroll(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-oswald tracking-wide text-sm font-semibold transition-all duration-200 cursor-pointer uppercase ${
                isActive
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-black font-extrabold shadow-lg shadow-orange-600/30 scale-105 border border-orange-500'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
              }`}
            >
              <span className={isActive ? 'text-black' : 'text-orange-500'}>
                {getIcon(cat.icono)}
              </span>
              <span>{cat.categoria}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
