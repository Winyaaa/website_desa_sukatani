import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Column 1: Branding & Identity */}
          <div className="flex flex-col gap-3 md:gap-4">
            <Link to="/" className="flex items-center gap-2 md:gap-3 text-xl md:text-3xl font-extrabold text-white group w-fit">
              <div className="group-hover:scale-105 transition-transform">
                <img src="/LOGO.png" alt="Logo Desa Sukatani" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </div>
              <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">Desa Sukatani</span>
            </Link>
            <p className="text-slate-400 mt-1 md:mt-2 leading-relaxed text-xs md:text-sm max-w-sm">
              Membangun desa IDAMAN: (INDAH, DAMAI, MAJU DAN AMANAH).
            </p>
          </div>

          {/* Column 2: Akses Cepat */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 relative inline-block">
              Akses Cepat
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Layanan Digital', path: '/layanan' },
                { name: 'Berita Terbaru', path: '/berita' },
                { name: 'Struktur Pemerintahan', path: '/pemerintahan' },
                { name: 'Potensi Desa', path: '/potensi' },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-slate-400 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 w-fit text-xs md:text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hover:bg-blue-400 transition-colors"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Kontak */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 relative inline-block">
              Kontak
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-4 md:gap-5 text-xs md:text-sm">
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="bg-slate-800 p-2 md:p-2.5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-slate-400 leading-relaxed pt-0.5 md:pt-1">
                  Jl. Raya Sukatani No. 12<br />Kecamatan Ngamprah, Kabupaten Bandung Barat<br />Jawa Barat 40552
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-slate-800 p-2 md:p-2.5 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone className="text-green-400 w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-slate-400 pt-0.5 md:pt-1">+62 822-8370-4925</p>
              </div>
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-slate-800 p-2 md:p-2.5 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                  <Mail className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-slate-400 pt-0.5 md:pt-1">dsukatani13@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 pt-8 mt-4">
          <p className="text-center text-slate-500 text-xs tracking-wide">
            &copy; 2026 Pemerintah Desa Sukatani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
