export const profilIsi = {
  judul: 'Profil Desa Sukatani',
  identitas: {
    judul: 'Identitas Desa',
    iconWarna: 'text-green-500',
    data: [
      { label: 'Nama Desa', nilai: 'Sukatani' },
      { label: 'Kecamatan', nilai: 'Ngamprah' },
      { label: 'Kabupaten/Kota', nilai: 'Bandung Barat' },
      { label: 'Provinsi', nilai: 'Jawa Barat' },
      { label: 'Kode Pos', nilai: '40552' },
      { label: 'Tahun Pembentukan', nilai: '1983' },
    ],
  },
  geografi: {
    judul: 'Geografi & Wilayah',
    iconWarna: 'text-blue-500',
    data: [
      { label: 'Luas Wilayah', nilai: '192.210 Ha' },
      { label: 'Topografi', nilai: 'Dataran Rendah / Perbukitan' },
      { label: 'Batas Utara', nilai: 'Desa Cimanggu Kecamatan Ngamprah' },
      { label: 'Batas Selatan', nilai: 'Desa Kertamulya Kecamatan Padalarang' },
      { label: 'Batas Timur', nilai: 'Desa Ngamprah Kecamatan Ngamprah' },
      { label: 'Batas Barat', nilai: 'Desa Bojongkoneng Kecamatan Ngamprah' },
    ],
  },
  demografi: {
    judul: 'Demografi Penduduk',
    iconWarna: 'text-yellow-500',
    deskripsi: 'Berdasarkan data, Desa Sukatani memiliki populasi yang tersebar di 3 dusun utama.',
    data: [
      { label: 'Total Penduduk', nilai: '7.324 Jiwa' },
      { label: 'Laki-laki', nilai: '3.782 Jiwa' },
      { label: 'Perempuan', nilai: '3.542 Jiwa' },
      { label: 'Jumlah Kepala Keluarga (KK)', nilai: '2.348 KK' },
    ],
  },
  mataPencaharian: {
    judul: 'Mata Pencaharian',
    iconWarna: 'text-red-500',
    data: [
      { label: 'Petani', nilai: '' },
      { label: 'Karyawan Swasta', nilai: '' },
    ],
  },
  peta: {
    judul: 'Peta Desa',
    embedUrl: 'PetaDesa.jpg',
  },
};
