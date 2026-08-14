import { useState } from 'react';
import { MessageSquare, Send, ShieldAlert, UserX, AlertCircle } from 'lucide-react';

export default function PengaduanTampilan() {
    const [kategori, setKategori] = useState("");
    const [pesan, setPesan] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = "6282283704925";
        const text = `*PORTAL PENGADUAN ANONIM*%0A%0A*Kategori:* ${kategori || 'Tidak disebutkan'}%0A*Laporan:* ${pesan}`;
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    return (
        <div className="animate-fade-in relative pt-24 pb-16 bg-background min-h-screen flex flex-col justify-center">
            <div className="container max-w-3xl mx-auto px-4 z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 mb-6">
                        <ShieldAlert size={20} />
                        <span className="font-bold text-sm tracking-widest uppercase">Portal Pengaduan Anonim</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                        Kritik & Saran <span className="text-primary">Masyarakat</span>
                    </h1>
                    <p className="text-lg text-muted max-w-xl mx-auto">
                        Sampaikan keluhan, kritik, maupun saran Anda. Identitas Anda akan 100% dirahasiakan (anonim) guna menjamin kebebasan dan keamanan berekspresi demi membangun Desa Sukatani.
                    </p>
                </div>

                {/* Form Container */}
                <div className="premium-card bg-card p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                        <MessageSquare size={200} />
                    </div>

                    <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>                        {/* Info Box */}
                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-4">
                            <AlertCircle className="text-blue-500 mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-blue-600 dark:text-blue-400">Jalur Aman & Rahasia</h4>
                                <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                                    Pesan Anda akan langsung disalurkan ke tim penanganan pengaduan Desa Sukatani tanpa menyertakan nama, alamat, atau kontak Anda.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="kategori" className="font-bold text-foreground text-sm">Kategori Laporan</label>
                            <div className="relative">
                                <select
                                    id="kategori"
                                    value={kategori}
                                    onChange={(e) => setKategori(e.target.value)}
                                    className="w-full bg-secondary/50 border border-border text-foreground rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
                                >
                                    <option value="">-- Pilih Kategori --</option>
                                    <option value="Infrastruktur & Fasilitas Umum">Infrastruktur & Fasilitas Umum</option>
                                    <option value="Pelayanan Perangkat Desa">Pelayanan Perangkat Desa</option>
                                    <option value="Keamanan Lingkungan">Keamanan Lingkungan</option>
                                    <option value="Masalah Sosial & Bantuan">Masalah Sosial & Bantuan</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan" className="font-bold text-foreground text-sm">Isi Kritik / Saran Anda</label>
                            <textarea
                                id="pesan"
                                rows="6"
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                                className="w-full bg-secondary/50 border border-border text-foreground rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                placeholder="Deskripsikan masalah, lokasi, atau saran Anda secara detail di sini..."
                                required
                            ></textarea>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-muted text-sm font-medium">
                                <UserX size={18} className="text-green-500" /> Mode Anonim Aktif
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-red-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Kirim Laporan <Send size={18} />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
