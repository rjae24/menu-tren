import React, { useState } from 'react';
import { MENU_DATA, MenuItem } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ItemModal } from './components/ItemModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);



  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-orange-500 selection:text-black">
      
      {/* Top sticky navbar */}
      <Navbar />

      {/* Hero Header */}
      <Hero />



      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 min-h-[50vh]">
        
        {MENU_DATA.map(category => (
          <MenuSection
            key={category.id}
            category={category}
            onSelectItem={setSelectedItem}
          />
        ))}

      </main>



      {/* Item Customization Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
