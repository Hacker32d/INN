import { useState } from 'react';

// Vite indexa automáticamente las fotos de la carpeta contacto
const imagenesContacto = import.meta.glob('@/img/contacto/**/*', { eager: true, import: 'default' });
const getContactoImg = (filename) => imagenesContacto[`/src/img/contacto/${filename}`];

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const asesores = [
    {
      nombre: 'Nelson Orozco',
      rol: 'Asesor Inmobiliario Senior',
      telefono: '+505 8172 1759',
      telefonoRaw: '50581721759',
      imagen:
        getContactoImg('contacto1.png') ||
        getContactoImg('contacto1.webp') ||
        getContactoImg('contacto1.jpeg'),
    },
    {
      nombre: 'Ivette Román',
      rol: 'Especialista en Ventas y Crédito',
      telefono: '+505 8467 6193',
      telefonoRaw: '50584676193',
      facebook: 'https://www.facebook.com/viveinmobiliariani.ivetteroman/?paipv=0&eav=AfZn-AEJbVpOhe1DI4w81i43zDwRPLpMaGSdhmslCkFivlKf5vZoF9SxECv_CxlEuQA&_rdr',
      imagen:
        getContactoImg('contacto2.jpeg') ||
        getContactoImg('contacto2.webp') ||
        getContactoImg('contacto2.png'),
    },
  ];

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnviarWhatsApp = (e) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Hola, mi nombre es ${formulario.nombre}.\n` +
      `Teléfono: ${formulario.telefono}\n` +
      `Correo: ${formulario.email}\n\n` +
      `Mensaje: ${formulario.mensaje}`
    );
    window.open(`https://wa.me/50581721759?text=${texto}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Banner Principal */}
      <section className="relative bg-green-900/80 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-green-900/90 z-10" />
          <span className="text-xs uppercase font-bold tracking-widest text-green-400 bg-green-900/40 px-3.5 py-1.5 rounded-full border border-green-500/20">
            Atención Personalizada
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contáctanos
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Estamos listos para asesorarte en la adquisición de tu lote o vivienda y acompañarte en todo el trámite crediticio.
          </p>
        </div>
      </section>

      {/* 2. Sección Principal: Formulario + Asesores */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Formulario de Contacto (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
                Mensaje Directo
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Envíanos una Consulta
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Completa tus datos y nuestro equipo te responderá de forma inmediata por WhatsApp o correo.
              </p>
            </div>

            <form onSubmit={handleEnviarWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="nombre">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="email">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    required
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="telefono">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formulario.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+505 0000 0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formulario.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué proyecto o modelo habitacional estás interesado?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>💬 Enviar Mensaje por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Tarjetas de Asesores con Fotos Reales (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
                Equipo Comercial
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Habla Directamente con un Asesor
              </h3>
            </div>

            <div className="space-y-4">
              {asesores.map((asesor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <img
                      src={asesor.imagen}
                      alt={asesor.nombre}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-base truncate">
                        {asesor.nombre}
                      </h4>
                      {asesor.facebook && (
                        <a
                          href={asesor.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs font-bold"
                          title="Perfil de Facebook"
                        >
                          Facebook ↗
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {asesor.rol}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${asesor.telefonoRaw}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <span>💬 {asesor.telefono}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tarjeta de Información General */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
                Oficinas y Atención
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atendemos visitas directamente en los proyectos habitacionales de lunes a domingo. Escríbenos para agendar transporte o tu recorrido personalizado.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}