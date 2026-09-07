import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CASAS_DORAL } from '@/data/casaDoral.js';

export default function CasaDetalle() {
  const { casaId } = useParams();
  const location = useLocation();

  const [fotoActiva, setFotoActiva] = useState(0);

  const slugActual = casaId || location.pathname.split('/').filter(Boolean).pop();

  useEffect(() => {
    setFotoActiva(0);
  }, [slugActual]);

  const casa =
    CASAS_DORAL[slugActual] ||
    Object.values(CASAS_DORAL).find((item) => item.slug === slugActual);

  if (!casa) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900">Modelo no disponible</h2>
        <p className="text-slate-600 text-sm mt-2">
          El modelo residencial que buscas no fue encontrado o la ruta es inválida.
        </p>
        <Link
          to="/el-doral"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
        >
          Volver a Ciudad El Doral
        </Link>
      </div>
    );
  }

  const caracteristicasDoral = [
    {
      titulo: 'Agua Potable Continua',
      descripcion: 'Abastecimiento propio e ininterrumpido con red de tratamiento de aguas residuales.',
      icono: '💧',
    },
    {
      titulo: 'Seguridad Integral 24/7',
      descripcion: 'Entorno residencial privado con garita de control y patrullaje permanente.',
      icono: '🛡️',
    },
    {
      titulo: 'Concreto Monolítico & Blok-On',
      descripcion: 'Estructuras sismorresistentes con tecnología de bloqueo térmico y antihumedad.',
      icono: '🏗️',
    },
    {
      titulo: 'Vías de Concreto Hidráulico',
      descripcion: 'Calles amplias diseñadas para tránsito vehicular óptimo y áreas verdes recreativas.',
      icono: '🛣️',
    },
  ];

  const mensajeWs = encodeURIComponent(
    `Hola, me interesa solicitar cotización, planos y disponibilidad del ${casa.nombre} en Residencial Ciudad El Doral.`
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Banner Principal */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/85 to-green z-10" />
        <img
          src={casa.galeria?.[0]?.src}
          alt={casa.nombre}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Ciudad El Doral • Km 17.5
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              Disponible
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {casa.nombre}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {casa.subtitulo}
          </p>
        </div>
      </section>

      {/* 2. Presentación del Modelo (Split View) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Confort y Estructura Sismorresistente
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Diseño ergonómico y acabados duraderos para tu familia
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {casa.descripcion}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Construida con concreto monolítico sismorresistente, tecnología constructiva Blok-On para evitar filtraciones y acabados funcionales que garantizan frescura y solidez estructural.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/50581721759?text=${mensajeWs}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm transition-all"
              >
                <span>💬 Consultar Disponibilidad</span>
              </a>
              <Link
                to="/contacto"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm"
              >
                Agendar Visita en Sitio
              </Link>
            </div>
          </div>

          {/* Imagen Destacada del Modelo */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
            <img
              src={casa.galeria?.[fotoActiva]?.src || casa.galeria?.[0]?.src}
              alt={casa.nombre}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Características y Beneficios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Ventajas del Residencial
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            ¿Por qué elegir Ciudad El Doral?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicasDoral.map((item, idx) => (
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

      {/* 4. Ficha Técnica de la Vivienda + Google Maps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Ficha de Distribución
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Especificaciones y Mapa en Sitio
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Métricas exactas de construcción, terreno y localización satelital en Managua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tarjeta de Ficha Técnica (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
                  Modelo Seleccionado
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  Financiamiento Disponible
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                {casa.nombre}
              </h3>

              {/* Precios Destacados */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Precio de Lista</span>
                  <span className="text-2xl font-black text-slate-900">{casa.precio}</span>
                </div>
                <div className="text-right border-l border-slate-200 pl-4">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Cuota Aprox.</span>
                  <span className="text-lg font-black text-blue-600">{casa.cuotaAprox}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Espacios adaptables con opción de ampliación posterior, patio cerrado y cochera vehicular.
              </p>

              {/* Métricas de Distribución */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🛏️ Habitaciones</span>
                  <span className="text-base font-black text-slate-800">{casa.habitaciones} Dormitorios</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🚿 Baños</span>
                  <span className="text-base font-black text-slate-800">{casa.banos} Sanitarios</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">📐 Área de Lote</span>
                  <span className="text-base font-black text-slate-800">{casa.areaLote}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🏗️ Construcción</span>
                  <span className="text-base font-black text-slate-800">{casa.areaConstruccion}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/50581721759?text=${mensajeWs}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Solicitar Plan de Pago
            </a>
          </div>

          {/* Mapa Interactivo Google Maps (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/50">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                  Ubicación Satelital
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Km 17.5 Carretera Nueva a León, Managua
                </h4>
              </div>
              <a
                href="https://www.google.com/maps/place/Cd+El+Doral/@12.1990474,-86.3912059,17z/data=!3m1!4b1!4m6!3m5!1s0x8f71505a418ceb33:0x4dc2d1caa42fb238!8m2!3d12.1990363!4d-86.3864512!16s%2Fg%2F1x6q2tjm?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors shrink-0"
              >
                <span>Abrir en Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            <div className="w-full flex-1 min-h-[380px] bg-slate-100 relative">
              <iframe
                title="Ubicación Satelital Ciudad El Doral"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7258587935735!2d-86.38890987415007!3d12.199047431343255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71505a418ceb33%3A0x4dc2d1caa42fb238!2sCd%20El%20Doral!5e0!3m2!1ses-419!2sni!4v1714664378781!5m2!1ses-419!2sni"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galería Fotográfica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Galería del Modelo
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Recorrido Visual y Planos
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Selecciona una imagen para examinar los acabados y distribución del espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {casa.galeria?.map((foto, idx) => (
            <div
              key={idx}
              onClick={() => setFotoActiva(idx)}
              className={`group bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 flex flex-col ${
                fotoActiva === idx
                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-lg'
                  : 'border-slate-200/80 hover:shadow-md'
              }`}
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  loading="lazy"
                  src={foto.src}
                  alt={foto.titulo}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Foto {idx + 1}
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {foto.titulo}
                </h4>
                {fotoActiva === idx && (
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    En pantalla
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Banner de Contacto Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Listo para conocer el {casa.nombre}?</h3>
            <p className="text-slate-400 text-sm">
              Agenda tu visita guiada al residencial y recibe precalificación bancaria sin costo.
            </p>
          </div>
          <a
            href={`https://wa.me/50581721759?text=${mensajeWs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-md shadow-blue-600/30"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>
    </div>
  );
}