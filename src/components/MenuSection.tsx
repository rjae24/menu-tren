import { Utensils, Flame, Sparkles, Sandwich, Salad, Coffee } from 'lucide-react';
import { CategoriaMenu, MenuItem } from '../data';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  category: CategoriaMenu;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection = ({ category, onSelectItem }: MenuSectionProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-6 h-6 text-orange-500" />;
      case 'Flame': return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-orange-500" />;
      case 'Sandwich': return <Sandwich className="w-6 h-6 text-orange-500" />;
      case 'Salad': return <Salad className="w-6 h-6 text-orange-500" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-orange-500" />;
      default: return <Utensils className="w-6 h-6 text-orange-500" />;
    }
  };

  if (!category.items || category.items.length === 0) return null;

  return (
    <div id={`category-${category.id}`} className="scroll-mt-36 pt-10 pb-6 border-b border-zinc-900 last:border-none">
      
      {/* Category Header Banner with Railway Industrial aesthetic */}
      <div className="flex items-center space-x-4 mb-3 border-l-4 border-orange-500 pl-4 py-1">
        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
          {getIcon(category.icono)}
        </div>
        <div>
          <h2 className="font-oswald text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white">
            {category.categoria}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-0.5">
            {category.subtitulo}
          </p>
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {category.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onSelect={onSelectItem}
          />
        ))}
      </div>

    </div>
  );
};
