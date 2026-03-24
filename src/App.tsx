import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, Globe, ChevronRight } from 'lucide-react';

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
    langName: "한국어"
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
    langName: "English"
  },
  ja: {
    navTitle: "東洋旅館",
    est: "Est. 1938",
    heroSub: "時が止まる場所",
    heroTitle: "東洋旅館",
    heroYear: "1938",
    storyTitle: "1938年、済州ムグンソン路地に咲いた時の香り",
    storyText1: "東洋旅館1938は、済州の古い情緒が残るムグンソン路地に位置する歴史ある空間です。1938年の建築様式を保存し、済州の石と木が調和した独特の美学を披露します。",
    storyText2: "潮風が留まる中庭、歳月の跡が刻まれた木造の天井の下で、済州の真の平穏に出会ってください。",
    restAndPeace: "休息\n&\n平穏",
    spacesTitle: "空間案内",
    spacesSub: "過去と現在が交差する特別な空間",
    roomTitle: "客室",
    roomDesc: "完全な休息のための心地よい一人部屋",
    commonTitle: "共用空間",
    commonDesc: "好みを共有する温かいリビングルーム",
    infoTitle: "周辺情報",
    infoDesc: "ムグンソン路地の隠れた物語",
    footerDesc: "夜の喧騒よりも、静かな温もりが似合う場所。\n一人旅のための空間。",
    address: "済州特別自治道 済州市 ムグンソン7ギル 16-8",
    checkInOut: "チェックイン 15:00 / チェックアウト 11:00",
    locationTitle: "アクセス",
    mapDesc: "済州旧市街の情緒が生きているムグンソン路地の奥に位置しています。",
    langName: "日本語"
  },
  "zh-CN": {
    navTitle: "东洋旅馆",
    est: "Est. 1938",
    heroSub: "时光停留的地方",
    heroTitle: "东洋旅馆",
    heroYear: "1938",
    storyTitle: "1938年，绽放在济州无根城小巷的时光香气",
    storyText1: "东洋旅馆1938位于保留着济州古老风情的无根城小巷，是一个充满历史感的空间。它完整保留了1938年的建筑风格，展现了济州石头与木材和谐交融的独特美学。",
    storyText2: "在海风停留的小院里，在刻满岁月痕迹的木制天花板下，遇见济州真正的平静。",
    restAndPeace: "休息\n&\n平静",
    spacesTitle: "空间导览",
    spacesSub: "过去与现在交汇的特别空间",
    roomTitle: "客房",
    roomDesc: "为全然休息而设的温馨单人间",
    commonTitle: "公共空间",
    commonDesc: "分享品味的温暖客厅",
    infoTitle: "周边信息",
    infoDesc: "无根城小巷的隐藏故事",
    footerDesc: "比起夜晚的喧嚣，这里更适合安静的温存。\n专为单人旅行者打造的空间。",
    address: "济州特别自治道济州市无根城7路16-8",
    checkInOut: "入住 15:00 / 退房 11:00",
    locationTitle: "交通指南",
    mapDesc: "位于济州旧城区风情依旧的无根城小巷深处。",
    langName: "简体中文"
  },
  "zh-TW": {
    navTitle: "東洋旅館",
    est: "Est. 1938",
    heroSub: "時光停留的地方",
    heroTitle: "東洋旅館",
    heroYear: "1938",
    storyTitle: "1938年，綻放在濟州無根城小巷的時光香氣",
    storyText1: "東洋旅館1938位於保留著濟州古老風情的無根城小巷，是一個充滿歷史感的空間。它完整保留了1938年的建築風格，展現了濟州石頭與木材和諧交融的獨特美學。",
    storyText2: "在海風停留的小院裡，在刻滿歲月痕跡的木製天花板下，遇見濟州真正的平靜。",
    restAndPeace: "休息\n&\n平靜",
    spacesTitle: "空間導覽",
    spacesSub: "過去與現在交匯的特別空間",
    roomTitle: "客房",
    roomDesc: "為全然休息而設的溫馨單人間",
    commonTitle: "公共空間",
    commonDesc: "分享品味的溫暖客廳",
    infoTitle: "周邊信息",
    infoDesc: "無根城小巷的隱藏故事",
    footerDesc: "比起夜晚的喧囂，這裡更適合安靜的溫存。\n專為單人旅行者打造的空間。",
    address: "濟州特別自治道濟州市無根城7路16-8",
    checkInOut: "入住 15:00 / 退房 11:00",
    locationTitle: "交通指南",
    mapDesc: "位於濟州舊城區風情依舊的無根城小巷深處。",
    langName: "繁體中文"
  }
};

