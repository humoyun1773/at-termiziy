import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, TELEGRAM_URL } from '../../data/siteConfig';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Car, 
  Bus, 
  ExternalLink, 
  Send, 
  Search, 
  Crosshair, 
  RotateCcw, 
  Copy, 
  Check, 
  Compass,
  X
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

// Haversine formula to compute distance in km
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

interface Props {
  className?: string;
}

export const LocationSection: React.FC<Props> = ({ className = '' }) => {
  const defaultQuery = "Al-Hakim At-Termiziy, Mustaqillik shoh ko'chasi, Qarshi, Uzbekistan";
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLocationQuery, setActiveLocationQuery] = useState(defaultQuery);
  const [locationTitle, setLocationTitle] = useState("Al-Hakim At-Termiziy (Bosh Bino)");
  const [locationDesc, setLocationDesc] = useState("Qarshi shahar, Mustaqillik shoh ko'chasi, Mustaqillik maydoni yaqinida");
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Search handler: user can search ANY place
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim();
    setActiveLocationQuery(query + ', Qarshi, Uzbekistan');
    setLocationTitle(query);
    setLocationDesc('Qidiruv natijasi: ' + query);
    setDistanceKm(null);
  };

  // Reset back to main academy
  const handleResetToAcademy = () => {
    setSearchQuery('');
    setActiveLocationQuery(defaultQuery);
    setLocationTitle("Al-Hakim At-Termiziy (Bosh Bino)");
    setLocationDesc("Qarshi shahar, Mustaqillik shoh ko'chasi, Mustaqillik maydoni yaqinida");
    setDistanceKm(null);
  };

  // Detect user geolocation
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Brauzeringiz GPS aniqlashni qo'llab-quvvatlamaydi.");
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const uLat = position.coords.latitude;
        const uLng = position.coords.longitude;
        const dist = calculateDistance(uLat, uLng, siteConfig.coordinates.lat, siteConfig.coordinates.lng);
        setDistanceKm(dist);
        setIsLocating(false);
        setActiveLocationQuery(uLat + ',' + uLng);
        setLocationTitle("Sizning Hozirgi Joylashuvingiz");
        setLocationDesc("GPS orqali aniqlangan koordinata: " + uLat.toFixed(5) + ", " + uLng.toFixed(5));
      },
      (error) => {
        setIsLocating(false);
        setLocationError("Joylashuvingizni aniqlashga ruxsat berilmadi yoki xatolik yuz berdi.");
        console.error(error);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Copy coordinates
  const handleCopyCoords = () => {
    navigator.clipboard.writeText(siteConfig.coordinates.lat + ', ' + siteConfig.coordinates.lng);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamic Google Maps embed without hardcoded OSM green pin
  const mapIframeSrc = 'https://maps.google.com/maps?q=' + encodeURIComponent(activeLocationQuery) + '&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const currentYandexUrl = 'https://yandex.uz/maps/?text=' + encodeURIComponent(activeLocationQuery);
  const currentGoogleUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(activeLocationQuery);
  const current2GisUrl = 'https://2gis.uz/karshi/search/' + encodeURIComponent(activeLocationQuery);

  return (
    <div className={'space-y-8 ' + className}>
      
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <Badge variant="secondary" className="px-3.5 py-1 gap-1.5 mb-1 font-bold text-sky-700 dark:text-sky-400">
          <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Interaktiv Xarita & Manzil Qidiruvi</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Qarshi Shahridagi Markazimizni Qidiring va Toping
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Istalgan joy, bekat yoki ko'chani qidiring — xarita siz qidirgan manzilga darhol moslashadi.
        </p>
      </div>

      {/* 🔍 Search Input Bar & GPS Button */}
      <div className="max-w-3xl mx-auto">
        <Card className="p-3 sm:p-4 rounded-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Istalgan manzil, ko'cha yoki mo'ljalni qidiring..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button 
                type="submit" 
                size="sm"
                className="flex-1 sm:flex-none py-2.5 px-5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                <span>Qidirish</span>
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDetectLocation}
                disabled={isLocating}
                title="Mening joylashuvimni aniqlash"
                className="py-2.5 px-3.5 rounded-2xl border-slate-200 dark:border-slate-700 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Crosshair className={'w-4 h-4 ' + (isLocating ? 'animate-spin text-sky-600' : '')} />
                <span className="hidden sm:inline">GPS Joylashuvim</span>
              </Button>
            </div>
          </form>

          {locationError && (
            <div className="mt-2 text-xs text-rose-500 font-medium bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900">
              {locationError}
            </div>
          )}
        </Card>
      </div>

      {/* Distance feedback badge if GPS was clicked */}
      <AnimatePresence>
        {distanceKm !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                📍
              </div>
              <div className="text-xs sm:text-sm">
                <strong className="block font-extrabold text-sm sm:text-base">
                  Sizdan Markazgacha Masofa: {distanceKm} km
                </strong>
                <span className="text-emerald-100 text-xs">
                  Avtomobilda taxminan {Math.round(distanceKm * 2.2 + 3)} daqiqa yo'l. Marshrut xaritada aks ettirildi.
                </span>
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleResetToAcademy}
              className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs rounded-xl shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>Bosh binoga qaytish</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Grid: Info Cards + Map Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Col (5 cols): Address & Navigator Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-4"
        >
          <Card className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md space-y-6 h-full flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Current Active Location Details Box */}
              <div className="p-4 rounded-2xl bg-sky-50/80 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/30 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 uppercase font-extrabold tracking-wider block">
                      Manzil
                    </span>
                    {activeLocationQuery !== defaultQuery && (
                      <button 
                        onClick={handleResetToAcademy} 
                        className="text-[10px] text-sky-600 dark:text-sky-400 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Bosh binoga qaytish
                      </button>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                    {locationTitle}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {locationDesc}
                  </p>
                </div>
              </div>

              {/* Working Hours & Reception */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1 text-xs">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">
                    O'quv Markazi Ish Tartibi
                  </span>
                  <p className="font-bold text-slate-800 dark:text-slate-200">
                    {siteConfig.workingHours}
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    {siteConfig.sundayHours}
                  </p>
                </div>
              </div>

              {/* Transit & Amenities */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 mb-1">
                    <Bus className="w-4 h-4" />
                    <span className="text-xs font-bold">Jamoat Transporti</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    Shahar avtobuslari bekatiga yaqin
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                    <Car className="w-4 h-4" />
                    <span className="text-xs font-bold">Bepul Parkovka</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    Bino oldida qulay avtoturargoh
                  </p>
                </div>
              </div>

              {/* Coordinates Bar with Copy Action */}
              <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 truncate">
                    GPS: {siteConfig.coordinates.lat.toFixed(5)}, {siteConfig.coordinates.lng.toFixed(5)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[10px] hover:bg-sky-50 dark:hover:bg-slate-600 transition-colors shadow-2xs cursor-pointer flex items-center gap-1 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Nusxalash</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Direct Navigator Links */}
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Navigator orqali marshrut chizish:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300 cursor-pointer"
                >
                  <a href={currentYandexUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Yandex</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300 cursor-pointer"
                >
                  <a href={currentGoogleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300 cursor-pointer"
                >
                  <a href={current2GisUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>2GIS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>

              {/* Direct Call & Telegram Actions */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                >
                  <a href="tel:+998919517335" className="flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Qo'ng'iroq qilish</span>
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                >
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Lokatsiya</span>
                  </a>
                </Button>
              </div>
            </div>

          </Card>
        </motion.div>

        {/* Right Col (7 cols): Interactive Dynamic Map Iframe */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <Card className="rounded-3xl overflow-hidden border-slate-200 dark:border-slate-800 shadow-md h-full min-h-[440px] sm:min-h-[500px] relative group">
            
            <iframe
              key={mapIframeSrc}
              title={locationTitle + ' Joylashuvi'}
              src={mapIframeSrc}
              className="w-full h-full min-h-[440px] sm:min-h-[500px] border-0"
              loading="lazy"
            />

            {/* Fullscreen Map Link Action */}
            <div className="absolute bottom-4 right-4">
              <Button
                asChild
                size="sm"
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md hover:bg-sky-50 dark:hover:bg-slate-800 text-xs font-bold rounded-xl gap-1.5 cursor-pointer"
              >
                <a 
                  href={currentGoogleUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kattalashtirib ochish</span>
                </a>
              </Button>
            </div>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};
