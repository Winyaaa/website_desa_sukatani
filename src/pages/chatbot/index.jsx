import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, User, ChevronLeft, Sparkles, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: 'Halo! Saya asisten virtual Desa Sukatani. Ada yang bisa saya bantu hari ini?\n\nSilakan pilih salah satu Menu Utama di bawah ini:',
            options: [
                { id: '1', text: 'Administrasi Kependudukan (Adminduk)' },
                { id: '2', text: 'Surat Pengantar & Keterangan' },
                { id: '3', text: 'Pengaduan & Aspirasi Warga' },
                { id: '4', text: 'Informasi Bantuan Sosial & Program Desa' },
                { id: '5', text: 'Jam Operasional & Kontak Darurat' }
            ]
        }
    ]);
    const [inputVal, setInputVal] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    const knowledgeBase = {
        '1': {
            text: 'Layanan Kependudukan\n\nSilakan pilih jenis layanannya:',
            options: [
                { id: '1.1', text: 'Pembuatan KTP Baru / Hilang / Rusak' },
                { id: '1.2', text: 'Pembuatan Kartu Keluarga (KK)' },
                { id: '1.3', text: 'Pembuatan Akta Kelahiran / Kematian' }
            ]
        },
        '1.1': { text: 'Syarat pembuatan KTP:\n• Surat pengantar RT/RW\n• KK asli\n• Berkasi pendukung lainnya (foto copy kehilangan dari polisi jika hilang)\n\nJadwal pengambilan: KTP dapat diambil secara langsung di loket Balai Desa pada jam operasional kerja kami.' },
        '1.2': {
            text: 'Pilih jenis layanan Kartu Keluarga (KK):',
            options: [
                { id: '1.2.a', text: 'Penambahan Anggota Baru (Kelahiran)' },
                { id: '1.2.b', text: 'Pengurangan Anggota (Pindah/Meninggal)' },
                { id: '1.2.c', text: 'KK Hilang / Rusak' }
            ]
        },
        '1.2.a': { text: 'Untuk penambahan anggota keluarga karena kelahiran, siapkan:\n• Kartu Keluarga (KK) Asli\n• Surat Keterangan Lahir dari Bidan / Rumah Sakit\n• Fotokopi Buku Nikah orang tua\n• Pengantar RT/RW.' },
        '1.2.b': { text: 'Untuk pengurangan anggota keluarga, siapkan:\n• Kartu Keluarga (KK) Asli\n• Surat Keterangan Kematian (jika meninggal) ATAU\n• Surat Keterangan Pindah (jika anggota keluarga pindah alamat).' },
        '1.2.c': { text: 'Untuk KK Hilang / Rusak, siapkan:\n• Surat Keterangan Kehilangan dari Kepolisian (jika hilang)\n• Fisik KK yang rusak (jika rusak)\n• Fotokopi KTP kepala keluarga / anggota keluarga.' },
        '1.3': { text: 'Syarat Pembuatan Akta Kelahiran / Kematian:\n• Fotokopi KK & KTP pemohon\n• Surat Keterangan Kelahiran / Kematian dari instansi terkait\n• Surat Pengantar dari Ketua RT/RW setempat.' },

        '2': {
            text: 'Pembuatan Surat Pengantar / Keterangan (Paling Sering Dicari)\n\nSilakan pilih jenis suratnya:',
            options: [
                { id: '2.1', text: 'Surat Keterangan Tidak Mampu (SKTM)' },
                { id: '2.2', text: 'Surat Keterangan Usaha (SKU)' },
                { id: '2.3', text: 'Surat Keterangan Domisili' },
                { id: '2.4', text: 'Surat Pengantar Nikah (N1 - N4)' }
            ]
        },
        '2.1': {
            text: 'Untuk keperluan apa SKTM tersebut?',
            options: [
                { id: '2.1.a', text: 'Sekolah / Beasiswa' },
                { id: '2.1.b', text: 'Kesehatan / Rumah Sakit' },
                { id: '2.1.c', text: 'Pengajuan Bantuan Sosial' }
            ]
        },
        '2.1.a': { text: 'Syarat SKTM Pendidikan/Beasiswa:\n• Fotokopi KK & KTP Orang Tua / Wali\n• Surat Pengantar RT/RW\n• Dokumen keterangan dari sekolah (Kartu Pelajar dll).' },
        '2.1.b': { text: 'Syarat SKTM Kesehatan/RS:\n• Fotokopi KK & KTP yang bersangkutan\n• Surat Pengantar RT/RW\n• Rujukan atau keterangan diagnosa dari Fasilitas Kesehatan.' },
        '2.1.c': { text: 'Syarat SKTM Bantuan Sosial:\n• Fotokopi KK & KTP Kepala Keluarga\n• Surat Pengantar RT/RW\n• Foto tampak depan dan dalam kondisi rumah.' },
        '2.2': { text: 'Syarat Pembuatan SKU:\n• Fotokopi KTP pemohon\n• Surat Pengantar RT/RW\n• PENTING: Apakah Anda sudah menyiapkan Foto Tempat Usaha cetak? (Mohon dilampirkan langsung saat penyerahan dokumen).' },
        '2.3': { text: 'Syarat Surat Keterangan Domisili:\n• Fotokopi KTP\n• Surat Pengantar RT/RW domisili asal maupun domisili setempat.' },
        '2.4': { text: 'Syarat Pengantar Nikah (Surat N1 - N4):\n• Fotokopi KK & KTP calom mempelai\n• Surat Pengantar RT/RW setempat\n• Fotokopi KTP orang tua\n• Pas foto berwarna 2x3 dan 3x4.' },

        '3': {
            text: 'Lapor Masalah / Pengaduan Desa\n\nSilakan pilih kategori pelaporan:',
            options: [
                { id: '3.1', text: 'Infrastruktur Rusak (Jalan, Lampu PJU, Saluran Air)' },
                { id: '3.2', text: 'Masalah Layanan / Keamanan Desa' },
                { id: '3.3', text: 'Kritik & Saran untuk Kantor Desa' }
            ]
        },
        '3.1': { text: 'Silakan kirimkan laporan Anda. Mohon sertakan:\n• Foto lokasi kejadian\n• Ketik alamat lengkap titik koordinat kerusakan.\n(Anda dapat memakai portal \'Pengaduan\' secara anonim).' },
        '3.2': { text: 'Untuk kendala masalah layanan atau keamanan, mohon beritahu Linmas atau Perangkat Desa yang bertugas. Anda juga dapat menghubungi kontak darurat.' },
        '3.3': { text: 'Kami sangat menghargai saran Anda untuk kemajuan Sukatani. Silakan memakai menu Layanan Digital (Pengaduan Anonim) untuk menulis kritik / saran tanpa identitas diri.' },

        '4': {
            text: 'Informasi Bantuan Sosial & Program Desa\n\nSilakan pilih informasi (BLT, PKH, BPNT):',
            options: [
                { id: '4.1', text: 'Cara Cek Penerima Bantuan' },
                { id: '4.2', text: 'Jadwal Penyaluran / Pengambilan Bansos' },
                { id: '4.3', text: 'Syarat Pengajuan Nama Masuk DTKS' }
            ]
        },
        '4.1': { text: 'Anda bisa mengecek secara mandiri status bantuan sosial Anda dengan mengakses website resmi Kementerian Sosial: cekbansos.kemensos.go.id lalu pilih Provinsi, Kabupaten, dan masukkan nama sesuai KTP.' },
        '4.2': { text: 'Terkait jadwal panyaluran/pengambilan, hal tersebut akan diumumkan pada Papan Pengumuman Desa dan disebarkan ke Ketua RW masing-masing. Jangan lupa membawa Undangan ASLI, KTP, dan KK.' },
        '4.3': { text: 'Syarat Pengajuan Data Terpadu Kesejahteraan Sosial (DTKS):\n• Fotokopi KTP & KK.\n• Serta keterangan resmi dari RT/RW bahwa keluarga tersebut benar-benar dalam keadaan rentan secara ekonomi.\n• Foto Rumah (Tampak Depan, Samping, Dalam/Lantai, Dapur).' },

        '5': {
            text: 'Jam Kerja & Kontak Penting',
            options: [
                { id: '5.1', text: 'Jam Pelayanan Kantor Desa' },
                { id: '5.2', text: 'Nomor Kontak Darurat Desa' }
            ]
        },
        '5.1': { text: 'Jam Pelayanan Kantor Desa Sukatani:\n• Senin - Kamis: 08.00 - 16.00 WIB\n• Sabtu - Minggu: Tutup (Libur)' },
        '5.2': { text: 'Nomor Kontak Darurat Desa Sukatani:\n• Telepon / WhatsApp: +62 822-8370-4925' }
    };

    const handleSend = (text) => {
        if (!text.trim()) return;

        // add user message
        const newMsg = { id: Date.now(), sender: 'user', text: text };
        setMessages(prev => [...prev, newMsg]);
        setInputVal('');
        setIsTyping(true);

        // bot responds
        setTimeout(() => {
            let botResponseText = '';
            let botResponseOptions = null;

            const code = text.trim().toLowerCase();

            if (code === 'menu' || code === '0') {
                botResponseText = 'Silakan pilih Menu Utama di bawah ini:';
                botResponseOptions = [
                    { id: '1', text: 'Administrasi Kependudukan (Adminduk)' },
                    { id: '2', text: 'Surat Pengantar & Keterangan' },
                    { id: '3', text: 'Pengaduan & Aspirasi Warga' },
                    { id: '4', text: 'Informasi Bantuan Sosial & Program Desa' },
                    { id: '5', text: 'Jam Operasional & Kontak Darurat' }
                ];
            } else if (knowledgeBase[code]) {
                botResponseText = knowledgeBase[code].text;
                if (knowledgeBase[code].options) {
                    botResponseOptions = knowledgeBase[code].options;
                } else {
                    // Append a helpful tip to return to menu if it's the end of a branch
                    botResponseText += '\n\n*(Ketik "menu" untuk kembali ke awal)*';
                }
            } else {
                botResponseText = 'Maaf, saya tidak mengerti kodenya. Silakan klik kotak opsi yang tersedia atau ketik angkanya (misal: "1" atau "1.2.a").\n\nKetik "menu" untuk kembali ke menu utama.';
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: botResponseText,
                options: botResponseOptions
            }]);
            setIsTyping(false);
        }, 800);
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="container animate-fade-in py-16 flex justify-center h-[95vh] min-h-[600px]">
            <div className="bg-card w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border/50 relative">

                {/* Header (Glassmorphism + Gradients) */}
                <div className="bg-gradient-to-r from-blue-600 to-green-500 p-5 flex items-center justify-between shadow-md z-10">
                    <div className="flex items-center gap-4">
                        <Link to="/layanan" className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer">
                            <ChevronLeft size={22} />
                        </Link>
                        <div className="relative">
                            <div className="bg-white rounded-full p-2.5 text-blue-600 shadow-sm relative z-10">
                                <Sparkles size={24} className="animate-pulse" />
                            </div>
                            <div className="absolute inset-0 bg-white/50 rounded-full blur-md z-0 h-full w-full"></div>
                        </div>
                        <div>
                            <h2 className="font-extrabold text-xl text-white tracking-tight">SukaBot</h2>
                            <p className="text-sm text-white/90 flex items-center gap-2 font-medium tracking-wide">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300"></span>
                                </span>
                                Asisten Digital Sukatani
                            </p>
                        </div>
                    </div>
                    <button className="text-white/80 hover:text-white p-2 cursor-pointer transition-colors">
                        <MoreHorizontal size={24} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-secondary/20 flex flex-col gap-6 hide-scrollbar relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                        <Sparkles size={300} />
                    </div>

                    {messages.map(msg => (
                        <div key={msg.id} className={`flex gap-4 max-w-[85%] relative z-10 ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                            <div className={`p-3 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' : 'bg-gradient-to-br from-green-500 to-green-700 text-white'}`}>
                                {msg.sender === 'user' ? <User size={22} /> : <MessageSquare size={22} />}
                            </div>

                            <div className={`rounded-3xl p-5 shadow-sm border ${msg.sender === 'user' ? 'bg-primary text-primary-foreground border-transparent rounded-tr-sm' : 'bg-card text-card-foreground border-border rounded-tl-sm'}`}>
                                <div className="text-[15px] leading-relaxed whitespace-pre-line font-medium">{msg.text}</div>

                                {msg.options && (
                                    <div className="mt-5 flex flex-col gap-3">
                                        {msg.options.map(opt => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleSend(opt.id.toString())}
                                                className="text-left p-3.5 border border-primary/20 bg-primary/5 rounded-xl hover:bg-primary/10 hover:border-primary/40 transition-all font-semibold active:scale-95 cursor-pointer"
                                            >
                                                <span className="text-primary mr-2">{opt.id}.</span> {opt.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-4 max-w-[85%] self-start relative z-10 animate-fade-in">
                            <div className="p-3 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0 shadow-sm bg-gradient-to-br from-green-500 to-green-700 text-white">
                                <MessageSquare size={22} />
                            </div>
                            <div className="bg-card border border-border rounded-3xl rounded-tl-sm p-5 shadow-sm flex items-center gap-1.5 h-[62px]">
                                <span className="w-2 h-2 bg-muted rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-muted rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-muted rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}

                    <div ref={bottomRef} className="h-4" />
                </div>

                {/* Input Area */}
                <div className="p-5 bg-card border-t border-border flex gap-3 relative z-10">
                    <input
                        type="text"
                        className="flex-1 bg-secondary border border-border rounded-2xl px-5 py-4 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all font-medium text-foreground"
                        placeholder="Ketik angka 1-5 atau kode menu (contoh: 1.2.a)..."
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend(inputVal)}
                    />
                    <button
                        onClick={() => handleSend(inputVal)}
                        disabled={!inputVal.trim() || isTyping}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-2xl transition-colors flex items-center justify-center gap-2 font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-95"
                    >
                        <span className="hidden sm:inline">Kirim</span> <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
