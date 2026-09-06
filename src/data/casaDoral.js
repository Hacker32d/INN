// src/data/casaDoral.js
const imagenesDoral = import.meta.glob('@/img/ElDoral/**/*', { eager: true, import: 'default' });
const getDoralImg = (path) => imagenesDoral[`/src/img/ElDoral/${path}`];

export const CASAS_DORAL = {
  promesa: {
    id: 'casa2',
    slug: 'promesa',
    nombre: 'Modelo Promesa',
    subtitulo: 'Generosidad en espacio y diseño armónico para la familia',
    precio: '$38,000.00',
    cuotaAprox: 'U$195.00 / mes',
    areaLote: '226.97 vr²',
    areaConstruccion: '56.43 m²',
    habitaciones: 3,
    banos: 2,
    estacionamiento: '1 Vehículo',
    descripcion:
      'Descubre el encanto incomparable del Modelo Promesa, una residencia que destaca por su generosidad en espacio y su cuidado diseño. Con una impresionante área de construcción de 56.43 metros cuadrados y un extenso terreno de 226.97 varas cuadradas, esta casa se posiciona como una de las más amplias y acogedoras de la zona.',
    caracteristicas: [
      'Concreto monolítico sismorresistente',
      'Tecnología constructiva Blok-On (anti-humedad)',
      'Abastecimiento propio e ininterrumpido de agua potable',
      'Planta de tratamiento de aguas residuales',
      'Calles de concreto hidráulico y áreas verdes recreativas',
      'Vigilancia privada las 24 horas con garita de control',
    ],
    galeria: [
      { src: getDoralImg('promesa/casa (2).jpeg') || getDoralImg('promesa/casa (2).webp'), titulo: 'Fachada Principal' },
      { src: getDoralImg('promesa/casa (1).jpg') || getDoralImg('promesa/casa (1).webp'), titulo: 'Vista Frontal' },
      { src: getDoralImg('promesa/casa (4).jpg'), titulo: 'Sala - Comedor' },
      { src: getDoralImg('promesa/casa (3).jpg'), titulo: 'Distribución Interior' },
      { src: getDoralImg('promesa/casa (7).jpg'), titulo: 'Área de Cocina' },
      { src: getDoralImg('promesa/casa (6).jpg'), titulo: 'Dormitorio' },
      { src: getDoralImg('promesa/casa (5).jpg'), titulo: 'Servicio Sanitario' },
      { src: getDoralImg('promesa/casa-modelo-promesa.png'), titulo: 'Plano Arquitectónico' },
    ].filter((item) => item.src),
  },

  estrella: {
    id: 'casa3',
    slug: 'estrella',
    nombre: 'Modelo Estrella',
    subtitulo: 'Espaciosa, moderna y diseñada para superar expectativas',
    precio: '$42,500.00',
    cuotaAprox: 'U$220.00 / mes',
    areaLote: '226.97 vr²',
    areaConstruccion: '85.85 m²',
    habitaciones: 3,
    banos: 2,
    estacionamiento: '1 Vehículo',
    descripcion:
      'El Modelo Estrella en Ciudad El Doral es una opción espaciosa y encantadora que superará tus expectativas. Con 85.85 metros cuadrados de construcción y 226.97 varas cuadradas de terreno, ofrece tres habitaciones y dos baños, perfecto para toda la familia.',
    caracteristicas: [
      'Estructura de concreto monolítico sismorresistente',
      'Tecnología Blok-On contra humedad y filtraciones',
      'Distribución amplia de tres habitaciones y dos baños',
      'Calles de concreto hidráulico y alumbrado público',
      'Seguridad continua 24/7 en comunidad cerrada',
    ],
    galeria: [
      { src: getDoralImg('estrella/casa (3).jpeg') || getDoralImg('estrella/casa (3).webp'), titulo: 'Fachada Principal' },
      { src: getDoralImg('estrella/casa (1).jpeg') || getDoralImg('estrella/casa (1).webp'), titulo: 'Vista Lateral' },
      { src: getDoralImg('estrella/casa (2).jpeg') || getDoralImg('estrella/casa (2).webp'), titulo: 'Distribución Interior' },
    ].filter((item) => item.src),
  },

  sueno: {
    id: 'casa4',
    slug: 'sueno',
    nombre: 'Modelo Sueño',
    subtitulo: 'El modelo insignia: máximo confort, espacio y elegancia',
    precio: '$48,000.00',
    cuotaAprox: 'U$255.00 / mes',
    areaLote: '226.97 vr²',
    areaConstruccion: '73.48 m²',
    habitaciones: 3,
    banos: 2,
    estacionamiento: '2 Vehículos',
    descripcion:
      'El Modelo Sueño en Ciudad El Doral es una verdadera joya que superará tus expectativas. Con 73.48 metros cuadrados de construcción y 226.97 varas cuadradas de terreno, es una de las opciones más espaciosas en la zona. Ofrece tres habitaciones y dos baños, ideal para toda la familia.',
    caracteristicas: [
      'Concreto monolítico de alto estándar con anclaje indeformable',
      'Tecnología aislante Blok-On',
      'Dormitorio principal amplio y dos habitaciones secundarias',
      'Servicios básicos continuos con pozo propio de agua potable',
      'Áreas verdes comunales y zona comercial integrada',
    ],
    galeria: [
      { src: getDoralImg('sueno/casa (4).jpeg') || getDoralImg('sueno/casa (4).webp'), titulo: 'Fachada Principal' },
      { src: getDoralImg('sueno/Maqueta-Sueno.jpg'), titulo: 'Maqueta del Modelo' },
      { src: getDoralImg('sueno/sueno.jpg'), titulo: 'Vista Arquitectónica' },
    ].filter((item) => item.src),
  },

  brisa: {
    id: 'casa5',
    slug: 'brisa',
    nombre: 'Modelo Brisa',
    subtitulo: 'Confort funcional y diseño ergonómico para empezar tu hogar',
    precio: '$34,900.00',
    cuotaAprox: 'U$178.00 / mes',
    areaLote: '226.97 vr²',
    areaConstruccion: '51.36 m²',
    habitaciones: 2,
    banos: 1,
    estacionamiento: '1 Vehículo',
    descripcion:
      'El Modelo Brisa en Ciudad El Doral es una auténtica joya que sin duda superará tus expectativas. Con 51.36 metros cuadrados de construcción y un terreno de 226.97 varas cuadradas, se presenta como una de las opciones más espaciosas y atractivas de la zona. Este modelo ha sido diseñado para ofrecer el máximo confort y funcionalidad, haciendo que cada rincón de la casa sea útil y acogedor.',
    caracteristicas: [
      'Dos habitaciones amplias y luminosas para descanso y privacidad',
      'Sistema constructivo de concreto monolítico sismorresistente',
      'Tecnología eficiente de muros Blok-On',
      'Terreno amplio de 226.97 vr² con espacio para patio',
      'Abastecimiento de agua independiente y seguridad 24 horas',
    ],
    galeria: [
      { src: getDoralImg('brisa/casa (5).jpeg') || getDoralImg('brisa/casa (5).webp'), titulo: 'Fachada Principal' },
      { src: getDoralImg('brisa/casa (1).jpeg') || getDoralImg('brisa/casa (1).webp'), titulo: 'Vista de Acceso' },
      { src: getDoralImg('brisa/casa (2).jpeg') || getDoralImg('brisa/casa (2).webp'), titulo: 'Entorno Residencial' },
    ].filter((item) => item.src),
  },
};

CASAS_DORAL.casa2 = CASAS_DORAL.promesa;
CASAS_DORAL.casa3 = CASAS_DORAL.estrella;
CASAS_DORAL.casa4 = CASAS_DORAL.sueno;
CASAS_DORAL.casa5 = CASAS_DORAL.brisa;