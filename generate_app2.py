import os

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + "\n")

FILES = {
    "src/pages/Agenda.jsx": """
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const agendaList = [
  { title: "Posyandu Balita & Ibu Hamil 'Bunga Mawar'", date: "05 Agustus 2026", time: "08:00 - 11:00 WIB", loc: "Balaidesa", type: "Jadwal Posyandu", color: "#f43f5e" },
  { title: "Kerja Bakti Bersih Desa / Gotong Royong", date: "08 Agustus 2026", time: "07:00 - Selesai", loc: "Seluruh Wilayah RT", type: "Gotong Royong", color: "#10b981" },
  { title: "Musyawarah Desa (Musdes) Pembahasan APBDes", date: "12 Agustus 2026", time: "19:30 - Selesai", loc: "Aula Kantor Desa", type: "Musyawarah Desa", color: "#3b82f6" },
  { title: "Pelatihan Pembuatan Pupuk Kompos", date: "15 Agustus 2026", time: "09:00 - 14:00 WIB", loc: "Kebun Warga Dusun 2", type: "Pelatihan", color: "#f59e0b" },
  { title: "Pertemuan Rutin PKK Tingkat Desa", date: "18 Agustus 2026", time: "13:00 - 15:00 WIB", loc: "Aula Kantor Desa", type: "Kegiatan PKK", color: "#ec4899" },
  { title: "Rapat Persiapan Lomba 17-an Karang Taruna", date: "20 Agustus 2026", time: "20:00 - Selesai", loc: "Sekretariat Karang Taruna", type: "Karang Taruna", color: "#8b5cf6" },
];

export default function Agenda() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Agenda Kegiatan Desa</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agendaList.map((agenda, i) => (
          <div key={i} className="card relative overflow-hidden flex flex-col h-full" style={{borderTop: `4px solid ${agenda.color}`}}>
            <span className="text-xs font-bold mb-2 uppercase tracking-wider" style={{color: agenda.color}}>{agenda.type}</span>
            <h3 className="text-xl mb-4 font-bold">{agenda.title}</h3>
            
            <div className="flex flex-col gap-2 text-muted text-sm mt-auto">
              <div className="flex items-center gap-2"><Calendar size={16}/> {agenda.date}</div>
              <div className="flex items-center gap-2"><Clock size={16}/> {agenda.time}</div>
              <div className="flex items-center gap-2"><MapPin size={16}/> {agenda.loc}</div>
            </div>
            
            <button className="mt-6 w-full btn-outline" style={{padding: '0.5rem', borderRadius: '0.5rem', textAlign: 'center', border: '1px solid #e2e8f0', color: 'var(--text-main)'}}>
              Tambahkan ke Kalender Pribadi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
""",
    "src/pages/Kontak.jsx": """
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Kontak() {
  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Hubungi Kami</h1>
      
      <div className="grid-2">
        <div className="flex flex-col gap-6">
          <div className="card">
            <h2 className="text-2xl mb-6">Informasi Kontak</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-50 rounded-full text-primary"><MapPin size={24} /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Alamat Kantor Desa</h4>
                <p className="text-muted">Jl. Raya Sukatani No. 12, RT 01/RW 02<br/>Kecamatan Makmur, Kabupaten Gemilang<br/>Jawa Barat, 40382</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-50 rounded-full text-primary"><Phone size={24} /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Nomor Telepon / WhatsApp</h4>
                <p className="text-muted">+62 812 3456 7890 (Layanan Umum)<br/>+62 22 123456 (Telepon Kantor)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-50 rounded-full text-primary"><Mail size={24} /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-muted">info@sukatani.desa.id<br/>pelayanan@sukatani.desa.id</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-full text-primary"><Clock size={24} /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Jam Pelayanan</h4>
                <p className="text-muted">Senin - Kamis : 08.00 - 15.00 WIB<br/>Jumat : 08.00 - 11.30 WIB<br/>Sabtu - Minggu : Tutup (Libur)</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl mb-4">Media Sosial Desa</h2>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={24}/></a>
              <a href="#" className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={24}/></a>
              <a href="#" className="p-3 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition-colors"><Twitter size={24}/></a>
              <a href="#" className="p-3 bg-red-50 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"><Youtube size={24}/></a>
            </div>
          </div>
        </div>

        <div className="card h-full" style={{minHeight: '500px'}}>
          <h2 className="text-2xl mb-4">Lokasi di Google Maps</h2>
           <div className="map-container" style={{height: 'calc(100% - 3rem)'}}>
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x2e68e64c5e8d2eaf%3A0xe549cd9783515822!2sSukatani%2C%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                style={{height: '100%', borderRadius: '0.5rem'}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
           </div>
        </div>
      </div>
    </div>
  );
}
""",
    "src/pages/Layanan.jsx": """
import React, { useState } from 'react';
import { MessageSquare, Calendar, Download, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const faqList = [
  { q: "Apa saja syarat membuat Surat Keterangan Usaha (SKU)?", a: "Untuk membuat SKU, Anda perlu membawa fotokopi KTP, fotokopi KK, dan surat pengantar dari RT/RW setempat. Proses pembuatan memakan waktu 1 hari kerja dan tidak dipungut biaya (gratis)." },
  { q: "Bagaimana cara mengurus akta kelahiran anak yang baru lahir?", a: "Persyaratan: membawa Surat Keterangan Lahir dari Bidan/Rumah Sakit, fotokopi KTP suami-istri, fotokopi KK, fotokopi Buku Nikah, dan surat pengantar RT/RW. Pengajuan dapat dilakukan di kantor desa pada jam kerja." },
  { q: "Apakah layanan administrasi desa dipungut biaya?", a: "Sesuai dengan peraturan perundang-undangan, seluruh pelayanan administrasi kependudukan dan surat keterangan di desa TIDAK DIPUNGUT BIAYA (Gratis)." },
  { q: "Bisakah membuat surat pengantar nikah (N1-N4) secara online?", a: "Saat ini, pendaftaran dokumen N1-N4 dapat diinisiasi melalui Chatbot Pelayanan Desa kami. Namun, penandatanganan dan pengambilan berkas fisik tetap harus dilakukan di Kantor Desa dengan membawa persyaratan asli." }
];

export default function Layanan() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="container animate-fade-in py-12">
      <h1 className="section-title">Layanan Digital & Administrasi</h1>
      
      <div className="grid-2 mb-12">
        <div className="card text-center bg-gradient-to-b from-green-50 to-white border-primary">
          <MessageSquare className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-2xl mb-2">Chatbot Pelayanan 24/7</h2>
           <p className="text-muted mb-6">Tanya seputar persyaratan dan info desa via WhatsApp bot otomatis kami kapan saja.</p>
           <button className="btn w-full justify-center">Mulai Chat Sekarang</button>
        </div>

        <div className="card text-center bg-gradient-to-b from-blue-50 to-white border-blue-500" style={{borderColor: '#3b82f6'}}>
          <Calendar className="mx-auto text-blue-500 mb-4" size={48} />
          <h2 className="text-2xl mb-2">Kalender Pelayanan</h2>
           <p className="text-muted mb-6">Cek jadwal layanan keperdataan, jadwal posbindu, dan pelayanan mobil keliling secara real-time.</p>
           <button className="btn w-full justify-center" style={{backgroundColor: '#3b82f6'}}>Lihat Kalender Pelayanan</button>
        </div>
      </div>

      <div className="grid-2 gap-8">
        <div>
          <h2 className="text-2xl mb-6 flex items-center gap-2"><Download className="text-primary"/> Download Formulir Administrasi</h2>
          <div className="flex flex-col gap-4">
             {['Formulir Pengantar RT/RW', 'Surat Keterangan Usaha (SKU)', 'Surat Keterangan Tidak Mampu (SKTM)', 'Surat Pindah Penduduk', 'Blangko Pembuatan KTP / KK'].map((form, i) => (
               <div key={i} className="card flex items-center justify-between p-4 hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <FileText className="text-gray-400" />
                   <span className="font-semibold text-sm">{form}</span>
                 </div>
                 <button className="text-primary hover:bg-green-50 p-2 rounded-full transition-colors"><Download size={20}/></button>
               </div>
             ))}
          </div>
          <p className="text-sm text-muted mt-4">* Silakan download, cetak, dan isi formulir di atas sebelum datang ke loket pelayanan kantor desa untuk mempercepat proses administrasi.</p>
        </div>

        <div>
           <h2 className="text-2xl mb-6 text-center border-b pb-2">FAQ (Pertanyaan yang Sering Ditanyakan)</h2>
           <div className="flex flex-col gap-4">
             {faqList.map((faq, i) => (
                <div key={i} className="card p-0 overflow-hidden border border-gray-200">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center font-bold bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <span className="pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="p-4 text-muted bg-white border-t border-gray-100 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
"""
}

for path, content in FILES.items():
    create_file(path, content)

print("Files generated successfully.")
