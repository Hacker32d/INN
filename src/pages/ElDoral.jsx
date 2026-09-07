import { Link } from 'react-router-dom';

const imagenesDoral = import.meta.glob('@/img/ElDoral/**/*', { eager: true, import: 'default' });
const getDoralImg = (path) => imagenesDoral[`/src/img/ElDoral/${path}`];

export default function ElDoral() {
  const caracteristicasComunidad = [
    {
      titulo: 'Abastecimiento Propio de Agua',
      descripcion: 'Red hídrica independiente y planta de tratamiento de aguas residuales en funcionamiento.',
      icono: '💧',
    },
    {
      titulo: 'Seguridad y Vigilancia 24/7',
      descripcion: 'Acceso regulado por garita principal y rondas de vigilancia constante en todo el residencial.',
      icono: '🛡️',
    },
    {
      titulo: 'Concreto Hidráulico Integral',
      descripcion: 'Calles amplias con pavimento rígido de alta durabilidad y alumbrado público uniforme.',
      icono: '🛣️',
    },
    {
      titulo: 'Concreto Monolítico & Blok-On',
      descripcion: 'Estructuras sismorresistentes con tecnología Blok-On contra humedad y filtraciones.',
      icono: '🏗️',
    },
  ];

  const modelos = [
    {
      slug: 'promesa',
      nombre: 'Modelo Promesa',
      badge: 'Familiar',
      specs: '56.43 m² • 226.97 vr²',
      distribucion: '3 Hab • 2 Baños',
      imagen:
        getDoralImg('promesa/casa (2).jpeg') ||
        getDoralImg('promesa/casa (2).webp') ||
        getDoralImg('promesa/casa (1).jpg'),
      descripcion: 'Residencia amplia y acogedora con excelente distribución de ambientes sociales.',
    },
    {
      slug: 'estrella',
      nombre: 'Modelo Estrella',
      badge: 'Espacioso',
      specs: '85.85 m² • 226.97 vr²',
      distribucion: '3 Hab • 2 Baños',
      imagen:
        getDoralImg('estrella/casa (3).jpeg') ||
        getDoralImg('estrella/casa (3).webp') ||
        getDoralImg('estrella/casa (1).jpeg'),
      descripcion: 'Una de las opciones más amplias del residencial, pensada para familias en crecimiento.',
    },
    {
      slug: 'sueno',
      nombre: 'Modelo Sueño',
      badge: 'Insignia',
      specs: '73.48 m² • 226.97 vr²',
      distribucion: '3 Hab • 2 Baños',
      imagen:
        getDoralImg('sueno/casa (4).jpeg') ||
        getDoralImg('sueno/casa (4).webp') ||
        getDoralImg('sueno/Maqueta-Sueno.jpg'),
      descripcion: 'Una verdadera joya arquitectónica con acabados superiores y cochera doble.',
    },
    {
      slug: 'brisa',
      nombre: 'Modelo Brisa',
      badge: 'Eficiente',
      specs: '51.36 m² • 226.97 vr²',
      distribucion: '2 Hab • 1 Baño',
      imagen:
        getDoralImg('brisa/casa (5).jpeg') ||
        getDoralImg('brisa/casa (5).webp') ||
        getDoralImg('brisa/casa (1).webp'),
      descripcion: 'Diseño inteligente orientado a la iluminación y frescura natural con amplio patio.',
    },
  ];

  const mensajeWs = encodeURIComponent(
    'Hola, me interesa solicitar información general sobre las viviendas disponibles en Residencial Ciudad El Doral.'
  );

  return (
    <div className="min-h-screen pb-20 text-slate-200">
      {/* 1. Hero Banner */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/85 to-green z-10" />
        <img
          src={
            getDoralImg('sueno/casa (4).jpeg') ||
            getDoralImg('promesa/casa (2).jpeg') ||
            getDoralImg('sueno/Maqueta-Sueno.jpg')
          }
          alt="Ciudad El Doral"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              La Nueva Ciudad de la Capital
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              Km 17.5 Carretera Nueva a León
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Residencial Ciudad El Doral
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            La comunidad habitacional más grande y completa de Nicaragua con servicios propios, amplias calles de concreto y máxima seguridad.
          </p>
        </div>
      </section>

      {/* 2. Presentación Constructiva */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-500 font-bold uppercase tracking-wider text-xs">
              Bienvenido a tu nueva vida
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Calidad constructiva sismorresistente y comodidad garantizada
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              <strong>Ciudad El Doral</strong> cuenta con abastecimiento propio de agua potable, sistema de tratamiento de aguas residuales y vigilancia continua las 24 horas para la total tranquilidad de tu familia.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Cada vivienda se edifica bajo el sistema de <strong>concreto monolítico sismorresistente</strong>, anclaje indeformable contra filtraciones y la tecnología constructiva <strong>Blok-On</strong>, garantizando durabilidad y aislamiento térmico superior.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/50581721759?text=${mensajeWs}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm transition-all"
              >
                <span>💬 Consultar Disponibilidad</span>
              </a>
              <Link
                to="/contacto"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
              >
                Agendar Visita Guiada
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group">
            <img
              src={
                getDoralImg('sueno/Maqueta-Sueno.jpg') ||
                getDoralImg('promesa/casa (2).jpeg') ||
                getDoralImg('sueno/casa (4).jpeg')
              }
              alt="Maqueta El Doral"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Beneficios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-500 font-bold uppercase tracking-wider text-xs">
            Equipamiento Urbano
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Ventajas de Vivir en Ciudad El Doral
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicasComunidad.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-sm space-y-3"
            >
              <div className="text-3xl">{item.icono}</div>
              <h3 className="font-bold text-white text-base">{item.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Catálogo de los 4 Modelos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-500 font-bold uppercase tracking-wider text-xs">
            Modelos de Vivienda
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Tenemos una variedad de opciones
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Haz clic en cualquiera de los modelos para acceder a su galería completa, medidas exactas y planos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modelos.map((item) => (
            <article
              key={item.slug}
              className="group bg-slate-900/80 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  loading="lazy"
                  src={item.imagen}
                  alt={item.nombre}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {item.badge}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400">{item.distribucion}</span>
                    <span className="text-slate-500 font-semibold">{item.specs.split('•')[0]}</span>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {item.nombre}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <Link
                    to={`/el-doral/${item.slug}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Ver Detalles</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Contacto Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">¿Listo para conocer Ciudad El Doral?</h3>
            <p className="text-slate-400 text-sm">
              Agenda tu visita en sitio y recibe asesoría con los principales bancos del país.
            </p>
          </div>
          <a
            href={`https://wa.me/50581721759?text=${mensajeWs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-md"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>
    </div>
  );
}