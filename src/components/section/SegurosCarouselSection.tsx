// src/components/section/SegurosCarouselSection.tsx
import { useRef, useState, useEffect } from "react";
import { tiposSeguroMock } from "../../data/tiposSeguro.mock";

const CARD_WIDTH = 440;
const GAP = 28;
const STEP = CARD_WIDTH + GAP;

export function SegurosCarouselSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = tiposSeguroMock.length;

  const visibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const maxIndex = Math.max(0, total - visibleCount());

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
    trackRef.current?.scrollTo({ left: clamped * STEP, behavior: "smooth" });
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = c >= maxIndex ? 0 : c + 1;
        trackRef.current?.scrollTo({ left: next * STEP, behavior: "smooth" });
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const cards = [
    {
      nome: "Seguro Vida",
      tag: "Pessoas",
      icon: "🫀",
      descricao: "Proteção financeira para você e sua família.",
      accent: "#E8514A",
      highlight: "Cobertura vitalícia",
    },
    {
      nome: "Seguro Automóvel",
      tag: "Veículos",
      icon: "🚗",
      descricao: "Cobertura completa para seu veículo.",
      accent: "#4A8FE8",
      highlight: "Assistência 24h",
    },
    {
      nome: "Seguro Residencial",
      tag: "Imóveis",
      icon: "🏠",
      descricao: "Proteção contra imprevistos na sua casa.",
      accent: "#4AE8A0",
      highlight: "Proteção integral",
    },
    {
      nome: "Seguro Pet",
      tag: "Animais",
      icon: "🐾",
      descricao: "Cuidado e proteção para a saúde do seu animal.",
      accent: "#D4AF37",
      highlight: "Consultas inclusas",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#0a1628" }}>
      <style>{`
        .seguros-track::-webkit-scrollbar { display: none; }
        .seguros-track { -ms-overflow-style: none; scrollbar-width: none; }

        /* BG noise texture */
        .noise-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        .seg-card {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1),
                      box-shadow 0.5s ease;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .seg-card:hover {
          transform: translateY(-16px) scale(1.02);
        }

        .seg-card .shine {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .seg-card:hover .shine { opacity: 1; }

        .seg-card .accent-bar {
          position: absolute;
          top: 0; left: 32px; right: 32px;
          height: 2px;
          border-radius: 0 0 4px 4px;
          transition: opacity 0.4s ease, transform 0.4s ease;
          opacity: 0;
          transform: scaleX(0.4);
        }
        .seg-card:hover .accent-bar {
          opacity: 1;
          transform: scaleX(1);
        }

        .icon-wrap {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .seg-card:hover .icon-wrap {
          transform: scale(1.15) rotate(-6deg);
        }

        .progress-bar {
          transition: width 4s linear;
        }

        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>

      {/* Background orbs decorativos */}
      <div className="noise-bg absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 600, height: 600,
            top: "-200px", left: "-100px",
            background: "radial-gradient(circle, #0F3B5F 0%, transparent 70%)",
            animation: "float-orb 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 500, height: 500,
            bottom: "-150px", right: "-100px",
            background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
            animation: "float-orb 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative container mx-auto px-6 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">
                Proteção completa
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight"
                style={{ color: "#fff", letterSpacing: "-0.02em" }}>
              Nossos{" "}
              <span style={{
                background: "linear-gradient(90deg, #D4AF37, #f0d070)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Seguros
              </span>
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-lg leading-relaxed">
              Cobertura inteligente para cada etapa da sua vida, com tecnologia e atendimento humanizado.
            </p>
          </div>

          {/* Setas */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo(current - 1)}
              disabled={current === 0}
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold
                         transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                background: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scrollTo(current + 1)}
              disabled={current >= maxIndex}
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold
                         transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ background: "#D4AF37", color: "#0a1628" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.15)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="seguros-track flex overflow-x-auto py-8 px-6"
          style={{ gap: `${GAP}px` }}
        >
          {cards.map((card) => (
            <article
              key={card.nome}
              className="seg-card flex-shrink-0 rounded-3xl p-10 cursor-default"
              style={{ width: `${CARD_WIDTH}px`, boxShadow: `0 8px 48px rgba(0,0,0,0.4)` }}
              onMouseEnter={() => setHoveredCard(card.nome)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Barra de accent no topo */}
              <div
                className="accent-bar"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
              />
              <div className="shine" />

              {/* Topo */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: card.accent,
                    background: `${card.accent}18`,
                    border: `1px solid ${card.accent}30`,
                  }}
                >
                  {card.tag}
                </span>

                <div
                  className="icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}25`,
                  }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Highlight pill */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: card.accent }} />
                <span className="text-xs font-semibold" style={{ color: card.accent }}>
                  {card.highlight}
                </span>
              </div>

              {/* Texto */}
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                {card.nome}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {card.descricao}
              </p>

              {/* Linha divisória animada */}
              <div
                className="mt-8 h-px"
                style={{
                  background: hoveredCard === card.nome
                    ? `linear-gradient(90deg, ${card.accent}, transparent)`
                    : "rgba(255,255,255,0.06)",
                  transition: "background 0.4s ease",
                }}
              />

              {/* Número decorativo */}
              <div
                className="absolute bottom-8 right-10 text-7xl font-black select-none pointer-events-none"
                style={{
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {(cards.indexOf(card) + 1).toString().padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dots + progress */}
      <div className="relative container mx-auto px-6 mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  height: "6px",
                  width: i === current ? "32px" : "6px",
                  background: i === current ? "#D4AF37" : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-slate-500 text-sm tabular-nums">
            <span className="text-white font-semibold">{String(current + 1).padStart(2, "0")}</span>
            {" / "}
            {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default SegurosCarouselSection;