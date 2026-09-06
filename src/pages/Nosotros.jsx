import { Link } from 'react-router-dom';

export default function Nosotros() {
  const valores = [
    {
      titulo: 'Integridad y Ética',
      descripcion: 'Actuamos con honestidad y principios éticos en cada asesoría y transacción inmobiliaria.',
      icono: '🛡️',
    },
    {
      titulo: 'Calidad y Excelencia',
      descripcion: 'Ofrecemos proyectos certificados y un servicio de intermediación de primer nivel.',
      icono: '⭐',
    },
    {
      titulo: 'Atención al Cliente',
      descripcion: 'Trato personalizado enfocado en escuchar tus necesidades para encontrar tu hogar ideal.',
      icono: '🤝',
    },
    {
      titulo: 'Innovación y Adaptabilidad',
      descripcion: 'Buscamos constantemente mejores soluciones y flexibilidad en ventas y alquileres.',
      icono: '💡',
    },
    {
      titulo: 'Responsabilidad Social',
      descripcion: 'Contribuimos al desarrollo ordenado y bienestar habitacional de las familias.',
      icono: '🌱',
    },
    {
      titulo: 'Trabajo en Equipo',
      descripcion: 'Colaboración constante entre asesores y entidades bancarias para agilizar tus trámites.',
      icono: '👥',
    },
    {
      titulo: 'Desarrollo Profesional',
      descripcion: 'Capacitación continua de nuestro equipo para darte asesoramiento experto y vigente.',
      icono: '📈',
    },
    {
      titulo: 'Flexibilidad de Mercado',
      descripcion: 'Planes ajustados tanto para clientes particulares como para propiedades comerciales.',
      icono: '🔄',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Banner Superior */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-black/95 to-emerald-950/85 z-10" />        <div className="relative z-20 max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-green-400 bg-green-900/40 px-3.5 py-1.5 rounded-full border border-green-500/20">
            Conoce LUX INMOBILIARIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Sobre Nosotros
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Un equipo dedicado y apasionado de profesionales comprometidos en convertir tus sueños de hogar en una realidad palpable.
          </p>
        </div>
      </section>

      {/* Quiénes Somos y Qué Hacemos (Layout 2 Columnas con Foto y Badge) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-green-600 font-bold uppercase tracking-wider text-xs">
              Nuestra Identidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Profesionales dedicados al servicio inmobiliario excepcional
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              En <strong className="text-slate-900">LUX INMOBILIARIO</strong>, somos un equipo dedicado y apasionado de profesionales del mercado inmobiliario, comprometidos a brindar un servicio excepcional a nuestros clientes. Con años de experiencia en el sector, nos hemos ganado una reputación sólida por nuestra integridad, conocimientos y resultados probados.
            </p>
            <div className="bg-slate-100/80 border-l-4 border-green-600 p-4 rounded-r-2xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Qué Hacemos</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Nos dedicamos a brindar soluciones integrales en el mercado inmobiliario, especializándonos en la intermediación de ventas, alquileres y administración de propiedades residenciales y comerciales.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-green-600/25 transition-all text-sm uppercase tracking-wider"
              >
                Contactar Asesor
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/src/img/header.png"
                alt="Vivienda modelo"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl shadow-lg hidden sm:block border border-slate-800">
              <p className="text-3xl font-black text-blue-400">100%</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                Compromiso y Resultados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión (Tarjetas Grandes con Icono Colorido) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl text-3xl font-bold">
              🎖️
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Nuestra misión es ayudar a nuestros clientes a encontrar la propiedad perfecta que se ajuste a sus necesidades y deseos, ya sea para comprar, vender o alquilar. Nos comprometemos a ofrecer un servicio personalizado y profesional, utilizando nuestro conocimiento del mercado inmobiliario y nuestra red de contactos para facilitar transacciones exitosas y satisfactorias.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl text-3xl font-bold">
              ☀️
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Nos visualizamos como líderes reconocidos en el mercado inmobiliario, conocidos por nuestra excelencia en el servicio al cliente, nuestra innovación constante y nuestra integridad inquebrantable. Nos esforzamos por ser la primera opción para aquellos que buscan comprar, vender o alquilar propiedades, estableciendo nuevos estándares de profesionalismo y calidad en la industria.
            </p>
          </div>
        </div>
      </section>

      {/* Valores (Grid de Tarjetas con Icono) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Nuestros Principios
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">
            Nuestros Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="text-3xl">{val.icono}</div>
              <h4 className="font-bold text-slate-900 text-base">{val.titulo}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{val.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}