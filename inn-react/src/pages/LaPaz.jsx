import { Link } from 'react-router-dom';

export default function LaPaz() {
  const caracteristicas = [
    {
      titulo: 'Comunidad Segura',
      descripcion: 'Ambiente tranquilo con control de acceso perimetral para el resguardo de tu familia.',
      icono: '🛡️',
    },
    {
      titulo: 'Viviendas Funcionales',
      descripcion: 'Diseños modernos concebidos para optimizar cada metro cuadrado con acabados duraderos.',
      icono: '🏡',
    },
    {
      titulo: 'Servicios Integrales',
      descripcion: 'Red completa de electrificación, agua potable continua y sistema pluvial.',
      icono: '⚡',
    },
    {
      titulo: 'Ubicación Estratégica',
      descripcion: 'Rápido acceso a vías principales, colegios, transporte y centros de conveniencia.',
      icono: '📍',
    },
  ];

  const mensajeWs = encodeURIComponent(
    'Hola, me gustaría solicitar información detallada y cotización de viviendas en Residencial La Paz.'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner Superior con Video de Fondo */}
      <section className="relative bg-slate-900 text-white min-h-[420px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="/build/img/La Paz/la paz (7).jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/build/media/la paz/la paz intro.mp4" type="video/mp4" />
          <source src="/build/media/la paz/la paz intro.webm" type="video/webm" />
          <source src="/build/media/la paz/la paz intro.ogg" type="video/ogg" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="inline-block bg-blue-600/90 text-white text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full backdrop-blur-sm">
            Nuevo Proyecto Habitacional
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Residencial La Paz
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            No pierdas la oportunidad única de establecerte en una comunidad próspera, diseñada para ofrecer comodidad, seguridad y una excelente calidad de vida.
          </p>
        </div>
      </section>

      {/* Presentación del Proyecto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Tu Nuevo Comienzo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Vive la experiencia de formar parte de Residencial La Paz
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Disfruta de la comodidad, seguridad y calidad de vida que estas residencias tienen para ofrecerte. Vive la experiencia de formar parte de esta próspera comunidad y hacer de <strong>Residencial La Paz</strong> tu nuevo hogar.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Contamos con planes de financiamiento accesibles, asesoría bancaria personalizada y acompañamiento constante por parte de nuestros asesores para que adquieras tu vivienda con total tranquilidad.
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
                Contactar Asesor
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <img
              src="/build/img/La Paz/la paz (7).jpeg"
              alt="Modelo en Residencial La Paz"
              onError={(e) => {
                e.target.src = '/img/casa.jpg';
              }}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Características y Ventajas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Beneficios Destacados
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            ¿Por qué elegir Residencial La Paz?
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

      {/* Call to Action Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Listo para dar el siguiente paso?</h3>
            <p className="text-slate-400 text-sm">Agenda una visita presencial para conocer el desarrollo de Residencial La Paz.</p>
          </div>
          <a
            href={`https://wa.me/50581721759?text=${mensajeWs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors text-sm uppercase tracking-wider"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>
    </div>
  );
}