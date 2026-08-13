import React, { useState } from 'react';
import { Gamepad2, RotateCcw } from 'lucide-react';

export default function CongklakGame() {
    const [board, setBoard] = useState({
        p1Pits: Array(7).fill(5), // Player 1 (bottom) small pits
        p2Pits: Array(7).fill(5), // Player 2 (top) small pits
        p1Store: 0,
        p2Store: 0,
    });

    const [turn, setTurn] = useState('P1'); // 'P1' atau 'P2'
    const [message, setMessage] = useState('Giliran Kamu (Pemain 1)');

    const playTurn = (idx, isP1) => {
        if (isP1 && turn !== 'P1') return;
        if (!isP1 && turn !== 'P2') return;

        const b = {
            p1Pits: [...board.p1Pits],
            p2Pits: [...board.p2Pits],
            p1Store: board.p1Store,
            p2Store: board.p2Store
        };

        let seeds = isP1 ? b.p1Pits[idx] : b.p2Pits[idx];
        if (seeds === 0) return;

        if (isP1) b.p1Pits[idx] = 0;
        else b.p2Pits[idx] = 0;

        // Untuk simplifikasi, implementasi congklak ini hanya mengambil biji dan 
        // mengisi lumbung sendiri sekali putaran sederhana (aturan dasar mancala).
        // Implementasi Congklak riil sangat kompleks dengan lari muter berkali2, dsb.

        let p1TurnTemp = isP1;
        let cMode = isP1 ? 'P1' : 'P2'; // whose side are we currently walking on
        let cIdx = idx;

        while (seeds > 0) {
            if (cMode === 'P1') {
                cIdx++;
                if (cIdx < 7) {
                    b.p1Pits[cIdx]++; seeds--;
                } else {
                    // Go to store or P2 side
                    if (p1TurnTemp) { b.p1Store++; seeds--; }
                    if (seeds > 0) { cMode = 'P2'; cIdx = 6; } // Start at end of P2
                }
            } else {
                cIdx--;
                if (cIdx >= 0) {
                    b.p2Pits[cIdx]++; seeds--;
                } else {
                    // Go to store or P1 side
                    if (!p1TurnTemp) { b.p2Store++; seeds--; }
                    if (seeds > 0) { cMode = 'P1'; cIdx = -1; } // Will become 0 next loop
                }
            }
        }

        setBoard(b);

        // Toggle Turn
        if (turn === 'P1') {
            setTurn('P2');
            setMessage('Giliran Pemain 2');
        } else {
            setTurn('P1');
            setMessage('Giliran Kamu (Pemain 1)');
        }

        // Cek selesai
        const p1Empty = b.p1Pits.every(v => v === 0);
        const p2Empty = b.p2Pits.every(v => v === 0);
        if (p1Empty || p2Empty) {
            let finalMsg = "Game Selesai! ";
            if (b.p1Store > b.p2Store) finalMsg += "Pemain 1 Menang!";
            else if (b.p2Store > b.p1Store) finalMsg += "Pemain 2 Menang!";
            else finalMsg += "Seri!";
            setMessage(finalMsg);
            setTurn('END');
        }
    };

    const resetGame = () => {
        setBoard({
            p1Pits: Array(7).fill(5),
            p2Pits: Array(7).fill(5),
            p1Store: 0,
            p2Store: 0,
        });
        setTurn('P1');
        setMessage('Giliran Kamu (Pemain 1)');
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 h-full w-full overflow-auto min-h-0 bg-stone-900/10">
            <div className="bg-[#b37542] p-6 md:p-12 w-full min-w-[700px] max-w-6xl rounded-[40px] shadow-2xl relative border-8 border-[#5c3a21] shrink-0 mt-8">

                {/* Header/Message */}
                <div className="absolute -top-14 left-0 right-0 flex justify-center mb-10 text-white font-bold text-center gap-4">
                    <div className="bg-slate-900/80 px-6 py-2 rounded-full border border-slate-700 shadow-md flex items-center gap-2">
                        <Gamepad2 size={18} className="text-violet-400" />
                        <span className="text-violet-200">{message}</span>
                    </div>
                    <button onClick={resetGame} className="bg-slate-900/80 p-2 rounded-full border border-slate-700 hover:bg-slate-700 transition" title="Ulang">
                        <RotateCcw size={18} className="text-white" />
                    </button>
                </div>

                {/* Papan Congklak */}
                <div className="flex items-center justify-between gap-6">

                    {/* Lumbung P2 (Kiri) */}
                    <div className="w-24 h-48 bg-[#5c3a21] rounded-[40px] shadow-inner flex items-center justify-center border-4 border-[#3a2010]">
                        <span className="text-3xl font-black text-amber-500 drop-shadow-md bg-black/40 w-16 h-16 rounded-full flex items-center justify-center">
                            {board.p2Store}
                        </span>
                    </div>

                    <div className="flex-grow flex flex-col gap-6">
                        {/* Pits P2 (Atas - Meredup kalau bukan giliran) */}
                        <div className={`flex justify-between gap-4 px-4 ${turn === 'P2' ? 'opacity-100' : 'opacity-70'} transition-opacity`}>
                            {board.p2Pits.map((val, i) => (
                                <div
                                    key={`p2-${i}`}
                                    onClick={() => playTurn(i, false)}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-inner cursor-pointer font-bold text-xl
                    ${val === 0 ? 'bg-[#5c3a21]/50 text-white/20' : 'bg-[#5c3a21] text-amber-500 border-b-4 border-[#3a2010] hover:bg-[#6b4528]'}
                  `}
                                >
                                    <div className={val > 0 ? 'bg-black/30 w-10 h-10 rounded-full flex items-center justify-center shadow-sm' : ''}>
                                        {val}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pits P1 (Bawah - Giliranmu) */}
                        <div className={`flex justify-between gap-4 px-4 ${turn === 'P1' ? 'opacity-100' : 'opacity-70'} transition-opacity`}>
                            {board.p1Pits.map((val, i) => (
                                <div
                                    key={`p1-${i}`}
                                    onClick={() => playTurn(i, true)}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-inner cursor-pointer font-bold text-xl
                    ${val === 0 ? 'bg-[#5c3a21]/50 text-white/20' : 'bg-[#5c3a21] text-amber-500 border-t-4 border-[#3a2010] hover:bg-[#6b4528]'}
                  `}
                                >
                                    <div className={val > 0 ? 'bg-black/30 w-10 h-10 rounded-full flex items-center justify-center shadow-sm' : ''}>
                                        {val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lumbung P1 (Kanan) */}
                    <div className="w-24 h-48 bg-[#5c3a21] rounded-[40px] shadow-inner flex items-center justify-center border-4 border-[#3a2010]">
                        <span className="text-3xl font-black text-amber-500 drop-shadow-md bg-black/40 w-16 h-16 rounded-full flex items-center justify-center">
                            {board.p1Store}
                        </span>
                    </div>

                </div>
            </div>
            <p className="mt-8 text-xs text-gray-400 font-mono">*Simulasi disederhanakan untuk contoh mekanik mancala dasar. 1 angka merepresentasikan 1 biji coklak.</p>
        </div>
    );
}
