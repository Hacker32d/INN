import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [dropdownProyectos, setDropdownProyectos] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const proyectos = [
    { nombre: 'Ciudad El Doral', ruta: '/el-doral', badge: 'Modelos' },
    { nombre: 'Urbanización Bethel', ruta: '/bethel', badge: 'Disponible' },
    { nombre: 'Residencial La Paz', ruta: '/la-paz', badge: 'Nuevo' },
    { nombre: 'Urbanización San Miguel', ruta: '/san-miguel', badge: 'Agotado', agotado: true },
  ];

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownProyectos(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false);
    setDropdownProyectos(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isProyectosActive = ['/el-doral', '/bethel', '/la-paz', '/san-miguel'].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo con Isotipo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-white shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            LUX <span className="text-blue-600">INMOBILIARIA</span>
          </span>
        </Link>

        {/* Menú Desktop (Limpio y Solo Enlaces) */}
        <div className="hidden md:flex items-center space-x-9 text-sm font-semibold tracking-wide text-slate-600">
          <Link
            to="/"
            className={`transition-colors py-2 relative ${
              isActive('/') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
            }`}
          >
            Inicio
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* Menú Desplegable Proyectos */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownProyectos(!dropdownProyectos)}
              onMouseEnter={() => setDropdownProyectos(true)}
              className={`flex items-center gap-1.5 py-2 transition-colors focus:outline-none ${
                isProyectosActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
              }`}
            >
              <span>Proyectos</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownProyectos ? 'rotate-180 text-blue-600' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownProyectos && (
              <div
                onMouseLeave={() => setDropdownProyectos(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {proyectos.map((proj, idx) => (
                  <Link
                    key={idx}
                    to={proj.ruta}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      isActive(proj.ruta)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{proj.nombre}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        proj.agotado
                          ? 'bg-rose-100 text-rose-600'
                          : proj.badge === 'Nuevo'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {proj.badge}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/nosotros"
            className={`transition-colors py-2 relative ${
              isActive('/nosotros') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
            }`}
          >
            Nosotros
            {isActive('/nosotros') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
            )}
          </Link>

          <Link
            to="/contacto"
            className={`transition-colors py-2 relative ${
              isActive('/contacto') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
            }`}
          >
            Contacto
            {isActive('/contacto') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
            )}
          </Link>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Alternar menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAbierto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú Móvil Centrado y Minimalista */}
      {menuAbierto && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-6 py-8 animate-in slide-in-from-top duration-300">
          <div className="max-w-xs mx-auto flex flex-col items-center text-center space-y-6">
            
            {/* Navegación Primaria */}
            <div className="flex flex-col items-center space-y-4 w-full">
              <Link
                to="/"
                className={`text-base font-bold transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                className={`text-base font-bold transition-colors ${
                  isActive('/nosotros') ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className={`text-base font-bold transition-colors ${
                  isActive('/contacto') ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                Contacto
              </Link>
            </div>

            <div className="w-16 h-px bg-slate-200" />

            {/* Lista Centrada de Proyectos */}
            <div className="w-full space-y-3">
              <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase block">
                Proyectos Residenciales
              </span>

              <div className="space-y-2">
                {proyectos.map((proj, idx) => (
                  <Link
                    key={idx}
                    to={proj.ruta}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      isActive(proj.ruta)
                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                        : 'bg-slate-50/80 border-slate-100 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{proj.nombre}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        proj.agotado
                          ? 'bg-rose-100 text-rose-600'
                          : proj.badge === 'Nuevo'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {proj.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}