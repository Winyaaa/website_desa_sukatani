import { ArrowRight, MessageSquare, FileText, Globe, Shield, PhoneCall, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SejarahTampilan from './sejarah/SejarahTampilan';
import VisiMisiTampilan from './visiMisi/VisiMisiTampilan';
import {
  sambutanIsi,
} from './berandaIsi';

export default function BerandaTampilan() {
  const localServices = [
    { title: 'Layanan Administrasi', desc: 'Pembuatan KK, KTP, dan Akta Kelahiran.', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10', path: '/layanan' },
    { title: 'Informasi Publik', desc: 'Akses transparansi dana dan kebijakan desa.', icon: Globe, color: 'text-green-500', bg: 'bg-green-500/10', path: '/berita' },
    { title: 'Keamanan Lingkungan', desc: 'Layanan pelaporan keamanan dan ketertiban.', icon: Shield, color: 'text-yellow-500', bg: 'bg-yellow-500/10', path: '/layanan' },
    { title: 'Layanan Pengaduan', desc: 'Sampaikan kritik dan saran secara langsung.', icon: PhoneCall, color: 'text-red-500', bg: 'bg-red-500/10', path: '/pengaduan' },
  ];

  return (
    <div className="animate-fade-in relative">

      {/* Announcement Bar */}
      <div className="bg-red-600 text-white py-2 px-4 shadow-md w-full overflow-hidden flex items-center mt-[72px]">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: inline-block;
              white-space: nowrap;
              animation: marquee 20s linear infinite;
            }
          `}
        </style>
        <div className="w-full">
          <div className="animate-marquee text-sm md:text-base font-bold">
            <span className="text-yellow-300 mr-2 uppercase">⚠️ Pengumuman Peringatan Bencana:</span>
            Masyarakat diimbau waspada terhadap potensi bencana. Hubungi BPBD Kabupaten Bandung Barat di nomor: 0877-1661-2121 untuk laporan darurat atau jika membutuhkan evakuasi.
          </div>
        </div>
      </div>

      {/* 1. Top Banner (Hero) dengan background Sawah.jpg */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex justify-center items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/sawah.jpg"
            alt="Sawah Desa Sukatani"
            className="w-full h-full object-cover select-none pointer-events-none focus:outline-none"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e0d11?auto=format&fit=crop&q=80&w=2000"; }}
          />
          {/* Overlay gelap untuk kontras teks */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 mb-4 md:mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm font-medium tracking-wide text-xs md:text-base">
            Portal Resmi Pemerintahan
          </div>
          <h1 className="text-3xl md:text-7xl font-extrabold text-white tracking-tight mb-3 md:mb-4 drop-shadow-xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Selamat Datang di <br /> <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Desa Sukatani</span>
          </h1>
          <p className="text-sm md:text-2xl text-slate-200 mt-2 font-medium max-w-2xl drop-shadow-lg shadow-black">
            IDAMAN (INDAH, DAMAI, MAJU DAN AMANAH)
          </p>
        </div>
      </section>

      {/* 2. Main Content Section (Restructured - Sambutan) */}
      <section className="py-12 md:py-24 bg-background relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="premium-card bg-card p-6 md:p-16 mx-auto max-w-6xl shadow-xl border-border flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-center">

            {/* Left Column: Avatar */}
            <div className="w-full md:w-5/12 flex justify-center shrink-0">
              <div className="relative group perspective">
                <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 md:border-8 border-background shadow-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
                  <img src="/kepaladesa.png" alt="Kepala Desa Sukatani" className="w-full h-full object-contain focus:outline-none" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"; }} />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)] md:shadow-[inset_0_-20px_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 w-fit mb-4 mx-auto md:mx-0">
                <span className="font-bold text-[10px] md:text-sm tracking-widest uppercase">Sambutan Kepala Desa</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight">
                Membangun Sukatani <span className="text-primary">Bersama</span>
              </h2>
              <div className="relative">
                <span className="absolute -left-2 md:-left-6 top-0 md:-top-4 text-4xl md:text-6xl text-primary/20 font-serif">"</span>
                <p className="text-xs md:text-lg text-muted/90 leading-relaxed max-w-2xl font-medium relative z-10 italic">
                  {sambutanIsi.kutipan || "Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. Website ini hadir sebagai wujud transparansi dan pelayanan optimal kami bagi warga Desa Sukatani. Kami berharap masyarakat bisa lebih mudah mengakses informasi, mengurus administrasi, serta mengetahui berbagai potensi desa yang kita cintai."}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{sambutanIsi.nama || "Dede Supriadi"}</h3>
                  <p className="text-primary font-medium">{sambutanIsi.jabatan || "Kepala Desa Sukatani"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Sejarah Desa */}
      <SejarahTampilan />

      {/* 4. Visi & Misi */}
      <VisiMisiTampilan />

      {/* 5. Professional Cards for Local Services */}
      <section className="section bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-2">Akses Cepat</h2>
            <h3 className="section-title !mb-0">Layanan Desa</h3>
            <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">Kami menyediakan beberapa layanan unggulan untuk mempermudah administrasi dan pelaporan mandiri bagi masyarakat Desa Sukatani.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link to={service.path} key={idx} className="premium-card bg-card p-5 md:p-8 group flex flex-col items-start border border-border hover:border-primary/30">
                  <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 ${service.bg} ${service.color} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{service.title}</h4>
                  <p className="text-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-1">{service.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-primary font-bold text-[10px] md:text-sm w-full group-hover:gap-4 transition-all">
                    Selengkapnya <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Chatbot Widget Bubble */}
      <Link to="/chatbot" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group">
        <div className="relative">
          {/* Notification ping */}
          <span className="absolute top-0 right-0 flex h-3 w-3 md:h-4 md:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500"></span>
          </span>

          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full shadow-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border-2 md:border-4 border-white dark:border-slate-800">
            <MessageSquare className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-pulse" />
          </div>
        </div>
      </Link>

    </div>
  );
}