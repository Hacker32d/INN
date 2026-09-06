import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROPIEDADES_DESTACADAS } from '@/data/propiedadesDestacadas';

// Vite indexa automáticamente todas las fotos dentro de src/img/
const imagenes = import.meta.glob('@/img/**/*', { eager: true, import: 'default' });

// Función para obtener la URL compilada usando la ruta relativa interna
const getAsset = (path) => imagenes[`/src/img/${path}`];

function ProyectoCard({ proyecto }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
      {/* Contenedor Fotográfico */}
      <div className="relative md:w-1/2 h-72 md:h-auto min-h-[300px] overflow-hidden bg-slate-950">
        <img
          loading="lazy"
          src={proyecto.poster}
          alt={proyecto.titulo}
          onError={(e) => {
            e.target.src = '/img/casa.jpg';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
        />

        {/* Degradado y Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 flex gap-2">
          {proyecto.agotado ? (
            <span className="bg-rose-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              Agotado
            </span>
          ) : (
            <span className="bg-emerald-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              Disponible
            </span>
          )}
        </div>
      </div>

      {/* Contenido Descriptivo */}
      <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
            Proyecto Residencial
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {proyecto.titulo}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {proyecto.descripcion}
          </p>
        </div>

        <div>
          <Link
            to={proyecto.ruta}
            className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md ${
              proyecto.agotado
                ? 'bg-slate-100 text-slate-400 hover:bg-slate-200 pointer-events-none'
                : 'bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10'
            }`}
          >
            <span>{proyecto.agotado ? 'Sin Disponibilidad' : 'Ver Detalles del Proyecto'}</span>
            {!proyecto.agotado && <span>→</span>}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const proyectos = [
    {
      titulo: 'Urbanización San Miguel',
      agotado: true,
      descripcion:
        'Proyecto inmobiliario consolidado ubicado en una de las zonas de mayor crecimiento urbano y plusvalía en Managua, Nicaragua.',
      ruta: '/san-miguel',
      poster: getAsset('USanMiguel/intro.jpg'),
    },
    {
      titulo: 'Urbanización Bethel',
      agotado: false,
      descripcion:
        'Ubicada en el Km 13.5 carretera Nueva a León, cuenta con transporte público a la puerta, calles pavimentadas, alumbrado público y alcantarillado sanitario.',
      ruta: '/bethel',
      poster: getAsset('Bethel/casa1.jpeg'),
    },
    {
      titulo: 'Residencial Ciudad El Doral',
      agotado: false,
      descripcion:
        'La comunidad habitacional más grande y completa del país. Espacios diseñados con parques, áreas comerciales y alta seguridad para un estilo de vida superior.',
      ruta: '/el-doral',
      poster: getAsset('ElDoral/sueno/casa (4).jpeg') || getAsset('ElDoral/sueno/Maqueta-Sueno.jpg'),
    },
    {
      titulo: 'Residencial La Paz',
      agotado: false,
      descripcion:
        'Nuevas soluciones de vivienda unifamiliar pensadas para el confort y la inversión patrimonial sólida en un entorno tranquilo y seguro.',
      ruta: '/la-paz',
      poster: getAsset('La Paz/la paz (7).jpeg'),
    },
  ];

  // Barajado aleatorio de 3 propiedades en cada recarga de página (F5)
  const propiedadesAleatorias = useMemo(() => {
    return [...PROPIEDADES_DESTACADAS]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">
              Portafolio Exclusivo • Lux Inmobiliaria
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Desarrollos Inmobiliarios
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Explora las urbanizaciones más representativas de Managua, equipadas con servicios completos e infraestructura de primera calidad.
          </p>
        </div>
      </section>

      {/* Grid Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main: Tarjetas con Imagen */}
          <main className="lg:col-span-8 space-y-8">
            {proyectos.map((proyecto, idx) => (
              <ProyectoCard key={idx} proyecto={proyecto} />
            ))}
          </main>

          {/* Sidebar: Propiedades Dinámicas Aleatorias */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
                    Selección Especial
                  </span>
                  <h2 className="text-xl font-black text-slate-900 mt-1">
                    Propiedades Destacadas
                  </h2>
                </div>
                <span
                  className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"
                  title="Sugerencias actualizadas"
                />
              </div>

              <div className="space-y-4">
                {propiedadesAleatorias.map((item) => (
                  <Link
                    key={item.id}
                    to={item.ruta}
                    className="flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/80 transition-all group"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-200 relative">
                      <img
                        loading="lazy"
                        src={item.img}
                        alt={item.titulo}
                        onError={(e) => {
                          e.target.src = '/img/casa.jpg';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        {item.origen}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-1">
                        {item.titulo}
                      </h4>
                      <span className="text-xs font-semibold text-emerald-600">
                        {item.precioRef}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contacto"
                  className="w-full block text-center bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Agendar Recorrido General
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}