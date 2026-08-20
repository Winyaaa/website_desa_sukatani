import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { kontakIsi } from './kontakIsi';

const iconComponents = { MapPin, Phone, Mail, Clock };
const sosialIcons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export default function KontakTampilan() {
  const [data, setData] = useState(kontakIsi);
  useEffect(() => {
    const fetchData = () => {
      const stored = localStorage.getItem('cms_kontak');
      if(stored) setData(JSON.parse(stored));
    };
    fetchData();
    window.addEventListener('storage', fetchData);
    return () => window.removeEventListener('storage', fetchData);
  }, []);

  const { judul, informasi, mediaSosial, peta } = data;

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12">

      {/* BAGIAN JUDUL */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          {judul}
        </h1>
        <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Kolom Kiri: Informasi Kontak & Sosial Media */}
        <div className="flex flex-col gap-6">
          <div className="card p-4 md:p-6 border border-border rounded-lg shadow-sm bg-card">
            <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6">{informasi.judul}</h2>
            {informasi.daftar.map((item, i) => {
              const Icon = iconComponents[item.icon];
              return (
                <div
                  key={i}
                  className={`flex items-start gap-3 md:gap-4 ${i < informasi.daftar.length - 1 ? 'mb-4 md:mb-6' : ''}`}
                >
                  <div className={`icon-badge p-2.5 md:p-3 rounded-full bg-blue-500/10 text-blue-500 ${item.badge}`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm md:text-lg mb-0.5 md:mb-1">{item.judul}</h4>
                    <p className="text-[11px] md:text-base text-muted-foreground leading-relaxed">
                      {item.teks.split('\n').map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < item.teks.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card p-4 md:p-6 border border-border rounded-lg shadow-sm bg-card">
            <h2 className="text-sm md:text-xl font-bold text-foreground mb-3 md:mb-4">{mediaSosial.judul}</h2>
            <div className="flex gap-3 md:gap-4">
              {mediaSosial.daftar.map((item, idx) => {
                const Icon = sosialIcons[item.platform] || FaFacebook;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 md:p-3 bg-secondary rounded-full transition-colors flex items-center justify-center shrink-0 ${item.badge}`}
                    title={item.platform}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Peta Google */}
        <div className="card p-4 md:p-6 border border-border rounded-lg shadow-sm bg-card flex flex-col min-h-[300px] md:min-h-full">
          <h2 className="text-sm md:text-2xl font-bold text-foreground mb-3 md:mb-4">{peta.judul}</h2>
          <div className="map-container flex-grow w-full rounded-lg overflow-hidden relative min-h-[250px] md:min-h-[400px]">
            <iframe
              src={peta.embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}