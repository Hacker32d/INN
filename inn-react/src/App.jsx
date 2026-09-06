import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importe de navegacion y componentes de páginas para la aplicación.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import ElDoral from './pages/ElDoral';           
import CasaDetalle from './pages/CasaDetalle';
import Bethel from './pages/Bethel';
import LaPaz from './pages/LaPaz';
import SanMiguel from './pages/SanMiguel';   


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/el-doral" element={<ElDoral />} />
            <Route path="/el-doral/:casaId" element={<CasaDetalle />} /> {/* Ruta dinámica */}
            <Route path="/bethel" element={<Bethel />} />
            <Route path="/san-miguel" element={<SanMiguel />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/la-paz" element={<LaPaz />} /> {/* Nueva ruta para La Paz */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}