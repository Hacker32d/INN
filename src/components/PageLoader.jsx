// src/components/PageLoader.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Activa el loader al cambiar de ruta
    setLoading(true);

    // Tiempo de exhibición (350ms da una sensación premium sin frustrar al usuario)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <aside
      aria-label="Cargando contenido"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
    >
      <div className="relative flex items-center justify-center">
        {/* Rueda exterior suave */}
        <div className="w-16 h-16 rounded-full border-4 border-slate-800 animate-pulse" />
        
        {/* Rueda giratoria de carga con degradado/borde verde y azul */}
        <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-t-emerald-500 border-r-blue-500 animate-spin" />
        
        {/* Punto central de pulso */}
        <div className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
      </div>

      {/* Texto sutil */}
      <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-slate-300 animate-pulse">
        Cargando...
      </p>
    </aside>
  );
}