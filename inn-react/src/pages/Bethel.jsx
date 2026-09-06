import { Link } from 'react-router-dom';

export default function Bethel() {
  const caracteristicas = [
    {
      titulo: 'Seguridad y Acceso Controlado',
      descripcion: 'Entorno residencial privado con control de entrada para la tranquilidad de tu familia.',
      icono: '🛡️',
    },
    {
      titulo: 'Infraestructura Completa',
      descripcion: 'Calles diseñadas para fácil tránsito, drenaje pluvial eficiente y alumbrado público.',
      icono: '🛣️',
    },
    {
      titulo: 'Servicios Básicos Garantizados',
      descripcion: 'Conexión eléctrica estable y suministro continuo de agua potable.',
      icono: '⚡',
    },
    {
      titulo: 'Ubicación y Transporte',
      descripcion: 'Cercanía a rutas de transporte público, escuelas, comercios y áreas de servicio.',
      icono: '📍',
    },
  ];

  const mensajeWs = encodeURIComponent(
    'Hola, me interesa solicitar información sobre lotes y viviendas disponibles en Urbanización Bethel.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner Principal */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-slate-900/90 z-10" />
        <img
          src="/img/header.png"
          alt="Urbanización Bethel"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Proyecto Habitacional
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Urbanización Bethel
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            El lugar ideal para consolidar tu patrimonio familiar en un ambiente fresco, seguro y de alta plusvalía.
          </p>
        </div>
      </section>

      {/* Presentación del Proyecto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Bienvenido a tu nueva comunidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Diseñado pensando en la armonía y tranquilidad familiar
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong>Urbanización Bethel</strong> ofrece soluciones residenciales accesibles con lotes 
              amplios y viviendas construidas con altos estándares estructurales. Pensado para aquellas 
              familias que buscan escapar del bullicio urbano sin perder la conectividad con la ciudad.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Contamos con planes de crédito ágiles y acompañamiento en todo el trámite bancario 
              o financiamiento disponible para que estrenar casa sea un proceso sencillo y seguro.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/50576623177?text=${mensajeWs}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm transition-all"
              >
                <span>💬 Consultar Disponibilidad</span>
              </a>
              <Link
                to="/contacto"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-3.5 px-6 rounded-xl text-sm transition-all"
              >
                Agendar Visita
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <img
              src="/img/casa.jpg"
              alt="Modelo en Bethel"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Características y Beneficios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Ventajas del Residencial
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            ¿Por qué elegir Urbanización Bethel?
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

      {/* Banner de Contacto Rápido */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Listo para conocer tu próximo hogar en Bethel?</h3>
            <p className="text-slate-400 text-sm">Nuestros asesores están listos para brindarte una cotización personalizada.</p>
          </div>
          <a
            href={`https://wa.me/50576623177?text=${mensajeWs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>
    </div>
  );
}