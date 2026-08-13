import React, { useState } from 'react';
import { Trophy, CheckCircle, ArrowRight, Play, Frown, MapPin } from 'lucide-react';

const genPlaceholder = (text) => `https://placehold.co/600x400/0f766e/ffffff?text=${encodeURIComponent(text)}`;

const WORLD_DATA = [
    {
        tema: "Level 1: Rumah Adat",
        stages: [
            { nama: "Rumah Gadang", pertanyaan: "5 + 4", jawaban: 9, image: "/rumahgadang.jpg" },
            { nama: "Rumah Joglo", pertanyaan: "12 - 5", jawaban: 7, image: "/rumahjoglo.jpg" },
            { nama: "Rumah Tongkonan", pertanyaan: "6 + 8", jawaban: 14, image: "/rumahtongkonan.jpg" },
            { nama: "Rumah Honai", pertanyaan: "15 - 9", jawaban: 6, image: "/rumahhonai.jpeg" },
            { nama: "Rumah Betang", pertanyaan: "9 + 8", jawaban: 17, image: "/rumahbetang.jpg" }
        ]
    },
    {
        tema: "Level 2: Makanan Khas",
        stages: [
            { nama: "Rendang Sapi", pertanyaan: "10 + 10", jawaban: 20, image: "/rendangsapi.jpg" },
            { nama: "Pempek Palembang", pertanyaan: "18 - 6", jawaban: 12, image: "/pempek.webp" },
            { nama: "Gudeg Nangka", pertanyaan: "8 + 7", jawaban: 15, image: "/gudegnangka.jpeg" },
            { nama: "Soto Banjar", pertanyaan: "20 - 4", jawaban: 16, image: "/sotobanjar.jpg" },
            { nama: "Papeda Ikan", pertanyaan: "15 + 6", jawaban: 21, image: "/papeda.jpg" }
        ]
    },
    {
        tema: "Level 3: Pakaian Adat",
        stages: [
            { nama: "Kain Ulos", pertanyaan: "25 - 5", jawaban: 20, image: "/kainulos.png" },
            { nama: "Bundo Kanduang", pertanyaan: "11 + 11", jawaban: 22, image: "/bundokaduang.png" },
            { nama: "Kebaya Jawa", pertanyaan: "30 - 15", jawaban: 15, image: "/kebayajawatengah.png" },
            { nama: "Baju Bodo", pertanyaan: "13 + 12", jawaban: 25, image: "/bajubodo.png" },
            { nama: "Koteka / Holim", pertanyaan: "18 - 9", jawaban: 9, image: "/koteka.png" }
        ]
    },
    {
        tema: "Level 4: Tarian Daerah",
        stages: [
            { nama: "Tari Saman", pertanyaan: "30 + 15", jawaban: 45, image: "/tarisaman.png" },
            { nama: "Tari Piring", pertanyaan: "40 - 12", jawaban: 28, image: "/taripiring.png" },
            { nama: "Tari Jaipong", pertanyaan: "14 + 16", jawaban: 30, image: "/tarijaipong.png" },
            { nama: "Tari Kecak", pertanyaan: "50 - 25", jawaban: 25, image: "/tarikecak.png" },
            { nama: "Tari Poco-Poco", pertanyaan: "22 + 18", jawaban: 40, image: "/taripocopoco.png" }
        ]
    },
    {
        tema: "Level 5: Alat Musik Tradisional",
        stages: [
            { nama: "Angklung Bambu", pertanyaan: "8 x 2", jawaban: 16, image: "/angklung.jpg" },
            { nama: "Sasando", pertanyaan: "9 x 3", jawaban: 27, image: "/sasando.jpg" },
            { nama: "Kolintang", pertanyaan: "15 + 15", jawaban: 30, image: "/kolintang.jpeg" },
            { nama: "Alat Tifa", pertanyaan: "20 - 7", jawaban: 13, image: "/tifa.jpg" },
            { nama: "Gamelan Jawa", pertanyaan: "12 + 19", jawaban: 31, image: "/gamelan.jpg" }
        ]
    },
    {
        tema: "Level 6: Senjata Tradisional",
        stages: [
            { nama: "Keris", pertanyaan: "4 x 4", jawaban: 16, image: "/keris.jpg" },
            { nama: "Rencong Aceh", pertanyaan: "5 x 5", jawaban: 25, image: "/rencong.jpg" },
            { nama: "Mandau", pertanyaan: "30 - 14", jawaban: 16, image: "/mandau.jpg" },
            { nama: "Celurit", pertanyaan: "6 x 3", jawaban: 18, image: "/celurit.webp" },
            { nama: "Badik", pertanyaan: "45 - 20", jawaban: 25, image: "/badik.jpg" }
        ]
    },
    {
        tema: "Level 7: Hewan Endemik",
        stages: [
            { nama: "Komodo", pertanyaan: "7 x 2", jawaban: 14, image: "/komodo.jpg" },
            { nama: "Orangutan", pertanyaan: "36 / 2", jawaban: 18, image: "/orangutan.jpg" },
            { nama: "Harimau Sumatera", pertanyaan: "8 x 5", jawaban: 40, image: "/harimau.jpg" },
            { nama: "Burung Cendrawasih", pertanyaan: "50 - 12", jawaban: 38, image: "/cendrawasih.webp" },
            { nama: "Anoa", pertanyaan: "4 x 6", jawaban: 24, image: "/anoa.jpg" }
        ]
    },
    {
        tema: "Level 8: Peninggalan Sejarah",
        stages: [
            { nama: "Candi Borobudur", pertanyaan: "9 x 4", jawaban: 36, image: "/candiborobudur.jpg" },
            { nama: "Candi Prambanan", pertanyaan: "60 - 25", jawaban: 35, image: "/candiprambanan.webp" },
            { nama: "Candi Muaro Jambi", pertanyaan: "15 x 2", jawaban: 30, image: "/candimuarojambi.webp" },
            { nama: "Benteng Vredeburg", pertanyaan: "23 + 27", jawaban: 50, image: "/bentengvredeburg.jpg" },
            { nama: "Fort Rotterdam", pertanyaan: "100 - 45", jawaban: 55, image: "/fortrotterdam.jpg" }
        ]
    },
    {
        tema: "Level 9: Pahlawan Nasional",
        stages: [
            { nama: "Cut Nyak Dien", pertanyaan: "8 x 7", jawaban: 56, image: "/cutnyadien.jpg" },
            { nama: "Pangeran Diponegoro", pertanyaan: "45 / 3", jawaban: 15, image: "/pangerandiponegoro.jpg" },
            { nama: "Ki Hajar Dewantara", pertanyaan: "80 - 18", jawaban: 62, image: "/kihajardewantara.jpg" },
            { nama: "Kapitan Pattimura", pertanyaan: "11 x 4", jawaban: 44, image: "/pattimura.jpg" },
            { nama: "Tuanku Imam Bonjol", pertanyaan: "9 x 9", jawaban: 81, image: "/imambonjol.jpg" }
        ]
    },
    {
        tema: "Level 10: Keajaiban Alam",
        stages: [
            { nama: "Danau Toba", pertanyaan: "100 / 4", jawaban: 25, image: "/danautoba.jpg" },
            { nama: "Gunung Bromo", pertanyaan: "75 + 15", jawaban: 90, image: "/gunungbromo.jpeg" },
            { nama: "Raja Ampat", pertanyaan: "12 x 5", jawaban: 60, image: "/rajaampat.jpg" },
            { nama: "Taman Nasional Komodo", pertanyaan: "150 - 65", jawaban: 85, image: "/tamannasional.jpeg" },
            { nama: "Kawah Ijen", pertanyaan: "30 x 3", jawaban: 90, image: "/kawahijen.jpg" }
        ]
    }
];

