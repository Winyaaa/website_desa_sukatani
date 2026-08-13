import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + "\n")

FILES = {
    "src/index.css": """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

:root {
  --primary: #10b981; /* Emerald green */
  --primary-dark: #059669;
  --secondary: #f59e0b; /* Amber */
  --bg-color: #f8fafc; /* light slate */
  --text-main: #1e293b;
  --text-muted: #64748b;
  --white: #ffffff;
  --black: #0f172a;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius: 0.75rem;
  --transition: all 0.3s ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: 'Inter', sans-serif;
  color: var(--text-main);
  background-color: var(--bg-color);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

/* Layout classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.page-wrapper {
  padding-top: 5rem;
  min-height: calc(100vh - 200px);
}

.section {
  padding: 5rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
}
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: var(--primary);
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

/* Components */
.card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  padding: 1.5rem;
  transition: var(--transition);
  border: 1px solid rgba(0,0,0,0.05);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: var(--transition);
}
.btn:hover {
  background-color: var(--primary-dark);
}
.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}
.btn-outline:hover {
  background-color: var(--primary);
  color: var(--white);
}

.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }

/* Flex utils */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

/* Text utils */
.text-center { text-align: center; }
.text-primary { color: var(--primary); }
.text-muted { color: var(--text-muted); }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

/* Hero section */
.hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2000&auto=format&fit=crop') center/cover;
}
.hero h1 {
  color: var(--white);
  font-size: 4rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 50;
  box-shadow: var(--shadow-sm);
  padding: 1rem 0;
}
.navbar .nav-links {
  display: flex;
  gap: 1.5rem;
}
.navbar .nav-links a {
  font-weight: 500;
  color: var(--text-main);
  transition: var(--transition);
}
.navbar .nav-links a:hover,
.navbar .nav-links a.active {
  color: var(--primary);
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--white);
  min-width: 200px;
  box-shadow: var(--shadow-md);
  z-index: 1;
  border-radius: var(--radius);
  overflow: hidden;
  top: 100%;
  left: 0;
}
.dropdown:hover .dropdown-content {
  display: block;
  animation: fadeIn 0.2s ease-out forwards;
}
.dropdown-content a {
  color: var(--text-main);
  padding: 12px 16px;
  display: block;
}
.dropdown-content a:hover {
  background-color: var(--bg-color);
  color: var(--primary);
}

/* Footer */
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 4rem 0 2rem;
  margin-top: auto;
}
.footer p, .footer a {
  color: #94a3b8;
}
.footer a:hover {
  color: var(--white);
}
.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #334155;
  color: #64748b;
}

/* Specific elements */
.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  object-fit: cover;
}
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
}
.map-container iframe {
  width: 100%;
  height: 400px;
  border-radius: var(--radius);
  border: none;
}
/* Stat Box */
.stat-box {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
}
.stat-box h3 {
  color: white;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

/* Video Wrapper */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  border-radius: var(--radius);
  overflow: hidden;
  margin-top: 1rem;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
""",
    "src/main.jsx": """
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
""",
    "src/App.jsx": """
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Sejarah from './pages/Sejarah';
import VisiMisi from './pages/VisiMisi';
import Pemerintahan from './pages/Pemerintahan';
import Potensi from './pages/Potensi';
import Berita from './pages/Berita';
import Agenda from './pages/Agenda';
import Kontak from './pages/Kontak';
import Layanan from './pages/Layanan';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/pemerintahan" element={<Pemerintahan />} />
          <Route path="/potensi" element={<Potensi />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/layanan" element={<Layanan />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
""",
    "src/components/Navbar.jsx": """
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Sejarah', path: '/sejarah' },
    { name: 'Visi Misi', path: '/visi-misi' },
    { name: 'Pemerintahan', path: '/pemerintahan' },
    { name: 'Potensi', path: '/potensi' },
    { name: 'Berita', path: '/berita' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Kontak', path: '/kontak' },
    { name: 'Layanan', path: '/layanan' },
  ];

  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Landmark className="text-primary" />
          Desa Sukatani
        </Link>
        <div className="nav-links">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
""",
    "src/components/Footer.jsx": """
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-3">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <Landmark className="text-primary" size={32} />
            Desa Sukatani
          </Link>
          <p>Membangun desa mandiri, berbudaya, dan sejahtera melalui inovasi dan gotong royong.</p>
        </div>
        <div>
          <h4 className="text-white">Akses Cepat</h4>
          <div className="flex flex-col gap-2">
            <Link to="/layanan">Layanan Digital</Link>
            <Link to="/berita">Berita Terbaru</Link>
            <Link to="/pemerintahan">Struktur Pemerintahan</Link>
            <Link to="/potensi">Potensi Desa</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white">Kontak</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <MapPin className="text-primary mt-1" size={20} />
              <p>Jl. Raya Sukatani No. 12<br/>Kecamatan Makmur, Kabupaten Gemilang<br/>Jawa Barat 40382</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={20} />
              <p>+62 812 3456 7890</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={20} />
              <p>info@sukatani.desa.id</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Pemerintah Desa Sukatani. All rights reserved.</p>
      </div>
    </footer>
  );
}
""",
    "src/pages/Home.jsx": """
import { ArrowRight, Users, Map, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Selamat Datang di<br/>Desa Sukatani</h1>
          <p>Mewujudkan desa yang mandiri, makmur, dan berbudaya dengan potensi alam yang melimpah serta masyarakat yang rukun.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/profil" className="btn">Kenali Lebih Jauh <ArrowRight size={18} /></Link>
            <Link to="/layanan" className="btn btn-outline">Layanan Desa</Link>
          </div>
        </div>
      </section>

      {/* Sambutan */}
      <section className="section bg-white">
        <div className="container grid-2 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=800&auto=format&fit=crop" alt="Kepala Desa" className="img-fluid" />
          </div>
          <div>
            <h2 className="text-primary">Sambutan Kepala Desa</h2>
            <h3 className="text-2xl font-bold mb-4">Membangun Sukatani Bersama</h3>
            <p className="text-muted mb-4">
              "Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. Website ini hadir sebagai wujud transparansi dan pelayanan optimal kami bagi warga Desa Sukatani. Kami berharap masyarakat bisa lebih mudah mengakses informasi, mengurus administrasi, serta mengetahui berbagai potensi desa yang kita cintai."
            </p>
            <p className="font-semibold">- Bpk. Ahmad Sudirman, Kepala Desa</p>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Statistik Desa</h2>
          <div className="grid-4">
            <div className="stat-box">
              <h3>4,250</h3>
              <p>Total Penduduk</p>
            </div>
            <div className="stat-box">
              <h3>12 / 4</h3>
              <p>RT / RW</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Dusun</p>
            </div>
            <div className="stat-box">
              <h3>215</h3>
              <p>Luas Wilayah (Ha)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pengumuman & Agenda Singkat */}
      <section className="section bg-white">
        <div className="container grid-2">
          <div>
            <h3 className="text-2xl mb-4 font-bold flex items-center gap-2"><Briefcase className="text-primary"/> Pengumuman Penting</h3>
            <div className="flex flex-col gap-4">
              <div className="card">
                <span className="text-sm text-primary font-semibold">03 Agustus 2026</span>
                <h4 className="mt-2 text-lg">Pendaftaran Bantuan Langsung Tunai (BLT) Tahap 3</h4>
                <p className="text-sm text-muted">Bagi warga yang terdaftar, harap membawa KTP dan KK ke kantor desa...</p>
              </div>
              <div className="card">
                <span className="text-sm text-primary font-semibold">28 Juli 2026</span>
                <h4 className="mt-2 text-lg">Pemadaman Listrik Bergilir</h4>
                <p className="text-sm text-muted">Akan ada pemadaman listrik di Dusun 1 pada pukul 09:00 - 12:00 WIB...</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-bold flex items-center gap-2"><Map className="text-primary"/> Agenda Terdekat</h3>
             <div className="flex flex-col gap-4">
              <div className="card flex items-center justify-between">
                <div>
                  <h4 className="text-lg">Posyandu Balita Bunga Mawar</h4>
                  <p className="text-sm text-muted">05 Agustus 2026 • Balaidesa</p>
                </div>
                <ChevronRight className="text-muted" />
              </div>
              <div className="card flex items-center justify-between">
                <div>
                  <h4 className="text-lg">Kerja Bakti Bersih Desa</h4>
                  <p className="text-sm text-muted">08 Agustus 2026 • Seluruh Wilayah</p>
                </div>
                <ChevronRight className="text-muted" />
              </div>
              <div className="card flex items-center justify-between">
                <div>
                  <h4 className="text-lg">Musyawarah Desa (Musdes)</h4>
                  <p className="text-sm text-muted">12 Agustus 2026 • Aula Kantor Desa</p>
                </div>
                <ChevronRight className="text-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
""",
    "src/pages/Profil.jsx": """
import { Map, Users, Target, Activity } from 'lucide-react';

export default function Profil() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Profil Desa Sukatani</h1>
      
      <div className="grid-2">
        <div className="card">
          <h2 className="flex items-center gap-2 text-xl mb-6"><Target className="text-primary" /> Identitas Desa</h2>
          <ul className="flex flex-col gap-3 text-muted">
            <li><strong>Nama Desa:</strong> Sukatani</li>
            <li><strong>Kecamatan:</strong> Makmur</li>
            <li><strong>Kabupaten/Kota:</strong> Gemilang</li>
            <li><strong>Provinsi:</strong> Jawa Barat</li>
            <li><strong>Kode Pos:</strong> 40382</li>
            <li><strong>Tahun Pembentukan:</strong> 1985</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="flex items-center gap-2 text-xl mb-6"><Map className="text-primary" /> Geografi & Wilayah</h2>
          <ul className="flex flex-col gap-3 text-muted">
            <li><strong>Luas Wilayah:</strong> 215 Hektar</li>
            <li><strong>Topografi:</strong> Dataran Rendah / Perbukitan</li>
            <li><strong>Batas Utara:</strong> Desa Karangmekar</li>
            <li><strong>Batas Selatan:</strong> Desa Jatisari</li>
            <li><strong>Batas Timur:</strong> Sungai Cimanuk</li>
            <li><strong>Batas Barat:</strong> Hutan Lindung Gunung Pulosari</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid-2">
        <div className="card">
           <h2 className="flex items-center gap-2 text-xl mb-6"><Users className="text-primary" /> Demografi Penduduk</h2>
           <p className="text-muted mb-4">Berdasarkan data terakhir tahun 2026, Desa Sukatani memiliki populasi yang tersebar di 3 dusun utama.</p>
           <ul className="flex flex-col gap-3 text-muted">
            <li><strong>Total Penduduk:</strong> 4,250 Jiwa</li>
            <li><strong>Laki-laki:</strong> 2,100 Jiwa</li>
            <li><strong>Perempuan:</strong> 2,150 Jiwa</li>
            <li><strong>Jumlah Kepala Keluarga (KK):</strong> 1,120 KK</li>
          </ul>
        </div>

        <div className="card">
           <h2 className="flex items-center gap-2 text-xl mb-6"><Activity className="text-primary" /> Mata Pencaharian</h2>
           <div className="flex flex-col gap-4 text-muted">
             <div>
               <div className="flex justify-between mb-1"><span>Petani (40%)</span><span>1,700 Jiwa</span></div>
               <div style={{background: '#e2e8f0', borderRadius: '999px', height: '8px'}}><div style={{width: '40%', background: 'var(--primary)', height: '100%', borderRadius: '999px'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between mb-1"><span>Wiraswasta / Pedagang (25%)</span><span>1,062 Jiwa</span></div>
               <div style={{background: '#e2e8f0', borderRadius: '999px', height: '8px'}}><div style={{width: '25%', background: '#3b82f6', height: '100%', borderRadius: '999px'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between mb-1"><span>PNS / TNI / Polri (15%)</span><span>637 Jiwa</span></div>
               <div style={{background: '#e2e8f0', borderRadius: '999px', height: '8px'}}><div style={{width: '15%', background: '#f59e0b', height: '100%', borderRadius: '999px'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between mb-1"><span>Buruh / Lainnya (20%)</span><span>851 Jiwa</span></div>
               <div style={{background: '#e2e8f0', borderRadius: '999px', height: '8px'}}><div style={{width: '20%', background: '#ef4444', height: '100%', borderRadius: '999px'}}></div></div>
             </div>
           </div>
        </div>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl mb-4">Peta Desa</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x2e6f43e5db9990bd%3A0xe7a5d9df967d7a86!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}
""",
    "src/pages/Sejarah.jsx": """
export default function Sejarah() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Sejarah Desa</h1>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1590059345244-6eabaeb2a0ea?q=80&w=1200&auto=format&fit=crop" alt="Sejarah Desa" className="img-fluid mb-6" style={{maxHeight: '400px', width: '100%'}}/>
        <h2 className="text-2xl mb-4">Asal-Usul Nama "Sukatani"</h2>
        <p className="text-muted mb-6">
          Nama "Sukatani" berasal dari dua suku kata, yaitu "Suka" yang berarti senang atau gemar, dan "Tani" yang berarti bertani atau bercocok tanam. Konon, para pendiri desa ini adalah sekumpulan petani yang sangat mencintai pekerjaannya dan wilayah ini memang dianugerahi tanah yang sangat subur. Mereka menamai wilayah ini Sukatani dengan doa agar penduduknya akan selalu hidup makmur dari hasil pertanian.
        </p>
        
        <h2 className="text-2xl mb-4">Sejarah Berdirinya Desa</h2>
        <p className="text-muted mb-4">
          Menurut tetua adat, Desa Sukatani berdiri sekitar tahun 1920-an, pada masa penjajahan Belanda. Saat itu, beberapa keluarga pelarian dari daerah pesisir yang mencari tempat aman mendirikan pemukiman di kaki bukit yang kini menjadi pusat desa. Pemukiman ini awalnya dipimpin oleh seorang tokoh karismatik bernama Ki Ageng Pemanahan.
        </p>
        <p className="text-muted">
          Setelah kemerdekaan Indonesia, pemukiman yang mulai berkembang berstatus menjadi sebuah dusun kecil yang bernaung di bawah Desa Karangmekar. Namun, karena populasi yang terus bertambah pesat dan jarak yang cukup jauh dari pusat pemerintahan Karangmekar, masyarakat menginisiasi pemekaran desa. Pada tahun 1985, Desa Sukatani resmi berdiri sendiri sebagai entitas pemerintahan setingkat desa dengan kepala desa pertamanya adalah Bapak H. Kartawijaya.
        </p>
      </div>
    </div>
  );
}
""",
    "src/pages/VisiMisi.jsx": """
import { Target, Zap, CheckCircle2 } from 'lucide-react';

export default function VisiMisi() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Visi & Misi</h1>
      
      <div className="card text-center mb-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <Target className="text-primary mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold mb-4">Visi Desa</h2>
        <p className="text-xl italic text-muted max-w-3xl mx-auto">
          "Terwujudnya Desa Sukatani yang Mandiri, Sejahtera, Berbudaya, dan Berakhlak Mulia melalui Tata Kelola Pemerintahan yang Bersih dan Inovatif pada tahun 2030."
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2 className="flex items-center gap-2 text-2xl mb-6"><Zap className="text-secondary" /> Misi Desa</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan kesehatan.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p>Mengembangkan ekonomi kerakyatan berbasis agrikultur dan UMKM.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p>Mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan berbasis digital.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p>Melestarikan nilai-nilai budaya dan gotong royong di masyarakat.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p>Meningkatkan pembangunan infrastruktur yang merata dan ramah lingkungan.</p>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="flex items-center gap-2 text-2xl mb-6"><Target className="text-secondary" /> Program Prioritas</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">01</span>
              <div>
                <h4 className="font-bold">Digitalisasi Pelayanan Desa</h4>
                <p className="text-sm text-muted">Pembuatan sistem informasi mandiri dan chatbot layanan 24 jam.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">02</span>
              <div>
                <h4 className="font-bold">Agrowisata Terpadu</h4>
                <p className="text-sm text-muted">Membangun kawasan wisata edukasi pertanian untuk meningkatkan PADes.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">03</span>
              <div>
                <h4 className="font-bold">Generasi Sehat Anti Stunting</h4>
                <p className="text-sm text-muted">Program pemberian makanan tambahan rutin dan edukasi gizi untuk balita dan ibu hamil.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
""",
    "src/pages/Pemerintahan.jsx": """
import React, { useState } from 'react';

const staffData = [
  {
    name: "Ahmad Sudirman",
    role: "Kepala Desa",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    tugas: "Memimpin penyelenggaraan pemerintahan desa, pelaksana pembangunan desa, pembinaan kemasyarakatan desa, dan pemberdayaan masyarakat desa.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    name: "Budi Santoso",
    role: "Sekretaris Desa",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    tugas: "Membantu Kepala Desa dalam bidang administrasi pemerintahan serta memberikan pelayanan teknis administrasi seluruh perangkat desa.",
    videoId: "M7lc1UVf-VE"
  },
  {
    name: "Sri Wahyuni",
    role: "Kaur Keuangan",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    tugas: "Melaksanakan urusan keuangan seperti pengumpulan penerimaan dan pengeluaran kas desa, serta tata usaha keuangan.",
    videoId: "jNQXAC9IVRw"
  },
  {
    name: "Ridwan Kamil",
    role: "Kasi Pemerintahan",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    tugas: "Membantu Kepala Desa sebagai pelaksana tugas operasional di bidang pemerintahan desa.",
    videoId: "dQw4w9WgXcQ"
  },
];

export default function Pemerintahan() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Struktur Pemerintahan</h1>
      
      <div className="card mb-12 text-center">
        <h2 className="text-2xl mb-4">Bagan Struktur Organisasi</h2>
        <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Struktur Organisasi" className="img-fluid opacity-50" style={{maxHeight:'300px'}} />
        <p className="text-sm text-muted mt-2">Bagan hierarki pemerintah Desa Sukatani Tahun 2026</p>
      </div>

      <h2 className="text-2xl text-center mb-8 font-bold">Perangkat Desa</h2>
      <div className="grid-4">
        {staffData.map((staff, index) => (
          <div key={index} className="card text-center relative">
            <img src={staff.img} alt={staff.name} className="profile-img" />
            <h3 className="text-lg font-bold mb-1">{staff.name}</h3>
            <p className="text-sm text-primary font-semibold mb-3">{staff.role}</p>
            <p className="text-xs text-muted mb-4 leading-relaxed">{staff.tugas}</p>
            <button 
              className="btn btn-outline" style={{padding: '0.25rem 1rem', fontSize: '0.875rem', width: '100%', justifyContent: 'center'}}
              onClick={() => setSelectedVideo(staff.videoId)}
            >
              Lihat Profil Video
            </button>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }} onClick={() => setSelectedVideo(null)}>
           <div style={{width: '90%', maxWidth: '800px', backgroundColor: '#000', padding: '1rem', borderRadius: '1rem', position: 'relative'}} onClick={e => e.stopPropagation()}>
              <button 
                style={{position: 'absolute', top: '-1rem', right: '-1rem', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.5rem', cursor: 'pointer'}}
                onClick={() => setSelectedVideo(null)}
              >×</button>
              <div className="video-wrapper">
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                  title="YouTube video player" frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
           </div>
        </div>
      )}

      <div className="card mt-12 text-center bg-gray-50">
        <h2 className="text-xl mb-2">Kontak Kantor Desa</h2>
        <p className="text-muted">Untuk keperluan administratif, Anda dapat menghubungi atau mendatangi kantor kami:</p>
        <p className="mt-4 text-lg font-bold">Telp: (022) 123456</p>
        <p>Email: admin@sukatani.desa.id</p>
      </div>
    </div>
  );
}
""",
    "src/pages/Potensi.jsx": """
import React, { useState } from 'react';
import { Camera, Music, Sprout, Building, MapPin } from 'lucide-react';

export default function Potensi() {
  const [activeTab, setActiveTab] = useState('wisata');

  const tabs = [
    { id: 'wisata', label: 'Wisata', icon: Camera },
    { id: 'budaya', label: 'Kesenian & Budaya', icon: Music },
    { id: 'pertanian', label: 'Pertanian & Peternakan', icon: Sprout },
    { id: 'fasilitas', label: 'Fasilitas Umum', icon: Building },
  ];

  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Potensi Desa</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4" style={{borderBottom: '1px solid #e2e8f0'}}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
              onClick={() => setActiveTab(tab.id)}
              style={{whiteSpace: 'nowrap', border: 'none', background: 'transparent', borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', fontSize: '1rem'}}
            >
              <Icon size={20} />
              {tab.label}
            </button>
          )
        })}
        <button
           className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all ${activeTab === 'galeri' ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
           onClick={() => setActiveTab('galeri')}
           style={{whiteSpace: 'nowrap', border: 'none', background: 'transparent', borderBottom: activeTab === 'galeri' ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', fontSize: '1rem'}}
        >
          <Camera size={20} /> Galeri Desa
        </button>
      </div>

      <div className="mt-8">
        {activeTab === 'wisata' && (
          <div className="grid-2 animate-fade-in">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?w=600&q=80" alt="Curug" className="img-fluid mb-4" />
              <h3 className="text-2xl mb-2">Curug Bidadari Sukatani</h3>
              <p className="text-muted mb-4">Air terjun alami dengan ketinggian 20 meter di kawasan hutan lindung desa. Sangat cocok untuk wisata keluarga dan pecinta alam.</p>
              <ul className="text-sm flex flex-col gap-2 mb-4">
                <li><strong>Harga Tiket:</strong> Rp 10.000 / orang</li>
                <li><strong>Jam Buka:</strong> 08:00 - 17:00 WIB</li>
                <li><strong>Fasilitas:</strong> Area Parkir, Toilet, Gajebo, Warung Makan</li>
              </ul>
              <a href="#" className="flex items-center gap-1 text-primary hover:underline font-semibold text-sm">
                <MapPin size={16} /> Lihat di Google Maps
              </a>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1628131301918-dc29bcfae94d?w=600&q=80" alt="Agrowisata" className="img-fluid mb-4" />
              <h3 className="text-2xl mb-2">Agrowisata Petik Jeruk</h3>
              <p className="text-muted mb-4">Nikmati sensasi memetik buah jeruk langsung dari pohonnya di lahan seluas 2 hektar milik kelompok tani desa.</p>
              <ul className="text-sm flex flex-col gap-2 mb-4">
                <li><strong>Harga Tiket:</strong> Gratis (Hanya bayar buah yang dipetik: Rp 15.000/kg)</li>
                <li><strong>Jam Buka:</strong> 09:00 - 16:00 WIB (Akhir Pekan)</li>
                <li><strong>Fasilitas:</strong> Area Istirahat, Spot Foto, Edukasi Pertanian</li>
              </ul>
               <a href="#" className="flex items-center gap-1 text-primary hover:underline font-semibold text-sm">
                <MapPin size={16} /> Lihat di Google Maps
              </a>
            </div>
          </div>
        )}

        {activeTab === 'budaya' && (
          <div className="grid-2 animate-fade-in">
            <div className="card">
               <img src="https://images.unsplash.com/photo-1542318047-9755abfcad55?w=600&q=80" alt="Seni Tari" className="img-fluid mb-4" />
               <h3 className="text-2xl mb-2">Sanggar Seni Sari Sunda</h3>
               <p className="text-muted mb-4">Sanggar tari tradisional yang membina anak-anak dan remaja desa. Menampilkan Tari Jaipong dan Merak pada setiap perayaan adat.</p>
               <p className="text-sm"><strong>Event Budaya:</strong> Pertunjukan rutin setiap bulan purnama (Purnama Manggung).</p>
            </div>
            <div className="card">
               <img src="https://images.unsplash.com/photo-1555617066-6084ac9108b9?w=600&q=80" alt="Upacara Adat" className="img-fluid mb-4" />
               <h3 className="text-2xl mb-2">Upacara Seren Taun (Panen Raya)</h3>
               <p className="text-muted mb-4">Upacara adat sunda syukur panen yang dilaksanakan setiap tahun oleh kelompok tani. Melibatkan seluruh elemen masyarakat dengan pawai dongdang.</p>
               <p className="text-sm"><strong>Dokumentasi:</strong> Video dokumenter dapat dilihat di Galeri Desa.</p>
            </div>
          </div>
        )}

        {activeTab === 'pertanian' && (
          <div className="grid-3 animate-fade-in">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&q=80" alt="Padi" className="img-fluid mb-4" />
              <h3 className="text-xl mb-1">Padi Unggul (Inpari 32)</h3>
              <p className="text-sm text-primary mb-2 font-semibold">Komoditas Pertanian</p>
              <p className="text-sm text-muted">Hasil panen mencapai 7-8 ton per hektar. Dikelola oleh Kelompok Tani 'Maju Bersama' dengan penerapan teknologi tanam jajar legowo.</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1577785055416-654ed2752179?w=400&q=80" alt="Sapi" className="img-fluid mb-4" />
              <h3 className="text-xl mb-1">Sapi Perah</h3>
              <p className="text-sm text-primary mb-2 font-semibold">Komoditas Peternakan</p>
              <p className="text-sm text-muted">Produksi susu segar mencapai 500 liter per hari disetor ke KUD setempat. Dikelola kelompok peternak 'Suka Mulya'.</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1595806654203-dadd36279f06?w=400&q=80" alt="Sayuran" className="img-fluid mb-4" />
              <h3 className="text-xl mb-1">Sayuran Organik (Greenhouse)</h3>
              <p className="text-sm text-primary mb-2 font-semibold">Teknologi Pertanian Budidaya</p>
              <p className="text-sm text-muted">Penggunaan metode hidroponik dan greenhouse oleh Karang Taruna untuk selada, pakcoy, dan tomat ceri.</p>
            </div>
          </div>
        )}

        {activeTab === 'fasilitas' && (
           <div className="grid-4 animate-fade-in">
             {['Kantor Desa', 'Posyandu Teratai', 'SD Negeri 1 Sukatani', 'Masjid Jami Al-Ikhlas', 'Puskesmas Pembantu', 'Lapangan Olahraga', 'Balai Desa'].map((fasilitas, i) => (
                <div key={i} className="card text-center hover:bg-green-50 transition-colors">
                  <Building className="mx-auto mb-2 text-primary" size={32} />
                  <h4 className="font-bold">{fasilitas}</h4>
                  <a href="#" className="text-xs text-primary mt-2 block hover:underline">Lihat di Peta</a>
                </div>
             ))}
           </div>
        )}

        {activeTab === 'galeri' && (
          <div className="animate-fade-in">
             <h2 className="text-2xl mb-4 border-l-4 border-primary pl-3">Foto Album Kegiatan</h2>
             <div className="grid-4 mb-8">
               <img src="https://images.unsplash.com/photo-1555617066-6084ac9108b9?w=300&q=80" className="img-fluid hover:scale-105 transition-transform" />
               <img src="https://images.unsplash.com/photo-1628131301918-dc29bcfae94d?w=300&q=80" className="img-fluid hover:scale-105 transition-transform" />
               <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?w=300&q=80" className="img-fluid hover:scale-105 transition-transform" />
               <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=300&q=80" className="img-fluid hover:scale-105 transition-transform" />
             </div>
             
             <h2 className="text-2xl mb-4 border-l-4 border-primary pl-3">Dokumentasi Pembangunan</h2>
             <div className="grid-2">
               <div className="card">
                 <h4 className="mb-2">Pembangunan Irigasi Dusun 2</h4>
                 <div className="video-wrapper">
                  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen></iframe>
                 </div>
               </div>
               <div className="card">
                 <h4 className="mb-2">Peresmian Gedung BUMDes</h4>
                  <div className="video-wrapper">
                  <iframe src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video" allowFullScreen></iframe>
                 </div>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
""",
    "src/pages/Berita.jsx": """
import { Calendar, User } from 'lucide-react';

const berita = [
  { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", title: "Rapat Koordinasi Persiapan HUT RI ke-81 Tingkat Desa", date: "02 Agustus 2026", author: "Admin Desa", category: "Berita Terbaru" },
  { img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80", title: "Panen Raya Padi Inpari 32 Berjalan Sukses", date: "28 Juli 2026", author: "Tim Jurnalis Desa", category: "Artikel Desa" },
  { img: "https://images.unsplash.com/photo-1555617066-6084ac9108b9?w=600&q=80", title: "Penyaluran Bantuan Sembako bagi Lansia Tahap 2", date: "25 Juli 2026", author: "Kaur Kesra", category: "Kegiatan Masyarakat" },
];

export default function Berita() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Berita & Pengumuman</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-6">
          {berita.map((item, i) => (
            <div key={i} className="card flex flex-col md:flex-row gap-6 p-0 overflow-hidden">
               <img src={item.img} alt={item.title} className="w-full md:w-1/3 object-cover h-48 md:h-auto" style={{maxWidth: '300px'}} />
               <div className="p-6 flex flex-col justify-center">
                 <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{item.category}</span>
                 <h2 className="text-xl mb-3 hover:text-primary cursor-pointer transition-colors">{item.title}</h2>
                 <div className="flex items-center gap-4 text-sm text-muted mb-4">
                   <span className="flex items-center gap-1"><Calendar size={14}/> {item.date}</span>
                   <span className="flex items-center gap-1"><User size={14}/> {item.author}</span>
                 </div>
                 <p className="text-muted text-sm line-clamp-2">Pemerintah Desa Sukatani terus berupaya memberikan informasi terkini mengenai kegiatan masyarakat dan pemerintahan desa secara cepat dan transparan...</p>
                 <button className="text-primary font-bold text-sm mt-4 text-left hover:underline">Baca Selengkapnya &rarr;</button>
               </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="card mb-6">
            <h3 className="text-xl mb-4 border-b pb-2">Pengumuman Resmi</h3>
            <div className="flex flex-col gap-4">
               <div>
                 <p className="text-xs text-muted mb-1">03 Agu 2026</p>
                 <a href="#" className="font-semibold hover:text-primary">Pendaftaran Bantuan Langsung Tunai (BLT) Tahap 3</a>
               </div>
               <div>
                 <p className="text-xs text-muted mb-1">28 Jul 2026</p>
                 <a href="#" className="font-semibold hover:text-primary">Pemadaman Listrik Bergilir Dusun 1</a>
               </div>
               <div>
                 <p className="text-xs text-muted mb-1">15 Jul 2026</p>
                 <a href="#" className="font-semibold hover:text-primary">Lelang Pembangunan Jalan Desa Tahun 2026</a>
               </div>
            </div>
          </div>
          
          <div className="card">
             <h3 className="text-xl mb-4 border-b pb-2">Kategori</h3>
             <ul className="flex flex-col gap-2 text-muted">
               <li><a href="#" className="hover:text-primary flex justify-between"><span>Berita Terbaru</span> <span>(12)</span></a></li>
               <li><a href="#" className="hover:text-primary flex justify-between"><span>Artikel Desa</span> <span>(8)</span></a></li>
               <li><a href="#" className="hover:text-primary flex justify-between"><span>Pengumuman</span> <span>(15)</span></a></li>
               <li><a href="#" className="hover:text-primary flex justify-between"><span>Kegiatan Masyarakat</span> <span>(24)</span></a></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
"""
}

for path, content in FILES.items():
    create_file(path, content)

print("Files generated successfully.")
