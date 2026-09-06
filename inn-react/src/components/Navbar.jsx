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

  // Cierra el dropdown si se hace clic afuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownProyectos(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cierra menús cuando cambia la ruta
  useEffect(() => {
    setMenuAbierto(false);
    setDropdownProyectos(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logotipo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            LUX <span className="text-blue-600">INMOBILIARIA</span>
          </span>
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden lg:flex items-center space-x-7 font-medium text-slate-600 text-sm">
          <Link
            to="/"
            className={`transition-colors py-2 ${isActive('/') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
          >
            Inicio
          </Link>

          {/* Menú Desplegable: Proyectos */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownProyectos(!dropdownProyectos)}
              onMouseEnter={() => setDropdownProyectos(true)}
              className={`flex items-center gap-1.5 py-2 transition-colors focus:outline-none ${
                ['/el-doral', '/bethel', '/la-paz', '/san-miguel'].includes(location.pathname)
                  ? 'text-blue-600 font-bold'
                  : 'hover:text-blue-600'
              }`}
            >
              <span>Proyectos</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${dropdownProyectos ? 'rotate-180 text-blue-600' : ''}`}
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
                className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
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
            className={`transition-colors py-2 ${isActive('/nosotros') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
          >
            Nosotros
          </Link>

          <Link
            to="/contacto"
            className={`transition-colors py-2 ${isActive('/contacto') ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
          >
            Contacto
          </Link>
        </div>

        {/* Accesos de Acción Rápida (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
    
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Alternar menú móvil"
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

      {/* Menú Desplegable Móvil */}
      {menuAbierto && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block py-2 text-sm font-semibold ${isActive('/') ? 'text-blue-600' : 'text-slate-800'}`}
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className={`block py-2 text-sm font-semibold ${isActive('/nosotros') ? 'text-blue-600' : 'text-slate-800'}`}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className={`block py-2 text-sm font-semibold ${isActive('/contacto') ? 'text-blue-600' : 'text-slate-800'}`}
            >
              Contacto
            </Link>
          </div>

          {/* Sección de Proyectos en Móvil */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase block">
              Proyectos Residenciales
            </span>
            <div className="space-y-1 pl-1">
              {proyectos.map((proj, idx) => (
                <Link
                  key={idx}
                  to={proj.ruta}
                  className="flex items-center justify-between py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  <span>{proj.nombre}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      proj.agotado ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {proj.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Botones de acción móvil */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href="https://wa.me/50581721759"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider"
            >
              <span>Atención por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}