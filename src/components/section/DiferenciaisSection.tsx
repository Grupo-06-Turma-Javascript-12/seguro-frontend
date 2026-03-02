import { useRevealOnScroll } from "../../hook/useRevealOnScroll";
import { LockIcon } from "../ui/LockIcon";
import { Reveal } from "../ui/Reveal";

export function DiferenciaisSection() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Cadeado central animado */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <LockIcon unlocked={isVisible} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block h-1 w-16 bg-[#D4AF37] mb-6 rounded-full" />

            <h2 className="text-4xl font-bold text-[#0F3B5F] leading-tight">
              Segurança conectada com tecnologia
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Proteção inteligente integrada ao backend ELO.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          <Reveal delay={0}>
            <Card
              title="Proteção Completa"
              description="Planos personalizados que protegem o que realmente importa."
            />
          </Reveal>

          <Reveal delay={150}>
            <Card
              highlight
              title="Integração Backend"
              description="Conectado diretamente ao sistema ELO para simulações e gestão em tempo real."
            />
          </Reveal>

          <Reveal delay={300}>
            <Card
              title="Atendimento Humanizado"
              description="Suporte próximo, transparente e eficiente."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
  highlight?: boolean;
}

function Card({ title, description, highlight }: CardProps) {
  return (
    <div
      className={`
        p-8 rounded-2xl shadow-lg border-t-4 border-[#D4AF37]
        ${highlight ? "bg-[#0F3B5F] text-white" : "bg-white"}
      `}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className={highlight ? "text-slate-200" : "text-slate-600"}>
        {description}
      </p>
    </div>
  );
}