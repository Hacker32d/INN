import { Link } from 'react-router-dom';

export default function SanMiguel() {
  const caracteristicas = [
    {
      titulo: 'Pozo y Tanque Propio',
      descripcion: 'Capacidad hídrica garantizada y planta de tratamiento de aguas residuales propia para 2,001 viviendas.',
      icono: '💧',
    },
    {
      titulo: 'Cero Inundaciones',
      descripcion: 'Eficiente sistema de drenaje de agua pluvial diseñado para mantener protegida a la comunidad en toda época del año.',
      icono: '🛡️',
    },
    {
      titulo: 'Calles Asfaltadas y Accesos',
      descripcion: 'Vías con doble tratamiento asfáltico y modulación de bloques interconectados para un control de acceso ágil.',
      icono: '🛣️',
    },
    {
      titulo: 'Áreas Verdes y Recreación',
      descripcion: 'Amplios parques infantiles, escuela comunitaria y cercanía directa a rutas urbanas (Ruta 113, taxis y caponeras).',
      icono: '🌳',
    },
  ];

  const modelosAgotados = [
    {
      nombre: 'SM2 BÁSICA',
      imagen: '/build/img/USanMiguel/SM2.webp',
      alt: 'SM2 Basica',
    },
    {
      nombre: 'SM2 FULL',
      imagen: '/build/img/USanMiguel/SM2-full.webp',
      alt: 'SM2 Full',
    },
    {
      nombre: 'SM4 BÁSICA',
      imagen: '/build/img/USanMiguel/SM4.webp',
      alt: 'SM4 Basica',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Banner Principal */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-blue-950/90 z-10" />
        <img
          src="/img/USanMiguel/intro.jpg"
          alt="Urbanización San Miguel"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Proyecto Urbanístico
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-rose-300 bg-rose-950/60 px-3.5 py-1.5 rounded-full border border-rose-500/30">
              Etapa Agotada
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Urbanización San Miguel
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Km 10 Carretera Nueva a León • Alta conectividad, infraestructura completa y servicios garantizados en Managua.
          </p>
        </div>
      </section>

      {/* 2. Presentación del Proyecto (Split 2 Columnas igual que Bethel y La Paz) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Ubicación y Entorno Consolidado
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Un desarrollo estratégico diseñado para vivir cerca de todo
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Bienvenido a la <strong>Urbanización San Miguel</strong>, un proyecto inmobiliario ubicado en una de las zonas de mayor desarrollo urbano en Managua. Situado en el km 10 carretera Nueva a León, cuenta con acceso inmediato a transporte intermunicipal (Ruta 113), taxis y moto-taxis (caponeras).
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Rodeado de supermercados, centros comerciales, escuelas, hospitales, gasolineras y bancos. La comunidad cuenta con servicios básicos continuos de agua potable, red de energía eléctrica, alumbrado público y un sistema constructivo moderno de máxima durabilidad.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
               
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/20"
              >
                No hay unidades disponibles
              </Link>
              {/* <Link
                to="/contacto"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm"
              >
                Consultar Asesor
              </Link> */}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <img
              src="/img/USanMiguel/intro.jpg"
              alt="Urbanización San Miguel Entorno"
              onError={(e) => {
                e.target.src = '/img/casa.jpg';
              }}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Grid de Beneficios / Infraestructura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Infraestructura y Servicios
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Ventajas de la Comunidad San Miguel
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="text-3xl">{item.icono}</div>
              <h3 className="font-bold text-slate-900 text-base">{item.titulo}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Modelos Desarrollados (Tarjetas con etiqueta de Agotado) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rose-600 font-bold uppercase tracking-wider text-xs">
            Modelos Construidos
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Tú decides qué opción es mejor para ti
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Modelos habitacionales desarrollados en esta etapa (actualmente sin unidades disponibles).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelosAgotados.map((modelo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  loading="lazy"
                  src={modelo.imagen}
                  alt={modelo.alt}
                  onError={(e) => {
                    e.target.src = '/img/casa.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Agotado
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-slate-900 tracking-wide group-hover:text-rose-600 transition-colors">
                  {modelo.nombre}
                </h3>
                <span className="text-xs text-rose-600 font-bold tracking-wider mt-1 block">
                  Etapa Finalizada
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Buscas viviendas listas para habitar?</h3>
            <p className="text-slate-400 text-sm">
              Descubre los modelos disponibles con financiamiento bancario en Ciudad El Doral, Bethel o Residencial La Paz.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/el-doral"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-xs uppercase tracking-wider"
            >
              Explorar El Doral
            </Link>
            <Link
              to="/contacto"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl transition-colors text-xs uppercase tracking-wider"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}