import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Info Marca */}
        <div className="space-y-3">
          <h3 className="text-white text-xl font-bold tracking-wide">INN</h3>
          <p className="text-sm text-slate-400">
            Desarrollos habitacionales con diseño moderno, seguridad y confort para toda la familia.
          </p>
        </div>

        {/* Proyectos */}
        <div>
          <h4 className="text-white font-semibold mb-3">Proyectos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/el-doral" className="hover:text-white transition-colors">Residencial El Doral</Link></li>
            <li><Link to="/bethel" className="hover:text-white transition-colors">Residencial Bethel</Link></li>
            <li><Link to="/san-miguel" className="hover:text-white transition-colors">Urbanización San Miguel</Link></li>
          </ul>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="text-white font-semibold mb-3">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">Atención</h4>
          <p className="text-sm text-slate-400">Lunes a Sábado: 8:00 AM - 5:00 PM</p>
          <p className="text-sm text-slate-400 mt-2">contacto@inn.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} INN Inmobiliaria. Todos los derechos reservados.
      </div>
    </footer>
  );
}