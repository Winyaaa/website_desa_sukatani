import { pemerintahanIsi } from './pemerintahanIsi';

export default function PemerintahanTampilan() {
  const { judul, struktur, perangkat, kontak } = pemerintahanIsi;

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12">

      {/* BAGIAN JUDUL YANG DIPERBARUI */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          {judul}
        </h1>
        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
      </div>

      <div className="card bg-card p-4 md:p-8 border border-border rounded-xl md:rounded-2xl shadow-sm mb-8 md:mb-16 text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-6 text-foreground">{struktur.judul}</h2>
        <img
          src={struktur.gambar}
          alt="Struktur Organisasi"
          className="mx-auto rounded-md md:rounded-lg shadow-sm"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
        <p className="text-[10px] md:text-sm text-muted-foreground mt-3 md:mt-4">{struktur.keterangan}</p>
      </div>

      <h2 className="text-xl md:text-3xl text-center mb-6 md:mb-8 font-bold text-foreground">{perangkat.judul}</h2>

      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 md:pb-8 snap-x snap-mandatory pt-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
        {perangkat.daftar.map((staff, index) => (
          <div key={index} className="card bg-card p-4 md:p-6 border border-border rounded-xl shadow-sm text-center flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-md min-w-[200px] md:min-w-[260px] snap-center shrink-0 w-56 md:w-72">
            <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full mb-3 md:mb-5 border-2 md:border-4 border-secondary shadow-sm overflow-hidden flex items-center justify-center ${['Kepala Desa', 'Sekretaris Desa', 'Kepala Seksi Pelayanan', 'Kepala Urusan Perencanaan', 'Staff Pelayanan', 'Kepala Urusan Umum', 'Kepala Urusan Keuangan', 'Kepala Seksi Kesejahteraan', 'Kepala Dusun II', 'Kepala Seksi Pemerintah'].includes(staff.role)
              ? 'bg-gradient-to-br from-blue-500 to-green-500'
              : ''
              }`}>
              <img
                src={staff.img}
                alt={staff.name}
                className={`w-full h-full object-contain transition-transform duration-300 ${staff.role === 'Sekretaris Desa' ? 'scale-[1.6]' : staff.role === 'Kepala Seksi Kesejahteraan' ? 'scale-[1.45]' : staff.role === 'Kepala Seksi Pelayanan' ? 'scale-[1.2] object-bottom' : staff.role === 'Kepala Urusan Umum' ? 'scale-[1.3]' : 'scale-100'}`}
              />
            </div>
            <h3 className="text-sm md:text-xl font-bold mb-1 text-foreground">{staff.name}</h3>
            <p className="text-[10px] md:text-sm px-2 md:px-3 py-0.5 md:py-1 bg-blue-50/20 text-blue-600 font-semibold rounded-full mb-2 md:mb-4 inline-block">{staff.role}</p>
            <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed flex-grow">{staff.tugas}</p>
          </div>
        ))}
      </div>

      <div className="card mt-8 md:mt-16 p-5 md:p-8 border border-border rounded-xl md:rounded-2xl shadow-sm text-center bg-secondary/50">
        <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-foreground">{kontak.judul}</h2>
        <p className="text-[11px] md:text-base text-muted-foreground mb-4 md:mb-6">{kontak.deskripsi}</p>
        <div className="inline-block bg-card p-3 md:p-4 rounded-lg md:rounded-xl border border-border shadow-sm min-w-[200px] md:min-w-[250px]">
          <p className="text-sm md:text-xl font-bold text-blue-600 mb-1">{kontak.telepon}</p>
          <p className="text-xs md:text-base text-muted-foreground">{kontak.email}</p>
        </div>
      </div>
    </div>
  );
}