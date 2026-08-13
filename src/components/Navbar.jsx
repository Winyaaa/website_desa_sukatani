import { Link, useLocation } from 'react-router-dom';
import { Landmark, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Tutup menu saat halaman di-scroll atau route berpindah
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Pemerintahan', path: '/pemerintahan' },
    { name: 'Potensi', path: '/potensi' },
    { name: 'Berita', path: '/berita' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Kontak', path: '/kontak' },
    { name: 'Layanan', path: '/layanan' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg z-50 border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-2.5 md:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent transform transition hover:scale-105">
          <img src="/LOGO.png" alt="Logo Desa Sukatani" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          Desa Sukatani
        </Link>

        {/* ACTION BUTTONS (GELAP TERANG & MENU) */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-6 mr-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-green-500 hover:scale-105 ${location.pathname === item.path ? 'text-blue-600 font-bold' : 'text-foreground/80'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 transition-all border border-border shadow-sm outline-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 md:w-5 md:h-5" /> : <Sun className="w-4 h-4 md:w-5 md:h-5" />}
          </button>

          {/* TOMBOL MENU HP (HAMBURGER / TITIK TIGA) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 md:p-2 rounded-lg md:rounded-xl bg-secondary text-foreground hover:bg-primary/20 transition-all border border-border shadow-sm outline-none cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* DROPDOWN MENU KHUSUS HP (Diperkecil / Floating Card) */}
      <div
        className={`md:hidden absolute top-[110%] right-4 w-56 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right z-[999] ${isMobileMenuOpen ? 'scale-100 opacity-100 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.2)]' : 'scale-95 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 ${location.pathname === item.path
                ? 'bg-blue-500/10 text-blue-600'
                : 'text-foreground hover:bg-secondary/80'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
