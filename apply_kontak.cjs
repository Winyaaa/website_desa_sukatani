const fs = require('fs');
let code = fs.readFileSync('src/pages/admin/AdminDashboard.jsx', 'utf8');

const adminKontakCode = `
import { kontakIsi as defaultKontakIsi } from '../kontak/kontakIsi';

// ----------------------------------------------------
// KOMPONEN UNTUK MODUL KONTAK (Tersinkronisasi)
// ----------------------------------------------------
function AdminKontak() {
    const [data, setData] = useState(defaultKontakIsi);
    const [subTab, setSubTab] = useState('informasi');

    useEffect(() => {
        const savedData = localStorage.getItem('cms_kontak');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (section, index, field, value) => {
        const newData = { ...data };
        if (section === 'informasi') {
            newData.informasi.daftar[index][field] = value;
        } else if (section === 'sosial') {
            newData.mediaSosial.daftar[index][field] = value;
        } else if (section === 'peta') {
            newData.peta[field] = value;
        }
        setData(newData);
    };

    const saveData = (e) => {
        e.preventDefault();
        localStorage.setItem('cms_kontak', JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
        showSuccess('Data Kontak & Alamat berhasil disimpan!');
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden animate-fade-in">
            <div className="border-b border-border flex bg-secondary/30 text-sm overflow-x-auto">
                {['informasi', 'sosial', 'peta'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSubTab(tab)}
                        className={\`px-6 py-3 font-semibold transition-colors capitalize whitespace-nowrap \${subTab === tab ? 'border-b-2 border-primary text-primary bg-card/50' : 'text-foreground/70 hover:bg-secondary/50'}\`}
                    >
                        {tab === 'informasi' ? 'Info Dasar' : tab === 'sosial' ? 'Media Sosial' : 'Peta Lokasi'}
                    </button>
                ))}
            </div>

            <div className="p-6">
                <p className="text-sm text-green-600 mb-6 flex items-center gap-1">✅ Tersinkron secara <i>Real-Time</i> dengan halaman Kontak dan Footer.</p>
                
                <form onSubmit={saveData} className="space-y-6 max-w-4xl">
                    {subTab === 'informasi' && (
                        <div className="space-y-6">
                            {data.informasi.daftar.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20 space-y-3">
                                    <label className="font-bold text-sm bg-primary/10 text-primary px-3 py-1 rounded-md mb-2 inline-block">{item.judul}</label>
                                    <textarea
                                        value={item.teks}
                                        onChange={(e) => handleChange('informasi', index, 'teks', e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                        rows={item.judul.includes('Alamat') || item.judul.includes('Jam') ? 3 : 1}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'sosial' && (
                        <div className="space-y-6">
                            {data.mediaSosial.daftar.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-xl bg-secondary/20 space-y-3">
                                    <label className="font-bold capitalize text-sm bg-primary/10 text-primary px-3 py-1 rounded-md mb-2 inline-block">{item.platform}</label>
                                    <input
                                        type="text"
                                        value={item.href}
                                        onChange={(e) => handleChange('sosial', index, 'href', e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                        placeholder="URL Media Sosial"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {subTab === 'peta' && (
                        <div className="space-y-4">
                            <div className="p-4 border border-border rounded-xl bg-secondary/20 space-y-3">
                                <label className="font-bold block mb-2">URL Embed Google Maps (Src Iframe)</label>
                                <textarea
                                    value={data.peta.embedUrl}
                                    onChange={(e) => handleChange('peta', null, 'embedUrl', e.target.value)}
                                    className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50"
                                    rows={4}
                                />
                                <iframe src={data.peta.embedUrl} title="Peta" className="w-full h-64 rounded-xl border border-border mt-4" />
                            </div>
                        </div>
                    )}

                    <div className="pt-4 border-t border-border mt-8">
                        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transition-all flex gap-2 items-center">
                            <Save className="w-5 h-5" /> Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
`;

if (!code.includes('function AdminKontak(')) {
    code += '\n' + adminKontakCode;
}

fs.writeFileSync('src/pages/admin/AdminDashboard.jsx', code);
console.log('Done!');
