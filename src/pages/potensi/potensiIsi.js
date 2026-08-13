export const potensiIsi = {
  judul: 'Potensi Desa',
  tabs: [
    { id: 'wisata', label: 'Wisata', icon: 'Camera' },
    { id: 'budaya', label: 'Kesenian & Budaya', icon: 'Music' },
    { id: 'pertanian', label: 'Pertanian & Peternakan', icon: 'Sprout' },
    { id: 'umkm', label: 'UMKM Produk Lokal', icon: 'Store' },
    { id: 'fasilitas', label: 'Fasilitas Publik', icon: 'Building' },
  ],
  tabGaleri: { id: 'galeri', label: 'Galeri Desa', icon: 'Camera' },
  iconColors: ['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-orange-500', 'text-red-500'],
  hoverBgs: ['hover:bg-blue-50', 'hover:bg-green-50', 'hover:bg-yellow-50', 'hover:bg-orange-50', 'hover:bg-red-50'],
  wisata: [
    {
      img: '/cibaligo.jpg',
      alt: 'Pemandian Air Panas',
      judul: 'Pemandian Air Panas Cibaligo',
      deskripsi:
        'Pemandian Air Panas Cibaligo menawarkan pengalaman relaksasi berupa kolam air panas belerang alami yang terletak di Desa Cimanggu. Tempat ini sangat cocok bagi pengunjung yang ingin melepas penat karena dikelilingi oleh pemandangan persawahan dan pedesaan yang asri.',
      detail: [
        { label: 'Jarak', nilai: '1,6 km sekitar 5 menit' },
        { label: 'Harga Tiket', nilai: 'Gratis' },
        { label: 'Jam Buka', nilai: '24 jam' },
        { label: 'Fasilitas', nilai: 'Kolam berendam di tengah pemandangan persawahan dan pedesaan yang asri' },
      ],
    },
    {
      img: '/curugcimanggu.jpg',
      alt: 'Curug',
      judul: 'Curug Cimanggu',
      deskripsi:
        'Bagi para pecinta alam, Curug Cimanggu adalah wisata air terjun tersembunyi yang menyajikan jalur petualangan alam yang sangat asri dan sejuk. Destinasi ini cocok untuk pengunjung yang menyukai suasana petualangan yang masih alami dan belum banyak tersentuh pembangunan.',
      detail: [
        { label: 'Jarak', nilai: '2,3 km sekitar 8 menit' },
        { label: 'Harga Tiket', nilai: 'Rp 10.000 per orang' },
        { label: 'Parkir', nilai: 'Rp 10.000 per kendaraan' },
        { label: 'Jam Buka', nilai: '07:00 - 17:00 WIB' },
        { label: 'Fasilitas', nilai: 'Belum tersedia toilet, Kamar Mandi, maupun Warung Makan' },
      ],
    },
    {
      img: '/PuspaIptek.jpg',
      alt: 'Puspa Iptek Sundial',
      judul: 'Puspa Iptek Sundial',
      deskripsi:
        'Puspa Iptek Sundial adalah wahana pendidikan yang berlokasi di kawasan Kota Baru Parahyangan, Padalarang, Kabupaten Bandung Barat, Jawa Barat. Nama Puspa merupakan akronim dari Pusat Peragaan, sedangkan Iptek adalah singkatan dari Ilmu Pengetahuan dan Teknologi. Adapun kata Sundial berarti jam matahari. Wahana ini diresmikan pada 11 Mei 2002, bertepatan dengan peringatan Hari Pendidikan Nasional.',
      detail: [
        { label: 'Jarak', nilai: '4,2 km sekitar 13 menit' },
        { label: 'Harga Tiket', nilai: 'Rp 35.000 per orang' },
        { label: 'Jam Buka', nilai: '08:30 - 16.00' },
        { label: 'Fasilitas', nilai: 'Area parkir, Toilet, dan Ruang Informasi' },
      ]
    },
    {
      img: '/Pakuhaji.jpg',
      alt: 'Wisata Pakuhaji',
      judul: 'Wisata Pakuhaji',
      deskripsi:
        'Wisata Pakuhaji adalah kawasan rekreasi alam dan edukasi keluarga seluas sekitar 10 hektar yang terletak di Jalan Haji Gofur, Kecamatan Ngamprah, Kabupaten Bandung Barat (berbatasan dengan wilayah Cimahi Utara). Tempat ini menawarkan suasana pegunungan yang sejuk, pemandangan hijau, serta berbagai aktivitas luar ruangan yang ramah keluarga.',
      detail: [
        { label: 'Jarak', nilai: '8,2 km sekitar 22 menit' },
        { label: 'Harga Tiket', nilai: 'Rp 10.000 per orang' },
        { label: 'Jam Buka', nilai: '08:00 - 16.00' },
        { label: 'Fasilitas', nilai: 'Area parkir, Toilet dan Kamar ganti, Mushola, dan Warung Kuliner' },
      ]
    },
    {
      img: '/pemancingan.jpg',
      alt: 'Pemancingan Pak Imat',
      judul: 'Pemancingan Pak Imat',
      deskripsi:
        'Pemancingan Pak Imat merupakan salah satu tempat rekreasi milik warga desa sukatani yang menawarkan suasana nyaman untuk memancing dan bersantai. Tempat ini juga menjadi salah satu potensi wisata lokal yang mendukung perekonomian masyarakat desa.',
      detail: [
        { label: 'Jarak', nilai: '250 m sekitar 1 menit' },
        { label: 'Harga Tiket', nilai: 'Bayar langsung di tempat' },
        { label: 'Jam Buka', nilai: '06:00 - 23.00' },
        { label: 'Fasilitas', nilai: 'Area Memancing dan tempat duduk untuk memancing' },
      ]
    },
    {
      img: '/Ciburuy.jpg',
      alt: 'Situ Ciburuy',
      judul: 'Situ Ciburuy',
      deskripsi:
        'Situ Ciburuy adalah danau indah di Desa Ciburuy, Kecamatan Padalarang, Kabupaten Bandung Barat. Tempat ini terkenal karena ada pulau kecil di tengah air. Lokasinya berada di tepi jalan raya utama Bandung-Jakarta. Danau ini sangat populer lewat lagu Sunda lama bernama "Bubuy Bulan".',
      detail: [
        { label: 'Jarak', nilai: '5.4 km sekitar 12 menit' },
        { label: 'Harga Tiket', nilai: 'Rp 7.500 per orang' },
        { label: 'Parkir Motor', nilai: 'Rp 2000 per orang' },
        { label: 'Parkir Mobil', nilai: 'Rp 5000 per orang' },
        { label: 'Sewa Perahu', nilai: 'Rp 15.000 - 75.000  Rp15.000 – Rp75.000 (tergantung jenis atau kapasitas perahu)' },
        { label: 'Jam Buka', nilai: '24 Jam' },
        { label: 'Fasilitas', nilai: 'area piknik, panggung pentas seni, warung makan, toilet umum, area parkir, serta perahu wisata untuk berkeliling danau' },
      ]
    },
  ],
  budaya: {
    narasumber: {
      nama: 'Arie Koen',
      peran: 'Seniman, Dalang & Pimpinan Sanggar Ceta',
      img: '/photoariekoen.png',
      deskripsi: 'Seorang inovator seni asal Jawa Barat yang menciptakan aliran tari "Ceta" berbasis Jaipongan. Beliau dikenal karena keberaniannya melakukan eksperimen kolaborasi lintas budaya, menggabungkan seni Sunda dengan nuansa Bali, Mesir, hingga Jepang, dengan visi bahwa seni tradisional harus berevolusi melalui eksplorasi dan branding agar tetap relevan.',
      instagram: 'https://www.instagram.com/koen_studio?igsh=MTEzcmt4ZHplYm9ycQ=='
    },
    artikel: [
      {
        judul: 'Filosofi Sanggar & Inovasi',
        paragraf: 'Sanggar Ceta didirikan pada awalnya sebagai wadah untuk pelestarian dan penjagaan nilai-nilai lokal seni Sunda agar tetap menjadi benteng peradaban di tengah arus modernisasi. Inovasi yang dilakukan oleh sanggar tidak meninggalkan pakem atau aturan dasar tradisi, melainkan mengembangkannya ke dalam pendekatan naratif dan koreografi dramatik yang lebih segar, modern, elegan, serta memiliki daya tarik nilai estetika tinggi bagi generasi masa kini.'
      },
      {
        judul: 'Strategi Branding & Kolaborasi',
        paragraf: 'Strategi utama sanggar difokuskan pada penciptaan karya dan pertunjukan mandiri yang bersifat mutakhir dan eksperimental. Melalui inisiatif memperkenalkan karya kolaboratif lintas budaya kepada publik luas, sanggar tidak hanya memperluas jangkauan kreativitas, tetapi juga membuktikan bahwa kesenian daerah sangat mampu dikemas secara menawan, estetis, dan tetap berdaya saing tinggi di kancah industri seni pertunjukan era digital.'
      }
    ],
    youtubeInfo: 'Platform digital digunakan sebagai ruang ekspresi dan dokumentasi karya. Saluran ini menampilkan dokumentasi pertunjukan eksperimental, proses kreatif di balik layar, serta upaya edukasi untuk memperkenalkan kebudayaan Sunda kepada khalayak luas.',
    youtubeChannel: 'https://youtube.com/@koenstudio?si=pPrzXFgdXGKN_MVs',
    galeriFoto: [
      { img: '/studiokoen1.jpeg', title: 'Studio Koen 1' },
      { img: '/studiokoen2.jpeg', title: 'Studio Koen 2' },
      { img: '/studiokoen3.jpeg', title: 'Studio Koen 3' },
      { img: '/studiokoen4.jpeg', title: 'Studio Koen 4' }
    ],
    videos: [
      { id: 'WtaBURAVReI', title: 'Pertunjukan Seni Budaya 1' },
      { id: '7HYLxS9NyOw', title: 'Pertunjukan Seni Budaya 2' },
      { id: 'odFyctIv2DQ', title: 'Pertunjukan Seni Budaya 3' },
      { id: '53QvWXBx6Ag', title: 'Pertunjukan Seni Budaya 4' },
      { id: 'kMVglxRC-Dc', title: 'Pertunjukan Seni Budaya 5' },
    ],
  },
  pertanian: [
    {
      img: '/sawah.jpg',
      alt: 'Pertanian',
      judul: 'Pertanian',
      kategori: 'Sawah',
      deskripsi:
        "Sektor pertanian menjadi salah satu nadi kehidupan utama di Desa Sukatani. Wilayah ini dikaruniai hamparan lahan persawahan yang subur, hijau, dan membentang luas, menciptakan pemandangan alam yang sangat menyejukkan mata.",
      galeri: {
        foto: ['/sawah.jpg', '/sawah1.png', '/sawah2.png', '/sawah3.png'],
        video: ['/sawah.mp4']
      }
    },
    {
      img: 'kambing.png',
      alt: 'Peternakan',
      judul: 'Peternakan',
      kategori: 'Kambing',
      deskripsi:
        "Sektor peternakan di Desa Sukatani memegang peranan penting dalam menopang perekonomian serta pemenuhan kebutuhan pangan masyarakat. Dengan ketersediaan pakan hijauan yang melimpah dari alam sekitar, warga mengembangkan berbagai komoditas peternakan yang dikelola secara mandiri maupun berkelompok.",
      galeri: {
        foto: ['/kambing.png', '/kambing1.png', '/kambing2.png', '/kambing3.png'],
        video: ['/kambing.mp4']
      }
    },
    {
      img: 'kebun.png',
      alt: 'Perkebunan',
      judul: 'Perkebunan',
      kategori: 'Kebun',
      deskripsi:
        'Kawasan perkebunan di Desa Sukatani terus berkembang seiring dengan inovasi dan kreativitas masyarakatnya. Tidak hanya mengandalkan metode konvensional, para pemuda desa dan kelompok tani juga mulai mengintegrasikan metode pertanian modern yang ramah lingkungan.',
      galeri: {
        foto: ['/kebun.png', '/kebun1.png', '/kebun2.png', '/kebun3.png'],
        video: ['/kebun.mp4']
      }
    },
  ],
  umkm: [
    {
      img: ['/pisangbolen.jpeg', '/pisangbolen2.jpeg', '/pisangbolen3.jpeg'],
      alt: 'Pisang Bolen Odelia',
      judul: 'Pisang Bolen Odelia',
      deskripsi: 'Pisang Bolen Odelia merupakan salah satu produk UMKM kebanggaan dari warga Desa Sukatani. Camilan lezat ini dibuat dari buah pisang pilihan berkualitas unggul yang dibalut dengan adonan pastry berlapis nan renyah. Bolen ini dipanggang setiap hari (fresh dari oven), sehingga sangat pas dijadikan oleh-oleh khas Sukatani ataupun teman bersantai bersama keluarga.',
      detail: [
        { label: 'Varian Rasa', nilai: 'Coklat, Keju Spesial, Creamcheese, dan Peuyeum' },
        { label: 'Harga', nilai: 'Mulai Rp 16.000 / box (isi 4)' },
        { label: 'Kontak Pemesanan', nilai: '081214419820 (WhatsApp)' },
      ],
      reels: [
        'DUj4Mmbk56_',
        'DUb_rUKEtAR',
        'DUUhRuIE89x',
        'DUKzG43CV5z',
        'DTkTibLE-tw'
      ],
      instagram: 'https://www.instagram.com/pisangbolenodelia?igsh=OHI2cXY4Mzh1Y2Zy',
      mapsUrl: 'https://maps.app.goo.gl/fqLWtC4U1jb5GN51A'
    }
  ],
  fasilitas: [
    {
      judul: 'Kantor Kecamatan',
      ikon: 'Building',
      badge: 'text-purple-500 bg-purple-500/10',
      fotoUrl: '/kantorkecamatan.jpeg',
      deskripsi: 'Pusat pelayanan administrasi dan pemerintahan tingkat kecamatan.',
      mapsUrl: 'https://maps.app.goo.gl/rhcTbWkVDeRNYowS7'
    },
    {
      judul: 'Kantor Desa',
      ikon: 'Landmark',
      badge: 'text-blue-500 bg-blue-500/10',
      fotoUrl: '/kantordesa1.jpg',
      deskripsi: 'Kantor pusat administrasi dan pelayanan masyarakat Desa Sukatani.',
      mapsUrl: 'https://maps.app.goo.gl/X9z7EyX3jYuB1MYx6'
    },
    {
      judul: 'Balai Desa',
      ikon: 'Building2',
      badge: 'text-green-500 bg-green-500/10',
      fotoUrl: '/kantordesa1.jpg',
      deskripsi: 'Gedung pertemuan warga, musyawarah desa, serta kegiatan sosial kemasyarakatan.',
      mapsUrl: 'https://maps.app.goo.gl/gyviVPqnE8gSc2LQ6'
    },

    {
      judul: 'Sekolah',
      ikon: 'School',
      badge: 'text-yellow-500 bg-yellow-500/10',
      fotoUrl: '/sd-sukatani.jpg',
      deskripsi: 'Fasilitas pendidikan formal untuk sarana belajar mengajar anak-anak dan generasi muda di lingkungan Desa Sukatani.',
      daftarTempat: [
        {
          judul: 'TK Riyadhul Huda',
          fotoUrl: '/tkriyadhulhuda.jpg',
          deskripsi: 'Pusat pendidikan anak usia dini (PAUD / TK) untuk mulai membentuk dan mendidik karakter anak-anak di lingkungan Desa Sukatani.'
        },
        {
          judul: 'SD Negeri 2 Ngamprah',
          fotoUrl: '/sdn2ngamprah.jpg',
          deskripsi: 'Fasilitas pendidikan tingkat sekolah dasar (SD) yang menjadi salah satu sarana belajar utama bagi anak-anak di lingkungan Desa Sukatani.'
        },
        {
          judul: 'SMP PGRI Ngamprah',
          fotoUrl: '/smppgringamprah.jpg',
          deskripsi: 'Sarana pendidikan tingkat sekolah menengah pertama (SMP) untuk memfasilitasi keberlanjutan belajar generasi muda di sekitar Desa Sukatani.'
        }
      ]
    },
    {
      judul: 'Masjid',
      ikon: 'BookOpen',
      badge: 'text-red-500 bg-red-500/10',
      fotoUrl: '/masjid.jpg',
      deskripsi: 'Pusat kegiatan ibadah keagamaan dan sarana pembinaan rohani warga desa.',
      daftarTempat: [
        {
          judul: 'Masjid Agung Lintang Asta',
          fotoUrl: '/masjid1.jpg',
          deskripsi: 'Salah satu masjid agung utama yang menjadi pusat tempat kegiatan peribadahan dan keagamaan masyarakat sekitar.'
        },
        {
          judul: 'Masjid Baiturrohman',
          fotoUrl: '/masjid2.jpg',
          deskripsi: 'Fasilitas rumah ibadah umat Islam untuk mendukung aktivitas ibadah dan pembinaan kerohanian warga setempat.'
        }
      ]
    },
    {
      judul: 'Puskesmas',
      ikon: 'Hospital',
      badge: 'text-blue-500 bg-blue-500/10',
      fotoUrl: '/puskesmas.jpg',
      deskripsi: 'Unit pelayanan kesehatan pembantu untuk pertolongan medis pertama warga desa.',
      mapsUrl: 'https://maps.app.goo.gl/h6q4FKgQXUSueV39A'
    },


  ],
  galeri: {
    foto: {
      judul: 'Foto Album Kegiatan',
      daftar: [
        '/galeri1.jpg',
        '/galeri2.jpg',
        '/galeri3.jpg',
      ],
    },
    video: {
      judul: 'Dokumentasi',
      daftar: [
        { judul: 'Melihat Pemandangan Desa Sukatani yang Indah', videoId: 'bIVFx6VNN4s' },
        { judul: 'Kegiatan Warga Desa Sukatani', videoId: 'LYOufDjDWuU' },
        { judul: 'Keseruan Aktivitas Warga Desa Sukatani', videoId: 'NA74y7rGXkQ' },
      ],
    },
  },
};