export default function PetualanganGame() {
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const [currentStageIdx, setCurrentStageIdx] = useState(0);
    const [val, setVal] = useState("");
    const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
    const [finished, setFinished] = useState(false);

    const world = WORLD_DATA[currentLevelIdx];
    const stageInfo = world?.stages[currentStageIdx];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(val) === stageInfo.jawaban) {
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }
    };

    const nextStep = () => {
        if (currentStageIdx < 4) {
            // Lanjut stase dalam level yang sama
            setCurrentStageIdx(prev => prev + 1);
        } else {
            // Naik level
            if (currentLevelIdx < WORLD_DATA.length - 1) {
                setCurrentLevelIdx(prev => prev + 1);
                setCurrentStageIdx(0);
            } else {
                setFinished(true); // Tamat
            }
        }
        setVal("");
        setFeedback(null);
    };

    const restartGame = () => {
        setCurrentLevelIdx(0);
        setCurrentStageIdx(0);
        setVal("");
        setFeedback(null);
        setFinished(false);
    };

    if (finished) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-teal-50 overflow-auto">
                <Trophy size={100} className="text-yellow-500 mb-6 drop-shadow-md animate-bounce" />
                <h2 className="text-4xl font-bold text-teal-900 mb-4">Master Nusantara!</h2>
                <p className="text-teal-700 mb-8 max-w-lg text-lg">Luar biasa! Kamu menyelesaikan 10 Level 50 pertanyaan matematika dengan sempurna. Pengetahuan kamu tentang Budaya dan Geografi Indonesia sangat mengagumkan.</p>
                <button onClick={restartGame} className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl text-lg">
                    <Play size={20} /> Mainkan Ulang
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden shadow-lg relative">
            {/* Header Status */}
            <div className="bg-teal-700 p-4 shrink-0 text-white flex flex-wrap justify-between items-center gap-4 shadow-md relative z-10">
                <h3 className="font-bold text-lg">{world.tema}</h3>
                <div className="flex gap-2">
                    <span className="bg-teal-900 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-inner">
                        Langkah {currentStageIdx + 1} / 5
                    </span>
                    <span className="bg-amber-500 text-amber-950 px-3 py-1.5 rounded-full text-xs font-bold shadow-inner">
                        Level {currentLevelIdx + 1} / 10
                    </span>
                </div>
            </div>

            {/* Progres Bar Mini */}
            <div className="w-full h-2 bg-gray-200 shrink-0">
                <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: `${((currentStageIdx + 1) / 5) * 100}%` }}></div>
            </div>

            <div className="flex-grow flex flex-col p-4 md:p-8 overflow-y-auto">
                <div className="w-full max-w-2xl mx-auto flex flex-col items-center">

                    {/* Gambar Kartu Pengetahuan */}
                    <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 relative shadow-lg group">
                        <img src={stageInfo.image || genPlaceholder(stageInfo.nama)} alt={stageInfo.nama} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-white" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                            <div className="p-6 md:p-8 w-full flex items-center gap-4">
                                <span className="bg-teal-500/20 p-3 rounded-full backdrop-blur-md">
                                    <MapPin className="text-teal-200" size={32} />
                                </span>
                                <div>
                                    <span className="text-sm md:text-base font-bold text-teal-300 drop-shadow-md">Tujuan Terbuka:</span>
                                    <h4 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{stageInfo.nama}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Area Pertanyaan */}
                    <form onSubmit={handleSubmit} className="w-full bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-3xl shadow-sm">
                        {!feedback ? (
                            <div className="flex flex-col items-center">
                                <label className="text-gray-600 font-bold mb-4 text-center">Selesaikan rintangan matematika ini untuk melangkah ke tujuan selanjutnya:</label>
                                <div className="flex items-center justify-center gap-4 text-5xl md:text-7xl font-black text-slate-800 mb-8 w-full">
                                    <span>{stageInfo.pertanyaan}</span>
                                    <span className="text-teal-500">=</span>
                                    <input
                                        type="number"
                                        value={val}
                                        onChange={(e) => setVal(e.target.value)}
                                        autoFocus
                                        placeholder="?"
                                        className="w-24 md:w-32 text-center border-b-4 border-teal-500 bg-white rounded-xl shadow-inner outline-none focus:bg-teal-50 focus:border-teal-700 pb-2 px-2 text-teal-800 transition-colors"
                                    />
                                </div>
                                <button disabled={!val} type="submit" className="w-full max-w-sm py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-md text-lg">
                                    Kunci Jawaban
                                </button>
                            </div>
                        ) : feedback === 'correct' ? (
                            <div className="flex flex-col items-center bg-green-50 p-8 rounded-2xl border border-green-200 animate-fade-in shadow-sm">
                                <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
                                <h4 className="text-2xl font-bold text-green-900 mb-2">Jawaban Tepat!</h4>
                                <p className="text-gray-700 mb-6 text-center">Kamu berhasil memecahkan rintangan <strong>{stageInfo.pertanyaan} = {stageInfo.jawaban}</strong>.</p>
                                <button type="button" onClick={nextStep} className="w-full max-w-sm py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-md">
                                    {currentStageIdx < 4 ? "Lanjut ke Tujuan Berikutnya" : "Lanjut ke Level Selanjutnya"} <ArrowRight size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center bg-red-50 p-8 rounded-2xl border border-red-200 animate-fade-in shadow-sm">
                                <Frown size={64} className="text-red-500 mb-4" />
                                <h4 className="text-2xl font-bold text-red-900 mb-2">Oh tidak, keliru!</h4>
                                <p className="text-gray-700 mb-6 text-center">Jawabanmu kurang tepat. Hitung dengan pelan dan teliti lagi ya.</p>
                                <button type="button" onClick={() => { setFeedback(null); setVal(""); }} className="w-full max-w-sm py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors shadow-md">
                                    Coba Hitung Lagi
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
