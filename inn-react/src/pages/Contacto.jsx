import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const asesores = [
    {
      nombre: 'Nelson Orozco',
      rol: 'Asesor Inmobiliario',
      telefono: '+505 8172 1759',
      telefonoRaw: '50581721759',
      imagenPng: '/img/contacto/contacto1.png',
      imagenWebp: '/img/contacto/contacto1.webp',
      facebook: null,
    },
    {
      nombre: 'Ivette Román',
      rol: 'Asesora Inmobiliaria',
      telefono: '+505 8467 6193',
      telefonoRaw: '50584676193',
      imagenPng: '/img/contacto/contacto2.jpeg',
      imagenWebp: '/img/contacto/contacto2.webp',
      facebook:
        'https://www.facebook.com/viveinmobiliariani.ivetteroman/?paipv=0&eav=AfZn-AEJbVpOhe1DI4w81i43zDwRPLpMaGSdhmslCkFivlKf5vZoF9SxECv_CxlEuQA&_rdr',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnviarWhatsApp = (e) => {
    e.preventDefault();
    const texto = `Hola, mi nombre es ${formData.nombre}. Correo: ${formData.email}, Tel: ${formData.telefono}. Mensaje: ${formData.mensaje}`;
    // Línea de atención directa por WhatsApp
    const url = `https://wa.me/50581721759?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Banner Superior */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10" />
        <img
          src="/img/header.png"
          alt="Contacto Header"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-20 max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Atención Personalizada
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Tu Futuro Está En Buenas Manos
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Comunícate con nosotros para agendar un recorrido en sitio o solicitar asesoría en planes de crédito y primas.
          </p>
        </div>
      </section>

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Formulario (Columna Izquierda / Central) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h2>
            <p className="text-sm text-slate-500 mt-1">
              Completa tus datos y nos pondremos en contacto contigo de inmediato.
            </p>
          </div>

          <form onSubmit={handleEnviarWhatsApp} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Nombre y Apellido *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 text-sm transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Número de Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: +505 0000 0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe aquí tu consulta sobre modelos, primas, cuotas o citas..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-emerald-600/25 text-sm uppercase tracking-wider"
            >
              {/* Icono Tabler Brand WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>

        {/* Columna Derecha: Asesores + Info Directa */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Tarjeta de los 2 Asesores */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Asesores Inmobiliarios</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Contacta de forma directa con el equipo comercial de la agencia.
              </p>
            </div>

            <div className="space-y-4">
              {asesores.map((asesor, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
                    <picture>
                      <source srcSet={asesor.imagenWebp} type="image/webp" />
                      <source srcSet={asesor.imagenPng} type="image/png" />
                      <img
                        src={asesor.imagenPng}
                        alt={asesor.nombre}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(asesor.nombre)}&background=0D8ABC&color=fff`;
                        }}
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                        {asesor.rol}
                      </span>
                      {asesor.facebook && (
                        <a
                          href={asesor.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-blue-600 transition-colors p-1"
                          title="Facebook oficial"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 stroke-current"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <h4 className="font-bold text-slate-900 text-base leading-tight">
                      {asesor.nombre}
                    </h4>

                    <a
                      href={`https://wa.me/${asesor.telefonoRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-1 transition-colors"
                    >
                      <span>💬 {asesor.telefono}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta de Información General y Horarios */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Información General</h3>
              <p className="text-xs text-slate-400">Atención y seguimiento institucional.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <div>
                  <p className="text-slate-400">Correo Electrónico</p>
                  <a
                    href="mailto:luxinmobiliariani@gmail.com"
                    className="text-white font-medium hover:underline text-sm"
                  >
                    luxinmobiliariani@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="text-slate-400">Ubicación</p>
                  <p className="text-white font-medium text-sm">Managua, Nicaragua</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                Horario de Atención
              </span>
              <p className="text-xs text-slate-300">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
              <p className="text-xs text-slate-300">Sábados: 8:00 AM - 12:00 PM</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}