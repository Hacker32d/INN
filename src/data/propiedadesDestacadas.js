const imagenes = import.meta.glob('@/img/**/*', { eager: true, import: 'default' });
const getAsset = (path) => imagenes[`/src/img/${path}`];

export const PROPIEDADES_DESTACADAS = [
  {
    id: 'doral-sueno',
    titulo: 'Modelo Sueño',
    origen: 'Ciudad El Doral',
    precioRef: '3 Hab • 2.5 Baños',
    ruta: '/el-doral/casa4',
    img: getAsset('ElDoral/sueno/casa (4).jpeg'),
  },
  {
    id: 'doral-promesa',
    titulo: 'Modelo Promesa',
    origen: 'Ciudad El Doral',
    precioRef: '3 Hab • 2 Baños',
    ruta: '/el-doral/casa2',
    img: getAsset('ElDoral/promesa/casa (2).jpeg'),
  },
  {
    id: 'doral-estrella',
    titulo: 'Modelo Estrella',
    origen: 'Ciudad El Doral',
    precioRef: '3 Hab • 2 Baños',
    ruta: '/el-doral/casa3',
    img: getAsset('ElDoral/estrella/casa (3).jpeg'),
  },
  {
    id: 'bethel-mod1',
    titulo: 'Vivienda Bethel Mod. 1',
    origen: 'Urbanización Bethel',
    precioRef: 'Lotes y Construcción',
    ruta: '/bethel',
    img: getAsset('Bethel/casa1.jpeg'),
  },
  {
    id: 'lapaz-mod7',
    titulo: 'Residencial La Paz Mod. 7',
    origen: 'Residencial La Paz',
    precioRef: 'Lanzamiento Exclusivo',
    ruta: '/la-paz',
    img: getAsset('La Paz/la paz (7).jpeg'),
  },
];