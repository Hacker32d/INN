import { useParams, Link } from 'react-router-dom';
import { casasDoral } from '../data/casaDoral';

export default function CasaDetalle() {
  const { casaId } = useParams();
  const casa = casasDoral.find((item) => item.id === casaId);

  if (!casa) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Modelo no encontrado</h2>
        <p className="text-slate-500 text-sm mt-2">El modelo seleccionado no existe o no se encuentra disponible.</p>
        <Link
          to="/el-doral"
          className="mt-6 bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Volver a El Doral
        </Link>
      </div>
    );
  }

  const mensajeWs = encodeURIComponent(
    `Hola, me gustaría recibir más información y asesoría sobre el ${casa.nombre} en Residencial Ciudad El Doral.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enlace de regreso */}
        <Link
          to="/el-doral"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-8"
        >
          <span>←</span> Volver al catálogo de El Doral
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Imagen Principal */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={casa.imagen}
                alt={casa.nombre}
                className="w-full h-[380px] sm:h-[460px] object-cover"
                onError={(e) => {
                  e.target.src = '/img/casa.jpg';
                }}
              />
            </div>
          </div>

          {/* Ficha Técnica y Cotizador */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Ciudad El Doral
                </span>
                <h1 className="text-3xl font-black text-slate-900 mt-2">
                  {casa.nombre}
                </h1>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {casa.subtitulo}
                </p>
              </div>

              {/* Métricas clave */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100 text-center">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-400 font-semibold uppercase">Cuartos</span>
                  <span className="text-base font-bold text-slate-800">🛏️ {casa.habitaciones}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-400 font-semibold uppercase">Baños</span>
                  <span className="text-base font-bold text-slate-800">🚿 {casa.banos}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-400 font-semibold uppercase">Área</span>
                  <span className="text-base font-bold text-slate-800">📐 {casa.area}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Descripción del Modelo</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {casa.descripcion}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Distribución y Acabados</h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {casa.caracteristicas.map((caract, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      {caract}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/50576623177?text=${mensajeWs}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 text-sm uppercase tracking-wider"
              >
                <span>💬 Consultar este Modelo</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}