type LangType = keyof typeof translations;

export default function App() {
  const [lang, setLang] = useState<LangType>('ko');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations[lang];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as LangType;
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      const browserFullLang = navigator.language;
      
      if (browserFullLang === 'zh-TW' || browserFullLang === 'zh-HK') {
        setLang('zh-TW');
      } else if (browserLang === 'zh') {
        setLang('zh-CN');
      } else if (browserLang === 'ja') {
        setLang('ja');
      } else if (browserLang === 'en') {
        setLang('en');
      } else {
        setLang('ko');
      }
    }
  }, []);

  const changeLang = (newLang: LangType) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    setIsLangMenuOpen(false);
  };

  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const storyImageY = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f2ed] text-[#2c241b] font-serif selection:bg-[#8b5a2b] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-[#f5f2ed]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-[0.2em]"
        >
          {t.navTitle}
        </motion.div>
        <div className="flex items-center gap-8">
          <a 
            href="https://www.instagram.com/dongyang_inn_1938/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] uppercase font-sans flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <Instagram size={12} />
            Instagram
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-[10px] tracking-[0.3em] uppercase font-sans flex items-center gap-2 hover:opacity-50 transition-opacity"
            >
              <Globe size={12} />
              {t.langName}
            </button>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 bg-[#1a1a1a] border border-white/10 p-4 min-w-[120px] space-y-3 shadow-2xl"
                >
                  {(Object.keys(translations) as LangType[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => changeLang(l)}
                      className={`block w-full text-left text-[10px] tracking-[0.2em] uppercase font-sans transition-colors ${lang === l ? 'text-[#8b5a2b]' : 'text-white/60 hover:text-white'}`}
                    >
                      {translations[l].langName}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="text-[10px] tracking-[0.3em] uppercase font-sans opacity-50 hidden md:block">{t.est}</div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroImageY }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-[#1a1a1a]/20 z-10" />
          <img 
            src="https://picsum.photos/seed/jeju-inn-exterior/1920/1080" 
            alt="동양여관 전경" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center text-[#f5f2ed] px-4"
        >
          <p className="text-xs md:text-sm tracking-[0.5em] mb-8 font-light uppercase">
            {t.heroSub}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 flex flex-col md:flex-row items-center justify-center gap-4">
            <span>{t.heroTitle}</span>
            <span className="text-3xl md:text-6xl font-thin italic opacity-60">{t.heroYear}</span>
          </h1>
          <div className="w-px h-32 bg-[#f5f2ed]/30 mx-auto mt-12" />
        </motion.div>
      </section>

      {/* Story Section with Overlapping Images */}
      <section className="py-32 md:py-48 px-8 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-[1.1] tracking-tight">
                {t.storyTitle.split(',').map((line, i) => (
                  <span key={i} className="block">{line}{i === 0 && ','}</span>
                ))}
              </h2>
              <div className="space-y-8 text-[#2c241b]/70 font-sans font-light text-lg leading-relaxed max-w-md">
                <p>{t.storyText1}</p>
                <p>{t.storyText2}</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative h-[600px] md:h-[800px]">
            {/* Background Image (Double/Overlapping effect) */}
            <motion.div 
              style={{ y: storyImageY }}
              className="absolute top-0 right-0 w-4/5 h-4/5 z-0 grayscale opacity-20"
            >
              <img 
                src="https://picsum.photos/seed/vintage-wood-texture/800/1000" 
                alt="Detail" 
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Foreground Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-4/5 h-4/5 z-10 shadow-2xl overflow-hidden rounded-sm"
            >
              <img 
                src="https://picsum.photos/seed/jeju-traditional-room/800/1066" 
                alt="여관 내부" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/30 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <span className="text-white text-xs tracking-[0.4em] font-bold uppercase whitespace-pre-line leading-loose">
                  {t.restAndPeace}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spaces - Minimalist Grid */}
      <section className="py-32 bg-[#2c241b] text-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.spacesTitle}</h2>
              <p className="font-sans font-light text-[#f5f2ed]/50 text-lg">{t.spacesSub}</p>
            </div>
            <div className="h-px flex-grow bg-[#f5f2ed]/10 mx-12 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { title: t.roomTitle, desc: t.roomDesc, seed: "minimal-bedroom-warm" },
              { title: t.commonTitle, desc: t.commonDesc, seed: "modern-vintage-living" },
              { title: t.infoTitle, desc: t.infoDesc, seed: "jeju-stone-wall" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden bg-[#2c241b] p-12 flex flex-col justify-end"
              >
                <img 
                  src={`https://picsum.photos/seed/${item.seed}/800/1000`} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-4">
                    {item.title}
                    <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="font-sans font-light text-sm text-[#f5f2ed]/60 tracking-wide">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location - Immersive Map */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">{t.locationTitle}</h2>
            <p className="font-sans font-light text-[#2c241b]/60 text-lg leading-relaxed mb-12">{t.mapDesc}</p>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b5a2b] mb-4 font-bold">Address</p>
                <p className="text-xl font-medium">{t.address}</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b5a2b] mb-4 font-bold">Inquiries</p>
                <p className="text-xl font-medium">0507-1365-1760</p>
              </div>
            </div>
          </motion.div>

          <div className="relative aspect-square rounded-full overflow-hidden border border-[#2c241b]/5 shadow-inner group">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&q=제주특별자치도+제주시+무근성7길+16-8`}
              allowFullScreen
              title="Google Map"
              className="grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110"
            ></iframe>
            {!process.env.GOOGLE_MAPS_API_KEY && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#f5f2ed]/80 backdrop-blur-sm">
                <div className="text-center p-8">
                  <MapPin className="mx-auto mb-6 text-[#8b5a2b]" size={40} />
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=제주특별자치도+제주시+무근성7길+16-8`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8b5a2b] border-b border-[#8b5a2b]/30 pb-1 hover:border-[#8b5a2b] transition-all"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated & Quiet */}
      <footer className="py-32 px-8 bg-[#f5f2ed] border-t border-[#2c241b]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
            <div className="max-w-md">
              <h2 className="text-5xl font-black tracking-tighter mb-12">{t.heroTitle} <span className="font-thin italic">{t.heroYear}</span></h2>
              <p className="font-sans font-light text-[#2c241b]/50 text-xl leading-relaxed italic">
                "{t.footerDesc.split('\n')[0]}"
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 font-sans text-sm tracking-wide">
              <div className="space-y-6">
                <p className="font-bold uppercase tracking-widest text-[10px] text-[#8b5a2b]">Contact</p>
                <div className="space-y-2 opacity-60">
                  <p>{t.address}</p>
                  <p>0507-1365-1760</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="font-bold uppercase tracking-widest text-[10px] text-[#8b5a2b]">Social</p>
                <a 
                  href="https://www.instagram.com/dongyang_inn_1938/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block opacity-60 hover:opacity-100 transition-opacity"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#2c241b]/5 text-[10px] uppercase tracking-[0.3em] opacity-30 font-sans">
            <p>&copy; 2026 Dongyang Inn 1938.</p>
            <p>Designed for Tranquility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
