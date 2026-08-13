import { sejarahIsi } from './sejarahIsi';

export default function SejarahTampilan() {
  const { judul, gambar, bagian } = sejarahIsi;

  return (
    <section className="section">
      <div className="container animate-fade-in">
        <h1 className="section-title">{judul}</h1>
        <div className="premium-card p-5 md:p-12 bg-card">
          <img
            src={gambar.src}
            alt={gambar.alt}
            className="w-full h-48 md:h-[450px] object-cover rounded-xl md:rounded-2xl mb-4 md:mb-8 shadow-lg focus:outline-none"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596422846543-74c6fc0e0d11?auto=format&fit=crop&q=80&w=1200"; }}
          />
          {bagian.map((item, i) => (
            <div key={i}>
              <h2 className="text-lg md:text-3xl font-bold mb-3 md:mb-6">{item.judul}</h2>
              {item.paragraf.map((teks, j) => (
                <p
                  key={j}
                  className={`text-xs md:text-base text-muted text-justify leading-relaxed ${j < item.paragraf.length - 1
                    ? 'mb-3 md:mb-4'
                    : i === 0 && item.paragraf.length === 1
                      ? 'mb-4 md:mb-6'
                      : ''
                    }`}
                >
                  {teks}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
