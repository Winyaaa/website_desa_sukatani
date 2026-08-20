import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

export const showSuccess = (text) => {
    Swal.fire({ icon: 'success', title: 'Berhasil!', text, timer: 2000, showConfirmButton: false });
};

export const showError = (text) => {
    Swal.fire({ icon: 'error', title: 'Gagal!', text });
};

export const showConfirmAction = (title, text, actionText, configColor, onConfirm) => {
    Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: configColor || '#3b82f6',
        cancelButtonColor: '#64748b',
        confirmButtonText: actionText,
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};
import {
    Home,
    Users,
    MapPin,
    FileText,
    Calendar,
    LogOut,
    Info,
    Menu,
    X,
    Plus,
    Edit2,
    Trash2,
    Save
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Beranda');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        showConfirmAction('Keluar', 'Apakah Anda yakin ingin keluar?', 'Ya, Keluar', '#ef4444', () => { navigate('/admin-login'); });
    };

    const menuItems = [
        { name: 'Beranda', icon: <Home className="w-5 h-5" /> },
        { name: 'Profil', icon: <Info className="w-5 h-5" /> },
        { name: 'Pemerintahan', icon: <Users className="w-5 h-5" /> },
        { name: 'Potensi', icon: <MapPin className="w-5 h-5" /> },
        { name: 'Berita', icon: <FileText className="w-5 h-5" /> },
        { name: 'Agenda', icon: <Calendar className="w-5 h-5" /> },
    ];

    // Komponen render untuk masing-masing tab
    const renderContent = () => {
        switch (activeTab) {
            case 'Beranda': return <AdminBeranda />;
            case 'Profil': return <AdminProfil />;
            case 'Berita': return <AdminBerita />;
            case 'Pemerintahan': return <AdminPemerintahan />;
            case 'Potensi': return <AdminPotensi />;
            case 'Agenda': return <AdminAgenda />;
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-60">
                        <h2 className="text-2xl font-bold mb-4">Modul {activeTab}</h2>
                        <p>Fitur untuk mengedit halaman {activeTab} sedang dalam pengembangan.</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-secondary/30 flex">
            {/* Sidebar Dekstop & Mobile */}
            <aside
                className={`fixed md:sticky top-0 left-0 z-50 h-screen bg-card border-r border-border shadow-xl transition-all duration-300 flex flex-col 
          ${isSidebarOpen ? 'w-64 translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20'}`}
            >
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className={`font-bold text-lg bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent flex items-center gap-2 ${!isSidebarOpen && 'md:hidden'}`}>
                        Admin Panel
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-secondary/80 text-foreground/80"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setActiveTab(item.name);
                                if (window.innerWidth < 768) setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.name
                                ? 'bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-600 font-bold border border-blue-500/20 shadow-sm'
                                : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                                }`}
                        >
                            {item.icon}
                            <span className={`${!isSidebarOpen && 'md:hidden'} transition-all`}>{item.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-border">
                    <button
                        onClick={handleLogout}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all font-semibold`}
                    >
                        <LogOut className="w-5 h-5" />
                        <span className={`${!isSidebarOpen && 'md:hidden'} transition-all`}>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header (untuk mobile menu toggle & Title) */}
                <header className="bg-card border-b border-border shadow-sm px-6 py-4 flex items-center gap-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="md:hidden p-2 rounded-lg bg-secondary text-foreground/80"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-foreground">Kelola {activeTab}</h1>
                        <p className="text-sm text-foreground/50">Atur konten untuk ditampilkan di website publik.</p>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-y-auto w-full max-w-7xl mx-auto">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

