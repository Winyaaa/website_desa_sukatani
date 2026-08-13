import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import Holidays from 'date-holidays';
import { agendaIsi } from './agendaIsi';

export default function AgendaTampilan() {
  const { judul, daftar } = agendaIsi;
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const blanks = Array.from({ length: startDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const monthName = currentDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' });

  const activeMonthStr = currentDate.toLocaleString('id-ID', { month: 'long' });
  const activeYearStr = currentDate.getFullYear().toString();

  const generatedHolidays = useMemo(() => {
    const hd = new Holidays('ID');
    const hols = hd.getHolidays(currentDate.getFullYear());

    // Format holiday dates to match the structure of `agendaIsi.js` lists
    return hols.map(hol => {
      const hdDate = new Date(hol.date);
      const dd = String(hdDate.getDate()).padStart(2, '0');
      const mm = hdDate.toLocaleString('id-ID', { month: 'long' });
      const yyyy = hdDate.getFullYear();

      return {
        title: hol.name,
        date: `${dd} ${mm} ${yyyy}`,
        time: 'Sepanjang Hari',
        loc: 'Nasional',
        type: 'Libur Nasional',
        color: '#ef4444'
      };
    });
  }, [currentDate.getFullYear()]);

  const allEvents = useMemo(() => {
    return [...daftar, ...generatedHolidays];
  }, [daftar, generatedHolidays]);

  const getEventsForDay = (day) => {
    return allEvents.filter(agenda => {
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      return (
        agenda.date.startsWith(dayStr) &&
        agenda.date.includes(activeMonthStr) &&
        agenda.date.includes(activeYearStr)
      );
    });
  };

  // Fungsi untuk mendownload file kalender (.ics) agar otomatis masuk ke Google Calendar / Kalender HP
  const handleAddToCalendar = (evt) => {
    // Mapping nama bulan Indonesia ke angka
    const months = {
      'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04',
      'Mei': '05', 'Juni': '06', 'Juli': '07', 'Agustus': '08',
      'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
    };

    // Parsing tanggal dari format string agenda (contoh: "05 Agustus 2026")
    const parts = evt.date.split(' ');
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]] || '01';
    const year = parts[2] || '2026';

    const dateStr = `${year}${month}${day}`;

    // Parsing waktu (contoh: "08:00 - 11:00 WIB")
    const times = evt.time.split(' - ');
    const startTime = times[0] ? times[0].replace(':', '') + '00' : '080000';
    const endTime = times[1] ? times[1].replace(/[^0-9]/g, '').slice(0, 4) + '00' : '110000';

    const startDateTime = `${dateStr}T${startTime}`;
    const endDateTime = `${dateStr}T${endTime}`;

    // Format file iCalendar (.ics)
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${evt.title}`,
      `DESCRIPTION:Agenda Desa Sukatani - Jenis: ${evt.type}`,
      `LOCATION:${evt.loc}`,
      `DTSTART:${startDateTime}`,
      `DTEND:${endDateTime}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    // Memicu download file .ics secara otomatis di browser/perangkat
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${evt.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 animate-fade-in pt-32 pb-12 min-h-screen">

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4 md:gap-6">
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
            {judul}
          </h1>
          <p className="text-[11px] md:text-lg text-muted-foreground mx-auto md:mx-0 max-w-xl">
            Jadwal kegiatan pelayanan dan acara resmi di Desa Sukatani.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-card px-4 py-2 rounded-2xl shadow-sm border border-border">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-secondary rounded-xl text-muted-foreground transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex items-center gap-2 cursor-pointer group px-2 py-1">
            <span className="font-bold text-foreground text-lg group-hover:text-blue-600 transition-colors">
              {monthName}
            </span>
            <CalendarIcon size={18} className="text-muted-foreground group-hover:text-blue-600 transition-colors" />

            <input
              type="date"
              value={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-01`}
              onChange={(e) => {
                if (e.target.value) {
                  const [year, month, day] = e.target.value.split('-');
                  setCurrentDate(new Date(year, month - 1, 1));
                }
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              title="Pilih Bulan/Tanggal"
            />
          </div>

          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-secondary rounded-xl text-muted-foreground transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden">
        <div className="grid grid-cols-7 bg-secondary border-b border-border">
          {['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((day, i) => (
            <div key={day} className={`py-3 md:py-4 text-center font-bold text-[10px] md:text-sm uppercase tracking-wider ${i === 0 || i === 6 ? 'text-red-500' : 'text-muted-foreground'}`}>
              <span className="hidden md:inline">{day}</span>
              <span className="md:hidden">{day.substring(0, 3)}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 bg-border gap-px">
          {blanks.map(blank => (
            <div key={`blank-${blank}`} className="bg-secondary/30 min-h-[90px] md:min-h-[140px] p-1 md:p-3"></div>
          ))}
          {days.map(day => {
            const dayEvents = getEventsForDay(day);
            const isWeekend = (day + startDay - 1) % 7 === 0 || (day + startDay - 1) % 7 === 6;

            return (
              <div
                key={day}
                className={`bg-card min-h-[90px] md:min-h-[140px] p-1 md:p-3 transition-colors duration-300 relative group
                  ${dayEvents.length > 0 ? 'hover:bg-secondary cursor-pointer' : ''}`}
              >
                <div className={`font-bold mb-1 md:mb-2 flex justify-center md:justify-between items-center text-sm ${isWeekend ? 'text-red-500' : 'text-foreground'}`}>
                  <span>{day}</span>
                  {dayEvents.length > 1 && (
                    <span className="hidden md:flex w-5 h-5 items-center justify-center bg-secondary rounded-full text-[10px] text-foreground">
                      {dayEvents.length}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 hide-scrollbar max-h-[60px] md:max-h-[90px] overflow-y-auto">
                  {dayEvents.map((evt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedEvent(evt)}
                      className="text-[9px] md:text-xs px-1 md:px-2 py-1 md:py-1.5 rounded-sm md:rounded-md truncate text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all font-medium relative overflow-hidden leading-tight"
                      style={{ backgroundColor: evt.color || '#3b82f6' }}
                      title={evt.title}
                    >
                      <div className="relative z-10 md:hidden">{evt.time.split(' ')[0]}</div>
                      <div className="relative z-10 hidden md:block">{evt.time.split(' ')[0]} - {evt.title}</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 z-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal Event */}
      {
        selectedEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedEvent(null)}>
            <div className="bg-card rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative border border-border" onClick={e => e.stopPropagation()}>
              <div
                className="px-6 py-5 flex justify-between items-start text-white relative overflow-hidden"
                style={{ backgroundColor: selectedEvent.color || '#3b82f6' }}
              >
                <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-20"><Star size={130} /></div>
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full">{selectedEvent.type}</span>
                    <button onClick={() => setSelectedEvent(null)} className="text-white hover:bg-black/20 rounded-full p-1.5 transition-colors cursor-pointer">
                      <X size={20} />
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{selectedEvent.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:bg-secondary transition-colors">
                    <div className="bg-blue-500/10 text-blue-500 p-2.5 rounded-xl">
                      <CalendarIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tanggal Kegiatan</p>
                      <p className="font-bold text-foreground text-base">{selectedEvent.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:bg-secondary transition-colors">
                    <div className="bg-green-500/10 text-green-500 p-2.5 rounded-xl">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Waktu</p>
                      <p className="font-bold text-foreground text-base">{selectedEvent.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border hover:bg-secondary transition-colors">
                    <div className="bg-orange-500/10 text-orange-500 p-2.5 rounded-xl">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lokasi</p>
                      <p className="font-bold text-foreground text-base">{selectedEvent.loc}</p>
                    </div>
                  </div>
                </div>

                {/* Tombol Simpan ke Perangkat yang terhubung ke Kalender */}
                <button
                  onClick={() => handleAddToCalendar(selectedEvent)}
                  className="w-full mt-6 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer relative overflow-hidden group"
                  style={{ backgroundColor: selectedEvent.color || '#3b82f6' }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 text-sm">Simpan ke Perangkat</span>
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}