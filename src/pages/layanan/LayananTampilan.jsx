import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, ChevronDown, Bot, ArrowRight, AlertTriangle, Puzzle, PhoneCall, HeartPulse, Shield, Wrench, BookOpen, MapPin, X, Wind, Gamepad2, Palette, Map, Sparkles } from 'lucide-react';
import { layananIsi } from './layananIsi';
import BatikGame from '../../components/games/BatikGame';
import CongklakGame from '../../components/games/CongklakGame';
import PetualanganGame from '../../components/games/PetualanganGame';

const iconMap = { MessageSquare, Calendar };

export default function LayananTampilan() {
  const [openFaq, setOpenFaq] = useState(0);
  const [showContacts, setShowContacts] = useState(false);
  const [showBencanaInfo, setShowBencanaInfo] = useState(false);
  const [showEdukasiModal, setShowEdukasiModal] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [showGames, setShowGames] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const { judul, layananDigital, faq } = layananIsi;

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12 min-h-screen">

      {/* BAGIAN JUDUL YANG DIPERBARUI */}
      <div className="text-center mb-10 md:mb-16">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
            {judul}
          </h1>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
        </div>
        <p className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Akses layanan digital pintar dari genggaman Anda. Mudah, efisien, dan dikontrol penuh demi kenyamanan masyarakat Desa Sukatani.
        </p>
      </div>

      {/* Grid Layanan Digital */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 mb-6 md:mb-8 max-w-6xl mx-auto">
        {layananDigital.map((item, i) => {
          const Icon = iconMap[item.icon] || MessageSquare;
          const isChatbot = i === 0;
          const isKalender = i === 1;

          return (
            <div
              key={i}
              className="p-0.5 md:p-1 relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-card border border-border flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-full p-4 md:p-8 rounded-xl flex flex-col items-center text-center relative z-10">
                <div className={`p-3 md:p-5 rounded-2xl mb-3 md:mb-6 shadow-sm transition-transform group-hover:scale-110 duration-300 ${isChatbot ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}`}>
                  {isChatbot ? <Bot className="w-8 h-8 md:w-12 md:h-12" /> : <Icon className="w-8 h-8 md:w-12 md:h-12" />}
                </div>

                <h2 className="text-sm md:text-2xl font-bold mb-1.5 md:mb-3 text-foreground leading-tight">{item.judul}</h2>
                <p className="text-[10px] md:text-base text-muted-foreground mb-4 md:mb-8 line-clamp-3">{item.deskripsi}</p>

                <div className="mt-auto w-full">
                  {isChatbot && (
                    <Link
                      to="/chatbot"
                      className="w-full flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-2 md:px-6 rounded-lg md:rounded-xl font-bold text-white transition-all bg-blue-600 shadow-md hover:bg-blue-700 hover:-translate-y-1 text-[10px] md:text-base"
                    >
                      <span className="md:hidden">Buka Asisten</span>
                      <span className="hidden md:block">Buka Asisten Digital</span>
                      <ArrowRight className="w-3 h-3 md:w-5 md:h-5 shrink-0" />
                    </Link>
                  )}
                  {isKalender && (
                    <Link
                      to="/agenda"
                      className="w-full flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-2 md:px-6 rounded-lg md:rounded-xl font-bold text-white transition-all bg-teal-500 shadow-md hover:bg-teal-600 hover:-translate-y-1 text-[10px] md:text-base"
                    >
                      <span className="md:hidden">Lihat Jadwal</span>
                      <span className="hidden md:block">Lihat Jadwal Resmi</span>
                      <ArrowRight className="w-3 h-3 md:w-5 md:h-5 shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Layanan Tambahan (Row 1: Bencana & Kontak) */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 max-w-6xl mx-auto items-start">

        {/* Card 1: Siaga & Tanggap Bencana */}
        <div className="p-4 md:p-6 relative rounded-2xl shadow-sm bg-card border border-border h-full flex flex-col hover:shadow-lg transition-shadow group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-4 border-b border-border pb-3 md:pb-4">
              <div className="p-2 md:p-3 bg-orange-500/10 text-orange-500 rounded-xl group-hover:scale-110 transition-transform w-max"><AlertTriangle className="w-6 h-6 md:w-7 md:h-7" /></div>
              <div>
                <h3 className="text-xs md:text-lg font-bold text-foreground leading-tight">Tanggap Bencana</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 line-clamp-1">Edukasi & Info Darurat</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 md:mb-6 text-[10px] md:text-sm leading-relaxed hidden sm:block">Panduan evakuasi, titik kumpul, & nomor darurat.</p>

            {!showBencanaInfo ? (
              <button
                onClick={() => setShowBencanaInfo(true)}
                className="mt-auto inline-flex w-full items-center justify-center gap-1 md:gap-2 py-2 md:py-2.5 px-2 md:px-4 rounded-lg md:rounded-xl font-bold text-orange-600 dark:text-orange-500 bg-orange-500/10 hover:bg-orange-600 hover:text-white transition-colors border border-orange-500/20 text-[10px] md:text-sm"
              >
                <span>Buka <span className="hidden md:inline">Panduan & Darurat</span></span> <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            ) : (
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[350px] pr-2 scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent mt-auto">

                {/* Edukasi Bencana */}
                <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                  <h4 className="text-sm font-bold text-blue-500 mb-1 flex items-center gap-1"><BookOpen size={14} /> Edukasi Tanggap Bencana</h4>
                  <p className="text-xs text-blue-400 leading-relaxed mb-2">Pelajari langkah mitigasi dan panduan keselamatan bencana.</p>
                  <button onClick={() => setShowEdukasiModal(true)} className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors">
                    Lihat Selengkapnya
                  </button>
                </div>

                {/* Titik Kumpul */}
                <div className="bg-orange-500/10 p-3 rounded-xl border border-orange-500/20">
                  <h4 className="text-sm font-bold text-orange-500 mb-1 flex items-center gap-1"><MapPin size={14} /> Titik Kumpul Evakuasi</h4>
                  <p className="text-xs text-orange-400 leading-relaxed mb-2">Saat terjadi gempa/bencana, jangan panik. Segera evakuasi ke titik aman.</p>
                  <div className="text-xs font-semibold text-foreground bg-card p-2 rounded-lg text-center border border-orange-500/20">
                    📍 Titik Kumpul: Lapangan Utama Sukatani
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2 border-b border-border pb-1">Nomor Penting Darurat</h4>
                  <div className="grid gap-2">
                    <a href="tel:110" className="flex justify-between items-center bg-secondary hover:bg-blue-500/10 text-foreground hover:text-blue-500 p-2.5 rounded-lg transition-colors border border-border text-sm">
                      <span className="font-medium">Call Centre Polri (110)</span> <PhoneCall size={14} className="opacity-50" />
                    </a>
                    <a href="https://wa.me/6281275752003" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center bg-secondary hover:bg-blue-500/10 text-foreground hover:text-blue-500 p-2.5 rounded-lg transition-colors border border-border text-sm">
                      <span className="font-medium">Lapor Pak Kapolres (WA)</span> <MessageSquare size={14} className="opacity-50" />
                    </a>
                    <a href="tel:02287782113" className="flex justify-between items-center bg-secondary hover:bg-red-500/10 text-foreground hover:text-red-500 p-2.5 rounded-lg transition-colors border border-border text-sm">
                      <span className="font-medium">Damkar Padalarang</span> <PhoneCall size={14} className="opacity-50" />
                    </a>
                    <a href="tel:0226940113" className="flex justify-between items-center bg-secondary hover:bg-red-500/10 text-foreground hover:text-red-500 p-2.5 rounded-lg transition-colors border border-border text-sm">
                      <span className="font-medium">Damkar KBB</span> <PhoneCall size={14} className="opacity-50" />
                    </a>
                    <a href="tel:119" className="flex justify-between items-center bg-secondary hover:bg-orange-500/10 text-foreground hover:text-orange-500 p-2.5 rounded-lg transition-colors border border-border text-sm">
                      <span className="font-medium">Ambulans (118/119)</span> <PhoneCall size={14} className="opacity-50" />
                    </a>
                  </div>
                </div>

                <Link to="/pengaduan" className="inline-flex w-full items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 px-2 md:px-4 rounded-lg md:rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors text-[10px] md:text-sm mt-2 shadow-sm">
                  Lapor Kerusakan <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Link>

                <button
                  onClick={() => setShowBencanaInfo(false)}
                  className="mt-1 inline-flex w-full items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 px-2 md:px-4 rounded-lg md:rounded-xl font-bold text-muted-foreground bg-secondary hover:bg-secondary/80 transition-colors text-[10px] md:text-sm"
                >
                  Tutup <ChevronDown className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
                </button>
              </div>
            )}
          </div>
        </div>


        {/* Card 3: Pusat Kontak Pelayanan Publik */}
        <div className="p-4 md:p-6 relative rounded-2xl shadow-sm bg-card border border-border h-full flex flex-col hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3 md:mb-5 border-b border-border pb-3 md:pb-4">
            <div className="p-2 md:p-3 bg-red-500/10 text-red-500 rounded-xl w-max"><PhoneCall className="w-6 h-6 md:w-7 md:h-7" /></div>
            <div>
              <h3 className="text-xs md:text-lg font-bold text-foreground leading-tight">Pusat Kontak</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 line-clamp-1">Ketuk nomor memanggil</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 md:mb-6 text-[10px] md:text-sm leading-relaxed hidden sm:block">Nomor telepon penting layanan publik siap siaga 24 jam untuk warga desa.</p>

          {!showContacts ? (
            <button
              onClick={() => setShowContacts(true)}
              className="mt-auto inline-flex w-full items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2.5 px-2 md:px-4 rounded-lg md:rounded-xl font-bold text-red-600 dark:text-red-500 bg-red-500/10 hover:bg-red-600 hover:text-white transition-colors border border-red-500/20 text-[10px] md:text-sm"
            >
              <span className="md:hidden">Buka Kontak</span>
              <span className="hidden md:inline">Lihat Selengkapnya</span> <ChevronDown className="w-3 h-3 md:w-5 md:h-5" />
            </button>
          ) : (
            <div className="flex flex-col gap-5 overflow-y-auto max-h-[350px] pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {/* Tip Darurat Umum */}
              <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl flex items-start gap-2">
                <Shield size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-500 text-sm mb-1">Tip Darurat Umum (112)</h4>
                  <p className="text-xs text-blue-400 leading-relaxed">
                    Jika memerlukan bantuan cepat terpadu di Kab. Bandung Barat, hubungi Call Center <strong>112 (Bebas Pulsa / 24 Jam)</strong>.
                  </p>
                </div>
              </div>

              {/* Kesehatan */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2"><HeartPulse size={16} className="text-rose-500" /> Kesehatan</h4>
                <div className="grid gap-2">
                  <a href="tel:0226812350" className="flex justify-between items-center bg-secondary hover:bg-rose-500/10 text-foreground hover:text-rose-500 p-3 rounded-lg transition-colors border border-border text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold">UPTD Puskesmas Ngamprah</span>
                      <span className="text-xs text-muted-foreground">(022) 6812350</span>
                    </div>
                    <PhoneCall size={16} className="opacity-50" />
                  </a>
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="font-bold text-foreground text-sm block mb-1">Bidan Desa</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">Koordinasi via posko kesehatan desa atau hotline darurat kesehatan kabupaten.</p>
                  </div>
                </div>
              </div>

              {/* Keamanan */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2"><Shield size={16} className="text-blue-500" /> Keamanan & Ketertiban</h4>
                <div className="grid gap-2">
                  <a href="tel:0226652095" className="flex justify-between items-center bg-secondary hover:bg-blue-500/10 text-foreground hover:text-blue-500 p-3 rounded-lg transition-colors border border-border text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold">Polres Cimahi (Babinsa/Bhabinkamtibmas)</span>
                      <span className="text-xs text-muted-foreground">(022) 6652095</span>
                    </div>
                    <PhoneCall size={16} className="opacity-50" />
                  </a>
                  <div className="bg-secondary p-3 rounded-lg border border-border">
                    <span className="font-bold text-foreground text-sm block mb-1">Satgas Linmas</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">Dikoordinasikan melalui aparat desa setempat atau Kantor Kecamatan Ngamprah.</p>
                  </div>
                </div>
              </div>

              {/* Infrastruktur */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2"><Wrench size={16} className="text-amber-500" /> Infrastruktur & Utilitas</h4>
                <div className="grid gap-2">
                  <a href="tel:123" className="flex justify-between items-center bg-secondary hover:bg-amber-500/10 text-foreground hover:text-amber-500 p-3 rounded-lg transition-colors border border-border text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold">PLN (Gangguan)</span>
                      <span className="text-xs text-muted-foreground">123 atau (022) 123 - Layanan 24 Jam</span>
                    </div>
                    <PhoneCall size={16} className="opacity-50" />
                  </a>
                  <a href="https://wa.me/628112228561" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center bg-secondary hover:bg-amber-500/10 text-foreground hover:text-amber-500 p-3 rounded-lg transition-colors border border-border text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold">PDAM Tirta Raharja (WA)</span>
                      <span className="text-xs text-muted-foreground">0811-2228-561</span>
                    </div>
                    <MessageSquare size={16} className="opacity-50" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => setShowContacts(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 px-2 md:px-4 rounded-lg md:rounded-xl font-bold text-muted-foreground bg-secondary hover:bg-secondary/80 transition-colors text-[10px] md:text-sm"
              >
                Tutup <ChevronDown className="w-3 h-3 md:w-5 md:h-5 rotate-180" />
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Grid Layanan Tambahan (Row 2: Games Edukasi) */}
      <div className="grid gap-6 mb-6 max-w-6xl mx-auto items-start">
        {/* Card 3: Games Edukasi Anak */}
        <div className="p-4 md:p-8 relative rounded-2xl shadow-sm bg-card border border-border flex flex-col hover:shadow-lg transition-shadow group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-yellow-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="relative z-10 p-4 md:p-5 bg-gradient-to-tr from-fuchsia-400 to-cyan-400 text-white rounded-2xl group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-md shrink-0">
              <Puzzle className="w-8 h-8 md:w-12 md:h-12" />
            </div>

            <div className="relative z-10 flex flex-col w-full text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-foreground leading-tight mb-1.5 md:mb-2">Portal Games Edukasi Anak</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-[10px] md:text-base leading-relaxed max-w-3xl">Permainan ringan interaktif yang ceria! Belajar matematika dasar, teka-teki seru, hingga pengenalan budaya lokal.</p>

              {!showGames ? (
                <button onClick={() => setShowGames(true)} className="w-full md:w-fit inline-flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-3 px-4 md:px-8 rounded-lg md:rounded-xl font-bold text-white bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:opacity-90 transition-opacity shadow-sm text-xs md:text-sm">
                  Mainkan Sekarang! <Puzzle className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              ) : (
                <button onClick={() => setShowGames(false)} className="w-full md:w-fit inline-flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-3 px-4 md:px-8 rounded-lg md:rounded-xl font-bold text-muted-foreground bg-secondary hover:bg-secondary/80 transition-colors shadow-sm text-xs md:text-sm border border-border">
                  Tutup <span className="hidden md:inline">Pilihan Games</span> <ChevronDown className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
                </button>
              )}
            </div>
          </div>

          {showGames && (
            <div className="relative z-10 mt-8 w-full animate-fade-in border-t border-border pt-8">
              <div className="text-center md:text-left mb-8">
                <h4 className="text-xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Sparkles className="text-amber-500 shrink-0" size={24} /> Integrasi Matematika dengan Budaya Lokal
                </h4>
                <p className="text-muted-foreground text-sm max-w-3xl">Banyak permainan tradisional Indonesia sebenarnya memiliki unsur matematika yang sangat kuat. Melalui portal ini, anak-anak bisa belajar berhitung dan geometri secara interaktif:</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {/* Game 1: Congklak Digital */}
                <div onClick={() => setSelectedGame({ id: 'congklak', title: 'Congklak Digital' })} className="cursor-pointer bg-card border-2 border-border p-6 rounded-2xl hover:border-violet-300 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl opacity-50 group-hover:bg-violet-500/20 transition-colors"></div>
                  <div className="w-14 h-14 bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:rotate-6 transition-transform relative z-10">
                    <Gamepad2 size={28} />
                  </div>
                  <h5 className="font-bold text-foreground text-xl mb-3 relative z-10">Congklak Digital</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    Selain asyik dan simpel dipelajari, seri congklak kami dirancang untuk mulai mengajarkan keterampilan <strong>strategi, logika, dan kesabaran</strong> dalam mengambil taktik sejak usia dini.
                  </p>
                </div>

                {/* Game 2: Pola Batik */}
                <div onClick={() => setSelectedGame({ id: 'batik', title: 'Eksplorasi Pola Batik' })} className="cursor-pointer bg-card border-2 border-border p-6 rounded-2xl hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl opacity-50 group-hover:bg-amber-500/20 transition-colors"></div>
                  <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-orange-400 text-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:rotate-6 transition-transform relative z-10">
                    <Palette size={28} />
                  </div>
                  <h5 className="font-bold text-foreground text-xl mb-3 relative z-10">Eksplorasi Pola Batik</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    Permainan seru menggunakan blok warna/grid matematika untuk "mewarnai" kekayaan motif batik lokal. Tantangan ini asyik melatih <strong>geometri dan seni simetri</strong> visual.
                  </p>
                </div>

                {/* Game 3: Petualangan Angka */}
                <div onClick={() => setSelectedGame({ id: 'petualangan', title: 'Petualangan Angka' })} className="cursor-pointer bg-card border-2 border-border p-6 rounded-2xl hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl opacity-50 group-hover:bg-teal-500/20 transition-colors"></div>
                  <div className="w-14 h-14 bg-gradient-to-tr from-teal-500 to-emerald-400 text-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:-rotate-6 transition-transform relative z-10">
                    <Map size={28} />
                  </div>
                  <h5 className="font-bold text-foreground text-xl mb-3 relative z-10">Petualangan Angka</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    Menyelami indahnya Nusantara dengan mengunjungi ragam rumah adat! Pemain bisa <i>unlock level</i> lewat penyelesaian kuis mini <strong>penjumlahan / pengurangan seri</strong>.
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bagian FAQ */}
      <div className="max-w-6xl mx-auto bg-card p-4 md:p-12 border border-border rounded-2xl md:rounded-3xl shadow-sm mb-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-3xl font-bold mb-1.5 md:mb-3 text-foreground">{faq.judul}</h2>
          <p className="text-[10px] md:text-base text-muted-foreground">Kumpulan pertanyaan yang sering ditanyakan oleh masyarakat terkait layanan.</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {faq.daftar.map((item, i) => (
            <div key={i} className={`rounded-xl md:rounded-2xl border transition-all duration-300 ${openFaq === i ? 'border-primary bg-primary/10 shadow-sm' : 'border-border bg-secondary hover:border-muted-foreground'}`}>
              <button
                className="w-full text-left p-3 md:p-5 flex justify-between items-center font-semibold transition-colors cursor-pointer focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span className={`pr-3 md:pr-4 text-[11px] md:text-lg ${openFaq === i ? 'text-blue-500' : 'text-foreground'}`}>{item.q}</span>
                <div className={`p-1.5 md:p-2 rounded-full transition-transform duration-300 ${openFaq === i ? 'bg-primary/20 text-primary rotate-180' : 'bg-transparent text-muted-foreground group-hover:bg-card shrink-0'}`}>
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </button>
              {openFaq === i && (
                <div className="px-3 md:px-5 pb-3 md:pb-5 text-muted-foreground text-[10px] md:text-sm leading-relaxed border-t border-primary/20 pt-3 md:pt-4 mt-1 md:mt-2">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Edukasi Bencana */}
      {showEdukasiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl scrollbar-thin">
            <button
              onClick={() => setShowEdukasiModal(false)}
              className="absolute right-4 top-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground transition-colors"
            >
              <X size={18} />
            </button>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 flex items-center gap-2"><BookOpen className="text-blue-600" /> Edukasi Tanggap Bencana</h2>
            <p className="text-gray-600 mb-6 text-sm">Pelajari panduan keselamatan untuk berbagai skenario bencana alam.</p>

            {/* Poster Slider */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Poster Edukasi</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-200">
                <img src="/siagagempa.png" alt="Siaga Gempa" className="shrink-0 w-64 md:w-72 h-auto max-h-[450px] object-cover rounded-xl snap-center border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => setSelectedPoster('/siagagempa.png')} />
                <img src="/siagabanjir.png" alt="Siaga Banjir" className="shrink-0 w-64 md:w-72 h-auto max-h-[450px] object-cover rounded-xl snap-center border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => setSelectedPoster('/siagabanjir.png')} />
                <img src="/siagalongsor.png" alt="Siaga Longsor" className="shrink-0 w-64 md:w-72 h-auto max-h-[450px] object-cover rounded-xl snap-center border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => setSelectedPoster('/siagalongsor.png')} />
                <img src="/siagaputingbeliung.png" alt="Siaga Puting Beliung" className="shrink-0 w-64 md:w-72 h-auto max-h-[450px] object-cover rounded-xl snap-center border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => setSelectedPoster('/siagaputingbeliung.png')} />
              </div>
            </div>

            {/* Cards Action / Tindakan Penyelamatan */}
            <h3 className="font-semibold text-gray-800 mb-3 text-lg mt-6">Tindakan Penyelamatan & Siaga Bencana</h3>
            <div className="grid md:grid-cols-2 gap-4">

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-secondary/50 border-border">
                <h4 className="font-bold text-foreground mb-2">Apa yang harus dilakukan jika ada Gempa Bumi?</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Jangan panik, berlindung di bawah meja (Drop, Cover, Hold On).</li>
                  <li>Jauhi lemari, jendela kaca, atau benda yang mudah jatuh.</li>
                  <li>Jika guncangan mereda, evakuasi keluar ruangan dan menuju titik kumpul.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-secondary/50 border-border">
                <h4 className="font-bold text-foreground mb-2">Apa yang harus dilakukan jika ada Longsor?</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Segera menjauh dari jalur lereng yang rawan ketika hujan lebat.</li>
                  <li>Bila mendengar gemuruh, segera berlari ke tempat yang lebih tinggi dan stabil.</li>
                  <li>Hubungi petugas kebencanaan atau aparat desa setempat.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-blue-500/10 border-blue-500/20">
                <h4 className="font-bold text-blue-500 mb-2">Apa yang harus dilakukan jika ada Banjir / Banjir Bandang?</h4>
                <p className="text-xs text-blue-400 mb-2">Sangat umum terjadi akibat curah hujan tinggi atau buruknya drainase.</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Amankan barang berharga dan dokumen ke tempat yang lebih tinggi.</li>
                  <li>Matikan jaringan listrik dan cabut alat elektronik.</li>
                  <li>Segera evakuasi diri ke tempat aman sebelum air meninggi.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-blue-500/10 border-blue-500/20">
                <h4 className="font-bold text-blue-500 mb-2">Apa yang harus dilakukan saat Puting Beliung?</h4>
                <p className="text-xs text-blue-400 mb-2">Angin berkecepatan tinggi yang kerap merusak rumah dan pohon (pancaroba).</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Masuk ke dalam ruangan yang kokoh dan jauhi jendela atau pintu kaca.</li>
                  <li>Jangan berlindung di bawah pohon besar atau baliho.</li>
                  <li>Matikan aliran listrik jika terjadi korsleting.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-orange-500/10 border-orange-500/20">
                <h4 className="font-bold text-orange-500 mb-2">Apa yang harus dilakukan jika Erupsi Gunung Berapi?</h4>
                <p className="text-xs text-orange-400 mb-2">Bahaya meliputi awan panas, hujan abu, hingga lahar dingin.</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Gunakan masker dan kacamata untuk melindungi saluran napas dan mata dari abu.</li>
                  <li>Tutup rapat pintu dan jendela agar abu tidak masuk ke dalam rumah.</li>
                  <li>Ikuti arahan evakuasi dari petugas menjauhi zona bahaya letusan.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-orange-500/10 border-orange-500/20">
                <h4 className="font-bold text-orange-500 mb-2">Apa yang harus dilakukan jika ada Tsunami?</h4>
                <p className="text-xs text-orange-400 mb-2">Gelombang laut raksasa biasanya pemicunya gempa bawah laut.</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Jika merasakan gempa kuat di pesisir, segera lari ke tempat tinggi (evakuasi vertikal).</li>
                  <li>Jangan menunggu sirine bahaya jika air laut tiba-tiba surut secara tidak wajar.</li>
                  <li>Tetap berada di tempat aman sampai ada pengumuman resmi dari BMKG.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-yellow-500/10 border-yellow-500/20">
                <h4 className="font-bold text-yellow-500 mb-2">Apa yang harus dilakukan jika Kebakaran Lahan (Karhutla)?</h4>
                <p className="text-xs text-yellow-500/80 mb-2">Dipicu kemarau ekstrem yang menimbulkan kabut asap berbahaya.</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Segera lapor ke relawan pemadam kebakaran, jangan padamkan api sendiri jika sudah membesar.</li>
                  <li>Gunakan masker basah untuk menghindari sesak napas akibat kabut asap.</li>
                  <li>Jangan asal membuang puntung rokok di area rumput atau lahan kering.</li>
                </ul>
              </div>

              <div className="p-4 border rounded-xl hover:shadow-md transition-shadow bg-secondary/50 border-border">
                <h4 className="font-bold text-foreground mb-2">Antisipasi Kekeringan & Amblesan Tanah</h4>
                <p className="text-xs text-muted-foreground mb-2">Akibat musim kemarau panjang (Drought) & pengambilan air berlebih.</p>
                <ul className="text-sm text-muted-foreground/80 space-y-1 list-disc pl-4">
                  <li>Gunakan cadangan air bersih dengan sangat bijak dan efisien.</li>
                  <li>Buat sumur resapan (biopori) di sekitar rumah saat musim hujan.</li>
                  <li>Kurangi pemompaan air tanah berlebihan yang bisa memicu amblesan.</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      )}
      {/* Lightbox / Zoom-in Modal untuk Poster */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedPoster(null)}
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center animate-fade-in shadow-2xl">
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-14 right-0 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full focus:outline-none"
            >
              <X size={24} />
            </button>
            <img
              src={selectedPoster}
              alt="Poster Edukasi Bencana Besar"
              className="max-h-[90vh] w-auto object-contain rounded-xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/95 p-2 md:p-6 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full h-[95vh] max-w-7xl flex flex-col animate-fade-in shadow-2xl bg-white rounded-3xl overflow-hidden border border-slate-700">
            <div className="w-full flex justify-between items-center p-4 bg-slate-800 text-white border-b border-slate-700">
              <h3 className="font-bold text-xl flex items-center gap-2 text-white drop-shadow-sm">
                <Sparkles className="text-yellow-400" size={24} />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-100">
                  Memainkan: {selectedGame.title}
                </span>
              </h3>
              <button
                onClick={() => setSelectedGame(null)}
                className="p-2 text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors rounded-full focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            <div className="w-full flex-grow flex items-center justify-center bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 pointer-events-none"></div>

              <div className="relative z-10 w-full h-full flex flex-col justify-center animate-fade-in">
                {selectedGame.id === 'congklak' && <CongklakGame />}
                {selectedGame.id === 'batik' && <BatikGame />}
                {selectedGame.id === 'petualangan' && <PetualanganGame />}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}