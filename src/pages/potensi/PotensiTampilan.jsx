import { useState, useEffect } from 'react';
import { Camera, Music, Sprout, Building, Building2, MapPin, School, HeartPulse, Landmark, Book, BookOpen, Store, Hospital, X } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { potensiIsi as defaultPotensiIsi } from './potensiIsi';

const iconMap = { Camera, Music, Sprout, Building, Store };
const facilityIconMap = { School, HeartPulse, Landmark, Book, BookOpen, Store, Hospital, Building, Building2 };

export default function PotensiTampilan({ onPilihFasilitas }) {
  const [activeTab, setActiveTab] = useState('wisata');
  const [dataPotensi, setDataPotensi] = useState(defaultPotensiIsi);

  // State untuk menyimpan item yang sedang diklik
  const [selectedGaleri, setSelectedGaleri] = useState(null);

  // State reaktif untuk data pertanian agar foto bisa diubah secara real-time
  const [dataPertanian, setDataPertanian] = useState(defaultPotensiIsi.pertanian);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedData = localStorage.getItem('cms_potensi');
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setDataPotensi(parsed);
        setDataPertanian(parsed.pertanian);
      }
    };
    handleStorageChange(); // Load initially

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Fungsi untuk menangani perubahan foto pertanian/peternakan/perkebunan
  const handleGantiFoto = (judulSektor, indexFoto, file) => {
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);

    const updatedPertanian = dataPertanian.map((item) => {
      if (item.judul === judulSektor) {
        const fotoBaruList = [...item.galeri.foto];
        fotoBaruList[indexFoto] = imageUrl;

        const imgUtama = indexFoto === 0 ? imageUrl : item.img;

        return {
          ...item,
          img: imgUtama,
          galeri: {
            ...item.galeri,
            foto: fotoBaruList,
          },
        };
      }
      return item;
    });

    setDataPertanian(updatedPertanian);

    // Update juga di localStorage agar konsisten (opsional)
    const newPotensi = { ...dataPotensi, pertanian: updatedPertanian };
    setDataPotensi(newPotensi);
    // Wait, local state update for agriculture gallery should probably save to CMS but it's only object URL here so let's ignore persisting object URLs
  };

  const {
    judul,
    tabs,
    tabGaleri,
    iconColors,
    hoverBgs,
    wisata,
    budaya,
    umkm,
    fasilitas,
    galeri,
  } = dataPotensi;

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12">

      {/* Container Judul dan Garis Bawah */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          {judul}
        </h1>
        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
      </div>

      <div
        className="flex gap-6 mb-8 justify-center flex-wrap pb-4 border-b border-border"
      >
        {tabs.map((tab) => {
          const Icon = iconMap[tab.icon] || Camera;
          return (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all ${activeTab === tab.id ? 'text-blue-500' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                whiteSpace: 'nowrap',
                border: 'none',
                background: 'transparent',
                borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <Icon size={20} />
              {tab.label}
            </button>
          );
        })}
        <button
          className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all ${activeTab === tabGaleri.id ? 'text-blue-500' : 'text-muted-foreground hover:text-foreground'}`}
          onClick={() => setActiveTab(tabGaleri.id)}
          style={{
            whiteSpace: 'nowrap',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === tabGaleri.id ? '2px solid #3b82f6' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          <Camera size={20} /> {tabGaleri.label}
        </button>
      </div>

      <div className="mt-8">
        {activeTab === 'wisata' && (
          <div
            className="flex overflow-x-auto gap-6 pb-8 animate-fade-in snap-x snap-mandatory"
            style={{ scrollbarWidth: 'thin' }}
          >
            {wisata.map((item, i) => {
              const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(item.judul + ' Sukatani Ngamprah Bandung Barat')}`;

              return (
                <div key={i} className="card p-3 md:p-4 border border-border rounded-lg shadow-sm flex-shrink-0 w-72 md:w-96 snap-center bg-card flex flex-col">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-40 md:h-56 object-cover rounded mb-3 md:mb-4 focus:outline-none"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1506744626753-eda8151a74a0?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <h3 className="text-lg md:text-2xl mb-1 md:mb-2 font-bold text-foreground">{item.judul}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-grow text-justify leading-relaxed">{item.deskripsi}</p>
                  <ul className="text-[10px] md:text-sm flex flex-col gap-1 md:gap-2 mb-3 md:mb-4 text-foreground/80">
                    {item.detail.map((d, j) => (
                      <li key={j}>
                        <strong>{d.label}:</strong> {d.nilai}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1.5 md:gap-2 bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors w-full py-1.5 md:py-2 rounded-md font-semibold text-[10px] md:text-sm"
                  >
                    <MapPin size={16} /> Lihat di Google Maps
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'budaya' && (
          <div className="flex flex-col gap-10 animate-fade-in max-w-6xl mx-auto w-full">

            {/* Profil Narasumber */}
            <div className="card p-6 md:p-10 border border-border rounded-2xl shadow-lg bg-gradient-to-br from-card to-secondary/30 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full border-4 border-secondary shadow-md bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center overflow-hidden">
                <img
                  src={budaya.narasumber.img}
                  alt={budaya.narasumber.nama}
                  className="w-full h-full object-contain scale-[1.65] -translate-y-2"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-foreground mb-2">{budaya.narasumber.nama}</h2>
                <h3 className="text-lg font-bold text-blue-600 mb-4">{budaya.narasumber.peran}</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-6">{budaya.narasumber.deskripsi}</p>
                <div className="mt-auto flex flex-wrap gap-3">
                  {budaya.narasumber.instagram && (
                    <a
                      href={budaya.narasumber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold py-2 px-5 rounded-full transition-transform hover:scale-105 shadow-md"
                    >
                      <FaInstagram size={18} />
                      Instagram
                    </a>
                  )}
                  {budaya.youtubeChannel && (
                    <a
                      href={budaya.youtubeChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full transition-transform hover:scale-105 shadow-md"
                    >
                      <FaYoutube size={18} />
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Kilas Balik & Profil Sanggar (Artikel Deskriptif) */}
            <div className="bg-card p-6 md:p-10 border border-border rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-6 text-center">Kilas Balik & Profil Sanggar</h3>
              <p className="text-muted-foreground mb-8 text-center text-sm">Pembahasan komprehensif seputar perjalanan, karya, dan visi misi Sanggar ke depannya.</p>

              <div className="flex flex-col gap-6">
                {budaya.artikel.map((item, idx) => (
                  <div key={idx} className="bg-secondary/50 p-5 rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-3 text-lg">{item.judul}</h4>
                    <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                      {item.paragraf}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Galeri Foto Kesenian & Budaya */}
            {budaya.galeriFoto && budaya.galeriFoto.length > 0 && (
              <div className="bg-card p-6 md:p-10 border border-border rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-6 text-center">Galeri Foto Studio Koen</h3>
                <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
                  {budaya.galeriFoto.map((foto, idx) => (
                    <div key={idx} className="flex-shrink-0 w-72 md:w-80 snap-center rounded-xl overflow-hidden shadow-sm border border-border bg-muted/20">
                      <img src={foto.img} alt={foto.title || `Galeri ${idx + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bagian YouTube */}
            <div className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

              <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">Saluran YouTube</h3>
              <p className="text-blue-100/80 mb-6 max-w-2xl mx-auto text-center leading-relaxed">
                {budaya.youtubeInfo}
              </p>

              <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-800">
                {budaya.videos.map((vid, i) => (
                  <div key={i} className="flex-shrink-0 w-72 md:w-96 snap-center bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${vid.id}`}
                        title={vid.title}
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-sm line-clamp-2">{vid.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        )}

        {activeTab === 'umkm' && (
          <div className="flex flex-col gap-6 animate-fade-in max-w-7xl mx-auto w-full">
            {umkm.map((item, i) => (
              <div key={i} className="card border border-border rounded-2xl shadow-lg bg-card w-full overflow-hidden mb-6 hover:shadow-xl transition-shadow flex flex-col">

                {/* 1. BAGIAN ATAS: Informasi Produk & Foto 
                    STRATEGI RESPONSIVE:
                    - HP (Mobile): flex-col (Atas-bawah), padding p-6, gap-6
                    - Web (Desktop): md:flex-row (Kiri-kanan), padding md:p-8, md:gap-8 
                */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch p-6 md:p-8">

                  {/* BAGIAN KIRI: Galeri Foto
                      STRATEGI RESPONSIVE:
                      - HP: w-full (100% lebar), tinggi batas min-h-[300px]
                      - Web: md:w-[35%] (35% lebar), tinggi ngikut teks md:min-h-0
                  */}
                  <div className="w-full md:w-[35%] flex-shrink-0 relative min-h-[300px] md:min-h-0 rounded-xl overflow-hidden shadow-sm border border-border group">
                    {Array.isArray(item.img) ? (
                      <>
                        <div className="absolute inset-0 w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                          {item.img.map((src, idx) => (
                            <img
                              key={idx}
                              src={src}
                              alt={`${item.alt} - Foto ${idx + 1}`}
                              className="w-full h-full object-cover flex-shrink-0 snap-center"
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800";
                              }}
                            />
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                          {item.img.map((_, idx) => (
                            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></div>
                          ))}
                        </div>
                        {/* Petunjuk Geser */}
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full pointer-events-none opacity-80 flex items-center gap-1 shadow-sm">
                          <span>Geser</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    )}
                  </div>

                  {/* BAGIAN KANAN: Detail Informasi Teks
                      STRATEGI RESPONSIVE:
                      - HP: w-full (100% lebar)
                      - Web: md:w-[65%] (65% lebar)
                  */}
                  <div className="w-full md:w-[65%] flex flex-col justify-start">
                    <h3 className="text-3xl font-extrabold text-foreground mb-4">{item.judul}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-justify">{item.deskripsi}</p>

                    <div className="bg-secondary p-5 rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Store className="text-blue-600" size={18} /> Informasi Produk
                      </h4>
                      <ul className="flex flex-col gap-3 text-foreground/80">
                        {item.detail.map((d, j) => (
                          <li key={j} className="flex gap-4 items-start sm:items-center">
                            <span className="font-bold text-blue-600 w-40 shrink-0">{d.label}</span>
                            <span className="text-muted-foreground font-medium">{d.nilai}</span>
                          </li>
                        ))}
                      </ul>
                      {(item.instagram || item.mapsUrl) && (
                        <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-3">
                          {item.instagram && (
                            <a
                              href={item.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-sm text-sm"
                            >
                              <FaInstagram size={18} />
                              Instagram
                            </a>
                          )}
                          {item.mapsUrl && (
                            <a
                              href={item.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-sm text-sm"
                            >
                              <MapPin size={18} />
                              Lokasi
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. BAGIAN BAWAH: Video Reels Instagram
                    STRATEGI RESPONSIVE:
                    - Menyatu sebagai footer di dalam satu card
                    - overflow-x-auto memungkinkan swipe/gulir jari di HP secara horizontal
                */}
                {item.reels && item.reels.length > 0 && (
                  <div className="w-full bg-secondary/30 border-t border-border p-6 md:p-8">
                    <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3 border-l-4 border-pink-500 pl-4">
                      <FaInstagram className="text-pink-500" size={28} />
                      Video Reels {item.judul}
                    </h4>
                    <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-pink-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                      {item.reels.map((reelId, idx) => (
                        <div key={idx} className="flex-shrink-0 w-80 md:w-96 snap-center bg-card border border-border rounded-xl overflow-hidden shadow relative">
                          <iframe
                            src={`https://www.instagram.com/reel/${reelId}/embed`}
                            width="100%"
                            height="480"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency="true"
                            className="w-full bg-white block"
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pertanian' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {dataPertanian.map((item, i) => (
              <div key={i} className="card p-4 border border-border rounded-lg shadow-sm bg-card flex flex-col">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-48 object-cover rounded mb-4 focus:outline-none"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c16?auto=format&fit=crop&q=80&w=800"; }}
                />
                <h3 className="text-xl mb-1 font-bold text-foreground">{item.judul}</h3>
                <p className="text-sm text-blue-600 mb-2 font-semibold">{item.kategori}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow text-justify">{item.deskripsi}</p>

                <button
                  onClick={() => setSelectedGaleri(item)}
                  className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all text-sm shadow mt-auto"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'fasilitas' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {fasilitas.map((item, i) => {
              const Icon = facilityIconMap[item.ikon];
              return (
                <div key={i} className="card p-6 border border-border rounded-2xl shadow-sm bg-card flex flex-col items-start transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className={`p-4 rounded-xl mb-5 shadow-sm inline-block ${item.badge}`}>
                    {Icon && <Icon size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.judul}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow text-justify">{item.deskripsi}</p>

                  <button
                    onClick={() => setSelectedGaleri(item)}
                    className="w-full py-2.5 bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl text-sm transition-colors shadow-sm flex justify-center items-center gap-2 mt-auto"
                  >
                    Lihat Selengkapnya
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'galeri' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl mb-4 border-l-4 border-blue-600 pl-3 font-bold text-foreground">{galeri.foto.judul}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {galeri.foto.daftar.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-full h-48 object-cover object-[center_30%] rounded hover:scale-105 transition-transform shadow-sm focus:outline-none"
                  alt={`Galeri Desa ${i + 1}`}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e0d11?auto=format&fit=crop&q=80&w=800"; }}
                />
              ))}
            </div>

            <h2 className="text-2xl mb-4 border-l-4 border-blue-600 pl-3 font-bold text-foreground">{galeri.video.judul}</h2>
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-200 [&::-webkit-scrollbar-thumb]:rounded-full">
              {galeri.video.daftar.map((item, i) => (
                <div key={i} className="flex-shrink-0 w-80 md:w-[28rem] snap-center bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col">
                  <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title="YouTube video"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL / POPUP DETAIL (PERTANIAN / FASILITAS) */}
      {selectedGaleri && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4 backdrop-blur-sm">
          <div className={`bg-card text-foreground rounded-3xl ${selectedGaleri.daftarTempat ? 'max-w-4xl' : 'max-w-lg'} w-full max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full`}>
            {/* Tombol Close (X) */}
            <button
              onClick={() => setSelectedGaleri(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground transition-colors"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold mb-1 text-foreground">{selectedGaleri.judul}</h2>
            <p className="text-muted-foreground text-xs mb-5">
              {selectedGaleri.kategori ? `Sektor ${selectedGaleri.kategori} Desa Sukatani.` : 'Fasilitas Publik Desa Sukatani.'}
            </p>

            {/* Jika item memiliki galeri (Pertanian/Peternakan/Perkebunan) */}
            {selectedGaleri.galeri ? (
              <>
                <div className="mb-5">
                  <h4 className="font-semibold text-foreground text-sm mb-2 border-b border-border pb-1">Dokumentasi Foto</h4>
                  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin">
                    {selectedGaleri.galeri.foto.map((fotoUrl, index) => (
                      <div key={index} className="relative group flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden border snap-center">
                        <img
                          src={fotoUrl}
                          alt={`${selectedGaleri.judul} ${index + 1}`}
                          className="w-full h-full object-cover focus:outline-none"
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c16?auto=format&fit=crop&q=80&w=800"; }}
                        />

                        {/* Overlay Tombol Ubah Foto */}
                        <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white">
                          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          <span className="text-xs font-semibold">Ganti</span>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleGantiFoto(selectedGaleri.judul, index, e.target.files[0])}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2 border-b border-border pb-1">Dokumentasi Video</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedGaleri.galeri?.video.map((srcVideo, index) => (
                      <video key={index} controls className="w-full h-36 object-cover rounded-lg border">
                        <source src={srcVideo} type="video/mp4" />
                        Browser Anda tidak mendukung tag video.
                      </video>
                    ))}
                  </div>
                </div>
              </>
            ) : selectedGaleri.daftarTempat ? (
              /* Jika item adalah Fasilitas Umum Multi-Lokasi */
              <div className="flex overflow-x-auto gap-5 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                {selectedGaleri.daftarTempat.map((tempat, idx) => (
                  <div key={idx} className="flex-shrink-0 w-72 md:w-80 snap-center bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col">
                    <img
                      src={tempat.fotoUrl}
                      alt={tempat.judul}
                      className="w-full h-40 object-cover rounded-lg mb-3 shadow-sm border border-border focus:outline-none"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506744626753-eda8151a74a0?auto=format&fit=crop&q=80&w=800"; }}
                    />
                    <h4 className="font-bold text-foreground text-lg mb-1">{tempat.judul}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow text-justify">{tempat.deskripsi}</p>

                    {tempat.mapsUrl && (
                      <div className="mt-auto pt-3 border-t border-border">
                        <h4 className="font-semibold text-foreground text-xs mb-2 pb-1">Lokasi</h4>
                        <a
                          href={tempat.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                        >
                          <MapPin size={14} /> Buka di Google Maps
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Jika item adalah Fasilitas Umum Tunggal */
              <div>
                <img
                  src={selectedGaleri.fotoUrl}
                  alt={selectedGaleri.judul}
                  className="w-full h-56 object-cover rounded-xl border border-border mb-4 shadow-sm"
                />
                <h4 className="font-semibold text-foreground text-sm mb-1">Deskripsi</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-justify">{selectedGaleri.deskripsi}</p>

                {selectedGaleri.mapsUrl && (
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2 border-b border-border pb-1">Lokasi</h4>
                    <a
                      href={selectedGaleri.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                    >
                      <MapPin size={16} /> Buka di Google Maps
                    </a>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}