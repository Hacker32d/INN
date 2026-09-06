import { Link } from 'react-router-dom';

// Vite indexa automáticamente las fotos de la carpeta "La Paz"
const imagenesLaPaz = import.meta.glob('@/img/La Paz/*', { eager: true, import: 'default' });
const getLaPazImg = (filename) => imagenesLaPaz[`/src/img/La Paz/${filename}`];

export default function LaPaz() {
  const caracteristicasUrbanas = [
    {
      titulo: 'Calles de Concreto Hidráulico',
      descripcion: 'Pavimentación de máxima durabilidad y resistencia para un tránsito vehicular óptimo.',
      icono: '🛣️',
    },
    {
      titulo: 'Seguridad y Doble Acceso',
      descripcion: 'Garita de control de acceso principal 24/7 y salida de emergencia en el costado oeste.',
      icono: '🛡️',
    },
    {
      titulo: 'Perímetro Totalmente Cerrado',
      descripcion: 'Muro perimetral completo que brinda máxima privacidad y resguardo a los residentes.',
      icono: '🧱',
    },
    {
      titulo: 'Servicios Básicos Completos',
      descripcion: 'Red subterránea de agua potable, alcantarillado sanitario y energía eléctrica continua.',
      icono: '⚡',
    },
  ];

  // Catálogo de fotos según los nombres de tu HTML original
  const galeriaFotos = [
    {
      src: getLaPazImg('la paz (7).jpeg'),
      titulo: 'Fachada Arquitectónica Principal',
      categoria: 'Exterior Residencial',
    },
    {
      src: getLaPazImg('la paz (8).jpeg'),
      titulo: 'Vista Frontal y Cochera',
      categoria: 'Modelo Unifamiliar',
    },
    {
      src: getLaPazImg('la paz (9).jpeg'),
      titulo: 'Espacios Integrados Sala - Comedor',
      categoria: 'Interiores',
    },
    {
      src: getLaPazImg('la paz (10).jpeg'),
      titulo: 'Área de Cocina y Acabados',
      categoria: 'Cocina Integral',
    },
    {
      src: getLaPazImg('la paz (11).jpeg'),
      titulo: 'Dormitorios con Ventanales',
      categoria: 'Habitaciones',
    },
    {
      src: getLaPazImg('la paz (13).jpeg'),
      titulo: 'Baños y Sanitarios Modernos',
      categoria: 'Acabados Sanitarios',
    },
  ];

  const mensajeWs = encodeURIComponent(
    'Hola, me interesa solicitar más información sobre los modelos de vivienda en Residencial Urbanización La Paz (Colonia El Periodista).'
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. Hero Banner Principal */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-900/85 to-slate-950/90 z-10" />
        <img
          src={getLaPazImg('la paz (7).jpeg')}
          alt="Urbanización La Paz"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Desarrollo Residencial Exclusivo
            </span>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              Alta Plusvalía
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Urbanización La Paz
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Costado Oeste de la Colonia El Periodista, Managua • 90 residencias de alto segmento distribuidas en 6 bloques exclusivos.
          </p>
        </div>
      </section>

      {/* 2. Presentación del Proyecto (Split View) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
              Ubicación Privilegiada en Managua
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Un proyecto habitacional de alto estándar urbano y confort familiar
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong>Urbanización La Paz</strong> se caracteriza como un desarrollo residencial de alto segmento ubicado en una de las zonas céntricas de mayor conveniencia de la capital, en el costado oeste de la Colonia El Periodista.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              El complejo consta de <strong>6 bloques y un total de 90 viviendas</strong>, concebido para brindar un ambiente seguro, moderno y funcional con infraestructura vial de concreto hidráulico, garita de control de acceso y salida de emergencia independiente.
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
                Agendar Recorrido
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
            <img
              src={getLaPazImg('la paz (7).jpeg')}
              alt="Residencia en Urbanización La Paz"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Beneficios Urbanos & Infraestructura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Infraestructura Técnica
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Especificaciones y Seguridad del Residencial
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicasUrbanas.map((item, idx) => (
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
            Detalle de la Residencia
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Distribución Habitacional & Ubicación
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Espacios amplios y ergonómicos con áreas de servicio integradas y localización exacta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Ficha Técnica (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
                  Modelo Residencial
                </span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  90 Unidades
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Residencia Modelo La Paz
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Vivienda unifamiliar con ambientes perfectamente distribuidos para familias que demandan espacios de alto nivel, confort térmico y áreas de servicio completas.
              </p>

              {/* Grid con las 6 métricas extraídas del HTML */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🛏️ Habitaciones</span>
                  <span className="text-base font-black text-slate-800">3 Dormitorios</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🚪 Cuarto Adicional</span>
                  <span className="text-base font-black text-slate-800">1 de Servicio</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🚿 Baños</span>
                  <span className="text-base font-black text-slate-800">3 Baños Completos</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🚗 Estacionamiento</span>
                  <span className="text-base font-black text-slate-800">1 Área Vehicular</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">📐 Área de Lote</span>
                  <span className="text-base font-black text-slate-800">192.50 m²</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs font-bold block">🏗️ Construcción</span>
                  <span className="text-base font-black text-slate-800">117.28 m²</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/50581721759?text=${mensajeWs}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Consultar Precio & Financiamiento
            </a>
          </div>

          {/* Mapa Google Maps (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/50">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                  Localización Satelital
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Costado Oeste de la Colonia El Periodista, Managua
                </h4>
              </div>
              <a
                href="https://www.google.com/maps/place/Urbanizacion+La+Paz+(Green+Homes+Nic)/@12.117013,-88.7314744,8z/data=!4m10!1m2!2m1!1surbanizacion+la+paz+nicaragua!3m6!1s0x8f71559703c865c5:0x267f41224204dca9!8m2!3d12.1232482!4d-86.2870826!15sCh11cmJhbml6YWNpb24gbGEgcGF6IG5pY2FyYWd1YZIBD2hvdXNpbmdfY29tcGxleOABAA!16s%2Fg%2F11y4b1svp0?entry=ttu"
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
                title="Mapa de Ubicación Urbanización La Paz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.351195504914!2d-86.30310538745341!3d12.123248199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71559703c865c5%3A0x267f41224204dca9!2sUrbanizacion%20La%20Paz%20(Green%20Homes%20Nic)!5e0!3m2!1ses-419!2sni!4v1715270017706!5m2!1ses-419!2sni"
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

      {/* 5. Galería Fotográfica del Residencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Galería Fotográfica
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Recorrido Visual por el Residencial
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Fachadas con acabados de primera, espacios interiores iluminados y materiales de alta especificación.
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

      {/* 6. Banner de Contacto Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">¿Deseas visitar Urbanización La Paz?</h3>
            <p className="text-slate-400 text-sm">
              Agenda tu cita guiada y recibe asesoría directa sobre las 90 unidades residenciales disponibles.
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