import React, { useState } from 'react';
import { Palette, RefreshCw, Download, CheckCircle2 } from 'lucide-react';

const COLORS = [
    'bg-transparent', // index 0 (empty)
    'bg-amber-900',   // brown
    'bg-amber-500',   // gold/orange
    'bg-slate-900',   // black
    'bg-slate-100',   // white/off-white
    'bg-rose-700',    // red
];

const GRID_SIZE = 8;

export default function BatikGame() {
    const [grid, setGrid] = useState(Array(GRID_SIZE * GRID_SIZE).fill(0));
    const [currentColor, setCurrentColor] = useState(1);
    const [showSimpan, setShowSimpan] = useState(false);

    const handleCellClick = (index) => {
        const newGrid = [...grid];
        newGrid[index] = currentColor;
        setGrid(newGrid);
        setShowSimpan(false);
    };

    const resetGrid = () => {
        setGrid(Array(GRID_SIZE * GRID_SIZE).fill(0));
        setShowSimpan(false);
    };

    const checkSimetri = () => {
        let symmetric = true;
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE / 2; col++) {
                let leftIdx = row * GRID_SIZE + col;
                let rightIdx = row * GRID_SIZE + (GRID_SIZE - 1 - col);
                if (grid[leftIdx] !== grid[rightIdx]) {
                    symmetric = false;
                    break;
                }
            }
        }
        return symmetric;
    };

    const simpanKarya = () => {
        setShowSimpan(true);
    };

    const isSymmetric = checkSimetri();
    const isEmpty = grid.every(c => c === 0);

    return (
        <div className="w-full h-full flex flex-col overflow-hidden">
            <div className="w-full h-full bg-white rounded-xl shadow-xl overflow-hidden border border-amber-100 flex flex-col">
                <div className="bg-gradient-to-r from-amber-600 to-orange-500 p-4 md:p-6 text-white flex justify-between items-center shadow-sm">
                    <div>
                        <h3 className="font-bold text-lg flex items-center gap-2"><Palette size={20} /> Eksplorasi Pola Batik</h3>
                        <p className="text-xs text-amber-100 mt-1 focus:outline-none">Rancang motif geometrismu di atas kanvas 8x8</p>
                    </div>
                    <button onClick={resetGrid} className="p-2 hover:bg-white/20 rounded-full transition-colors tooltip" title="Reset Kanvas">
                        <RefreshCw size={20} />
                    </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col items-center flex-grow bg-amber-50/30 overflow-y-auto min-h-0">

                    {/* Palette Selection */}
                    <div className="flex gap-3 mb-6 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 w-fit">
                        {COLORS.slice(1).map((colClass, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentColor(idx + 1)}
                                className={`w-10 h-10 rounded-full cursor-pointer transition-all border-2 
                  ${colClass} 
                  ${currentColor === idx + 1 ? 'border-blue-500 scale-110 shadow-md ring-2 ring-blue-200' : 'border-gray-200 hover:scale-105'}`}
                            />
                        ))}
                        <button
                            onClick={() => setCurrentColor(0)}
                            className={`w-10 h-10 rounded-full cursor-pointer transition-all border-2 bg-white flex items-center justify-center text-xs font-bold text-gray-400
                 ${currentColor === 0 ? 'border-red-500 scale-110 shadow-md' : 'border-gray-200 hover:scale-105'}`}
                        >X</button>
                    </div>

                    {/* Canvas */}
                    <div
                        className="grid grid-cols-8 gap-0 border-8 border-amber-900 bg-amber-50 mx-auto shadow-2xl bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
                        style={{ width: 'fit-content' }}
                    >
                        {grid.map((cellVal, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleCellClick(idx)}
                                className={`w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-amber-900/30 cursor-crosshair transition-colors duration-150
                  ${COLORS[cellVal]}
                `}
                            />
                        ))}
                    </div>

                    {/* Feedback & Actions */}
                    <div className="mt-8 flex flex-col items-center w-full max-w-sm text-center">
                        {showSimpan ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl w-full flex flex-col items-center animate-fade-in shadow-sm">
                                <CheckCircle2 size={32} className="text-green-600 mb-2" />
                                <h4 className="font-bold">Karya Disimpan!</h4>
                                {isSymmetric ? (
                                    <p className="text-xs mt-1">Luar biasa! Motif kamu sangat simetris secara vertikal. Sifat simetri ini penting pada seni batik konvensional.</p>
                                ) : (
                                    <p className="text-xs mt-1">Karya yang artistik! Walau tidak simetris (asimetris), coretanmu memiliki karakter bebas ala motif kontemporer.</p>
                                )}
                            </div>
                        ) : (
                            <div className="w-full flex justify-center">
                                <button
                                    disabled={isEmpty}
                                    onClick={simpanKarya}
                                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm w-full"
                                >
                                    <Download size={18} /> Simpan Pola & Cek Simetri
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
