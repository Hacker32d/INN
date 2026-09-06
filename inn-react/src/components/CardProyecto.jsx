import { Link } from 'react-router-dom';

export default function CardProyecto({ titulo, descripcion, imagen, ruta, caracteristicas }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white tracking-wide">
          {titulo}
        </h3>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {descripcion}
          </p>

          {caracteristicas && caracteristicas.length > 0 && (
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-6 font-medium">
              {caracteristicas.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          to={ruta}
          className="w-full text-center bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-colors duration-200"
        >
          Ver Modelos
        </Link>
      </div>
    </div>
  );
}