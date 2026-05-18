import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Instagram, MessageCircle, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const CAROL_IMG = "https://images.unsplash.com/photo-1667400104797-132f6be037ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9uZGUlMjB3b21hbiUyMGFyY2hpdGVjdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkxMjEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PROJECT_3D_IMG = "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc5MTIxMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const INTERIOR_IMG = "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc5MTIxMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const FLOORPLAN_IMG = "https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmxvb3IlMjBwbGFuJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3OTAxNDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const PETROLEUM = "#0A202A";
const GOLD = "#D4AF37";

export default function App() {
  return (
    <main className="font-['Montserrat',sans-serif] bg-[#051015] text-white selection:bg-[#D4AF37] selection:text-[#0A202A] relative">
      <HeroSection />
      <Project3DSection />
      <InteriorDesignSection />
      <FloorPlanSection />
      <ContactSection />
    </main>
  );
}

function RevealImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ clipPath }} className="w-full h-full origin-bottom">
        <motion.div style={{ scale }} className="w-full h-full">
          <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section className="sticky top-0 h-screen w-full bg-[#0A202A] z-10 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Subtle background texture or pattern could go here */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#133A4C] to-transparent"></div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-screen p-8 md:p-16 flex flex-col justify-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-[#D4AF37] tracking-[0.05em] uppercase text-sm font-medium mb-4">
            Aluna de arquitetura
          </h2>
          <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Carol <br /> Sequalini
          </h1>
          <p className="text-gray-300 max-w-md text-lg font-light leading-relaxed">
            Oi, eu sou a Carol! Apaixonada por transformar espaços e criar projetos com muita personalidade. Vem ver um pouquinho do meu mundo! 
          </p>

          <div className="mt-12 flex items-center gap-4 text-gray-400">
            <span className="text-sm tracking-widest uppercase">Desliza pra ver tudo</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative z-10">
        <RevealImage 
          src={CAROL_IMG} 
          alt="Carol Seauqlini - Arquitetura" 
          className="w-full h-full"
        />
        {/* Decorative gold element */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-1 md:w-2 h-1/2 bg-[#D4AF37] origin-bottom"
        />
      </div>
    </section>
  );
}

function Project3DSection() {
  return (
    <section className="sticky top-0 h-screen w-full bg-[#f4f1eb] text-[#0A202A] z-20 flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <RevealImage 
          src={PROJECT_3D_IMG} 
          alt="Projeto 3D Moderno" 
          className="w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen p-8 md:p-16 flex flex-col justify-center relative">
        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-7xl mb-6">Meus Projetos 3D</h2>
          <p className="text-lg font-light leading-relaxed mb-8">
            Ver as ideias saindo do papel e ganhando forma no 3D é bom demais! Adoro criar ambientes super realistas pra gente já se imaginar morando neles.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37]"></div>
        </div>
      </div>
    </section>
  );
}

function InteriorDesignSection() {
  return (
    <section className="sticky top-0 h-screen w-full bg-[#0A202A] text-white z-30 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen p-8 md:p-16 flex flex-col justify-center items-end text-right relative">
        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-7xl mb-6 text-[#D4AF37]">Interiores</h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            Acredito num design que abraça. Mais do que estética, gosto de pensar em cantinhos reais, cheios de bossa, aconchego e que contam a história de quem vive ali.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] ml-auto"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <RevealImage 
          src={INTERIOR_IMG} 
          alt="Design de Interiores" 
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

function FloorPlanSection() {
  return (
    <section className="sticky top-0 h-screen w-full bg-[#1A1A1A] text-white z-40 flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative p-8 md:p-16 flex items-center justify-center">
         <RevealImage 
          src={FLOORPLAN_IMG} 
          alt="Planta Baixa" 
          className="w-full h-full rounded-lg shadow-2xl shadow-black/50"
        />
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen p-8 md:p-16 flex flex-col justify-center relative">
        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="font-['Playfair_Display',serif] text-5xl md:text-7xl mb-6">Plantas Baixas</h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            A mágica começa no papel! Pensar no fluxo perfeito, testar layouts e otimizar cada cantinho é um dos meus processos favoritos na arquitetura. Tudo tem seu lugar.
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37]"></div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="sticky top-0 h-screen w-full bg-[#0A202A] z-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center z-10 px-6">
        <h2 className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white mb-6">
          Bora criar algo <span className="text-[#D4AF37] italic">lindo</span> juntos?
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
          Tô super aberta para freelas de 3D, consultorias de interiores ou só pra trocar uma ideia. Me chama!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/5535998620460"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#D4AF37] text-[#0A202A] font-semibold text-lg overflow-hidden w-full sm:w-auto flex items-center justify-center gap-3 transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
            <MessageCircle className="w-6 h-6" />
            <span>Me chama no Zap</span>
          </a>

          <a
            href="https://www.instagram.com/sequalinicarol/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-medium text-lg w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-[#D4AF37]/10 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span>Arrasta pra cima</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 w-full text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Carol Sequalini. Todos os direitos reservados.
      </div>
    </section>
  );
}
