import { Link } from 'react-router-dom';

// Vite indexa automáticamente las fotos de la carpeta Bethel
const imagenesBethel = import.meta.glob('@/img/Bethel/*', { eager: true, import: 'default' });
const getBethelImg = (filename) => imagenesBethel[`/src/img/Bethel/${filename}`];

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

  const galeriaFotos = [
    {
      src: getBethelImg('casa1.jpeg'),
      titulo: 'Fachada Modelo Frontal',
      categoria: 'Modelo Habitacional',
    },
    {
      src: getBethelImg('casa2.jpg'),
      titulo: 'Fachada con Porche y Ventanal',
      categoria: 'Exterior',
    },
    {
      src: getBethelImg('casa3.jpg'),
      titulo: 'Detalle de Acceso y Acabados',
      categoria: 'Entrada Principal',
    },
    {
      src: getBethelImg('foto4.jpeg'),
      titulo: 'Calles Pavimentadas y Luminarias',
      categoria: 'Infraestructura Vial',
    },
    {
      src: getBethelImg('foto2.jpeg'),
      titulo: 'Acceso a la Urbanización',
      categoria: 'Entorno Residencial',
    },
    {
      src: getBethelImg('foto1.jpeg'),
      titulo: 'Alineación de Lotes y Bloques',
      categoria: 'Desarrollo Urbanístico',
    },
    {
      src: getBethelImg('foto3.jpeg'),
      titulo: 'Servicio Sanitario y Azulejos',
      categoria: 'Acabados Interiores',
    },
  ];

  const mensajeWs = encodeURIComponent(
    'Hola, me interesa solicitar información sobre el Modelo Estándar en Urbanización Bethel ($35,000).'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Banner Principal */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/85 to-green-950/90 z-10" />
        <img
          src={getBethelImg('foto4.jpeg') || getBethelImg('casa1.jpeg')}
          alt="Urbanización Bethel"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Proyecto Habitacional
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              Disponible • Bono INVUR
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Urbanización Bethel
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Km 13.5 Carretera Nueva a León • Viviendas unifamiliares con mampostería reforzada, transporte accesible y servicios completos.
          </p>
        </div>
      </section>

      {/* 2. Presentación del Proyecto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Ubicación y Calidad Constructiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Estructura sólida y diseño ergonómico para la familia nicaragüense
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ubicada en el <strong>Km 13.5 carretera Nueva a León</strong>, con acceso directo a transporte público, calles pavimentadas, red de alumbrado público y sistema de tratamiento de aguas negras.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              El sistema constructivo es de <strong>Mampostería reforzada</strong>, compuesto por bloques de concreto, concreto de 3,000 PSI y acero de refuerzo estándar. Estos elementos trabajan de manera uniforme como una sola estructura, garantizando máxima resistencia antisísmica.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Acabados con repello y fino, piso cerámico de 33×33, área de ducha antideslizante con azulejos 20×30, cielo falso de PVC machimbrado blanco y cubierta metálica de perlines con lámina ondulada cal. 26 Std.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/50581721759?text=${mensajeWs}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm transition-all"
              >
                <span>💬 Cotizar con Bono INVUR</span>
              </a>
              <Link
                to="/contacto"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm"
              >
                Agendar Recorrido
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
            <img
              src={getBethelImg('casa1.jpeg')}
              alt="Modelo en Bethel"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Beneficios Urbanos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Servicios e Infraestructura
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Ventajas de la Urbanización Bethel
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

      {/* 4. Ficha Técnica del Modelo Estándar + Ubicación / Google Maps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Vivienda y Ubicación
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Modelo Estándar & Mapa en Sitio
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Detalles técnicos de distribución, valor patrimonial y localización por satélite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tarjeta de Ficha Técnica (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
                  Modelo Disponible
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  Aplica Bono INVUR
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Modelo Estándar
              </h3>

              {/* Precios Destacados */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Precio Total</span>
                  <span className="text-2xl font-black text-slate-900">$35,000.00</span>
                </div>
                <div className="text-right border-l border-slate-200 pl-4">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Cuota Aprox.</span>
                  <span className="text-lg font-black text-blue-600">U$170.66 / mes</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Diseñado para satisfacer las necesidades específicas de la familia, ofreciendo el espacio perfecto para vivir y crecer con privacidad y confort.
              </p>

              {/* Métricas de Distribución */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🛏️ Habitaciones</span>
                  <span className="text-base font-black text-slate-800">2 Dormitorios</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🚿 Baño</span>
                  <span className="text-base font-black text-slate-800">1 Baño Completo</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">📐 Área de Lote</span>
                  <span className="text-base font-black text-slate-800">212.76 vr²</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🏗️ Construcción</span>
                  <span className="text-base font-black text-slate-800">51.40 m²</span>
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
                  Km 13.5 Carretera Nueva a León, Managua
                </h4>
              </div>
              <a
                href="https://www.google.com/maps/place/Urbanizaci%C3%B3n+bethel/@12.1793975,-86.3714842,17z/data=!3m1!4b1!4m6!3m5!1s0x8f71511b61cac751:0xa62622f3360846b!8m2!3d12.1793923!4d-86.3666133!16s%2Fg%2F11c2p9dgpb?entry=ttu"
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
                title="Mapa de Ubicación Urbanización Bethel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0147692544942!2d-86.36918822415022!3d12.179397531749839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71511b61cac751%3A0xa62622f3360846b!2sUrbanizaci%C3%B3n%20bethel!5e0!3m2!1ses-419!2sni!4v1712935305759!5m2!1ses-419!2sni"
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

      {/* 5. Condiciones Financieras y Bono INVUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
              Opciones de Financiamiento
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Accede al Bono INVUR de $2,000 para tu Prima
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Esta propiedad aplica al programa de vivienda de interés social con bono para la prima y tasa de interés preferencial fija.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Opción 1: Fideicomiso Banpro */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-lg text-white">Opción 1: Fideicomiso Banpro</h4>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-400/30">
                  Tasa 7.25%
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Reserva con <strong>$500</strong> + <strong>$2,000</strong> de Bono INVUR para completar tu prima de $2,500. Monto a financiar: <strong>$24,000.00</strong> (sujeto a capacidad de pago).
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Tasa fija por todo el plazo del crédito (7.25%).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Hasta 25 años para cancelar el financiamiento.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>6 meses de gracia:</strong> Comienzas a pagar tu primera cuota en el mes 7.</span>
                </li>
              </ul>
            </div>

            {/* Opción 2: Banca Comercial */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-lg text-white">Opción 2: Banca Comercial</h4>
                <span className="text-xs bg-blue-500/20 text-blue-300 font-bold px-2.5 py-1 rounded-full border border-blue-400/30">
                  Tasa 7.13%
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Con el 10% de prima ($3,000.00): el cliente aporta <strong>$1,000.00</strong> y se complementa con <strong>$2,000.00</strong> del Bono INVUR. Monto a financiar: <strong>$27,000.00</strong>.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Tasa preferencial fija del 7.13% por los primeros 10 años.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Aplican asalariados, negocios formalizados y servicios profesionales.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Trámite bancario gestionado por nuestros asesores acreditados.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Galería Fotográfica Real */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Galería Fotográfica
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Viviendas y Obras en Sitio
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Registro visual del modelo edificado, viales de concreto y acabados sanitarios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeriaFotos.map((foto, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
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
                  {foto.categoria}
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {foto.titulo}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Banner de Contacto Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Deseas visitar Urbanización Bethel?</h3>
            <p className="text-slate-400 text-sm">
              Coordinamos tu visita en sitio y realizamos tu precalificación bancaria sin costo.
            </p>
          </div>
          <a
            href={`https://wa.me/50581721759?text=${mensajeWs}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-md shadow-blue-600/30"
          >
            Contactar Asesor
          </a>
        </div>
      </section>
    </div>
  );
}