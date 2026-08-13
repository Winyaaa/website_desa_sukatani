import React, { useState } from 'react';
import { Calendar, User, X } from 'lucide-react';
import { beritaIsi } from './beritaIsi';

export default function BeritaTampilan() {
  const { judul, berita, pengumumanResmi, kategori, ringkasanDefault } = beritaIsi;
  const [selectedBerita, setSelectedBerita] = useState(null);

  const [activeCategory, setActiveCategory] = useState(null);

  // Filter berita berdasarkan kategori yang dipilih
  const filteredBerita = activeCategory
    ? berita.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())
    : berita;

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12">

      {/* BAGIAN JUDUL YANG DIPERBARUI */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          {judul}
        </h1>
        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
      </div>

      {/* Merapikan Grid Layout (Kiri untuk Berita, Kanan untuk Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Kolom Kiri: Daftar Berita */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {activeCategory && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Menampilkan berita untuk kategori: <strong className="text-blue-600">{activeCategory}</strong></span>
              <button onClick={() => setActiveCategory(null)} className="text-sm font-bold text-red-500 hover:underline">Reset Filter</button>
            </div>
          )}
          {filteredBerita.length > 0 ? (
            filteredBerita.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                {/* Gambar Berita */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full md:w-2/5 object-cover h-56 md:h-auto focus:outline-none"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e0d11?auto=format&fit=crop&q=80&w=800"; }}
                />

                {/* Konten Berita */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <span className="text-[10px] md:text-xs font-bold text-blue-600 mb-1.5 md:mb-2 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h2 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 hover:text-blue-600 cursor-pointer transition-colors leading-tight">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-4">
                    <span className="flex items-center gap-1 md:gap-1.5">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1 md:gap-1.5">
                      <User className="w-3 h-3 md:w-4 md:h-4" /> {item.author}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
                    {item.ringkasan || ringkasanDefault}
                  </p>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-blue-600 font-bold text-sm text-left hover:underline flex items-center gap-1 w-max"
                    >
                      Baca Selengkapnya di luar &rarr;
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedBerita(item)}
                      className="mt-auto self-start text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors border border-blue-100"
                    >
                      Baca Selengkapnya
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-card rounded-2xl border border-border p-12 text-center text-muted-foreground">
              Tidak ada berita untuk kategori ini.
            </div>
          )}
        </div>

        {/* Kolom Kanan: Sidebar (Pengumuman & Kategori) */}
        <div className="flex flex-col gap-6">

          {/* Card Kategori */}
          <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-3">
              {kategori.judul}
            </h3>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              {kategori.daftar.map((item, i) => {
                const isActive = activeCategory && activeCategory.toLowerCase() === item.nama.toLowerCase();
                // Hitung jumlah sebenarnya dari array berita
                const actualCount = berita.filter(
                  b => (b.category || '').toLowerCase() === item.nama.toLowerCase()
                ).length;

                return (
                  <li key={i}>
                    <button
                      onClick={() => setActiveCategory(isActive ? null : item.nama)}
                      className={`w-full flex justify-between items-center transition-colors focus:outline-none ${isActive ? 'text-blue-700 font-bold' : 'hover:text-blue-600'}`}
                    >
                      <span>{item.nama}</span>
                      <span className={`${isActive ? 'bg-blue-500/10 text-blue-600' : 'bg-secondary text-muted-foreground'} text-xs py-1 px-2 rounded-full font-medium transition-colors`}>
                        {actualCount}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>

      {/* Modal Berita */}
      {selectedBerita && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in" onClick={() => setSelectedBerita(null)}>
          <div className="bg-card rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative border border-border" onClick={e => e.stopPropagation()}>
            {/* Header / Banner Modal */}
            <div className="relative w-full h-48 sm:h-64 shrink-0">
              <img src={selectedBerita.img} alt={selectedBerita.title} className="w-full h-full object-cover focus:outline-none" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e0d11?auto=format&fit=crop&q=80&w=800"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                  {selectedBerita.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedBerita(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-red-500 text-white rounded-full p-2 backdrop-blur-sm transition-colors focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            {/* Isi Artikel (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow bg-secondary/30">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 border-b border-border pb-4">
                <span className="flex items-center gap-1.5 font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedBerita.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} /> {selectedBerita.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={16} /> Ditulis oleh {selectedBerita.author}
                </span>
              </div>

              {selectedBerita.modalImages && (
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  {selectedBerita.modalImages.map((src, idx) => (
                    <img key={idx} src={src} alt={`Dokumentasi ${idx + 1}`} className="w-full md:w-1/2 h-48 md:h-64 object-cover rounded-2xl shadow-sm border border-border focus:outline-none" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506744626753-eda8151a74a0?auto=format&fit=crop&q=80&w=800"; }} />
                  ))}
                </div>
              )}

              <div className="prose prose-blue max-w-none text-foreground/90 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {selectedBerita.isiLengkap || selectedBerita.ringkasan || ringkasanDefault}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-card border-t border-border flex justify-end">
              <button
                onClick={() => setSelectedBerita(null)}
                className="px-6 py-2 bg-secondary hover:bg-secondary/80 text-foreground font-bold rounded-xl transition-colors"
              >
                Tutup Artikel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}