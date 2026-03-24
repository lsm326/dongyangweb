import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export default function App() {
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
        <div className="text-xl font-bold tracking-widest">東洋旅館</div>
        <div className="text-sm tracking-widest uppercase font-sans">Est. 1938</div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/seed/vintage-hanok/1920/1080?blur=2" 
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
            시간이 머무는 곳
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
            동양여관 <span className="text-4xl md:text-6xl font-light">1938</span>
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
              1938년,<br />모던보이와 신여성들이<br />거닐던 그 시절의 낭만
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed text-[#2c241b]/80 mb-6 font-sans font-light">
              동양여관 1938은 일제강점기 말기, 문화와 예술이 꽃피우던 경성의 낭만을 현대적으로 재해석한 부티크 스테이입니다. 
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed text-[#2c241b]/80 font-sans font-light">
              오래된 목조 건물의 삐걱거리는 마루, 은은하게 퍼지는 향나무 냄새, 그리고 따뜻한 조명 아래서 바쁜 현대 사회에서 벗어나 온전한 쉼을 경험해보세요.
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
              <span className="text-center text-sm tracking-widest font-bold text-[#8b5a2b]">REST<br/>&<br/>PEACE</span>
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
            <h2 className="text-3xl font-bold tracking-widest mb-4">공간 안내</h2>
            <p className="font-sans font-light text-[#f5f2ed]/70">과거와 현재가 교차하는 특별한 공간들</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "객실", desc: "고즈넉한 쉼을 위한 아늑한 잠자리", seed: "vintage-bed" },
              { title: "다실", desc: "정성껏 우려낸 차 한 잔의 여유", seed: "tea-ceremony" },
              { title: "정원", desc: "계절의 변화를 담은 작은 뜰", seed: "zen-garden" }
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

      {/* Contact / Footer */}
      <footer className="py-24 px-6 border-t border-[#2c241b]/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8">동양여관 1938</h2>
            <p className="font-sans font-light text-[#2c241b]/70 mb-8 max-w-sm leading-relaxed">
              예약 없이 발길 닿는 대로 들러 차 한 잔의 여유와 공간의 정취를 느끼실 수 있습니다.
            </p>
            <div className="space-y-4 font-sans font-light">
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-[#8b5a2b]" />
                <span>서울특별시 종로구 계동길 19-38</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={18} className="text-[#8b5a2b]" />
                <span>매일 11:00 - 20:00 (화요일 휴무)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-[#8b5a2b]" />
                <span>02-1938-1938</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between md:items-end">
            <div className="flex gap-6 mb-12 md:mb-0">
              <a href="#" className="w-12 h-12 rounded-full border border-[#2c241b] flex items-center justify-center hover:bg-[#2c241b] hover:text-[#f5f2ed] transition-colors">
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
