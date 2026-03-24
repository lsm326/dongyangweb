import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, Globe, X } from 'lucide-react';

const translations = {
  ko: {
    navTitle: "東洋旅館",
    est: "Est. 1938",
    heroSub: "시간이 머무는 곳",
    heroTitle: "동양여관",
    heroYear: "1938",
    storyTitle: "1938년, 제주 무근성 골목에 피어난 시간의 향기",
    storyText1: "동양여관 1938은 제주의 옛 정취가 남아있는 무근성 골목에 위치한 유서 깊은 공간입니다. 1938년의 건축 양식을 보존하며 제주의 돌과 나무가 어우러진 독특한 미학을 선보입니다.",
    storyText2: "바다 내음 섞인 바람이 머무는 마당, 세월의 흔적이 묻어나는 목조 천장 아래서 제주의 진정한 평온함을 마주해보세요.",
    restAndPeace: "쉼\n&\n평온",
    spacesTitle: "공간 안내",
    spacesSub: "과거와 현재가 교차하는 특별한 공간들",
    roomTitle: "객실",
    roomDesc: "온전한 쉼을 위한 아늑한 1인실",
    commonTitle: "공용공간",
    commonDesc: "취향을 공유하는 따뜻한 거실",
    infoTitle: "주변정보",
    infoDesc: "무근성 골목의 숨은 이야기들",
    footerDesc: "밤의 소란보다, 조용한 온기가 더 어울리는 곳.\n1인 여행자를 위한 공간.",
    address: "제주특별자치도 제주시 무근성7길 16-8",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    locationTitle: "오시는 길",
    mapDesc: "제주 원도심의 정취가 살아있는 무근성 골목 안쪽에 위치하고 있습니다.",
    langSwitch: "English"
  },
  en: {
    navTitle: "Dongyang Inn",
    est: "Est. 1938",
    heroSub: "Where Time Stands Still",
    heroTitle: "Dongyang Inn",
    heroYear: "1938",
    storyTitle: "1938, The Scent of Time Blooming in Jeju's Mugeunseong Alley",
    storyText1: "Dongyang Inn 1938 is a historic space located in Mugeunseong Alley, where the old atmosphere of Jeju remains. It preserves the architectural style of 1938 and showcases a unique aesthetic where Jeju's stones and wood harmonize.",
    storyText2: "Encounter the true tranquility of Jeju under the wooden ceiling stained with the traces of time, in the courtyard where the wind mixed with the scent of the sea stays.",
    restAndPeace: "REST\n&\nPEACE",
    spacesTitle: "Spaces",
    spacesSub: "Special spaces where past and present intersect",
    roomTitle: "Rooms",
    roomDesc: "Cozy single rooms for complete rest",
    commonTitle: "Common Space",
    commonDesc: "A warm living room for sharing tastes",
    infoTitle: "Neighborhood",
    infoDesc: "Hidden stories of Mugeunseong Alley",
    footerDesc: "A place where quiet warmth suits better than the noise of the night.\nA space for solo travelers.",
    address: "16-8, Mugeunseong 7-gil, Jeju-si, Jeju-do, Republic of Korea",
    checkInOut: "Check-in 15:00 / Check-out 11:00",
    locationTitle: "Location",
    mapDesc: "Located inside Mugeunseong Alley, where the atmosphere of Jeju's old downtown is alive.",
    langSwitch: "한국어"
  }
};

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'ko' | 'en';
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLang('en');
      } else {
        setLang('ko');
      }
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ko' ? 'en' : 'ko';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#2c241b] font-serif selection:bg-[#8b5a2b] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-[#f5f2ed]">
        <div className="text-xl font-bold tracking-widest">{t.navTitle}</div>
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLang}
            className="text-xs tracking-widest uppercase font-sans flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Globe size={14} />
            {t.langSwitch}
          </button>
          <div className="text-sm tracking-widest uppercase font-sans">{t.est}</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/seed/jeju-vintage-house/1920/1080?blur=1" 
          alt="동양여관 전경" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center text-[#f5f2ed] px-4"
        >
          <motion.p variants={fadeIn} className="text-sm md:text-base tracking-[0.3em] mb-6 font-light">
            {t.heroSub}
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
            {t.heroTitle} <span className="text-4xl md:text-6xl font-light">{t.heroYear}</span>
          </motion.h1>
          <motion.div variants={fadeIn} className="w-px h-24 bg-[#f5f2ed]/50 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              {t.storyTitle.split(',').map((line, i) => (
                <span key={i}>{line}{i === 0 && ','}<br /></span>
              ))}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed text-[#2c241b]/80 mb-6 font-sans font-light">
              {t.storyText1}
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed text-[#2c241b]/80 font-sans font-light">
              {t.storyText2}
            </motion.p>
          </div>
          <motion.div variants={fadeIn} className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <img 
              src="https://picsum.photos/seed/retro-tea/800/1066" 
              alt="여관 내부" 
              className="w-full h-full object-cover rounded-t-full shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#8b5a2b] rounded-full flex items-center justify-center bg-[#f5f2ed] z-10">
              <span className="text-center text-sm tracking-widest font-bold text-[#8b5a2b] whitespace-pre-line">
                {t.restAndPeace}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery / Mood */}
      <section className="py-24 bg-[#2c241b] text-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-widest mb-4">{t.spacesTitle}</h2>
            <p className="font-sans font-light text-[#f5f2ed]/70">{t.spacesSub}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.roomTitle, desc: t.roomDesc, seed: "jeju-bedroom" },
              { title: t.commonTitle, desc: t.commonDesc, seed: "vintage-living-room" },
              { title: t.infoTitle, desc: t.infoDesc, seed: "jeju-alley" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.8 } }
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-square mb-6">
                  <img 
                    src={`https://picsum.photos/seed/${item.seed}/600/600`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-sans font-light text-[#f5f2ed]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-b border-[#2c241b]/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-widest mb-4">{t.locationTitle}</h2>
          <p className="font-sans font-light text-[#2c241b]/70">{t.mapDesc}</p>
        </motion.div>

        <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-inner group">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&q=제주특별자치도+제주시+무근성7길+16-8`}
            allowFullScreen
            title="Google Map"
            className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          {/* Fallback overlay if API key is missing or for aesthetic */}
          {!process.env.GOOGLE_MAPS_API_KEY && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#2c241b]/5 backdrop-blur-[2px]">
              <div className="bg-[#f5f2ed] p-8 rounded-full border border-[#8b5a2b]/20 shadow-xl text-center">
                <MapPin className="mx-auto mb-4 text-[#8b5a2b]" size={32} />
                <p className="font-bold mb-2">{t.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=제주특별자치도+제주시+무근성7길+16-8`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-[#8b5a2b] hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8">{t.heroTitle} {t.heroYear}</h2>
            <p className="font-sans font-light text-[#2c241b]/70 mb-8 max-w-sm leading-relaxed whitespace-pre-line">
              {t.footerDesc}
            </p>
            <div className="space-y-4 font-sans font-light">
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-[#8b5a2b]" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={18} className="text-[#8b5a2b]" />
                <span>{t.checkInOut}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#8b5a2b]" />
                <span>0507-1365-1760</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between md:items-end">
            <div className="flex gap-6 mb-12 md:mb-0">
              <a 
                href="https://www.instagram.com/dongyang_inn_1938/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#2c241b] flex items-center justify-center hover:bg-[#2c241b] hover:text-[#f5f2ed] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="text-sm font-sans font-light text-[#2c241b]/50 text-left md:text-right">
              <p>&copy; 2026 Dongyang Inn 1938.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
