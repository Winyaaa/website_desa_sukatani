import React, { useState } from 'react';
import PotensiTampilan from './PotensiTampilan';
import DetailFasilitas from './DetailFasilitas';

export default function App() {
  const [halaman, setHalaman] = useState('potensi'); // 'potensi' atau 'detail'
  const [fasilitasTerpilih, setFasilitasTerpilih] = useState(null);

  const handlePilihFasilitas = (namaFasilitas) => {
    setFasilitasTerpilih(namaFasilitas);
    setHalaman('detail');
    window.scrollTo(0, 0); // Supaya saat pindah halaman otomatis scroll ke atas
  };

  return (
    <div>
      {halaman === 'potensi' ? (
        <PotensiTampilan onPilihFasilitas={handlePilihFasilitas} />
      ) : (
        <DetailFasilitas nama={fasilitasTerpilih} onKembali={() => setHalaman('potensi')} />
      )}
    </div>
  );
}