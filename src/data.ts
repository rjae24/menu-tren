import img1 from '../img/WhatsApp Image 2026-05-16 at 11.42.17 PM (1).jpeg';
import img2 from '../img/WhatsApp Image 2026-05-16 at 11.42.17 PM (2).jpeg';
import img3 from '../img/WhatsApp Image 2026-05-16 at 11.42.17 PM.jpeg';
import img4 from '../img/WhatsApp Image 2026-05-16 at 11.42.18 PM (1).jpeg';
import img5 from '../img/WhatsApp Image 2026-05-16 at 11.42.18 PM (3).jpeg';
import logo from '../img/logo-EL_TREN.png.png';

export interface MenuItem {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  popular?: boolean;
  tag?: string;
  detalles?: string[];
  tiempoPrep?: string;
}

export interface CategoriaMenu {
  id: string;
  categoria: string;
  icono: string;
  subtitulo: string;
  items: MenuItem[];
}

export const MENU_DATA: CategoriaMenu[] = [
  {
    id: "pepitos",
    categoria: "Pepitos",
    icono: "Sandwich",
    subtitulo: "El ícono del Street Food. Pan canilla suave gratinado con abundantes carnes, lluvia de papas y salsas.",
    items: [
      {
        id: "pep-1",
        nombre: "Lomito",
        precio: 16.0,
        descripcion: "Una avalancha de sabor: exquisitos cortes de lomito premium salteados en su jugo, lluvia de papas crocantes, baño de triple queso y nuestras salsas secretas que te harán agua la boca.",
        imagen: img4,
        popular: true,
        tag: "👑 Premium Gourmet",
        tiempoPrep: "15 min"
      },
      {
        id: "pep-2",
        nombre: "Pollo a la Plancha",
        precio: 13.0,
        descripcion: "Fajitas de pechuga de pollo doradas en su jugo, queso gouda derretido, maíz tierno, aguacate y nuestra salsa de ajo especial.",
        imagen: img4,
        tiempoPrep: "12 min"
      },
      {
        id: "pep-3",
        nombre: "Pollo Crispy",
        precio: 15.0,
        descripcion: "Trozos crujientes de pollo empanizado bañados en queso cheddar líquido, tocineta picada, papitas al hilo y salsa BBQ.",
        imagen: img4,
        popular: true,
        tag: "🔥 Súper Crunch",
        tiempoPrep: "14 min"
      },
      {
        id: "pep-4",
        nombre: "Mixto",
        precio: 15.0,
        descripcion: "La combinación perfecta de lomito de res y pollo salteados a fuego alto, tocineta crujiente, extra queso fundido y lluvia de queso pecorino.",
        imagen: img4,
        popular: true,
        tag: "🚂 El Más Buscado",
        tiempoPrep: "15 min"
      }
    ]
  },
  {
    id: "hamburguesas",
    categoria: "Hamburguesas",
    icono: "Utensils",
    subtitulo: "Pan brioche artesanal sellado a la plancha con mantequilla y vegetales frescos.",
    items: [
      {
        id: "burg-1",
        nombre: "Estación Bacon",
        precio: 8.0,
        descripcion: "Una obra maestra a la plancha: jugosa carne artesanal fundida en queso cheddar, coronada con tocineta ahumada crujiente y nuestro aderezo insignia.",
        imagen: img1,
        popular: true,
        tag: "🔥 Explosión de Sabor",
        tiempoPrep: "12-15 min"
      },
      {
        id: "burg-2",
        nombre: "Pollo a la Plancha",
        precio: 8.0,
        descripcion: "Filete de pechuga marinada a las finas hierbas, queso gouda derretido, lechuga romana crujiente y rodajas de tomate fresco.",
        imagen: img1,
        tiempoPrep: "10-12 min"
      },
      {
        id: "burg-3",
        nombre: "Pollo Crispy",
        precio: 8.0,
        descripcion: "Suprema de pollo empanizado extra crujiente estilo sureño, ensalada coleslaw cremosa y aderezo especial miel mostaza.",
        imagen: img1,
        popular: true,
        tag: "⭐ Crujiente",
        tiempoPrep: "12 min"
      },
      {
        id: "burg-4",
        nombre: "Doble",
        precio: 11.0,
        descripcion: "¡El poder de una locomotora en tu paladar! Doble ración de carne artesanal y queso fundido, entrelazados con tocineta crujiente y cebolla caramelizada.",
        imagen: img1,
        popular: true,
        tag: "🚂 Monstruosa",
        tiempoPrep: "15 min"
      },
      {
        id: "burg-5",
        nombre: "Mixta",
        precio: 11.0,
        descripcion: "El choque de dos mundos: suculenta carne de res y jugosa pechuga de pollo a la plancha abrazadas por tocineta dorada, huevo frito y una explosión de salsas.",
        imagen: img1,
        tiempoPrep: "15 min"
      },
      {
        id: "burg-6",
        nombre: "Chuleta Ahumada",
        precio: 8.0,
        descripcion: "Tierna chuleta de cerdo ahumada dorada a la parrilla, piña asada caramelizada con canela, queso mozzarella y lechuga.",
        imagen: img1,
        tag: "🍍 Toque Tropical",
        tiempoPrep: "12 min"
      }
    ]
  },
  {
    id: "pollo-broaster",
    categoria: "Pollo a la Broaster",
    icono: "Flame",
    subtitulo: "Receta secreta con un rebozado dorado y crujiente por fuera, extremadamente jugoso por dentro.",
    items: [
      {
        id: "broas-1",
        nombre: "Combo Pollo Crujiente",
        precio: 11.0,
        descripcion: "Una experiencia inigualable: presas doradas maceradas con nuestra receta secreta hasta alcanzar el crujido perfecto, servidas con papas fritas y nuestra ensalada coleslaw tradicional.",
        imagen: img2,
        popular: true,
        tag: "🍗 Favorito Familiar",
        tiempoPrep: "15 min"
      },
      {
        id: "broas-2",
        nombre: "Combo Familiar Broaster",
        precio: 20.0,
        descripcion: "El gran banquete de la estación: montañas de nuestro legendario pollo broaster extra crujiente, acompañadas de una ración titánica de papas fritas y mucha ensalada.",
        imagen: img2,
        tag: "⚡ Mega Combo",
        tiempoPrep: "18-20 min"
      }
    ]
  },
  {
    id: "tequenos-extras",
    categoria: "Tequeños y Extras",
    icono: "Sparkles",
    subtitulo: "Los acompañantes perfectos para arrancar el viaje con todo el sabor.",
    items: [
      {
        id: "extra-1",
        nombre: "Tequeños Clásicos",
        precio: 6.0,
        descripcion: "Auténticos deditos de masa suave y crujiente, desbordantes de queso llanero fundido y perfectos para bañar en nuestra salsa tártara artesanal.",
        imagen: img3,
        popular: true,
        tag: "⭐ Irresistibles",
        tiempoPrep: "8 min"
      },
      {
        id: "extra-2",
        nombre: "Nuggets de Pollo",
        precio: 4.0,
        descripcion: "Bocaditos celestiales de pollo dorados a la perfección, con un exterior crujiente que guarda todo el sabor, servidos con salsa barbacoa ahumada.",
        imagen: img3,
        tiempoPrep: "7 min"
      },
      {
        id: "extra-3",
        nombre: "Ración de papas",
        precio: 3.0,
        descripcion: "Papas rústicas cortadas y sazonadas al instante con sal marina y pimentón ahumado, doradas y servidas bien calientes.",
        imagen: img3,
        tiempoPrep: "6 min"
      }
    ]
  },

  {
    id: "ensaladas",
    categoria: "Ensaladas",
    icono: "Salad",
    subtitulo: "Frescura garantizada con ingredientes seleccionados diariamente para un balance delicioso.",
    items: [
      {
        id: "ens-1",
        nombre: "César Clásica",
        precio: 7.0,
        descripcion: "Lechuga romana fresca y crocante, crutones de pan artesanal al ajo, queso parmesano madurado reggiano y aderezo César casero.",
        imagen: img5,
        tiempoPrep: "8 min"
      },
      {
        id: "ens-2",
        nombre: "César con Pollo",
        precio: 10.0,
        descripcion: "Nuestra ensalada César clásica coronada con jugosas tiras de pechuga de pollo a la plancha recién hechas.",
        imagen: img5,
        popular: true,
        tag: "🥗 Fresca y Ligera",
        tiempoPrep: "10 min"
      },
      {
        id: "ens-3",
        nombre: "César con Lomito",
        precio: 11.0,
        descripcion: "Fajitas de tiernísimo lomito de res asadas al término perfecto sobre nuestra cama de ensalada César con lajas de parmesano.",
        imagen: img5,
        tiempoPrep: "12 min"
      }
    ]
  },
  {
    id: "bebidas",
    categoria: "Bebidas",
    icono: "Coffee",
    subtitulo: "Bebidas heladas para calmar la sed en la estación.",
    items: [
      {
        id: "beb-1",
        nombre: "Refresco",
        precio: 1.5,
        descripcion: "Coca-Cola, Chinotto o Frescolita servidos bien fríos en botella de vidrio de 355ml.",
        imagen: logo,
        tiempoPrep: "Al instante"
      },
      {
        id: "beb-2",
        nombre: "Refresco de lata",
        precio: 2.5,
        descripcion: "Lata de 355ml surtida: Coca-Cola Sabor Original, Zero, Sprite, Fanta o Frescolita.",
        imagen: logo,
        tiempoPrep: "Al instante"
      },
      {
        id: "beb-3",
        nombre: "Nestea",
        precio: 2.0,
        descripcion: "Tradicional té helado de limón Nestea preparado con mucho hielo y su toque perfecto de dulzor.",
        imagen: logo,
        popular: true,
        tag: "🍋 Refrescante",
        tiempoPrep: "Al instante"
      },
      {
        id: "beb-4",
        nombre: "Batidos",
        precio: 2.5,
        descripcion: "Jugos naturales espesos de fresa, parchita (maracuyá), mora o guanábana. Preparados en agua o leche.",
        imagen: logo,
        tiempoPrep: "5 min"
      },
      {
        id: "beb-5",
        nombre: "Cerveza Nacional",
        precio: 1.0,
        descripcion: "Cerveza helada estilo pilsen venezolana. Perfecta para acompañar tus hamburguesas y pepitos.",
        imagen: logo,
        popular: true,
        tag: "🍺 Heladísima",
        detalles: ["Polar Light", "Polar Negrita", "Zulia"],
        tiempoPrep: "Al instante"
      }
    ]
  }
];

export const INFO_LOCAL = {
  nombre: "El Tren Fast Food",
  eslogan: "¡Próxima estación: El Sabor Urbano!",
  direccion: "Calle 3, & Carrera 1, Barquisimeto 3001, Lara",
  horario: "Lunes a Domingo: 12:00 PM - 11:30 PM",
  telefono: "+58 424 5615311",
  whatsapp: "584245615311", // For direct whatsapp link
  instagram: "@eltrenbqto"
};
