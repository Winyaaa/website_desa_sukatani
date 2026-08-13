export const layananIsi = {
  judul: 'Layanan Digital & Administrasi',
  layananDigital: [
    {
      icon: 'MessageSquare',
      iconWarna: 'text-primary',
      cardClass: 'bg-gradient-to-b from-green-50 to-white border-primary',
      judul: 'Chatbot Pelayanan 24/7',
      deskripsi: 'Tanya seputar persyaratan dan info desa via WhatsApp bot otomatis kami kapan saja.',
      tombol: { label: 'Mulai Chat Sekarang', warna: null },
    },
    {
      icon: 'Calendar',
      iconWarna: 'text-blue-500',
      cardClass: 'bg-gradient-to-b from-blue-50 to-white border-blue-500',
      cardStyle: { borderColor: '#3b82f6' },
      judul: 'Kalender Pelayanan',
      deskripsi: 'Cek jadwal layanan keperdataan, jadwal posbindu, dan pelayanan mobil keliling secara real-time.',
      tombol: { label: 'Lihat Kalender Pelayanan', warna: '#3b82f6' },
    },
  ],
  formulir: {
    judul: 'Download Formulir Administrasi',
    daftar: [
      'Formulir Pengantar RT/RW',
      'Surat Keterangan Usaha (SKU)',
      'Surat Keterangan Tidak Mampu (SKTM)',
      'Surat Pindah Penduduk',
      'Blangko Pembuatan KTP / KK',
    ],
    catatan:
      '* Silakan download, cetak, dan isi formulir di atas sebelum datang ke loket pelayanan kantor desa untuk mempercepat proses administrasi.',
  },
  faq: {
    judul: 'FAQ (Pertanyaan yang Sering Ditanyakan)',
    daftar: [
      {
        q: 'Apa saja syarat membuat Surat Keterangan Usaha (SKU)?',
        a: 'Untuk membuat SKU, Anda perlu membawa fotokopi KTP, fotokopi KK, dan surat pengantar dari RT/RW setempat. Proses pembuatan memakan waktu 1 hari kerja dan tidak dipungut biaya (gratis).',
      },
      {
        q: 'Bagaimana cara mengurus akta kelahiran anak yang baru lahir?',
        a: 'Persyaratan: membawa Surat Keterangan Lahir dari Bidan/Rumah Sakit, fotokopi KTP suami-istri, fotokopi KK, fotokopi Buku Nikah, dan surat pengantar RT/RW. Pengajuan dapat dilakukan di kantor desa pada jam kerja.',
      },
      {
        q: 'Apakah layanan administrasi desa dipungut biaya?',
        a: 'Sesuai dengan peraturan perundang-undangan, seluruh pelayanan administrasi kependudukan dan surat keterangan di desa TIDAK DIPUNGUT BIAYA (Gratis).',
      },
      {
        q: 'Bisakah membuat surat pengantar nikah (N1-N4) secara online?',
        a: 'Saat ini, pendaftaran dokumen N1-N4 dapat diinisiasi melalui Chatbot Pelayanan Desa kami. Namun, penandatanganan dan pengambilan berkas fisik tetap harus dilakukan di Kantor Desa dengan membawa persyaratan asli.',
      },
    ],
  },
};
