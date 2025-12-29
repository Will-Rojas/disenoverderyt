export const siteData = {
  title: "R&T Diseño Verde",
  slogan: "Donde el verde es arte",
  phone: "+506 7014-5395",
  whatsapp: "https://wa.me/50670145395?text=Hola%20R%26T%20Dise%C3%B1o%20Verde%2C%20me%20gustar%C3%ADa%20pedir%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20jardiner%C3%ADa.",
  email: "info@rtdisenoverde.com",
  location: "Carrillos Alto de Poás, Alajuela",
  coverage: "Llegamos a las 7 provincias",

  // Configuración de Google Ads / Analytics
  googleAdsId: "AW-XXXXXXXXX",

  hero: {
    title: "Transformamos su espacio en un paraíso verde",
    subtitle: "Venta, instalación y mantenimiento de zacate en toda Costa Rica. Profesionalismo y calidad garantizada.",
    ctaWhatsApp: "Cotizar por WhatsApp",
    ctaProjects: "Ver Galería",
    image: "/img/hero-garden.jpg" // El usuario puede reemplazar esta con una ultrarealista
  },

  about: {
    title: "Experiencia en Paisajismo",
    text1: "R&T Diseño Verde nace en Carrillos Alto de Poás con un objetivo claro: ayudar a nuestros clientes a tener jardines bonitos, frescos y sanos, sin complicarse con el mantenimiento.",
    text2: "Trabajamos de forma directa, sin intermediarios, y conocemos muy bien el clima y los diferentes tipos de suelo del país. Ofrecemos cobertura nacional para llevar el mejor zacate a su hogar, empresa o propiedad recreativa.",
    image: "/img/about-garden.jpg",
    highlights: [
      "Atención personalizada y honesta.",
      "Asesoría profesional según su ubicación.",
      "Cobertura y logística en todo el país."
    ]
  },

  zacateTypes: [
    {
      id: "san-agustin",
      name: "Zacate San Agustín",
      ideal: "Sol fuerte",
      desc: "Ideal para sol fuerte, resistente y de color intenso.",
      advantages: "Resistente, cubre rápido, color verde intenso.",
      image: "/img/san-agustin.jpg"
    },
    {
      id: "dulce",
      name: "Zacate Dulce",
      ideal: "Sol y sombra ligera",
      desc: "Textura fina y suave, ideal para áreas residenciales con iluminación mixta.",
      advantages: "Suavidad al tacto y adaptabilidad.",
      image: "/img/zacate-dulce.jpg"
    },
    {
      id: "bermuda",
      name: "Zacate Bermuda",
      ideal: "Sol pleno",
      desc: "Variedad altamente resistente al tráfico y de rápida recuperación, perfecta para zonas deportivas o de mucho uso.",
      advantages: "Gran resistencia y rápida regeneración.",
      image: "/img/zacate-bermuda.jpg"
    },
    {
      id: "zoysia-toro",
      name: "Zoysia Toro",
      ideal: "Alta estética",
      desc: "Opción de alta estética y bajo mantenimiento. Muy densa y elegante.",
      advantages: "Crecimiento lento, requiere menos cortes.",
      image: "/img/zoysia-toro.jpg"
    },
    {
      id: "jengibrillo",
      name: "Jengibrillo",
      ideal: "Alto tránsito",
      desc: "Excelente para áreas de alto tránsito y bajo mantenimiento.",
      advantages: "Rústico y muy resistente.",
      image: "/img/jengibrillo.jpg"
    }
  ],

  services: [
    {
      id: "preparacion-pro",
      title: "Preparación",
      icon: "settings", // Se usará para mapear a Lucide icons
      desc: "Movimiento de tierra, nivelación y suministro de tierra vegetal.",
      items: ["Preparación técnica de suelo", "Suministro de tierra vegetal seleccionada", "Garantía de nivelación funcional"],
      category: "prep-design"
    },
    {
      id: "diseno-paisajismo",
      title: "Diseño y Paisajismo",
      icon: "pincel",
      desc: "Instalación de zacate y decoración con piedras (bola de río, blanca, roja, gris).",
      items: ["Piedras decorativas", "Diseño de senderos", "Instalación técnica"],
      category: "prep-design"
    },
    {
      id: "vivero-domicilio",
      title: "Vivero a domicilio",
      icon: "truck",
      desc: "Plantas ornamentales y frutales entregadas en su puerta.",
      items: ["Ornamentales", "Frutales", "Asesoría botánica"],
      category: "prep-design"
    },
    {
      id: "salud-verde",
      title: "Salud Verde",
      icon: "heart",
      desc: "Fertilización, deshierva y derrama de árboles.",
      items: ["Abonado orgánico", "Poda técnica", "Limpieza profunda"],
      category: "maintenance"
    },
    {
      id: "fumigacion-pet-friendly",
      title: "Fumigación Pet-Friendly",
      icon: "shield",
      desc: "Control de plagas con productos orgánicos seguros para sus mascotas.",
      items: ["Productos orgánicos", "Seguro para niños", "Control total"],
      category: "maintenance"
    }
  ],

  projects: [
    {
      title: "Parque Residencial León XIII",
      desc: "Instalación masiva de zacate San Agustín y paisajismo integral realizado en áreas recreativas.",
      before: "/img/Leon-XIII-Antes-1.jpg",
      after: "/img/Leon-XIII-despues-1.jpg"
    },
    {
      title: "Remodelación Residencial",
      desc: "Transformación completa de patio residencial con diseño de áreas verdes y ornato profesional.",
      before: "/img/casa-antes.jpeg",
      after: "/img/casa-despues.jpeg"
    }
  ]
};
