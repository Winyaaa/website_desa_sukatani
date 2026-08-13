import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/beranda';
import Profil from './pages/profil';
import Pemerintahan from './pages/pemerintahan';
import Potensi from './pages/potensi';
import Berita from './pages/berita';
import Agenda from './pages/agenda';
import Kontak from './pages/kontak';
import Layanan from './pages/layanan';
import Pengaduan from './pages/pengaduan';
import Chatbot from './pages/chatbot';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/pemerintahan" element={<Pemerintahan />} />
          <Route path="/potensi" element={<Potensi />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
