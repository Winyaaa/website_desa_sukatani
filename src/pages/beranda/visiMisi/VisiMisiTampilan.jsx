import { Target, Zap, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { visiMisiIsi } from './visiMisiIsi';

export default function VisiMisiTampilan() {
  const { judul, visi, misi, programKerja } = visiMisiIsi;

  return (
    <section className="section bg-secondary/30 border-y border-border">
      <div className="container animate-fade-in">
        <h1 className="section-title text-center mb-12">{judul}</h1>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto">

          {/* Kotak Visi */}
          <div className="premium-card p-5 md:p-12 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 shadow-sm">
            <Target className="text-green-600 mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{visi.judul}</h2>
            <p className="text-xs md:text-xl italic text-muted max-w-3xl mx-auto leading-relaxed">{visi.teks}</p>
          </div>

          {/* Kotak Misi */}
          <div className="premium-card p-5 md:p-12 bg-card shadow-sm border border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 justify-center md:justify-start">
              <Zap className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-xl md:text-3xl font-bold text-foreground">{misi.judul}</h2>
            </div>
            <p className="text-xs md:text-lg text-muted/90 mb-4 md:mb-6 leading-relaxed text-center md:text-left">
              {misi.pendahuluan}
            </p>
            <div className="flex flex-col gap-4 md:gap-6 text-[11px] md:text-lg">
              {misi.daftar.map((item, i) => (
                <div key={i} className="flex flex-col gap-2 md:gap-3">
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="font-bold text-blue-600 text-sm md:text-xl shrink-0 md:mt-0.5 w-4 md:w-6">{i + 1}.</span>
                    <p className="text-foreground/90 leading-relaxed text-justify md:text-left">{item.teks}</p>
                  </div>
                  {item.subDaftar && item.subDaftar.length > 0 && (
                    <ul className="pl-7 md:pl-14 flex flex-col gap-1.5 md:gap-2 mt-1">
                      {item.subDaftar.map((subItem, j) => (
                        <li key={j} className="flex items-start gap-2 md:gap-3">
                          <ChevronRight className="text-primary mt-0.5 md:mt-1 shrink-0 w-3 h-3 md:w-5 md:h-5" />
                          <span className="text-muted/90 text-[10px] md:text-base leading-relaxed text-justify md:text-left">{subItem.substring(3)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kotak Program Kerja */}
          <div className="premium-card p-5 md:p-12 bg-card shadow-sm border border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 justify-center md:justify-start">
              <Briefcase className="text-yellow-600 w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <h2 className="text-xl md:text-3xl font-bold text-foreground">{programKerja.judul}</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12">

              {/* Bagian A */}
              <div>
                <h3 className="text-xs md:text-xl text-center md:text-left font-bold text-foreground mb-4 md:mb-6 bg-secondary p-3 md:p-4 rounded-lg shadow-sm border border-border">
                  {programKerja.bagianA.judul}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4 pl-2 md:pl-8 text-[11px] md:text-base">
                  {programKerja.bagianA.daftar.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="text-green-500 md:mt-1 shrink-0 w-3 h-3 md:w-5 md:h-5 mt-0.5" />
                      <span className="text-muted/90 leading-relaxed text-justify md:text-left"><span className="font-semibold text-muted-foreground mr-1">{i + 1}.</span> {item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-0 md:my-2"></div>

              {/* Bagian B */}
              <div>
                <h3 className="text-xs md:text-xl text-center md:text-left font-bold text-foreground mb-4 md:mb-6 bg-secondary p-3 md:p-4 rounded-lg shadow-sm border border-border">
                  {programKerja.bagianB.judul}
                </h3>
                <div className="flex flex-col gap-6 md:gap-8 pl-2 md:pl-8">
                  {programKerja.bagianB.daftar.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 md:gap-3">
                      <div className="flex items-start gap-2 md:gap-3">
                        <span className="font-bold text-blue-600 text-sm md:text-xl shrink-0 md:mt-0.5 w-4 md:w-6">{i + 1}.</span>
                        <p className="font-semibold text-foreground text-xs md:text-lg leading-relaxed text-justify md:text-left">{item.teks}</p>
                      </div>
                      {item.subDaftar && item.subDaftar.length > 0 && (
                        <ul className="pl-6 md:pl-10 flex flex-col gap-2 md:gap-3 mt-0.5 md:mt-1">
                          {item.subDaftar.map((subItem, j) => (
                            <li key={j} className="flex items-start gap-2 md:gap-3 text-[10px] md:text-base">
                              <span className="font-medium text-muted-foreground mt-0 md:mt-0.5 shrink-0">{subItem.substring(0, 2)}</span>
                              <span className="text-muted/90 leading-relaxed text-justify md:text-left">{subItem.substring(3)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}