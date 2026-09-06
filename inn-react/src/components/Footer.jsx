import { Link } from 'react-router-dom';

export default function Footer() {
  const proyectos = [
    { nombre: 'Ciudad El Doral', ruta: '/el-doral', badge: 'Modelos' },
    { nombre: 'Urbanización Bethel', ruta: '/bethel', badge: 'Disponible' },
    { nombre: 'Residencial La Paz', ruta: '/la-paz', badge: 'Nuevo' },
    { nombre: 'Urbanización San Miguel', ruta: '/san-miguel', badge: 'Agotado', agotado: true },
  ];

  const enlacesRapidos = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Sobre Nosotros', ruta: '/nosotros' },
    { nombre: 'Contacto & Citas', ruta: '/contacto' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm relative">
      {/* Banner Superior de Llamado a la Acción (CTA) */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white tracking-tight">
              ¿Listo para encontrar tu próximo hogar?
            </h4>
            <p className="text-xs text-slate-400">
              Asesoría personalizada en financiamiento bancario, primas y visitas en sitio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://wa.me/50581721759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/20"
            >
              <span>💬 Escribir a WhatsApp</span>
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700"
            >
              <span>Solicitar Cita</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Contenido Principal en 4 Columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Columna 1: Marca & Misión (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-black tracking-tight text-white">
                LUX <span className="text-blue-500">INMOBILIARIA</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Comprometidos en convertir tus sueños de hogar en una realidad palpable. Intermediación experta y acompañamiento transparente en los principales desarrollos residenciales de Managua.
            </p>
            
            {/* Redes Sociales */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/viveinmobiliariani.ivetteroman/?paipv=0&eav=AfZn-AEJbVpOhe1DI4w81i43zDwRPLpMaGSdhmslCkFivlKf5vZoF9SxECv_CxlEuQA&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook El Doral"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-400"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100063083988914"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook San Miguel"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-400"
              >
                <span className="text-[11px] font-black">SM</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100042617270715"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Bethel"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-400"
              >
                <span className="text-[11px] font-black">BT</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Proyectos (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">
              Desarrollos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {proyectos.map((proj, idx) => (
                <li key={idx}>
                  <Link
                    to={proj.ruta}
                    className="flex items-center justify-between group hover:text-white transition-colors"
                  >
                    <span>{proj.nombre}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        proj.agotado
                          ? 'bg-rose-950/70 text-rose-400 border border-rose-800/50'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-slate-700'
                      }`}
                    >
                      {proj.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Institucional (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {enlacesRapidos.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.ruta}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Atención & Asesores (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">
              Atención Directa
            </h4>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-500 block">Oficina Central</span>
                <span className="text-slate-300 font-medium">Managua, Nicaragua</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block">Correo Oficial</span>
                <a
                  href="mailto:luxinmobiliariani@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors font-medium break-all"
                >
                  luxinmobiliariani@gmail.com
                </a>
              </div>

              <div className="pt-1 space-y-2">
                <span className="text-[11px] text-slate-500 block">Líneas de Asesoría</span>
                <a
                  href="https://wa.me/50581721759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <span className="text-slate-300 font-medium">Nelson Orozco</span>
                  <span className="text-emerald-400 font-semibold">+505 8172 1759</span>
                </a>
                <a
                  href="https://wa.me/50584676193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <span className="text-slate-300 font-medium">Ivette Román</span>
                  <span className="text-emerald-400 font-semibold">+505 8467 6193</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Franja Inferior de Copyright */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lux Inmobiliaria NI. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/contacto" className="hover:text-slate-400 transition-colors">
              Términos & Asesoría
            </Link>
            <a href="mailto:luxinmobiliariani@gmail.com" className="hover:text-slate-400 transition-colors">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}