import { sambutanIsi as defaultSambutanIsi } from '../beranda/berandaIsi';
import { sejarahIsi as defaultSejarahIsi } from '../beranda/sejarah/sejarahIsi';
import { visiMisiIsi as defaultVisiMisiIsi } from '../beranda/visiMisi/visiMisiIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL BERANDA (Tersinkronisasi)
// ----------------------------------------------------
function AdminBeranda() {
    const [subTab, setSubTab] = useState('sambutan');

    // State Sambutan
    const [dataSambutan, setDataSambutan] = useState({
        ...defaultSambutanIsi,
        foto: '/kepaladesa.png'
    });

    // State Sejarah
    const [dataSejarah, setDataSejarah] = useState(defaultSejarahIsi);

    // State VisiMisi
    const [dataVisiMisi, setDataVisiMisi] = useState(defaultVisiMisiIsi);

    useEffect(() => {
        const savedSambutan = localStorage.getItem('cms_beranda');
        if (savedSambutan) setDataSambutan(JSON.parse(savedSambutan));

        const savedSejarah = localStorage.getItem('cms_sejarah');
        if (savedSejarah) setDataSejarah(JSON.parse(savedSejarah));

        const savedVisiMisi = localStorage.getItem('cms_visimisi');
        if (savedVisiMisi) setDataVisiMisi(JSON.parse(savedVisiMisi));
    }, []);

    const handleChangeSambutan = (e) => {
        const { name, value } = e.target;
        setDataSambutan(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveSambutan = (e) => {
        e.preventDefault();
        localStorage.setItem('cms_beranda', JSON.stringify(dataSambutan));
        window.dispatchEvent(new Event('storage'));
        showSuccess('');
    };

    const handleSaveSejarah = (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('cms_sejarah', JSON.stringify(dataSejarah));
            window.dispatchEvent(new Event('storage'));
            showSuccess('');
        } catch (e) {
            showSuccess('');
        }
    };

    const handleSaveVisiMisi = (e) => {
        e.preventDefault();
        localStorage.setItem('cms_visimisi', JSON.stringify(dataVisiMisi));
        window.dispatchEvent(new Event('storage'));
        showSuccess('');
    };

    const handlePhotoUploadBase64 = (e, callbackParams) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 500;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/webp', 0.8);

                callbackParams(dataUrl);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-border flex bg-secondary/30 text-sm overflow-x-auto">
                <button
                    onClick={() => setSubTab('sambutan')}
                    className={`px-4 py-3 font-semibold transition-colors ${subTab === 'sambutan' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Sambutan Kades
                </button>
                <button
                    onClick={() => setSubTab('sejarah')}
                    className={`px-4 py-3 font-semibold transition-colors ${subTab === 'sejarah' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Sejarah Desa
                </button>
                <button
                    onClick={() => setSubTab('visimisi')}
                    className={`px-4 py-3 font-semibold transition-colors ${subTab === 'visimisi' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Visi Misi & Program
                </button>
            </div>

            <div className="p-6">
                <p className="text-sm text-green-600 mb-6 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman Beranda.</p>

                {subTab === 'sambutan' && (
                    <form onSubmit={handleSaveSambutan} className="space-y-4 max-w-3xl">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Nama Kepala Desa</label>
                            <input
                                type="text"
                                name="nama"
                                value={dataSambutan.nama}
                                onChange={handleChangeSambutan}
                                className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Jabatan</label>
                            <input
                                type="text"
                                name="jabatan"
                                value={dataSambutan.jabatan}
                                onChange={handleChangeSambutan}
                                className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Foto Sambutan</label>
                            <div className="flex gap-4 items-center">
                                {dataSambutan.foto && (
                                    <img src={dataSambutan.foto} alt="Preview" className="w-16 h-16 object-cover rounded-xl border-4 border-secondary" />
                                )}
                                <div className="flex-1">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => setDataSambutan({ ...dataSambutan, foto: dataUrl }))}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    <p className="text-xs text-muted-foreground mt-2 px-2">Pilih gambar dari komputer/HP Anda. Gambar akan dikompres otomatis menjadi kotak & diubah ukurannya.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Teks Sambutan</label>
                            <textarea
                                name="kutipan"
                                value={dataSambutan.kutipan}
                                onChange={handleChangeSambutan}
                                rows="5"
                                className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                        </div>
                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                            Simpan Perubahan
                        </button>
                    </form>
                )}

                {subTab === 'sejarah' && (
                    <form onSubmit={handleSaveSejarah} className="space-y-6 max-w-4xl">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Judul Seksi</label>
                            <input
                                type="text"
                                value={dataSejarah.judul}
                                onChange={e => setDataSejarah({ ...dataSejarah, judul: e.target.value })}
                                className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Gambar/Ilustrasi Sejarah</label>
                            <div className="flex gap-4 items-center">
                                {dataSejarah.gambar.src && (
                                    <img src={dataSejarah.gambar.src} alt="Preview" className="w-24 h-16 object-cover rounded-xl border-4 border-secondary" />
                                )}
                                <div className="flex-1">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => setDataSejarah({ ...dataSejarah, gambar: { ...dataSejarah.gambar, src: dataUrl } }))}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    <p className="text-xs text-muted-foreground mt-2 px-2">Anda bisa mengunggah foto desa yang asli di sini. Lebar maksimal akan dibatasi otomatis.</p>
                                </div>
                            </div>
                        </div>

                        {dataSejarah.bagian.map((bagian, idx) => (
                            <div key={idx} className="p-4 border border-border rounded-xl bg-secondary/20">
                                <label className="block text-sm font-bold mb-1">Sub-Judul {idx + 1}</label>
                                <input
                                    type="text"
                                    value={bagian.judul}
                                    onChange={e => {
                                        const newBagian = [...dataSejarah.bagian];
                                        newBagian[idx].judul = e.target.value;
                                        setDataSejarah({ ...dataSejarah, bagian: newBagian });
                                    }}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background mb-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <label className="block text-sm font-bold mb-1">Teks (Paragraf 1)</label>
                                <textarea
                                    value={bagian.paragraf[0]}
                                    onChange={e => {
                                        const newBagian = [...dataSejarah.bagian];
                                        newBagian[idx].paragraf[0] = e.target.value;
                                        setDataSejarah({ ...dataSejarah, bagian: newBagian });
                                    }}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                ></textarea>
                            </div>
                        ))}

                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                            Simpan Perubahan Sejarah
                        </button>
                    </form>
                )}

                {subTab === 'visimisi' && (
                    <form onSubmit={handleSaveVisiMisi} className="space-y-6 max-w-4xl">

                        {/* Visi */}
                        <div className="p-5 border border-green-500/20 rounded-xl bg-green-500/5">
                            <h3 className="font-bold text-green-600 mb-3 block text-lg">VISI DESA</h3>
                            <textarea
                                value={dataVisiMisi.visi.teks}
                                onChange={e => setDataVisiMisi({ ...dataVisiMisi, visi: { ...dataVisiMisi.visi, teks: e.target.value } })}
                                rows="3"
                                className="w-full px-4 py-2 rounded-xl border border-green-500/30 bg-background focus:outline-none focus:ring-2 focus:ring-green-500/50"
                            ></textarea>
                        </div>

                        {/* Misi */}
                        <div className="p-5 border border-blue-500/20 rounded-xl bg-blue-500/5">
                            <h3 className="font-bold text-blue-600 mb-3 block text-lg">MISI DESA</h3>
                            <div className="mb-4">
                                <label className="text-sm font-semibold mb-1 block">Teks Pendahuluan Misi</label>
                                <textarea
                                    value={dataVisiMisi.misi.pendahuluan}
                                    onChange={e => setDataVisiMisi({ ...dataVisiMisi, misi: { ...dataVisiMisi.misi, pendahuluan: e.target.value } })}
                                    rows="2"
                                    className="w-full px-4 py-2 rounded-xl border border-blue-500/30 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                ></textarea>
                            </div>

                            {dataVisiMisi.misi.daftar.map((misiItem, idx) => (
                                <div key={idx} className="mb-4 border-l-4 border-blue-500 pl-4 bg-background p-3 rounded-r-xl border-y border-r border-border">
                                    <label className="text-sm font-bold mb-1 block">Misi {idx + 1}</label>
                                    <input
                                        type="text"
                                        value={misiItem.teks}
                                        onChange={e => {
                                            const newDaftar = [...dataVisiMisi.misi.daftar];
                                            newDaftar[idx].teks = e.target.value;
                                            setDataVisiMisi({ ...dataVisiMisi, misi: { ...dataVisiMisi.misi, daftar: newDaftar } });
                                        }}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 mb-2"
                                        placeholder="Judul / Teks Misi"
                                    />
                                    <label className="text-xs font-semibold mb-1 block text-muted-foreground">Sub-poin (Masing-masing poin dipisah per baris/enter)</label>
                                    <textarea
                                        value={misiItem.subDaftar.join('\n')}
                                        onChange={e => {
                                            const newDaftar = [...dataVisiMisi.misi.daftar];
                                            newDaftar[idx].subDaftar = e.target.value.split('\n');
                                            setDataVisiMisi({ ...dataVisiMisi, misi: { ...dataVisiMisi.misi, daftar: newDaftar } });
                                        }}
                                        rows="3"
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        placeholder="a. Poin A&#10;b. Poin B&#10;c. Poin C"
                                    ></textarea>
                                </div>
                            ))}
                        </div>

                        {/* Program Kerja Singkat */}
                        <div className="p-5 border border-yellow-500/20 rounded-xl bg-yellow-500/5">
                            <h3 className="font-bold text-yellow-600 mb-3 block text-lg">PROGRAM KERJA (RKP Desa)</h3>

                            {/* Bagian A */}
                            <div className="mb-6">
                                <label className="text-sm font-bold mb-2 block">{dataVisiMisi.programKerja.bagianA.judul}</label>
                                <p className="text-xs text-muted-foreground mb-2">Daftar Program Kerja (pisahkan dengan "enter" / baris baru).</p>
                                <textarea
                                    value={dataVisiMisi.programKerja.bagianA.daftar.join('\n')}
                                    onChange={e => {
                                        setDataVisiMisi({
                                            ...dataVisiMisi, programKerja: {
                                                ...dataVisiMisi.programKerja,
                                                bagianA: {
                                                    ...dataVisiMisi.programKerja.bagianA,
                                                    daftar: e.target.value.split('\n')
                                                }
                                            }
                                        });
                                    }}
                                    rows="10"
                                    className="w-full px-4 py-2 rounded-xl border border-yellow-500/30 bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-sm"
                                ></textarea>
                            </div>

                            {/* Bagian B */}
                            <div>
                                <label className="text-sm font-bold mb-3 block">{dataVisiMisi.programKerja.bagianB.judul}</label>
                                {dataVisiMisi.programKerja.bagianB.daftar.map((progB, idx) => (
                                    <div key={idx} className="mb-4 border-l-4 border-yellow-500 pl-4 bg-background p-3 rounded-r-xl border-y border-r border-border">
                                        <label className="text-xs font-bold mb-1 block text-yellow-700">Kategori {idx + 1}</label>
                                        <input
                                            type="text"
                                            value={progB.teks}
                                            onChange={e => {
                                                const newDaftar = [...dataVisiMisi.programKerja.bagianB.daftar];
                                                newDaftar[idx].teks = e.target.value;
                                                setDataVisiMisi({
                                                    ...dataVisiMisi, programKerja: {
                                                        ...dataVisiMisi.programKerja,
                                                        bagianB: {
                                                            ...dataVisiMisi.programKerja.bagianB,
                                                            daftar: newDaftar
                                                        }
                                                    }
                                                });
                                            }}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 mb-2 font-semibold"
                                        />
                                        <label className="text-xs font-semibold mb-1 block text-muted-foreground">Sub-program (pisahkan dengan enter/baris baru)</label>
                                        <textarea
                                            value={progB.subDaftar.join('\n')}
                                            onChange={e => {
                                                const newDaftar = [...dataVisiMisi.programKerja.bagianB.daftar];
                                                newDaftar[idx].subDaftar = e.target.value.split('\n');
                                                setDataVisiMisi({
                                                    ...dataVisiMisi, programKerja: {
                                                        ...dataVisiMisi.programKerja,
                                                        bagianB: {
                                                            ...dataVisiMisi.programKerja.bagianB,
                                                            daftar: newDaftar
                                                        }
                                                    }
                                                });
                                            }}
                                            rows="4"
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-secondary/30 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                                        ></textarea>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                            Simpan Visi Misi & Program
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

import { profilIsi as defaultProfilIsi } from '../profil/profilIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL PROFIL (Tersinkronisasi)
// ----------------------------------------------------
function AdminProfil() {
    const [subTab, setSubTab] = useState('identitas');
    const [data, setData] = useState(defaultProfilIsi);

    useEffect(() => {
        const savedData = localStorage.getItem('cms_profil');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const handleChangeArr = (kategori, idx, field, value) => {
        const newData = { ...data };
        newData[kategori].data[idx][field] = value;
        setData(newData);
    };

    const handleAddRow = (kategori) => {
        const newData = { ...data };
        newData[kategori].data.push({ label: '', nilai: '' });
        setData(newData);
    };

    const handleRemoveRow = (kategori, idx) => {
        const newData = { ...data };
        newData[kategori].data.splice(idx, 1);
        setData(newData);
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('cms_profil', JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
        showSuccess('');
    };

    const renderTableForm = (kategoriObj, kategoriKey) => (
        <div className="space-y-4 max-w-4xl">
            <div className="flex justify-between items-center bg-secondary/30 p-4 rounded-xl border border-border">
                <div className="w-full">
                    <h3 className="font-bold text-lg text-foreground">{kategoriObj.judul}</h3>
                    {kategoriObj.deskripsi !== undefined && (
                        <textarea
                            className="mt-2 w-full text-sm px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                            value={kategoriObj.deskripsi}
                            onChange={(e) => setData({ ...data, [kategoriKey]: { ...data[kategoriKey], deskripsi: e.target.value } })}
                            rows="2"
                        ></textarea>
                    )}
                </div>
            </div>

            <div className="bg-background rounded-xl border border-border overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-secondary text-foreground/70">
                        <tr>
                            <th className="p-3 w-5/12">Label / Nama</th>
                            <th className="p-3 w-6/12">Isi / Keterangan</th>
                            <th className="p-3 w-1/12 text-center">Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kategoriObj.data.map((item, idx) => (
                            <tr key={idx} className="border-b border-border hover:bg-secondary/20">
                                <td className="p-2">
                                    <input
                                        type="text"
                                        value={item.label}
                                        onChange={(e) => handleChangeArr(kategoriKey, idx, 'label', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </td>
                                <td className="p-2">
                                    <input
                                        type="text"
                                        value={item.nilai}
                                        onChange={(e) => handleChangeArr(kategoriKey, idx, 'nilai', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                </td>
                                <td className="p-2 text-center">
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveRow(kategoriKey, idx)}
                                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4 mx-auto" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                type="button"
                onClick={() => handleAddRow(kategoriKey)}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-500/10 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
            >
                <Plus className="w-4 h-4" /> Tambah Baris Baru
            </button>
        </div>
    );

    const handlePhotoUploadBase64 = (e, callbackParams) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 800; // Map images should be bigger
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/webp', 0.85);

                callbackParams(dataUrl);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-border flex bg-secondary/30 text-sm overflow-x-auto">
                <button
                    onClick={() => setSubTab('identitas')}
                    className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${subTab === 'identitas' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Identitas Desa
                </button>
                <button
                    onClick={() => setSubTab('geografi')}
                    className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${subTab === 'geografi' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Geografi
                </button>
                <button
                    onClick={() => setSubTab('demografi')}
                    className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${subTab === 'demografi' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Demografi
                </button>
                <button
                    onClick={() => setSubTab('mataPencaharian')}
                    className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${subTab === 'mataPencaharian' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Mata Pencaharian
                </button>
                <button
                    onClick={() => setSubTab('peta')}
                    className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${subTab === 'peta' ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                >
                    Peta Desa
                </button>
            </div>

            <div className="p-6">
                <p className="text-sm text-green-600 mb-6 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman Profil.</p>
                <form onSubmit={handleSave} className="space-y-6 max-w-4xl">

                    {subTab === 'identitas' && renderTableForm(data.identitas, 'identitas')}
                    {subTab === 'geografi' && renderTableForm(data.geografi, 'geografi')}
                    {subTab === 'demografi' && renderTableForm(data.demografi, 'demografi')}
                    {subTab === 'mataPencaharian' && renderTableForm(data.mataPencaharian, 'mataPencaharian')}

                    {subTab === 'peta' && (
                        <div className="space-y-4">
                            <div className="p-4 border border-border bg-secondary/20 rounded-xl max-w-4xl flex flex-col items-center gap-4">
                                <label className="block text-sm font-semibold w-full text-left">Foto Peta Desa</label>

                                <div className="w-full relative group min-h-[300px] flex items-center justify-center bg-card rounded-xl border-2 border-dashed border-primary/30 overflow-hidden">
                                    <img
                                        src={(data.peta.embedUrl && data.peta.embedUrl.length > 20) ? data.peta.embedUrl : 'https://placehold.co/800x400/e2e8f0/475569?text=Belum+Ada+Peta+Desa\\n(Klik+Disini+Untuk+Unggah)'}
                                        alt="Preview"
                                        className="w-full h-full min-h-[300px] max-h-[500px] object-cover"
                                        onError={(e) => { e.target.src = 'https://placehold.co/800x400/e2e8f0/475569?text=Gambar+Gagal+Dimuat' }}
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm gap-3">
                                        <label className="bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl cursor-pointer shadow-xl flex items-center gap-2 transform hover:scale-105 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                            Pilih Foto Peta
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => setData({ ...data, peta: { ...data.peta, embedUrl: dataUrl } }))}
                                            />
                                        </label>
                                        <span className="text-white/80 text-xs text-center font-medium px-4">Unggah foto peta desa dengan rasio lanskap agar terlihat lebih rapi.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="pt-4 border-t border-border mt-8">
                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

import { beritaIsi as defaultBeritaIsi } from '../berita/beritaIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL BERITA (Tersinkronisasi)
// ----------------------------------------------------
function AdminBerita() {
    const [data, setData] = useState(defaultBeritaIsi);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('cms_berita');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const saveData = (newData) => {
        setData(newData);
        localStorage.setItem('cms_berita', JSON.stringify(newData));
        window.dispatchEvent(new Event('storage'));
    };

    const handlePhotoUploadBase64 = (e, callbackParams) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/webp', 0.8);
                callbackParams(dataUrl);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleHapus = (index) => {
        showConfirmAction('Hapus Berita', 'Tindakan ini akan menghapus berita secara permanen dari halaman warga.', 'Ya, Hapus', '#ef4444', () => { const newData = { ...data }; newData.berita.splice(index, 1); saveData(newData); showSuccess('Berita berhasil dihapus'); });
    };

    const handleEdit = (index) => {
        setModalData({ ...data.berita[index], index });
        setShowModal(true);
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        const newData = { ...data };
        const index = modalData.index;

        newData.berita[index] = {
            ...newData.berita[index],
            title: modalData.title,
            category: modalData.category,
            author: modalData.author,
            date: modalData.date,
            ringkasan: modalData.ringkasan,
            isiLengkap: modalData.isiLengkap,
            img: modalData.img
        };

        saveData(newData);
        setShowModal(false);
        showSuccess('');
    };

    const handleTambah = () => {
        const date = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        const newBerita = {
            img: `https://picsum.photos/seed/${Math.random()}/800/600`, // random image placeholder
            title: 'Judul Berita Baru',
            date,
            author: 'Admin Desa Sukatani',
            category: 'Berita Terbaru',
            ringkasan: 'Tulis ringkasan berita di sini...',
            isiLengkap: 'Tulis isi berita selengkap-lengkapnya di sini...',
            modalImages: []
        };

        const newData = { ...data };
        newData.berita.unshift(newBerita);
        saveData(newData);

        // Langsung buka form modal untuk berita baru yang ada di index 0
        setModalData({ ...newBerita, index: 0 });
        setShowModal(true);
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Daftar Berita</h2>
                    <p className="text-sm text-green-600 mt-1 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman publik.</p>
                </div>
                <button onClick={handleTambah} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    <Plus className="w-4 h-4" /> Tambah Berita Baru
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border p-1 bg-secondary/10">
                <table className="w-full text-left border-collapse min-w-[600px] bg-card">
                    <thead>
                        <tr className="bg-secondary/30 text-foreground/70 uppercase text-[10px] sm:text-xs">
                            <th className="p-3 sm:p-4 rounded-tl-xl w-1/2">Judul Berita</th>
                            <th className="p-3 sm:p-4">Kategori</th>
                            <th className="p-3 sm:p-4">Tanggal Publikasi</th>
                            <th className="p-3 sm:p-4 text-right rounded-tr-xl">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.berita.map((item, index) => (
                            <tr key={index} className="border-b border-border hover:bg-secondary/20 transition-colors">
                                <td className="p-3 sm:p-4 font-medium text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-secondary hidden sm:block shrink-0">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="line-clamp-2">{item.title}</span>
                                    </div>
                                </td>
                                <td className="p-3 sm:p-4 text-xs font-semibold"><span className="bg-blue-500/10 text-blue-600 px-2 py-1 rounded-md">{item.category}</span></td>
                                <td className="p-3 sm:p-4 text-xs text-foreground/70">{item.date}</td>
                                <td className="p-3 sm:p-4 flex items-center justify-end gap-2 h-full py-auto">
                                    <button onClick={() => handleEdit(index)} className="p-2 sm:px-3 sm:py-2 bg-blue-500/10 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-colors" title="Edit">
                                        <Edit2 className="w-4 h-4" /> <span className="hidden sm:inline-block ml-1 text-xs">Edit</span>
                                    </button>
                                    <button onClick={() => handleHapus(index)} className="p-2 sm:px-3 sm:py-2 bg-red-500/10 text-red-600 rounded-lg hover:bg-red-500 hover:text-white transition-colors" title="Hapus">
                                        <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline-block ml-1 text-xs">Hapus</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Edit Berita */}
            {showModal && modalData && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-card w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-secondary/30">
                            <h3 className="font-bold text-xl">Ubah Isi Berita</h3>
                            <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="space-y-4 flex-1">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Judul Berita</label>
                                        <input
                                            type="text"
                                            value={modalData.title}
                                            onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                            required
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-semibold mb-1">Kategori</label>
                                            <input
                                                type="text"
                                                value={modalData.category}
                                                onChange={(e) => setModalData({ ...modalData, category: e.target.value })}
                                                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-sm font-semibold mb-1">Tanggal</label>
                                            <input
                                                type="text"
                                                value={modalData.date}
                                                onChange={(e) => setModalData({ ...modalData, date: e.target.value })}
                                                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Penulis</label>
                                        <input
                                            type="text"
                                            value={modalData.author}
                                            onChange={(e) => setModalData({ ...modalData, author: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                                    <label className="text-sm font-semibold w-full text-left">Foto Utama Berita</label>
                                    <img src={modalData.img} alt="Preview" className="w-full h-48 object-cover rounded-xl border-2 border-secondary" />
                                    <label className="w-full bg-secondary hover:bg-secondary/70 text-foreground text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer text-center transition-colors">
                                        Unggah Foto Baru
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => setModalData({ ...modalData, img: dataUrl }))}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="border-t border-border pt-4">
                                <label className="block text-sm font-semibold mb-1">Ringkasan Berita (Tampil di beranda)</label>
                                <textarea
                                    value={modalData.ringkasan}
                                    onChange={(e) => setModalData({ ...modalData, ringkasan: e.target.value })}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 leading-relaxed"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1">Isi Berita Lengkap</label>
                                <textarea
                                    value={modalData.isiLengkap}
                                    onChange={(e) => setModalData({ ...modalData, isiLengkap: e.target.value })}
                                    rows="12"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 leading-relaxed text-sm whitespace-pre-wrap"
                                ></textarea>
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-border mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl font-bold bg-secondary text-foreground hover:bg-secondary/70 transition-colors">
                                    Batal
                                </button>
                                <button type="submit" className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all">
                                    Simpan Berita
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

import { pemerintahanIsi as defaultPemerintahanIsi } from '../pemerintahan/pemerintahanIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL PEMERINTAHAN (Tersinkronisasi)
// ----------------------------------------------------
function AdminPemerintahan() {
    const [data, setData] = useState(defaultPemerintahanIsi);
    const fileInputRef = useRef(null);
    const [activeEditIndex, setActiveEditIndex] = useState(null);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({ name: '', role: '', index: null });

    useEffect(() => {
        const savedData = localStorage.getItem('cms_pemerintahan');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const saveData = (newData) => {
        setData(newData);
        try {
            localStorage.setItem('cms_pemerintahan', JSON.stringify(newData));
            window.dispatchEvent(new Event('storage'));
        } catch (e) {
            showSuccess('');
        }
    };

    const handleHapus = (index) => {
        if (window.confirm('Hapus aparatur ini? Tindakan ini akan langsung tampil di website masyarakat!')) {
            const newData = { ...data };
            newData.perangkat.daftar.splice(index, 1);
            saveData(newData);
        }
    };

    const openModalForEdit = (index) => {
        const item = data.perangkat.daftar[index];
        setModalData({ name: item.name, role: item.role, index });
        setShowModal(true);
    };

    const openModalForAdd = () => {
        setModalData({ name: '', role: '', index: null });
        setShowModal(true);
    };

    const handleModalSave = (e) => {
        e.preventDefault();
        if (!modalData.name || !modalData.role) return;

        const newData = { ...data };
        if (modalData.index !== null) {
            // Edit mode
            newData.perangkat.daftar[modalData.index] = {
                ...newData.perangkat.daftar[modalData.index],
                name: modalData.name,
                role: modalData.role
            };
        } else {
            // Add mode
            newData.perangkat.daftar.push({
                name: modalData.name,
                role: modalData.role,
                img: `https://ui-avatars.com/api/?name=${modalData.name.replace(' ', '+')}&background=0ea5e9&color=fff&size=200`,
                tugas: 'Membantu tugas-tugas pelayanan dan teknis desa.'
            });
        }

        saveData(newData);
        setShowModal(false);
    };

    const handlePhotoUpload = (e, index) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                // Kompres gambar dengan Canvas agar tidak membuat localStorage penuh
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 200;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                // Kompresi ke format webp dengan kualitas 80%
                const dataUrl = canvas.toDataURL('image/webp', 0.8);

                const newData = { ...data };
                newData.perangkat.daftar[index] = {
                    ...newData.perangkat.daftar[index],
                    img: dataUrl
                };
                saveData(newData);
                showSuccess('');
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const triggerFileInput = (index) => {
        setActiveEditIndex(index);
        fileInputRef.current.click();
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Susunan Aparatur Desa</h2>
                    <p className="text-sm text-green-600 mt-1 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman Pemerintahan.</p>
                </div>
                <button onClick={openModalForAdd} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    <Plus className="w-4 h-4" /> Tambah Aparatur
                </button>
            </div>

            {/* Hidden File Input for Uploads */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handlePhotoUpload(e, activeEditIndex)}
                accept="image/*"
                className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.perangkat.daftar.map((item, index) => (
                    <div key={index} className="border border-border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow relative bg-card group">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-blue-500/5 rounded-xl border border-blue-500 pointer-events-none"></div>

                        <div className="relative w-24 h-24 mb-3">
                            <div className="w-full h-full bg-secondary rounded-full border-4 border-card shadow-sm overflow-hidden z-0">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            {/* Tombol Kamera di Ujung Foto */}
                            <button
                                onClick={() => triggerFileInput(index)}
                                className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform z-10"
                                title="Ganti Foto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            </button>
                        </div>

                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-blue-600 font-semibold mb-4">{item.role}</p>

                        <div className="flex w-full gap-2 mt-auto z-10">
                            <button onClick={() => openModalForEdit(index)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors">
                                <Edit2 className="w-4 h-4" /> Teks
                            </button>
                            <button onClick={() => handleHapus(index)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-red-500/10 text-red-600 rounded-lg text-sm font-medium hover:bg-red-500 hover:text-white transition-colors">
                                <Trash2 className="w-4 h-4" /> Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Modal Popup */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-card w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center p-5 border-b border-border bg-secondary/30">
                            <h3 className="font-bold text-lg">{modalData.index !== null ? 'Perbarui Data Aparatur' : 'Tambah Aparatur Desa'}</h3>
                            <button onClick={() => setShowModal(false)} className="text-foreground/50 hover:text-foreground">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleModalSave} className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={modalData.name}
                                    onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Contoh: Budi Santoso"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Jabatan</label>
                                <input
                                    type="text"
                                    value={modalData.role}
                                    onChange={(e) => setModalData({ ...modalData, role: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Contoh: Kepala Desa"
                                    required
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2 rounded-xl font-semibold bg-secondary text-foreground hover:bg-secondary/70 transition-colors">
                                    Batal
                                </button>
                                <button type="submit" className="flex-1 py-2 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

import { potensiIsi as defaultPotensiIsi } from '../potensi/potensiIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL POTENSI (Tersinkronisasi)
// ----------------------------------------------------
function AdminPotensi() {
    const [data, setData] = useState(defaultPotensiIsi);
    const [subTab, setSubTab] = useState('wisata');

    useEffect(() => {
        const savedData = localStorage.getItem('cms_potensi');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const saveData = (e) => {
        if (e) e.preventDefault();
        try {
            localStorage.setItem('cms_potensi', JSON.stringify(data));
            window.dispatchEvent(new Event('storage'));
            showSuccess('');
        } catch (error) {
            showSuccess('');
        }
    };

    const handleArrayChange = (group, index, field, value) => {
        const newData = { ...data };
        newData[group][index] = { ...newData[group][index], [field]: value };
        setData(newData);
    };

    const handleBudayaChange = (field, value) => {
        const newData = { ...data };
        newData.budaya.narasumber = { ...newData.budaya.narasumber, [field]: value };
        setData(newData);
    };

    const handlePhotoUploadBase64 = (e, callbackParams) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 500;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/webp', 0.8);
                callbackParams(dataUrl);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-border flex flex-wrap bg-secondary/30 text-sm overflow-x-auto">
                {['wisata', 'budaya', 'pertanian', 'umkm', 'fasilitas', 'galeri'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setSubTab(tab)}
                        className={`px-4 py-3 font-semibold transition-colors capitalize ${subTab === tab ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}`}
                    >
                        {tab === 'galeri' ? 'Galeri Desa' : tab}
                    </button>
                ))}
            </div>

            <div className="p-6">
                <p className="text-sm text-green-600 mb-6 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman Potensi.</p>
                <form onSubmit={saveData} className="space-y-6">

                    {subTab === 'wisata' && (
                        <div className="space-y-8">
                            {data.wisata.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20">
                                    <h3 className="font-bold text-lg mb-3">Item Wisata {index + 1}</h3>
                                    <div className="space-y-3">
                                        <div className="flex gap-4 items-center">
                                            <img src={(item.img && item.img.length > 5) ? item.img : 'https://placehold.co/100x100/e2e8f0/475569?text=Kosong'} alt="Preview" className="w-16 h-16 object-cover rounded-xl border-2 border-secondary shrink-0 bg-background" onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/475569?text=Gagal' }} />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => handleArrayChange('wisata', index, 'img', dataUrl))}
                                                className="flex-1 px-4 py-2 text-sm rounded-xl border border-border bg-background"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={item.judul}
                                            onChange={(e) => handleArrayChange('wisata', index, 'judul', e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                            placeholder="Judul Wisata"
                                        />
                                        <textarea
                                            value={item.deskripsi}
                                            onChange={(e) => handleArrayChange('wisata', index, 'deskripsi', e.target.value)}
                                            rows="3"
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                            placeholder="Deskripsi Wisata"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'budaya' && (
                        <div className="space-y-6">
                            <div className="p-4 border border-border rounded-xl bg-secondary/20">
                                <h3 className="font-bold text-lg mb-3">Profil Narasumber Budaya</h3>
                                <div className="space-y-3">
                                    <div className="flex gap-4 items-center mb-4">
                                        <img src={(data.budaya.narasumber.img && data.budaya.narasumber.img.length > 5) ? data.budaya.narasumber.img : 'https://placehold.co/100x100/e2e8f0/475569?text=Kosong'} alt="Preview" className="w-16 h-16 object-cover rounded-full border-2 border-secondary shrink-0 bg-background" onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/475569?text=Gagal' }} />
                                        <div className="flex-1">
                                            <label className="text-xs font-semibold block mb-1">Unggah Foto Narasumber</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => handleBudayaChange('img', dataUrl))}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-border bg-background"
                                            />
                                        </div>
                                    </div>
                                    <label className="text-sm font-semibold block">Nama</label>
                                    <input
                                        type="text"
                                        value={data.budaya.narasumber.nama}
                                        onChange={(e) => handleBudayaChange('nama', e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                    />
                                    <label className="text-sm font-semibold block mt-3">Peran / Jabatan</label>
                                    <input
                                        type="text"
                                        value={data.budaya.narasumber.peran}
                                        onChange={(e) => handleBudayaChange('peran', e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                    />
                                    <label className="text-sm font-semibold block mt-3">Deskripsi / Biografi Singkat</label>
                                    <textarea
                                        value={data.budaya.narasumber.deskripsi}
                                        onChange={(e) => handleBudayaChange('deskripsi', e.target.value)}
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {subTab === 'pertanian' && (
                        <div className="space-y-8">
                            {data.pertanian.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20">
                                    <h3 className="font-bold text-lg mb-3">{item.judul || 'Bidang Pertanian'}</h3>
                                    <div className="space-y-3">
                                        <div className="flex gap-4 items-center">
                                            <img src={(item.img && item.img.length > 5) ? item.img : 'https://placehold.co/100x100/e2e8f0/475569?text=Kosong'} alt="Preview" className="w-16 h-16 object-cover rounded-xl border-2 border-secondary shrink-0 bg-background" onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/475569?text=Gagal' }} />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => handleArrayChange('pertanian', index, 'img', dataUrl))}
                                                className="flex-1 px-4 py-2 text-sm rounded-xl border border-border bg-background"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={item.judul}
                                            onChange={(e) => handleArrayChange('pertanian', index, 'judul', e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                        <textarea
                                            value={item.deskripsi}
                                            onChange={(e) => handleArrayChange('pertanian', index, 'deskripsi', e.target.value)}
                                            rows="3"
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'umkm' && (
                        <div className="space-y-8">
                            {data.umkm.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20">
                                    <h3 className="font-bold text-lg mb-3">UMKM {index + 1}</h3>
                                    <div className="space-y-3">
                                        <div className="flex gap-4 items-center">
                                            <img src={Array.isArray(item.img) ? item.img[0] : item.img} alt="Preview" className="w-16 h-16 object-cover rounded-xl border-2 border-secondary" />
                                            <div className="flex-1">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => {
                                                        const newArr = Array.isArray(item.img) ? [...item.img] : [item.img];
                                                        newArr[0] = dataUrl;
                                                        handleArrayChange('umkm', index, 'img', newArr);
                                                    })}
                                                    className="w-full px-4 py-2 text-sm rounded-xl border border-border bg-background"
                                                />
                                                <p className="text-[10px] text-muted-foreground mt-1">Mengganti foto utama / foto pertama UMKM ini.</p>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            value={item.judul}
                                            onChange={(e) => handleArrayChange('umkm', index, 'judul', e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                        <textarea
                                            value={item.deskripsi}
                                            onChange={(e) => handleArrayChange('umkm', index, 'deskripsi', e.target.value)}
                                            rows="3"
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'fasilitas' && (
                        <div className="space-y-8">
                            {data.fasilitas.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20">
                                    <h3 className="font-bold text-lg mb-3">{item.judul}</h3>
                                    <div className="space-y-3">
                                        <div className="flex gap-4 items-center">
                                            <img src={(item.fotoUrl && item.fotoUrl.length > 5) ? item.fotoUrl : 'https://placehold.co/100x100/e2e8f0/475569?text=Kosong'} alt="Preview" className="w-16 h-16 object-cover rounded-xl border-2 border-secondary shrink-0 bg-background" onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/475569?text=Gagal' }} />
                                            <div className="flex-1">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => handleArrayChange('fasilitas', index, 'fotoUrl', dataUrl))}
                                                    className="w-full px-4 py-2 text-sm rounded-xl border border-border bg-background"
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            value={item.judul}
                                            onChange={(e) => handleArrayChange('fasilitas', index, 'judul', e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                        <textarea
                                            value={item.deskripsi}
                                            onChange={(e) => handleArrayChange('fasilitas', index, 'deskripsi', e.target.value)}
                                            rows="3"
                                            className="w-full px-4 py-2 rounded-xl border border-border bg-background"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'galeri' && (
                        <div className="space-y-8">
                            <div className="p-4 border border-border rounded-xl bg-secondary/20">
                                <h3 className="font-bold text-lg mb-3">Foto Album Kegiatan Desa</h3>
                                <p className="text-xs text-muted-foreground mb-4">Ganti foto-foto yang akan muncul di galeri potensi desa.</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {data.galeri.foto.daftar.map((imgSrc, index) => (
                                        <div key={index} className="flex flex-col gap-2 relative group">
                                            <img src={imgSrc} alt={`Galeri ${index + 1}`} className="w-full h-32 object-cover rounded-xl border-2 border-secondary" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 rounded-xl text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                                                <label className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3 py-2 rounded cursor-pointer shadow-lg w-full flex items-center justify-center gap-1">
                                                    <Edit2 className="w-3 h-3" /> Ubah
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => {
                                                            const newData = { ...data };
                                                            if (!newData.galeri.foto) newData.galeri.foto = { judul: '', daftar: [] };
                                                            newData.galeri.foto.daftar[index] = dataUrl;
                                                            setData(newData);
                                                        })}
                                                    />
                                                </label>
                                                <button type="button" onClick={() => {
                                                    const newData = { ...data };
                                                    newData.galeri.foto.daftar.splice(index, 1);
                                                    setData(newData);
                                                }} className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-3 py-2 rounded shadow-lg w-full flex items-center justify-center gap-1">
                                                    <Trash2 className="w-3 h-3" /> Hapus
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    <label className="flex flex-col items-center justify-center gap-2 w-full h-32 rounded-xl border-2 border-dashed border-primary/50 text-primary cursor-pointer hover:bg-primary/5 transition-colors">
                                        <Plus className="w-8 h-8" />
                                        <span className="text-sm font-semibold">Tambah Foto Baru</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handlePhotoUploadBase64(e, (dataUrl) => {
                                                const newData = { ...data };
                                                if (!newData.galeri.foto) newData.galeri.foto = { judul: '', daftar: [] };
                                                newData.galeri.foto.daftar.push(dataUrl);
                                                setData(newData);
                                            })}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="pt-6 border-t border-border mt-6">
                        <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                            <Save className="w-5 h-5" />
                            Simpan Semua Perubahan
                        </button>
                        <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">Pastikan Anda menyimpan perubahan sebelum berpindah menu lain.</p>
                    </div>

                </form>
            </div>
        </div>
    );
}

import { agendaIsi as defaultAgendaIsi } from '../agenda/agendaIsi';

function AdminAgenda() {
    const [data, setData] = useState(defaultAgendaIsi);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('cms_agenda');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const saveData = (newData) => {
        setData(newData);
        localStorage.setItem('cms_agenda', JSON.stringify(newData));
        window.dispatchEvent(new Event('storage'));
    };

    const handleHapus = (index) => {
        showConfirmAction('Hapus Agenda', 'Agenda yang dihapus tidak bisa dikembalikan.', 'Ya, Hapus', '#ef4444', () => { const newData = { ...data }; newData.daftar.splice(index, 1); saveData(newData); showSuccess('Agenda berhasil dihapus'); });
    };

    const handleEdit = (index) => {
        setModalData({ ...data.daftar[index], index });
        setShowModal(true);
    };

    const handleSaveEdit = (e) => {
        e.preventDefault();
        const newData = { ...data };
        const index = modalData.index;

        newData.daftar[index] = {
            ...newData.daftar[index],
            title: modalData.title,
            date: modalData.date,
            time: modalData.time,
            loc: modalData.loc,
            type: modalData.type,
        };

        saveData(newData);
        setShowModal(false);
        showSuccess('');
    };

    const handleTambah = () => {
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const date = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

        const newAgenda = {
            title: '',
            date: date,
            time: '08:00 - Selesai',
            loc: 'Kantor Desa Sukatani',
            type: 'Agenda Umum',
            color: randomColor
        };

        const newData = { ...data };
        newData.daftar.unshift(newAgenda);
        saveData(newData);

        setModalData({ ...newAgenda, index: 0 });
        setShowModal(true);
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Daftar Agenda Kegiatan</h2>
                    <p className="text-sm text-green-600 mt-1 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman publik.</p>
                </div>
                <button onClick={handleTambah} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    <Plus className="w-4 h-4" /> Tambah Agenda
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border p-1 bg-secondary/10">
                <table className="w-full text-left border-collapse min-w-[700px] bg-card">
                    <thead>
                        <tr className="bg-secondary/30 text-foreground/70 uppercase text-[10px] sm:text-xs">
                            <th className="p-3 sm:p-4 rounded-tl-xl w-1/3">Nama Agenda</th>
                            <th className="p-3 sm:p-4">Tanggal & Waktu</th>
                            <th className="p-3 sm:p-4">Lokasi</th>
                            <th className="p-3 sm:p-4 text-right rounded-tr-xl">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.daftar.map((item, index) => (
                            <tr key={index} className="border-b border-border hover:bg-secondary/20 transition-colors">
                                <td className="p-3 sm:p-4 font-medium text-sm">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }}></div>
                                        <div>
                                            <div className="font-bold line-clamp-1">{item.title || 'Agenda Tanpa Judul'}</div>
                                            <div className="text-xs text-muted-foreground">{item.type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 sm:p-4 text-xs font-semibold">
                                    {item.date} <br /> <span className="text-muted-foreground font-normal">{item.time}</span>
                                </td>
                                <td className="p-3 sm:p-4 text-xs text-foreground/70">{item.loc}</td>
                                <td className="p-3 sm:p-4 flex items-center justify-end gap-2 h-full py-auto">
                                    <button onClick={() => handleEdit(index)} className="p-2 sm:px-3 sm:py-2 bg-blue-500/10 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-colors" title="Edit">
                                        <Edit2 className="w-4 h-4" /> <span className="hidden sm:inline-block ml-1 text-xs">Edit</span>
                                    </button>
                                    <button onClick={() => handleHapus(index)} className="p-2 sm:px-3 sm:py-2 bg-red-500/10 text-red-600 rounded-lg hover:bg-red-500 hover:text-white transition-colors" title="Hapus">
                                        <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline-block ml-1 text-xs">Hapus</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && modalData && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-secondary/30">
                            <h3 className="font-bold text-xl">Ubah Detail Agenda</h3>
                            <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Judul Agenda Kegiatan</label>
                                <input
                                    type="text"
                                    value={modalData.title}
                                    onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                    required
                                    placeholder="Contoh: Senam Pagi"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Tanggal</label>
                                    <input
                                        type="text"
                                        value={modalData.date}
                                        onChange={(e) => setModalData({ ...modalData, date: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                        placeholder="cth: 15 Agustus 2026"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold mb-1">Waktu</label>
                                    <input
                                        type="text"
                                        value={modalData.time}
                                        onChange={(e) => setModalData({ ...modalData, time: e.target.value })}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                        placeholder="cth: 08:00 - 12:00"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Lokasi</label>
                                <input
                                    type="text"
                                    value={modalData.loc}
                                    onChange={(e) => setModalData({ ...modalData, loc: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                    placeholder="Kantor Desa Sukatani"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Jenis / Kategori Kegiatan</label>
                                <input
                                    type="text"
                                    value={modalData.type}
                                    onChange={(e) => setModalData({ ...modalData, type: e.target.value })}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                    placeholder="Rapat / Kesehatan / Sosial"
                                />
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-border mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl font-bold bg-secondary text-foreground hover:bg-secondary/70 transition-colors">
                                    Batal
                                </button>
                                <button type="submit" className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all">
                                    Simpan Agenda
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
