import { useState } from 'react';
import { Map, Users, Target, Activity, MapPin } from 'lucide-react';
import { profilIsi } from './profilIsi';

export default function ProfilTampilan() {
  const { judul, identitas, geografi, demografi, mataPencaharian, peta } = profilIsi;
  const [activeTab, setActiveTab] = useState('identitas');
  const [selectedFoto, setSelectedFoto] = useState(null);

  // Menambahkan properti warna unik untuk masing-masing tab
  const tabs = [
    {
      id: 'identitas',
      label: 'Identitas Desa',
      icon: Target,
      activeClass: 'bg-blue-600 text-white',
      iconClass: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'geografi',
      label: 'Geografi',
      icon: Map,
      activeClass: 'bg-yellow-500 text-white',
      iconClass: 'bg-yellow-50 text-yellow-600'
    },
    {
      id: 'demografi',
      label: 'Demografi',
      icon: Users,
      activeClass: 'bg-orange-500 text-white',
      iconClass: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'matapencaharian',
      label: 'Mata Pencaharian',
      icon: Activity,
      activeClass: 'bg-green-600 text-white',
      iconClass: 'bg-green-50 text-green-600'
    },
    {
      id: 'peta',
      label: 'Peta Wilayah',
      icon: MapPin,
      activeClass: 'bg-red-600 text-white',
      iconClass: 'bg-red-50 text-red-600'
    },
  ];

  const renderList = (items) => (
    <ul className="flex flex-col gap-2 md:gap-4 text-muted text-xs md:text-base">
      {items.map((item, i) => (
        <li key={i} className="flex justify-between items-center p-2.5 md:p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
          <strong className="text-foreground/90 w-1/2 md:w-auto">{item.label}</strong>
          <span className="text-right text-muted-foreground w-1/2 md:w-auto break-words">{item.nilai}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-16">

      {/* BAGIAN JUDUL YANG DIPERBARUI */}
      <div className="text-center mb-8 md:mb-12">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
            {judul}
          </h1>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
        </div>
        <p className="text-muted-foreground text-[11px] md:text-lg max-w-2xl mx-auto px-4 md:px-0">
          Mengenal lebih dekat informasi, keadaan alam, penduduk, serta potensi yang ada di Desa Sukatani.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 md:mb-8 bg-card p-1.5 md:p-2 border border-border rounded-xl md:rounded-2xl shadow-sm backdrop-blur-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-base font-medium transition-all duration-300 whitespace-nowrap flex-1 justify-center ${isActive
                  ? `${tab.activeClass} shadow-md scale-100`
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground scale-95 hover:scale-100'
                  }`}
              >
                <Icon className={`w-3 h-3 md:w-[18px] md:h-[18px] ${isActive ? 'animate-pulse' : ''}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-lg relative overflow-hidden transition-all duration-500 min-h-[400px]">

          {/* Decorative background blob (dinamis mengikuti warna tab) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary/50 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10 animate-fade-in">
            {activeTab === 'identitas' && (
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pb-3 md:pb-4 border-b border-border">
                  <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg md:rounded-xl text-blue-500">
                    <Target className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold">{identitas.judul}</h2>
                </div>
                {renderList(identitas.data)}
              </div>
            )}

            {activeTab === 'geografi' && (
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pb-3 md:pb-4 border-b border-border">
                  <div className="p-2 md:p-3 bg-yellow-500/10 rounded-lg md:rounded-xl text-yellow-500">
                    <Map className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold">{geografi.judul}</h2>
                </div>
                {renderList(geografi.data)}
              </div>
            )}

            {activeTab === 'demografi' && (
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pb-3 md:pb-4 border-b border-border">
                  <div className="p-2 md:p-3 bg-orange-500/10 rounded-lg md:rounded-xl text-orange-500">
                    <Users className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold">{demografi.judul}</h2>
                </div>
                <p className="text-muted-foreground text-xs md:text-lg mb-4 md:mb-8 bg-secondary/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-border leading-relaxed font-medium">{demografi.deskripsi}</p>
                {renderList(demografi.data)}
              </div>
            )}

            {activeTab === 'matapencaharian' && (
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pb-3 md:pb-4 border-b border-border">
                  <div className="p-2 md:p-3 bg-green-500/10 rounded-lg md:rounded-xl text-green-500">
                    <Activity className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold">{mataPencaharian.judul}</h2>
                </div>
                {renderList(mataPencaharian.data)}
              </div>
            )}

            {activeTab === 'peta' && (
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 pb-3 md:pb-4 border-b border-border">
                  <div className="p-2 md:p-3 bg-red-500/10 rounded-lg md:rounded-xl text-red-500">
                    <MapPin className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h2 className="text-lg md:text-2xl font-semibold">{peta.judul}</h2>
                </div>

                {/* Menambahkan jarak (p-4 md:p-8) dan membatasi ukuran gambar */}
                <div className="w-full rounded-2xl border-2 border-border shadow-md bg-secondary/30 flex justify-center items-center p-4 md:p-8">
                  <img
                    src={peta.embedUrl}
                    alt="Peta Wilayah Desa"
                    className="max-w-full h-auto object-contain rounded-lg border border-border shadow-sm"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}