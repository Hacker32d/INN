import { Link } from 'react-router-dom';
import { casasDoral } from '../data/casaDoral';

export default function ElDoral() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner del Proyecto */}
      <section className="relative bg-slate-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10" />
        <img
          src="/img/ElDoral/sueno/Maqueta-Sueno.jpg"
          alt="Residencial Ciudad El Doral"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Residencial
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Ciudad El Doral
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Ubicación estratégica con acceso inmediato a servicios, transporte, seguridad 24/7 y modelos habitacionales diseñados a tu medida.
          </p>
        </div>
      </section>

      {/* Grid de Modelos Habitacionales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
            Catálogo de Viviendas
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Conoce Nuestros 6 Modelos
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Selecciona el modelo de tu preferencia para ver su ficha técnica completa, distribución y cotización directa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casasDoral.map((casa) => (
            <div
              key={casa.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={casa.imagen}
                    alt={casa.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/img/casa.jpg';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {casa.area}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {casa.subtitulo}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">
                    {casa.nombre}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
                    {casa.descripcion}
                  </p>

                  <div className="flex justify-between items-center py-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    <span>🛏️ {casa.habitaciones} Hab.</span>
                    <span>🚿 {casa.banos} Baños</span>
                    <span>📐 {casa.area}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/el-doral/${casa.id}`}
                  className="w-full text-center block bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  Ver Ficha del Modelo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios del Residencial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Ventajas de Vivir en Ciudad El Doral
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <span className="text-3xl block">👮</span>
              <h4 className="font-bold text-slate-900 text-sm">Garita de Seguridad</h4>
              <p className="text-xs text-slate-500">Control de acceso y vigilancia privada las 24 horas.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl block">🌳</span>
              <h4 className="font-bold text-slate-900 text-sm">Áreas Verdes</h4>
              <p className="text-xs text-slate-500">Parques infantiles y zonas de recreación al aire libre.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl block">🛣️</span>
              <h4 className="font-bold text-slate-900 text-sm">Calles Concreto</h4>
              <p className="text-xs text-slate-500">Vías pavimentadas de alta durabilidad y alumbrado público.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl block">💧</span>
              <h4 className="font-bold text-slate-900 text-sm">Servicios Propios</h4>
              <p className="text-xs text-slate-500">Red de agua potable continua y drenaje pluvial eficiente.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}